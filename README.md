# Creative Fabrica QA Automation

Automated end-to-end and SEO test suite using **Playwright** and **TypeScript**  
for the **Christmas Tree Lantern Bundle** product page on Creative Fabrica.

---

## ✅ Features

- ✅ UI tests for product layout, images, tags, breadcrumbs, and designer info
- ✅ SEO validations for image alt text, file names, lazy-loading, and more
- ✅ Page-level SEO checks (meta tags, canonical URLs, titles)
- ✅ Lighthouse integration for performance, accessibility, and SEO audits
- ✅ Runs in Docker or CI (GitHub Actions)
- ✅ Modular utilities for page, image, and Lighthouse SEO
- ✅ .env file to work with different environment values
- ✅ fixture to work with page objects
- ✅ lighthouse report

---

## Setup

```bash
npm install
npx playwright install
```
---

## Run tests

### Run all tests
```bash
npm run test
```

### Run UI test

```bash
npm run test:ui
```

### Run SEO test
```bash
npm run test:seo
```

### Run show report
```bash
npm run test:report
```
---

## Run Tests with Docker
```bash
docker build -t my-playwright-tests .
docker run --rm my-playwright-tests
```
---

## GitHub Actions CI
```
.github/workflows/playwright.yml
```

Includes:

* UI tests
* SEO + Lighthouse tests
* HTML report artifact upload

