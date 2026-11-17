# Project Memory and Developer Handover

> This file is maintained automatically by the coding agent after meaningful work. It must describe the real repository state, not intended or imagined progress.

## Project
- Name: FERROGRID React migration
- Type: Static frontend website
- Source: Supplied HTML/CSS/JavaScript website archive
- Target: React-only static frontend (SSG prerendered to HTML)
- Backend: None in scope (explicit user constraint)
- Design specification: `docs/design.md` (intentionally empty until user supplies it)

## Source Inventory & Verification (Completed in Phase 0)
- **19 HTML Routes Audited**:
  - `index.html` (`/`)
  - `about.html` (`/about.html`)
  - `contact.html` (`/contact.html`)
  - `faq.html` (`/faq.html`)
  - `ferrocement.html` (`/ferrocement.html`)
  - `process.html` (`/process.html`)
  - `projects.html` (`/projects.html`)
  - `project-kakkadampoyil.html` (`/project-kakkadampoyil.html`)
  - `project-pulpally.html` (`/project-pulpally.html`)
  - `services.html` (`/services.html`)
  - `service-eco-friendly-huts.html` (`/service-eco-friendly-huts.html`)
  - `service-farm-stay-buildings.html` (`/service-farm-stay-buildings.html`)
  - `service-resort-cottages.html` (`/service-resort-cottages.html`)
  - `service-swimming-pools.html` (`/service-swimming-pools.html`)
  - `service-underground-houses.html` (`/service-underground-houses.html`)
  - `service-water-features.html` (`/service-water-features.html`)
  - `privacy.html` (`/privacy.html`)
  - `terms.html` (`/terms.html`)
  - `404.html` (`/404.html`)
- **Assets**: 89 unique image/video assets referenced across HTML and CSS; 0 missing assets verified on disk.
- **Internal Links**: 27 unique internal link paths; 0 broken links verified.
- **Forms**: Exactly 1 form on `contact.html`, submitting via Web3Forms endpoint (`https://api.web3forms.com/submit`) with access key `096fea7a-8158-4f2f-a358-c2f212d6f567`.
- **SEO & Discovery**: Verified title, description, canonical link, OG/Twitter tags, geo tags, and JSON-LD structured data on all 18 indexable routes. `robots.txt`, `llms.txt`, `sitemap.xml`, and complete favicon suite verified.
- **Hosting**: `vercel.json` provides security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`) and immutable/long-term cache headers for assets.
- **Git**: Git initialized locally with production `.gitignore`.

## Confirmed Decisions
- Technology: React + Vite static frontend with SSG (static prerendering).
- Visual Design: 100% preservation of existing layout, typography, colors, and motion without external framework rewrites.
- URL Strategy: Retain existing `.html` URLs so indexable URLs and existing backlinks continue working identically.
- No backend, Supabase, authentication, or CMS.
- Form endpoint: Keep existing Web3Forms integration with client-side status handling.
- `docs/design.md` remains strictly empty.

## Decisions Presented to User
- Language: JavaScript (JSX) recommended as the baseline per project specifications, with TypeScript (TSX) available if preferred.
- SEO Rendering Strategy: Vite + React SSG generating 19 prerendered static HTML files matching the exact source URLs.

## Work Log
- 2026-11-17: Completed Phase 0 (Discovery & Baseline).
  - Inspected all 19 HTML source pages, `css/site.css`, `js/main.js`, `js/motion.js`, `js/lenis.min.js`.
  - Analyzed and mapped all DOM interactions, animations, forms, videos, and lightboxes.
  - Audited all 89 media assets (zero missing) and 27 internal link paths (zero broken).
  - Initialized git repository and created comprehensive `.gitignore`.
  - Updated `docs/phases.md`, `docs/architecture.md`, `docs/memory.md`.
  - Ready for Phase 1 (React foundation and build pipeline).

## Known Risks & Mitigations
- *Risk*: Converting to an SPA could harm SEO crawlability if HTML is not emitted.
  *Mitigation*: Implement static prerendering (SSG) in the build step to emit full HTML for all 19 routes.
- *Risk*: Legacy motion code directly manipulating DOM may conflict with React.
  *Mitigation*: Encapsulate animations in React lifecycle hooks (`useEffect`, `useRef`), cleaning up event listeners, Lenis, and observers on unmount.

## Exact Next Step
Receive user confirmation on JS vs TS and the proposed SEO SSG approach, then begin Phase 1: setup Vite + React foundation, configure asset directories, migrate global styles/tokens, and establish SSG prerender pipeline.
