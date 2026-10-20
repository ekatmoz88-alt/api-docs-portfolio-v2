---
layout: default
title: Technical Writing & API Portfolio
description: Примеры технической документации, интерактивных панелей и спецификаций API
---

# Мои ИТ-Проекты и Документация

Добро пожаловать в портфолио проектов автоматизации, мониторинга и интеграции. Ниже представлены доступные кейсы и технические руководства.

<div class="portfolio-grid">
{% for page in site.pages %}
  {% if page.layout == "default" and page.url != "/" %}
    <div class="portfolio-card">
      <h3>{{ page.title }}</h3>
      <p>{{ page.description }}</p>
      <a href="{{ page.url | relative_url }}" class="portfolio-btn">Открыть документацию →</a>
    </div>
  {% endif %}
{% endfor %}
</div>
