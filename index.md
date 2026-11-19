---
layout: null
title: API Documentation & Integration Analysis
permalink: /
---

<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Портфолио системного анализа и API-документации: REST, OpenAPI 3.1, SOAP, WSDL, XML, архитектура интеграций и Docs-as-Code.">
  <meta name="theme-color" content="#0759c7">
  <title>API Documentation & Integration Analysis — Kate Motsar</title>
  <style>
    :root {
      color-scheme: light;
      --blue: #455a64;
      --blue-dark: #06479d;
      --blue-soft: #edf4ff;
      --ink: #263238;
      --text: #37474f;
      --muted: #607d8b;
      --line: #e0e0e0;
      --surface: #ffffff;
      --surface-soft: #fafafa;
      --code: #f1f5fb;
      --shadow: 0 1px 3px rgba(0, 0, 0, .06);
      --radius: 2px;
      --sidebar: 250px;
      --header: 48px;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; scroll-padding-top: calc(var(--header) + 24px); }
    body {
      margin: 0;
      background: var(--surface);
      color: var(--text);
      font: 15px/1.7 Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    }
    a { color: var(--blue); text-decoration: none; }
    a:hover { color: var(--blue-dark); text-decoration: underline; text-underline-offset: 3px; }
    a:focus-visible { outline: 3px solid #8bb8f2; outline-offset: 3px; border-radius: 4px; }
    .topbar {
      position: sticky;
      z-index: 20;
      top: 0;
      height: var(--header);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 0 28px;
      color: #fff;
      background: var(--blue);
      box-shadow: 0 2px 8px rgba(16, 42, 80, .14);
    }
    .brand { display: flex; align-items: center; gap: 12px; color: #fff; font-weight: 650; letter-spacing: .01em; }
    .brand-mark {
      display: grid; place-items: center; width: 32px; height: 32px;
      border: 1px solid rgba(255,255,255,.35); border-radius: 8px;
      font-size: 13px; font-weight: 750;
    }
    .top-links { display: flex; align-items: center; gap: 20px; }
    .top-links a { color: #fff; font-size: 13px; opacity: .94; }
    .layout { display: grid; grid-template-columns: var(--sidebar) minmax(0, 1fr); min-height: calc(100vh - var(--header)); }
    .sidebar {
      position: sticky; top: var(--header); align-self: start;
      height: calc(100vh - var(--header)); overflow-y: auto;
      padding: 28px 18px 36px 24px; border-right: 1px solid var(--line);
      background: #fbfcfe;
    }
    .side-label {
      margin: 0 0 12px 10px; color: #98a2b3; font-size: 10px;
      font-weight: 750; letter-spacing: .12em; text-transform: uppercase;
    }
    .side-nav { display: grid; gap: 4px; }
    .side-nav a {
      display: block; padding: 8px 10px; border-radius: 7px;
      color: #475467; font-size: 13px; line-height: 1.45;
    }
    .side-nav a:hover { background: #eceff1; color: #263238; text-decoration: none; }
    .side-nav .sub-link { padding-left: 24px; color: #667085; font-size: 12px; }
    .side-divider { height: 1px; margin: 20px 4px; background: var(--line); }
    .content { width: min(100%, 1120px); padding: 46px clamp(24px, 5vw, 76px) 80px; }
    .eyebrow {
      display: inline-flex; align-items: center; gap: 8px; margin-bottom: 14px;
      color: #00838f; font-size: 11px; font-weight: 750; letter-spacing: .12em; text-transform: uppercase;
    }
    .eyebrow:before { content: ""; width: 22px; height: 2px; background: var(--blue); }
    h1, h2, h3 { color: var(--ink); line-height: 1.25; }
    h1 { max-width: 820px; margin: 0 0 16px; font-size: clamp(30px, 3.5vw, 40px); letter-spacing: -.025em; font-weight: 400; }
    h1 span { color: var(--blue); }
    .lead { max-width: 790px; margin: 0; color: #526174; font-size: 17px; line-height: 1.75; }
    .hero-meta { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
    .chip {
      display: inline-flex; align-items: center; padding: 5px 10px;
      border: 1px solid #cfd8dc; border-radius: 2px; background: #f5f7f8;
      color: #31547e; font-size: 11px; font-weight: 650;
    }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
    .button {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      min-height: 42px; padding: 9px 15px; border: 1px solid var(--blue);
      border-radius: 2px; background: var(--blue); color: #fff; font-size: 13px; font-weight: 650;
    }
    .button:hover { background: var(--blue-dark); color: #fff; text-decoration: none; }
    .button.secondary { background: #fff; color: var(--blue); border-color: #b8cbea; }
    .button.secondary:hover { background: var(--blue-soft); }
    .section { margin-top: 62px; }
    .section-heading { display: flex; align-items: baseline; gap: 12px; margin-bottom: 10px; }
    .section-heading h2 { margin: 0; font-size: 24px; letter-spacing: -.01em; font-weight: 400; }
    .section-index { color: #8ba5c8; font: 650 12px/1.2 ui-monospace, SFMono-Regular, Menlo, monospace; }
    .section-intro { max-width: 800px; margin: 0 0 22px; color: var(--muted); }
    .cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
    .card {
      min-width: 0; padding: 22px; border: 1px solid var(--line);
      border-radius: 2px; background: var(--surface); box-shadow: var(--shadow);
    }
    .card:hover { border-color: #b0bec5; }
    .card-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
    .card-icon {
      display: grid; place-items: center; width: 36px; height: 36px;
      border-radius: 2px; background: var(--blue-soft); color: var(--blue);
      font-size: 13px; font-weight: 800;
    }
    .card-type { color: #7a8ba2; font-size: 10px; font-weight: 750; letter-spacing: .1em; text-transform: uppercase; }
    .card h3 { margin: 0 0 8px; font-size: 17px; }
    .card p { margin: 0 0 16px; color: var(--muted); font-size: 13px; line-height: 1.65; }
    .card-links { display: flex; flex-wrap: wrap; gap: 14px; font-size: 12px; font-weight: 650; }
    .feature-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 22px 0 0; padding: 0; list-style: none; }
    .feature-list li { position: relative; padding: 14px 15px 14px 38px; border: 1px solid var(--line); border-radius: 2px; background: var(--surface-soft); font-size: 13px; }
    .feature-list li:before { content: "✓"; position: absolute; left: 15px; color: var(--blue); font-weight: 800; }
    .flow {
      display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; margin-top: 22px;
    }
    .flow-step { position: relative; padding: 15px; border: 1px solid var(--line); border-radius: 2px; background: #fff; }
    .flow-step strong { display: block; margin-bottom: 5px; color: var(--ink); font-size: 13px; }
    .flow-step span { color: var(--muted); font-size: 11px; line-height: 1.5; }
    .flow-step:not(:last-child):after {
      content: "→"; position: absolute; z-index: 2; top: 50%; right: -13px;
      transform: translate(50%, -50%); color: #8aa9d3; font-weight: 800;
    }
    .note {
      margin-top: 20px; padding: 15px 18px; border-left: 3px solid #7ba6df;
      border-radius: 0 2px 2px 0; background: #f5f7f8; color: #526174; font-size: 12px;
    }
    .tech-groups { display: grid; gap: 12px; }
    .tech-row { display: grid; grid-template-columns: 170px 1fr; gap: 18px; padding: 14px 0; border-bottom: 1px solid var(--line); }
    .tech-row strong { color: var(--ink); font-size: 13px; }
    .tech-row span { color: var(--muted); font-size: 13px; }
    .footer {
      margin-top: 70px; padding-top: 24px; border-top: 1px solid var(--line);
      display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;
      color: #8a96a8; font-size: 11px;
    }
    .footer-links { display: flex; flex-wrap: wrap; gap: 16px; }
    .footer a { font-size: 12px; }
    @media (max-width: 900px) {
      :root { --sidebar: 210px; }
      .content { padding: 36px 28px 64px; }
      .flow { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .flow-step:nth-child(2):after { display: none; }
    }
    @media (max-width: 680px) {
      :root { --header: 56px; }
      .topbar { padding: 0 16px; }
      .brand { font-size: 13px; }
      .top-links { gap: 12px; }
      .top-links a { font-size: 11px; }
      .layout { display: block; }
      .sidebar { position: static; height: auto; padding: 10px 14px; border-right: 0; border-bottom: 1px solid var(--line); }
      .side-label, .side-divider { display: none; }
      .side-nav { display: flex; gap: 4px; overflow-x: auto; padding-bottom: 2px; }
      .side-nav a, .side-nav .sub-link { flex: 0 0 auto; padding: 7px 9px; font-size: 11px; }
      .content { padding: 34px 18px 54px; }
      .cards, .feature-list { grid-template-columns: 1fr; }
      .flow { grid-template-columns: 1fr 1fr; }
      .flow-step:nth-child(2):after { display: block; }
      .flow-step:nth-child(even):after { display: none; }
      .tech-row { grid-template-columns: 1fr; gap: 3px; }
      .footer { flex-direction: column; }
    }
    @media (max-width: 390px) {
      .top-links a:first-child { display: none; }
      .flow { grid-template-columns: 1fr; }
      .flow-step:after { display: none !important; }
      h1 { font-size: 31px; }
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *:before, *:after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
    }
  </style>
</head>
<body>
  <header class="topbar">
    <a class="brand" href="{{ '/' | relative_url }}" aria-label="API Documentation home">
      <span class="brand-mark">API</span>
      <span>API Documentation Portfolio</span>
    </a>
    <nav class="top-links" aria-label="External links">
      <a href="https://github.com/ekatmoz88-alt/api-docs-portfolio-v2" target="_blank" rel="noopener noreferrer">GitHub repository ↗</a>
      <a href="https://github.com/ekatmoz88-alt" target="_blank" rel="noopener noreferrer">GitHub profile ↗</a>
    </nav>
  </header>

  <div class="layout">
    <aside class="sidebar" aria-label="Page navigation">
      <p class="side-label">Documentation</p>
      <nav class="side-nav">
        <a href="#overview">Обзор</a>
        <a href="#rest">REST API</a>
        <a href="#soap">SOAP и интеграции</a>
        <a href="#quality">Качество спецификаций</a>
        <a href="#workflow">Docs-as-Code</a>
        <a href="#stack">Инструменты</a>
      </nav>
      <div class="side-divider"></div>
      <p class="side-label">API reference</p>
      <nav class="side-nav">
        <a class="sub-link" href="{{ '/openapi/' | relative_url }}">Orders API · OpenAPI</a>
        <a class="sub-link" href="{{ '/quickstart/' | relative_url }}">Orders API · Quickstart</a>
        <a class="sub-link" href="{{ '/umms-enterprise-soap-client.html' | relative_url }}">UMMS SOAP Client</a>
        <a class="sub-link" href="{{ '/legacy-soap-api-review' | relative_url }}">Legacy SOAP Review</a>
      </nav>
    </aside>

    <main class="content">
      <section id="overview">
        <div class="eyebrow">Systems analysis · API contracts · Docs-as-Code</div>
        <h1>API Documentation <span>&</span><br>Integration Analysis</h1>
        <p class="lead">
          Портфолио системного анализа и технической документации API.
          Спецификации REST на OpenAPI 3.1, SOAP-кейсы на основе WSDL и XML,
          описание контрактов, структур данных, интеграционных сценариев и процессов проверки документации.
        </p>
        <div class="hero-meta" aria-label="Technologies">
          <span class="chip">REST</span>
          <span class="chip">SOAP</span>
          <span class="chip">OpenAPI 3.1</span>
          <span class="chip">WSDL</span>
          <span class="chip">XML · JSON</span>
          <span class="chip">Redoc</span>
          <span class="chip">Spectral</span>
          <span class="chip">Postman</span>
        </div>
        <div class="hero-actions">
          <a class="button" href="{{ '/openapi/' | relative_url }}">Открыть OpenAPI reference →</a>
          <a class="button secondary" href="{{ '/quickstart/' | relative_url }}">Перейти к Quickstart</a>
        </div>
      </section>

      <section class="section" id="rest">
        <div class="section-heading"><span class="section-index">01</span><h2>REST API и OpenAPI</h2></div>
        <p class="section-intro">Контракты API, описание операций, параметров, схем запросов и ответов, а также требований к аутентификации и обработке ошибок.</p>
        <div class="cards">
          <article class="card">
            <div class="card-top"><span class="card-icon">GET</span><span class="card-type">Live portfolio API</span></div>
            <h3>Orders API</h3>
            <p>REST API на Supabase Edge Function. Контракт описывает получение списка заказов, создание заказа и получение заказа по идентификатору. Аутентификация — Supabase Auth; доступ к данным ограничен владельцем записи.</p>
            <div class="card-links">
              <a href="{{ '/openapi/' | relative_url }}">OpenAPI reference →</a>
              <a href="{{ '/quickstart/' | relative_url }}">Quickstart →</a>
              <a href="https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/blob/main/openapi/openapi.yaml" target="_blank" rel="noopener noreferrer">YAML contract ↗</a>
            </div>
          </article>
          <article class="card">
            <div class="card-top"><span class="card-icon">API</span><span class="card-type">Additional contract</span></div>
            <h3>Navigation API</h3>
            <p>Отдельная спецификация OpenAPI 3.1 для интерфейсов навигационного сценария: поисковые запросы, обновление активного маршрута и структуры данных результатов.</p>
            <div class="card-links">
              <a href="https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/blob/main/openapi/navigation-api.yaml" target="_blank" rel="noopener noreferrer">OpenAPI YAML ↗</a>
              <a href="https://github.com/ekatmoz88-alt/api-docs-portfolio-v2" target="_blank" rel="noopener noreferrer">Repository ↗</a>
            </div>
          </article>
        </div>
        <ul class="feature-list">
          <li>Описание HTTP-методов, параметров и тел запросов</li>
          <li>Схемы данных, обязательные поля и ограничения</li>
          <li>Коды ответов и форматы ошибок Problem Details</li>
          <li>Требования к API key и Bearer-аутентификации</li>
        </ul>
      </section>

      <section class="section" id="soap">
        <div class="section-heading"><span class="section-index">02</span><h2>SOAP и интеграционные кейсы</h2></div>
        <p class="section-intro">Техническое описание SOAP-взаимодействия, структуры XML-сообщений и программных интерфейсов интеграционных клиентов.</p>
        <div class="cards">
          <article class="card">
            <div class="card-top"><span class="card-icon">XML</span><span class="card-type">Anonymized case study</span></div>
            <h3>UMMS Enterprise SOAP Client</h3>
            <p>Кейс по взаимодействию стационарных рабочих мест и мобильных клиентов. Материал охватывает каталог методов, структуры данных, XSD-типы и примеры XML-запросов и ответов.</p>
            <div class="card-links">
              <a href="{{ '/umms-enterprise-soap-client.html' | relative_url }}">Открыть SOAP case study →</a>
              <a href="https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/blob/main/umms-enterprise-soap-client.html" target="_blank" rel="noopener noreferrer">Source ↗</a>
            </div>
          </article>
          <article class="card">
            <div class="card-top"><span class="card-icon">WSDL</span><span class="card-type">Technical review</span></div>
            <h3>Legacy SOAP API Review</h3>
            <p>Аналитический обзор интеграционных паттернов SOAP-сервисов, ограничений контрактного взаимодействия и вопросов совместимости при рассмотрении REST-подхода.</p>
            <div class="card-links">
              <a href="{{ '/legacy-soap-api-review' | relative_url }}">Открыть обзор →</a>
              <a href="https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/blob/main/legacy-soap-api-review.html" target="_blank" rel="noopener noreferrer">Source ↗</a>
            </div>
          </article>
        </div>
        <div class="note">
          SOAP-кейс обезличен для публичного портфолио. Он демонстрирует документирование интеграционного взаимодействия и не раскрывает конфиденциальные сведения исходной системы.
        </div>
      </section>

      <section class="section" id="quality">
        <div class="section-heading"><span class="section-index">03</span><h2>Проверка качества API-спецификаций</h2></div>
        <p class="section-intro">Спецификация рассматривается как технический контракт: её структура, схемы, ссылки и описания проверяются до публикации.</p>
        <div class="cards">
          <article class="card">
            <div class="card-top"><span class="card-icon">QA</span><span class="card-type">Linting & validation</span></div>
            <h3>Spectral и Redocly CLI</h3>
            <p>Проверка OpenAPI-документов на структурные ошибки и соответствие правилам оформления. Redoc используется для публикации читаемой API reference.</p>
          </article>
          <article class="card">
            <div class="card-top"><span class="card-icon">CI</span><span class="card-type">Automation</span></div>
            <h3>GitHub Actions</h3>
            <p>Автоматизированный workflow устанавливает зависимости, запускает проверки спецификаций и собирает статический сайт документации для публикации через GitHub Pages.</p>
          </article>
        </div>
      </section>

      <section class="section" id="workflow">
        <div class="section-heading"><span class="section-index">04</span><h2>Документация как код</h2></div>
        <p class="section-intro">Материалы хранятся в Git, проходят проверку и публикуются как версионируемая документация.</p>
        <div class="flow" aria-label="Documentation workflow">
          <div class="flow-step"><strong>1. Описание</strong><span>OpenAPI YAML и Markdown</span></div>
          <div class="flow-step"><strong>2. Проверка</strong><span>Spectral и Redocly CLI</span></div>
          <div class="flow-step"><strong>3. Сборка</strong><span>Jekyll и GitHub Actions</span></div>
          <div class="flow-step"><strong>4. Публикация</strong><span>GitHub Pages</span></div>
        </div>
      </section>

      <section class="section" id="stack">
        <div class="section-heading"><span class="section-index">05</span><h2>Инструменты и технологии</h2></div>
        <div class="tech-groups">
          <div class="tech-row"><strong>API contracts</strong><span>OpenAPI 3.1, YAML, WSDL, XML, JSON</span></div>
          <div class="tech-row"><strong>API documentation</strong><span>Redoc, Markdown, HTML</span></div>
          <div class="tech-row"><strong>Validation</strong><span>Spectral, Redocly CLI</span></div>
          <div class="tech-row"><strong>API exploration</strong><span>Postman</span></div>
          <div class="tech-row"><strong>Docs-as-Code</strong><span>Git, GitHub, GitHub Actions, Jekyll, GitHub Pages</span></div>
        </div>
      </section>

      <footer class="footer">
        <div>
          <strong>Kate Motsar</strong><br>
          API Documentation · Systems Analysis · Docs-as-Code
        </div>
        <nav class="footer-links" aria-label="Contact links">
          <a href="https://www.linkedin.com/in/kate-motsar-b56974267/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ekatmoz88-alt" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:ekatmoz88@gmail.com">Email</a>
        </nav>
      </footer>
    </main>
  </div>
</body>
</html>
