/**
 * The course manifest, in reading order and grouped into sections. Each section is a tab in the
 * main navigation. Each chapter's content lives in ./chapters and is loaded only when a reader
 * opens it (see course/chapter-store.ts).
 *
 * To add a chapter: create a JSON file in ./chapters (copy an existing one; the $schema line gives
 * you autocomplete) and add an entry below with the same id and name as the file.
 * course.spec.ts checks that every entry matches its JSON. To add a topic, add a new section. A chapter marked
 * `soon: true` is a placeholder: its tab and outline entry say so. Slides refer to other chapters by id, not number, so reordering is safe.
 */
import type { ChapterContent, ChapterRef, SectionContent } from '../app/course/content.model';

// JSON imports are typed structurally with widened strings, so they're cast here.
const json = (file: Promise<{ default: unknown }>) => file.then((m) => m.default as ChapterContent);

export const SECTIONS: readonly SectionContent[] = [
  {
    id: 'security',
    name: 'Security',
    chapters: [
      {
        id: 'security-overview',
        name: 'Thinking like an attacker',
        load: () => json(import('./chapters/security/01-overview.json')),
      },
      {
        id: 'xss',
        name: 'When data turns into code (XSS)',
        load: () => json(import('./chapters/security/02-xss.json')),
      },
      {
        id: 'iframe-protection',
        name: 'Framing and clickjacking',
        load: () => json(import('./chapters/security/03-iframe-protection.json')),
      },
      {
        id: 'security-headers',
        name: 'Hardening the browser with headers',
        load: () => json(import('./chapters/security/04-security-headers.json')),
      },
      {
        id: 'client-side-security',
        name: 'Secrets, tokens and storage',
        load: () => json(import('./chapters/security/05-client-side-security.json')),
      },
      {
        id: 'https',
        name: 'Protecting data in transit (HTTPS)',
        load: () => json(import('./chapters/security/06-https.json')),
      },
      {
        id: 'dependency-security',
        name: 'Supply-chain risk',
        load: () => json(import('./chapters/security/07-dependency-security.json')),
      },
      {
        id: 'compliance',
        name: 'Privacy law and standards',
        load: () => json(import('./chapters/security/08-compliance.json')),
      },
      {
        id: 'input-validation',
        name: 'Never trust user input',
        load: () => json(import('./chapters/security/09-input-validation.json')),
      },
      {
        id: 'ssrf',
        name: 'Tricking your server into fetching (SSRF)',
        load: () => json(import('./chapters/security/10-ssrf.json')),
      },
      {
        id: 'ssji',
        name: 'Code injection on the server (SSJI)',
        load: () => json(import('./chapters/security/11-ssji.json')),
      },
      {
        id: 'permissions-policy',
        name: 'Locking down browser features',
        load: () => json(import('./chapters/security/12-permissions-policy.json')),
      },
      {
        id: 'sri',
        name: 'Pinning third-party scripts (SRI)',
        load: () => json(import('./chapters/security/13-sri.json')),
      },
      {
        id: 'cors',
        name: 'Who may read your responses (CORS)',
        load: () => json(import('./chapters/security/14-cors.json')),
      },
      {
        id: 'csrf',
        name: 'Requests users never meant to send (CSRF)',
        load: () => json(import('./chapters/security/15-csrf.json')),
      },
      {
        id: 'ai-attacks',
        name: 'Securing LLM features',
        load: () => json(import('./chapters/security/16-ai-attacks.json')),
      },
    ],
  },
  {
    id: 'networking',
    name: 'Networking',
    chapters: [
      {
        id: 'networking',
        name: 'How bytes reach the browser',
        load: () => json(import('./chapters/networking/01-networking.json')),
        soon: true,
      },
    ],
  },
  {
    id: 'communication',
    name: 'Communication',
    chapters: [
      {
        id: 'communication',
        name: 'Live updates, from polling to sockets',
        load: () => json(import('./chapters/communication/01-communication.json')),
        soon: true,
      },
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    chapters: [
      {
        id: 'testing',
        name: 'Tests worth writing',
        load: () => json(import('./chapters/testing/01-testing.json')),
        soon: true,
      },
    ],
  },
  {
    id: 'performance',
    name: 'Performance',
    chapters: [
      {
        id: 'performance',
        name: 'Making pages fast',
        load: () => json(import('./chapters/performance/01-performance.json')),
        soon: true,
      },
    ],
  },
  {
    id: 'caching',
    name: 'Database & Caching',
    chapters: [
      {
        id: 'caching',
        name: 'Where data lives on the client',
        load: () => json(import('./chapters/caching/01-caching.json')),
        soon: true,
      },
    ],
  },
  {
    id: 'monitoring',
    name: 'Logging & Monitoring',
    chapters: [
      {
        id: 'monitoring',
        name: 'Seeing what happens in production',
        load: () => json(import('./chapters/monitoring/01-monitoring.json')),
        soon: true,
      },
    ],
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    chapters: [
      {
        id: 'accessibility',
        name: 'Building for every user',
        load: () => json(import('./chapters/accessibility/01-accessibility.json')),
        soon: true,
      },
    ],
  },
  {
    id: 'offline',
    name: 'Offline Support',
    chapters: [
      {
        id: 'offline',
        name: 'Working without a network',
        load: () => json(import('./chapters/offline/01-offline.json')),
        soon: true,
      },
    ],
  },
  {
    id: 'lld',
    name: 'Low Level Design',
    chapters: [
      {
        id: 'lld',
        name: 'Designing components and APIs',
        load: () => json(import('./chapters/lld/01-lld.json')),
        soon: true,
      },
    ],
  },
  {
    id: 'hld',
    name: 'High Level Design',
    chapters: [
      {
        id: 'hld',
        name: 'Architecture on the whiteboard',
        load: () => json(import('./chapters/hld/01-hld.json')),
        soon: true,
      },
    ],
  },
];

/** Every chapter in reading order. URLs and navigation use this flat list. */
export const CHAPTERS: readonly ChapterRef[] = SECTIONS.flatMap((s) => s.chapters);
