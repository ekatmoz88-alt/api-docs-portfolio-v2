[English](README.md) | **Русский**

# Портфолио API-документации V2

**Опубликованный портал документации:** https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/

Портфолио технического писателя: документирование API, проектирование структуры документации и автоматизация Docs-as-Code.

## Что демонстрирует проект

- Документирование REST API на основе OpenAPI 3.1 (YAML).
- Структуру API Reference, примеры запросов и ответов, схемы и ошибки.
- Документирование SOAP-интеграций и анализ WSDL-подхода.
- Проектирование структуры, навигации и оформления документационного портала.
- Настройку автоматических проверок API-контрактов и публикации сайта через GitHub Actions.

## Избранные материалы

| Материал | Что демонстрирует |
|---|---|
| [Спецификация Orders API](openapi/openapi.yaml) | OpenAPI 3.1, REST-эндпоинты, схемы и примеры |
| [Quickstart для Orders API](quickstart.md) | Аутентификация и примеры запросов к развёрнутому API |
| [Спецификация Navigation API](openapi/navigation-api.yaml) | Второй API-контракт, включённый в автоматические проверки |
| [Анализ Legacy SOAP API](legacy-soap-api-review.html) · [English detailed review](legacy-soap-api-review.en.html) | Анализ устаревших SOAP-интеграций и вариантов миграции |
| [Кейс SOAP-клиента UMMS](umms-enterprise-soap-client.html) | Структурированное описание SOAP-клиента и интеграционных концепций |
| [Исходник главной страницы портфолио](index.md) | Информационная архитектура, визуальная структура и навигация |
| [Архитектура CI/CD и подтверждение выполнения](docs/CI-CD.ru.md) | Quality gates GitHub Actions, сборка Jekyll, публикация Pages и подтверждённый запуск |

## Инструменты и процессы

- **API-контракты:** OpenAPI 3.1, YAML
- **Рендеринг и проверка документации:** Redocly CLI, Spectral
- **Docs-as-Code:** Markdown, Git
- **Сайт:** Jekyll, HTML, CSS, GitHub Pages
- **Автоматизация:** GitHub Actions, Node.js, npm

Для GitHub Actions настроен workflow, который устанавливает зависимости, выполняет аудит npm-пакетов, проверяет обе OpenAPI-спецификации через Spectral и Redocly, собирает сайт на Jekyll и публикует GitHub Pages из ветки `main`. Успешное выполнение всех настроенных заданий зафиксировано в [GitHub Actions Run #71](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/actions/runs/44823680824) от 20 ноября 2026 года.

Текущий workflow не включает автоматизированные модульные, интеграционные или сквозные API-тесты. Область проверок и границы доказательств описаны в разделе [Архитектура CI/CD и подтверждение выполнения](docs/CI-CD.ru.md).

## Развёрнутый Orders API

- Base URL: `https://ajnslobbgvnsoyezboqa.supabase.co/functions/v1/orders-api`
- Аутентификация: токен Supabase Auth + публичный ключ проекта
- Операции: `GET /orders`, `POST /orders`, `GET /orders/{id}`
- Изоляция данных: PostgreSQL Row Level Security ограничивает доступ владельцем заказа

Инструкции по регистрации, входу и запросам — в [Quickstart](quickstart.md).

## Контекст проекта

Orders API — реальный развёрнутый сервис на Supabase Edge Function, PostgreSQL и Supabase Auth. В публичной среде используйте контролируемые тестовые данные; не отправляйте реальные клиентские, платёжные или конфиденциальные сведения. Документация SOAP основана на реальной работе с enterprise-интеграцией и обезличена для публикации.

## Автор

**Kate Motsar** — Technical Writer | API Documentation | Documentation Engineering

[GitHub profile](https://github.com/ekatmoz88-alt) · [LinkedIn](https://www.linkedin.com/in/ekatmoz88/)

[English](README.md) | **Русский**


## Теги

`api-documentation` · `openapi-3-1` · `rest-api` · `soap` · `wsdl` · `docs-as-code` · `en-ru`


## Связанный пример портфолио

[Technical Writing Portfolio](https://github.com/ekatmoz88-alt/technical-writing-portfolio) — отдельный документационный кейс, построенный вокруг самостоятельного демонстрационного контракта Orders API. Он показывает проектирование API Reference, руководства разработчика, обработки ошибок, сценариев Webhooks, QA документации и Docs-as-Code.

Демонстрационный контракт из Technical Writing Portfolio не является контрактом развёрнутого Supabase Orders API в этом репозитории. Два репозитория демонстрируют разные сценарии API-документирования; их эндпоинты, схемы авторизации, возможности Webhooks и детали реализации нельзя считать взаимозаменяемыми.
