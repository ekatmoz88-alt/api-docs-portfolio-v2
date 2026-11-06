const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const jsonHeaders = {
  ...corsHeaders,
  "Content-Type": "application/json; charset=utf-8",
};

const allowedStatuses = new Set(["pending", "shipped", "delivered"]);

function problem(status: number, title: string, detail: string): Response {
  return new Response(
    JSON.stringify({
      type: `https://api.example.test/problems/${status}`,
      title,
      status,
      detail,
    }),
    { status, headers: { ...jsonHeaders, "Content-Type": "application/problem+json; charset=utf-8" } },
  );
}

function getApiKey(): string | null {
  const legacy = Deno.env.get("SUPABASE_ANON_KEY");
  if (legacy) return legacy;

  const keys = Deno.env.get("SUPABASE_PUBLISHABLE_KEYS");
  if (keys) {
    try {
      const parsed = JSON.parse(keys);
      if (typeof parsed.default === "string") return parsed.default;
    } catch {
      // Invalid environment configuration is handled by the caller.
    }
  }
  return null;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const apiKey = getApiKey();
  if (!supabaseUrl || !apiKey) {
    return problem(500, "Server configuration error", "The API is missing its Supabase URL or publishable API key.");
  }

  const authorization = req.headers.get("Authorization");
  if (!authorization?.startsWith("Bearer ")) {
    return problem(401, "Unauthorized", "A valid Supabase access token is required.");
  }

  // Resolve the token to a real Auth user; never trust client-supplied user IDs.
  const authResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: { apikey: apiKey, Authorization: authorization },
  });
  if (!authResponse.ok) {
    return problem(401, "Unauthorized", "The access token is invalid or expired.");
  }

  const user = await authResponse.json();
  if (!user?.id) {
    return problem(401, "Unauthorized", "The access token did not resolve to an authenticated user.");
  }

  const url = new URL(req.url);
  const functionPrefix = "/functions/v1/orders-api";
  const route = url.pathname.startsWith(functionPrefix)
    ? (url.pathname.slice(functionPrefix.length) || "/")
    : url.pathname;

  const restHeaders = {
    apikey: apiKey,
    Authorization: authorization,
    "Content-Type": "application/json",
  };
  const restUrl = `${supabaseUrl}/rest/v1/orders`;

  if (route === "/orders" && req.method === "GET") {
    const limitText = url.searchParams.get("limit") ?? "50";
    const offsetText = url.searchParams.get("offset") ?? "0";
    const limit = Number(limitText);
    const offset = Number(offsetText);
    if (!Number.isInteger(limit) || limit < 1 || limit > 100 ||
        !Number.isInteger(offset) || offset < 0) {
      return problem(400, "Invalid pagination", "limit must be an integer from 1 to 100 and offset must be a non-negative integer.");
    }

    const query = new URLSearchParams({
      select: "id,status,created_at",
      order: "created_at.desc",
      limit: String(limit),
      offset: String(offset),
    });
    const response = await fetch(`${restUrl}?${query}`, { headers: restHeaders });
    if (!response.ok) {
      return problem(500, "Database error", "The order collection could not be retrieved.");
    }
    return new Response(await response.text(), { status: 200, headers: jsonHeaders });
  }

  if (route === "/orders" && req.method === "POST") {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return problem(400, "Invalid JSON", "The request body must contain valid JSON.");
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return problem(400, "Invalid request body", "The request body must be a JSON object containing status.");
    }

    const keys = Object.keys(body);
    const status = (body as Record<string, unknown>).status;
    if (keys.some((key) => key !== "status") || typeof status !== "string" || !allowedStatuses.has(status)) {
      return problem(400, "Invalid order", "status is required and must be pending, shipped, or delivered. No other fields are accepted.");
    }

    const response = await fetch(`${restUrl}?select=id,status,created_at`, {
      method: "POST",
      headers: { ...restHeaders, Prefer: "return=representation" },
      body: JSON.stringify({ status }),
    });
    if (response.status === 401 || response.status === 403) {
      return problem(403, "Forbidden", "The authenticated user is not allowed to create orders.");
    }
    if (!response.ok) {
      return problem(500, "Database error", "The order could not be created.");
    }
    const rows = await response.json();
    return new Response(JSON.stringify(rows[0]), { status: 201, headers: jsonHeaders });
  }

  const match = route.match(/^\/orders\/(\d+)$/);
  if (match && req.method === "GET") {
    const id = Number(match[1]);
    if (!Number.isSafeInteger(id) || id < 1) {
      return problem(400, "Invalid order ID", "The order ID must be a positive integer.");
    }
    const query = new URLSearchParams({
      select: "id,status,created_at",
      id: `eq.${id}`,
      limit: "1",
    });
    const response = await fetch(`${restUrl}?${query}`, { headers: restHeaders });
    if (!response.ok) {
      return problem(500, "Database error", "The requested order could not be retrieved.");
    }
    const rows = await response.json();
    if (!rows.length) {
      return problem(404, "Order not found", `No order was found for ID ${id}.`);
    }
    return new Response(JSON.stringify(rows[0]), { status: 200, headers: jsonHeaders });
  }

  if (route === "/orders" || /^\/orders\/[^/]+$/.test(route)) {
    return problem(405, "Method not allowed", "This HTTP method is not supported for the requested resource.");
  }
  return problem(404, "Not found", "The requested API route does not exist.");
});
