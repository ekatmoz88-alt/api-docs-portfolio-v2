---
layout: default
title: Home
permalink: /
---

<!-- Подключение современных шрифтов Inter и JetBrains Mono -->
<link rel="preconnect" href="https://googleapis.com">
<link rel="preconnect" href="https://gstatic.com" crossorigin>
<link href="https://googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* ==========================================================================
     1. ГЛОБАЛЬНЫЕ СТИЛИ И ШРИФТЫ
     ========================================================================== */
  :root {
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    --bg-main: #0d1117;
    --bg-card: #1f242c;
    --border-color: #30363d;
    --text-primary: #c9d1d9;
    --text-muted: #8b949e;
    --accent: #58a6ff;
    --success: #238636;
    --shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  body {
    font-family: var(--font-sans);
    background-color: var(--bg-main);
    color: var(--text-primary);
    margin: 0;
    padding: 0;
  }

  code, pre {
    font-family: var(--font-mono) !important;
    font-size: 0.9em;
  }

  /* ==========================================================================
     2. HERO-БЛОК (Имя и Специализация)
     ========================================================================== */
  .hero-section {
    background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
    border-bottom: 1px solid var(--border-color);
    padding: 60px 20px;
    text-align: center;
  }

  .hero-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .hero-avatar-placeholder {
    font-size: 40px;
    margin-bottom: 15px;
  }

  .hero-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 10px 0;
  }

  .hero-title span {
    color: var(--accent);
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-muted);
    margin: 0 0 25px 0;
    font-weight: 400;
  }

  /* ==========================================================================
     3. СЕТКА ПРОЕКТОВ (Grid Layout с тенями и иконками)
     ========================================================================== */
  .portfolio-container {
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 20px;
  }

  .section-title {
    font-size: 1.75rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 10px;
    margin-bottom: 30px;
    color: #ffffff;
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
  }

  .portfolio-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 24px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .portfolio-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(88, 166, 255, 0.15);
    border-color: #444c56;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
  }

  .card-icon {
    font-size: 24px;
    color: var(--accent);
    background: rgba(88, 166, 255, 0.1);
    padding: 8px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .portfolio-card h3 {
    margin: 0;
    font-size: 1.3rem;
    color: #ffffff;
  }

  .portfolio-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.5;
    flex-grow: 1;
    margin: 0 0 20px 0;
  }

  .portfolio-btn {
    display: inline-block;
    background-color: var(--success);
    color: #ffffff !important;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.2s;
  }

  .portfolio-btn:hover {
    background-color: #2ea44f;
    text-decoration: none;
  }

  /* ==========================================================================
     4. ФУТЕР С КОНТАКТАМИ
     ========================================================================== */
  .portfolio-footer {
    background-color: #161b22;
    border-top: 1px solid var(--border-color);
    padding: 40px 20px;
    margin-top: 60px;
    text-align: center;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-bottom: 15px;
    flex-wrap: wrap;
  }

  .footer-link {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .footer-link:hover {
    color: var(--accent);
  }

  .footer-credits {
    font-size: 0.85rem;
    color: #57606a;
  }

  /* ==========================================================================
     5. АДАПТИВНОСТЬ И МОБИЛЬНАЯ ВЕРСИЯ (Media Queries)
     ========================================================================== */
  @media (max-width: 768px) {
    .hero-section {
      padding: 40px 15px;
    }
    
    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .portfolio-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .footer-links {
      flex-direction: column;
      gap: 12px;
    }
  }
</style>

<!-- Рендеринг Hero-блока -->
<header class="hero-section">
  <div class="hero-container">
    <div class="hero-avatar-placeholder">💻</div>
    <h1 class="hero-title">Екатерина <span>Моцарь</span></h1>
    <p class="hero-subtitle">Technical Writer & Documentation Engineer | API & Docs-as-Code Specialist</p>
  </div>
</header>

<!-- Рендеринг сетки проектов -->
<main class="portfolio-container">
  <h2 class="section-title">Разделы и технические кейсы</h2>
  
  <div class="portfolio-grid">
    
    <!-- Карточка 1: Orders API -->
    <div class="portfolio-card">
      <div>
        <div class="card-header">
          <span class="card-icon">📂</span>
          <h3>Orders API (Redocly)</h3>
        </div>
        <p>Интерактивная REST API спецификация управления заказами. Развернута с использованием генератора Redocly для наглядного тестирования эндпоинтов.</p>
      </div>
      <a href="{{ '/openapi/' | relative_url }}" class="portfolio-btn">Открыть API Спецификацию →</a>
    </div>

    <!-- Карточка 2: UMMS SOAP Client -->
    <div class="portfolio-card">
      <div>
        <div class="card-header">
          <span class="card-icon">🔌</span>
          <h3>UMMS SOAP Client</h3>
        </div>
        <p>Архитектурный кейс-стади взаимодействия стационарных (WPF) и мобильных приложений. Полный каталог методов, разбор структур данных и оптимизация логики поиска.</p>
      </div>
      <a href="{{ '/umms-enterprise-soap-client.html' | relative_url }}" class="portfolio-btn">Открыть Case Study →</a>
    </div>

    <!-- Карточка 3: Legacy SOAP API Review -->
    <div class="portfolio-card">
      <div>
        <div class="card-header">
          <span class="card-icon">🔍</span>
          <h3>Legacy SOAP API Review</h3>
        </div>
        <p>Аналитический аудит интеграционных процессов устаревших систем. Техническое обоснование миграции, маппинг методов и переход на современные REST-архитектуры.</p>
      </div>
      <a href="{{ '/legacy-soap-api-review.html' | relative_url }}" class="portfolio-btn">Открыть Обзор →</a>
    </div>

  </div>
</main>

<!-- Рендеринг футера с контактами -->
<footer class="portfolio-footer">
  <div class="footer-links">
    <a href="https://linkedin.com" target="_blank" class="footer-link">🔗 LinkedIn</a>
    <a href="https://github.com" target="_blank" class="footer-link">🐙 GitHub</a>
    <a href="mailto:ekaterina@example.com" class="footer-link">✉️ Email</a>
  </div>
  <p class="footer-credits">© 2026 Ekaterina Motsar. Built with Jekyll & GitHub Pages (Docs-as-Code).</p>
</footer>
