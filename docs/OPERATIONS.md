# Локальная проверка и публикация

## Быстрые ссылки
- [Опубликованный сайт](https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/)
- [Репозиторий](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2)
- [Запуски GitHub Actions](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/actions)
- [CI workflow](../.github/workflows/ci.yml)

## Локальная работа
Установите зависимости командой:
```bash
npm ci
```
Затем выполните аудит, проверки Spectral и Redocly для обеих OpenAPI-спецификаций и Jekyll build в соответствии с шагами [CI workflow](../.github/workflows/ci.yml).

## Release checklist
- [ ] npm ci завершается успешно.
- [ ] Аудит зависимостей проверен.
- [ ] Обе OpenAPI-спецификации проходят проверки.
- [ ] Примеры соответствуют схемам.
- [ ] SOAP-материалы не содержат конфиденциальных данных.
- [ ] Jekyll build и Pages deployment успешны.
- [ ] [Сайт](https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/) и навигация доступны.

При ошибке откройте [Actions](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/actions), найдите первый упавший step и проверьте версии Node.js, зависимости и сообщения валидаторов.
