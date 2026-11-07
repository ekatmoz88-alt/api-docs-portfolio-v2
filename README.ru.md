[English](README.md) | **Русский**

# Портфолио API-документации V2

**Опубликованный портал документации:** https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/

Портфолио технического писателя: документирование API, проектирование структуры документации и автоматизация Docs-as-Code.

## Что демонстрирует проект

- Документирование REST API на основе OpenAPI 3.1 (YAML).
- Структуру API Reference, примеры запросов и ответов, схемы и ошибки.
- Документирование SOAP-интеграций и анализ WSDL-подхода.
- Проектирование структуры, навигации и оформления документационного портала.
- Автоматическую проверку API-контрактов и публикацию сайта через GitHub Actions.

## Избранные материалы

| Материал | Что демонстрирует |
|---|---|
| [Спецификация Orders API](openapi/openapi.yaml) | OpenAPI 3.1, REST-эндпоинты, схемы и примеры |
| [Quickstart для Orders API](quickstart.md) | Аутентификация и примеры запросов к развёрнутому демо-API |
| [Спецификация Navigation API](openapi/navigation-api.yaml) | Второй API-контракт, включённый в автоматические проверки |
| [Анализ Legacy SOAP API](legacy-soap-api-review.html) | Анализ устаревших SOAP-интеграций и вариантов миграции |
| [Кейс SOAP-клиента UMMS](umms-enterprise-soap-client.html) | Структурированное описание SOAP-клиента и интеграционных концепций |
| [Исходник главной страницы портфолио](index.md) | Информационная архитектура, визуальная структура и навигация |

## Инструменты и процессы

- **API-контракты:** OpenAPI 3.1, YAML
- **Рендеринг и проверка документации:** Redocly CLI, Spectral
- **Docs-as-Code:** Markdown, Git
- **Сайт:** Jekyll, HTML, CSS, GitHub Pages
- **Автоматизация:** GitHub Actions, Node.js, npm

Workflow GitHub Actions устанавливает зависимости, выполняет аудит npm-пакетов, проверяет обе OpenAPI-спецификации через Spectral и Redocly, собирает сайт на Jekyll и публикует артефакт GitHub Pages из основной ветки.

## Развёрнутый демонстрационный API

- Base URL: `https://ajnslobbgvnsoyezboqa.supabase.co/functions/v1/orders-api`
- Аутентификация: токен Supabase Auth + публичный ключ проекта
- Операции: `GET /orders`, `POST /orders`, `GET /orders/{id}`
- Изоляция данных: PostgreSQL Row Level Security ограничивает доступ владельцем заказа

Инструкции по регистрации, входу и запросам — в [Quickstart](quickstart.md).

## Контекст проекта

Orders API развёрнут как Supabase Edge Function с базой PostgreSQL и Supabase Auth. Это демонстрационный сервис для портфолио, а не production-система управления заказами; используйте только тестовые данные. SOAP-кейсы являются материалами портфолио и не предполагают доступ к работающей системе заказчика.

## Автор

**Kate Motsar** — Technical Writer | API Documentation | Documentation Engineering

[GitHub profile](https://github.com/ekatmoz88-alt) · [LinkedIn](https://www.linkedin.com/in/ekatmoz88/)

[English](README.md) | **Русский**


## Теги

`api-documentation` · `openapi-3-1` · `rest-api` · `soap` · `wsdl` · `docs-as-code` · `en-ru`
