# Frontend System Design, Unboxed

An interactive guide to frontend system design: security, networking, communication, testing, performance, caching, monitoring, accessibility, offline support, and low- and high-level design. Built with Angular 22; all content lives in JSON.

## Running it

Requires Node `^22.22.3`, `^24.15` or `>=26` (see `.nvmrc`).

```bash
npm install
npm start          # dev server at http://localhost:4200
npm test           # validates all content and renders every slide
npm run build      # static site in dist/frontend-system-design-unboxed/browser
npm run figures    # rebuild light/dark diagrams from src/content/figures
```

Every push to `main` tests, builds and deploys to GitHub Pages via [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml). One-time setup: **Settings → Pages → Source: GitHub Actions**.

## Contributing

- Content: `src/content/chapters/<section>/*.json`, listed in `src/content/course.ts`.
- Conventions and how to add chapters, figures, widgets and videos: [CLAUDE.md](CLAUDE.md).
- How the app is built: [ARCHITECTURE.md](ARCHITECTURE.md).
