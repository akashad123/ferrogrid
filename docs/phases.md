# Migration Phases

Status values: `Not started` / `In progress` / `Blocked` / `Complete`.

## Phase 0 — Discovery and baseline
- [x] Inspect all HTML pages, CSS, JavaScript, media, metadata, links and deployment files.
- [x] Build a route/page inventory and shared-component inventory.
- [x] Map all interactive behavior to its source implementation.
- [x] Identify forms, third-party integrations and any external dependencies.
- [x] Verify image/video asset inventory, formats, responsive variants, and alt tags.
- [x] Record the detected stack and confirm unresolved target-stack choices.
- [x] Record existing SEO, JSON-LD structured data, and hosting behavior.

## Phase 1 — React foundation
- [x] Set up the approved React build and rendering strategy (Vite + React SSG/prerendering).
- [x] Establish route compatibility, including existing `.html` URLs.
- [x] Configure global tokens and base styles from the source (`css/site.css` -> `src/styles/site.css`).
- [x] Move assets to `public/` without breaking paths (images, favicon, sitemap, robots, llms).
- [x] Confirm clean build, preview, and deployment output.

## Phase 2 — Shared site shell
- [x] Implement shared Header, desktop navigation, mega-menu, mobile navigation drawer, and Footer.
- [x] Implement floating contact actions (Call & WhatsApp) with hero-intersection awareness.
- [x] Preserve dropdown behavior, scroll state, and accessibility.
- [x] Verify shell at all responsive breakpoints (mobile, tablet, laptop, wide desktop).

## Phase 3 — Page migration
- [x] Migrate the homepage (`/` / `index.html`).
- [x] Migrate company/about and informational pages (`about.html`, `ferrocement.html`, `process.html`).
- [x] Migrate services hub and 6 service detail pages (`services.html`, `service-*.html`).
- [x] Migrate projects hub and 2 project case study pages (`projects.html`, `project-*.html`).
- [x] Migrate contact, FAQ, legal, and error pages (`contact.html`, `faq.html`, `privacy.html`, `terms.html`, `404.html`).
- [x] Confirm every original route, section, and content hierarchy is represented.

## Phase 4 — Interactions and motion
- [x] Migrate navigation, mobile drawer, sub-toggles, and anchor scrolling.
- [x] Migrate project filtering and URL search param awareness (`projects.html?filter=...`).
- [x] Migrate Web3Forms contact form submission with honeypot botcheck, loading, success, and error feedback states.
- [x] Migrate hero background video with responsive art direction, power/data checks, and play/pause ring.
- [x] Migrate ferrocement interactive step-by-step video animation with scrubbing.
- [x] Migrate carousels (featured projects, project detail journeys) with pointer drag and nav buttons.
- [x] Migrate photo lightbox modal with keyboard navigation, counter, and touch swipe.
- [x] Migrate process timeline, counter animations, and interactive canvas ferro-mesh.
- [x] Add cleanup, lifecycle safety, and `prefers-reduced-motion` compliance.

## Phase 5 — SEO, accessibility and performance
- [x] Preserve per-page titles, descriptions, canonical URLs, OG/Twitter tags, and JSON-LD structured data.
- [x] Verify page-specific crawlable HTML output in `dist/` for all 19 routes.
- [x] Preserve `robots.txt`, `llms.txt`, `sitemap.xml`, and favicon assets.
- [x] Validate semantic headings, 437 internal links, image alt text, and keyboard navigation.
- [x] Check image/video loading, responsive media, and layout stability.

## Phase 6 — QA and release
- [x] Compare source and migrated pages visually at mobile, tablet, and desktop viewports.
- [x] Test all routes directly and on browser refresh.
- [x] Test all interactive behavior and external communication links.
- [x] Verify zero console/network errors and no broken assets (102 assets verified).
- [x] Run clean build and verify static output files (all 19 routes output complete HTML).
- [x] Review diff, commit with structured git messages, and update handover documentation.

## Current status
All phases (Phase 0 through Phase 6) Complete. Migration successfully finished and production build verified.
