# Frontend System Design, Unboxed

An interactive guide to frontend system design, one topic at a time. It starts with security (XSS, iframes, headers, HTTPS, dependencies, CORS, CSRF and more), then covers networking, real-time communication, testing, performance, caching, monitoring, accessibility, offline support, and low- and high-level design (those sections are coming soon). Built with Angular. The content lives in JSON, so a new topic is just a new chapter file.

| Section                 | Chapter                                               | Covers                                                                                                                                                                                                                              |
| ----------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01 Security             | 1.1 Security overview                                 | Why frontend security is different, Origins: the browser's unit of trust, The map of this section                                                                                                                                   |
|                         | 1.2 Cross-site scripting (XSS)                        | What XSS is, Three kinds of XSS, Encode for the context, When you must render HTML                                                                                                                                                  |
|                         | 1.3 iFrame protection                                 | Clickjacking, Embedding other sites safely, Talking to iframes with postMessage                                                                                                                                                     |
|                         | 1.4 Security headers                                  | Headers: free defence from the server, Content Security Policy (CSP), HSTS, nosniff, Referrer-Policy and COOP                                                                                                                       |
|                         | 1.5 Client-side security                              | No secrets in the bundle, Where to keep auth tokens, OAuth in single-page apps                                                                                                                                                      |
|                         | 1.6 Secure communication (HTTPS)                      | What HTTPS gives you, Getting HTTPS right                                                                                                                                                                                           |
|                         | 1.7 Dependency security                               | Your app is mostly other people's code, Keeping dependencies safe                                                                                                                                                                   |
|                         | 1.8 Compliance & regulation                           | Laws that shape frontend code, Privacy by design in the UI                                                                                                                                                                          |
|                         | 1.9 Input validation and sanitization                 | Validate on the way in, encode on the way out, Validating in practice                                                                                                                                                               |
|                         | 1.10 Server-side request forgery (SSRF)               | What SSRF is, Defending against SSRF                                                                                                                                                                                                |
|                         | 1.11 Server-side JavaScript injection (SSJI)          | When user input runs on your Node server, Related server-side injections                                                                                                                                                            |
|                         | 1.12 Feature Policy &#124; Permissions-Policy         | Turning browser features off                                                                                                                                                                                                        |
|                         | 1.13 Subresource Integrity (SRI)                      | Pinning third-party files by hash                                                                                                                                                                                                   |
|                         | 1.14 Cross-origin resource sharing (CORS)             | What CORS is for, Preflight requests, CORS mistakes                                                                                                                                                                                 |
|                         | 1.15 Cross-site request forgery (CSRF)                | How CSRF works, Defending against CSRF                                                                                                                                                                                              |
| 02 Networking           | 2.1 Networking for frontend engineers _(coming soon)_ | DNS, TCP and TLS: the cost of a connection; HTTP/1.1 vs HTTP/2 vs HTTP/3; REST, GraphQL and gRPC-web; CDNs and edge networks; Retries, timeouts and backoff; Request deduplication and batching                                     |
| 03 Communication        | 3.1 Real-time communication _(coming soon)_           | Short polling and long polling; Server-sent events (SSE); WebSockets; WebTransport and WebRTC; postMessage, BroadcastChannel and workers; Choosing the right channel                                                                |
| 04 Testing              | 4.1 Testing strategy _(coming soon)_                  | The test pyramid and trophy; Unit and component tests; Integration tests with mocked networks; End-to-end tests with Playwright; Visual regression and accessibility tests; Contract tests and flaky-test hygiene                   |
| 05 Performance          | 5.1 Web performance _(coming soon)_                   | Core Web Vitals: LCP, INP and CLS; The critical rendering path; Code splitting and lazy loading; Images, fonts and preloading; Rendering strategies: CSR, SSR, SSG, streaming; Long tasks, virtualization and the main thread       |
| 06 Database & Caching   | 6.1 Client storage & caching _(coming soon)_          | HTTP caching: Cache-Control and ETags; CDN and edge caching; Service worker caches; In-memory caches and stale-while-revalidate; localStorage, IndexedDB and OPFS; Normalized client stores and cache invalidation                  |
| 07 Logging & Monitoring | 7.1 Logging & monitoring _(coming soon)_              | Error tracking and source maps; Real user monitoring (RUM); Structured client logs; Distributed tracing with OpenTelemetry; Dashboards and alerting; Privacy and sampling                                                           |
| 08 Accessibility        | 8.1 Accessibility _(coming soon)_                     | Semantic HTML first; Keyboard navigation and focus management; ARIA: when and how; Screen readers and live regions; Colour, contrast and motion; Testing with axe and real assistive tech                                           |
| 09 Offline Support      | 9.1 Offline support _(coming soon)_                   | Service worker lifecycle; Caching strategies: cache-first, network-first, SWR; Progressive web apps and the manifest; Storing data offline with IndexedDB; Background sync and queued writes; Conflict resolution and optimistic UI |
| 10 Low Level Design     | 10.1 Low-level design _(coming soon)_                 | Component API design; State management patterns; Design patterns in the frontend; Module boundaries and data models; Case studies: autocomplete, carousel, infinite scroll; Case studies: modal, data table, file uploader          |
| 11 High Level Design    | 11.1 High-level design _(coming soon)_                | A framework: requirements → architecture → data → API → optimizations; Rendering and app architecture choices; Micro-frontends and monorepos; Case study: news feed; Case study: chat app; Case study: collaborative editor         |

