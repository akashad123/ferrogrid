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
- [ ] Set up the approved React build and rendering strategy (Vite + React SSG/prerendering).
- [ ] Establish route compatibility, including existing `.html` URLs.
- [ ] Configure global tokens and base styles from the source (`css/site.css`).
- [ ] Move assets to `public/` without breaking paths.
- [ ] Confirm clean build, preview, and deployment output.

## Phase 2 — Shared site shell
- [ ] Implement shared Header, desktop navigation, mega-menu, mobile navigation drawer, and Footer.
- [ ] Implement floating contact actions (Call & WhatsApp) with hero-intersection awareness.
- [ ] Preserve dropdown behavior, scroll state, and accessibility.
- [ ] Verify shell at all responsive breakpoints (mobile, tablet, laptop, wide desktop).

## Phase 3 — Page migration
- [ ] Migrate the homepage (`/` / `index.html`).
- [ ] Migrate company/about and informational pages (`about.html`, `ferrocement.html`, `process.html`).
- [ ] Migrate services hub and 6 service detail pages (`services.html`, `service-*.html`).
- [ ] Migrate projects hub and 2 project case study pages (`projects.html`, `project-*.html`).
- [ ] Migrate contact, FAQ, legal, and error pages (`contact.html`, `faq.html`, `privacy.html`, `terms.html`, `404.html`).
- [ ] Confirm every original route, section, and content hierarchy is represented.

## Phase 4 — Interactions and motion
- [ ] Migrate navigation, mobile drawer, sub-toggles, and anchor scrolling.
- [ ] Migrate project filtering and "Show More / Show Less" expandable grid.
- [ ] Migrate Web3Forms contact form submission with feedback states.
- [ ] Migrate hero background video with responsive art direction, power/data checks, and play/pause ring.
- [ ] Migrate ferrocement interactive step-by-step video animation with scrubbing.
- [ ] Migrate carousels (featured projects, project detail journeys) with pointer drag and nav buttons.
- [ ] Migrate photo lightbox modal with zoom, keyboard, counter, and touch swipe.
- [ ] Migrate process progress bar, timeline scroll tracking, counter animations, sticky steps, and canvas ferro-mesh.
- [ ] Add cleanup, lifecycle safety, and `prefers-reduced-motion` compliance.

## Phase 5 — SEO, accessibility and performance
- [ ] Preserve per-page titles, descriptions, canonical URLs, OG/Twitter tags, and JSON-LD structured data.
- [ ] Verify page-specific crawlable HTML output in `dist/` for all 19 routes.
- [ ] Preserve `robots.txt`, `llms.txt`, `sitemap.xml`, and favicon assets.
- [ ] Validate semantic headings, internal links, image alt text, and keyboard navigation.
- [ ] Check image/video loading, responsive media, and layout stability.

## Phase 6 — QA and release
- [ ] Compare source and migrated pages visually at mobile, tablet, and desktop viewports.
- [ ] Test all routes directly and on browser refresh.
- [ ] Test all interactive behavior and external communication links.
- [ ] Verify zero console/network errors and no broken assets.
- [ ] Run clean build and verify static output files.
- [ ] Review diff, commit with structured git messages, and update handover documentation.

## Current status
Phase 0 Complete. Ready for Phase 1 pending user confirmation of target choices (JS vs TS and SSG strategy confirmation).