## Running it

Requires Node `^20.19`, `^22.12` or `>=24`.

```bash
npm install
npm start          # dev server at http://localhost:4200
npm test           # validates all content and renders every slide
npm run build      # static site in dist/frontend-system-design-unboxed/browser
```

Live site: **https://sgarg5858.github.io/frontend-system-design-unboxed/**

### Deployment

Every push to `main` runs [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml): it installs dependencies, runs the tests, builds with the base path set from the repo name (`/frontend-system-design-unboxed/`) and publishes to GitHub Pages. If any test fails, nothing is deployed. You can also start it by hand from the repo's Actions tab ("Run workflow").

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

URLs use the hash, as in `#/xss/3` (chapter id, then a 1-based slide number; sections don't appear in the URL), so the build runs on any static host (GitHub Pages, Netlify, S3) with no rewrite rules. Single-segment links like `#xss` open slide 1.

The first page is the assistant architecture diagram. When one slide mentions another chapter, it uses the chapter's name rather than its number, so chapters can be reordered freely.

## How it's organised

See [ARCHITECTURE.md](ARCHITECTURE.md) for the design and [CLAUDE.md](CLAUDE.md) for coding conventions.

```
src/
  content/
    course.ts                 chapter manifest: id, name and an on-demand loader per chapter
    chapters/*.json           all slide text, code samples and layout
    schema/chapter.schema.json  editor autocomplete and validation for the JSON
  app/
    course/                   content types, URL-driven navigation, page shell
    blocks/                   generic, config-driven building blocks (stages, tabs, stepper…)
    widgets/                  named interactive widgets that need real logic
      registry.ts             widget name → lazy loader
    shared/                   slide figure, slider, matrix table, code block, math and formatting helpers
  styles.css                  design tokens (light/dark), reset, shared primitives (.panel, .btn, .stage …)
```

The rule of thumb: **content and layout go in JSON, behaviour goes in code.** Most slides need only generic blocks. A widget is for an interaction that computes something, such as a CSP evaluator or a CORS request simulator.

## Styling

- **Global** (`src/styles.css`): tokens, reset, shared primitives used across many widgets, and rules for HTML that Angular can't scope, such as slide text injected with `[innerHTML]` (`<code>`, `.k`) and the syntax-highlighted code spans.
- **Component** (a `.css` file next to the component): anything only that component uses, for example the page layout and navigation in `course-shell.css`. Scoped styles can't leak into other components or be hit by a same-named class elsewhere.
- Rule of thumb: if two or more components need the same class, make it a global primitive. If one does, keep it in the component.

## Adding or editing content

Open a file in `src/content/chapters/<section>/`. VS Code reads the `$schema` line, so you get autocomplete and red squiggles as you type.

A slide looks like this:

```json
{
  "title": "Encode for the context",
  "summary": "One-sentence takeaway shown under the title.",
  "body": [
    "A paragraph. Inline <b>HTML</b> and <code>code</code> are fine.",
    { "ul": ["A bullet", "Another bullet"] },
    { "h": "A small subheading" },
    { "note": "A callout box.", "kind": "key" }
  ],
  "code": ["el.textContent = userInput; // not innerHTML"],
  "viz": [
    { "type": "stages", "items": [{ "label": "<b>Encode</b>", "tone": "pos" }] },
    { "type": "caption", "html": "Small print under the panel." }
  ]
}
```

- **Callouts:** `kind` is `key` (Key idea), `analogy`, `dev` (For developers), `warn` (Watch out) or `example` (Worked example).
- **Writing style:** open with the intuition, then the mechanism, then numbers and practice. Define every term in bold where it first appears, keep paragraphs to two or three sentences, and give every slide a `summary`.
- **New slide:** add an object to a chapter's `slides` array.
- **New chapter:** copy a chapter file, give it a new `id` and `name`, and add an entry with the same id, name and a loader to a section in `src/content/course.ts`. Chapters are loaded on demand, so the site stays fast as the course grows.
- **New topic**: add a section in `src/content/course.ts` with its chapters. It appears as a new tab in the main navigation.
- Inline `style="…"` attributes in HTML strings are stripped by Angular's sanitizer. Use classes such as `mono`, `cap` or `k` instead.

### Generic blocks for `viz`

Top-level blocks each get their own panel. Blocks inside a `panel`, `tabs` or `stepper` render inside it.

| type      | What it shows                                                      | Key fields                                                                                                 |
| --------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `caption` | small muted text                                                   | `html`                                                                                                     |
| `text`    | a normal-size paragraph (for example inside a collapsible `panel`) | `html`                                                                                                     |
| `stages`  | vertical list of labelled rows (pipelines, layers, message logs)   | `items[]`: `label`, `sub`, `value`, `tone`, `highlight`, `dim`, `strike`, `mono`, `spacer`, `goto`         |
| `chips`   | a row of chips                                                     | `items[]`: `text`, `sub`, `hot`, `dim`                                                                     |
| `bars`    | horizontal bars                                                    | `items[]`: `label`, `value` (0–1), `display`; `layout`: `inline` or `stacked`                              |
| `table`   | small labelled table                                               | `rows[]`: `head`, `cells[]`: `text`, `tone`                                                                |
| `stat`    | big-number tiles                                                   | `items[]`: `value`, `label`                                                                                |
| `code`    | code block                                                         | `source[]` (lines), `title`                                                                                |
| `shape`   | highlighted monospace tag                                          | `text`                                                                                                     |
| `panel`   | group several blocks in one panel                                  | `blocks[]`                                                                                                 |
| `tabs`    | buttons that switch between views                                  | `tabs[]`: `label`, `blocks[]`                                                                              |
| `stepper` | click-through sequence                                             | `steps[]`: `blocks[]` or `item`, plus `caption`; `accumulate: true` grows a `stages` list one row per step |
| `widget`  | a named interactive component                                      | `name`, `props`                                                                                            |

`goto` on a stage row (`{ "chapter": "xss", "slide": 2 }`) makes the row a link.

### Adding a widget

1. Write a standalone component in `src/app/widgets/`. Give it `host: { class: 'contents' }` and output a `.panel`, optionally followed by a `.cap`. If it takes data from JSON, declare `readonly props = input.required<YourProps>()`.
2. Register it in `src/app/widgets/registry.ts`.
3. Add its name to the `widget` enum in `src/content/schema/chapter.schema.json`. A test fails if the schema and registry drift apart.

## Tests

`npm test` runs Vitest:

- every chapter JSON validates against the schema
- every widget name and `goto` link resolves
- every slide in the course renders without errors
- navigation and URL parsing, and the code highlighter
