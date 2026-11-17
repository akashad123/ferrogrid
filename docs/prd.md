# Product Requirements Document — FERROGRID React Migration

## 1. Project overview
Migrate the existing FERROGRID multi-page website from HTML, CSS and vanilla JavaScript to a maintainable React-based static frontend. This is a technology migration, not a redesign.

## 2. Primary objective
Reproduce the existing website's content, page coverage, visual appearance, responsive behavior, interactions, SEO metadata and asset usage while moving rendering and UI behavior into React.

## 3. Existing scope to inventory
The supplied archive contains these HTML routes/pages:
- `/` (`index.html`)
- `/about.html`
- `/contact.html`
- `/faq.html`
- `/ferrocement.html`
- `/process.html`
- `/projects.html`
- `/project-kakkadampoyil.html`
- `/project-pulpally.html`
- `/services.html`
- `/service-eco-friendly-huts.html`
- `/service-farm-stay-buildings.html`
- `/service-resort-cottages.html`
- `/service-swimming-pools.html`
- `/service-underground-houses.html`
- `/service-water-features.html`
- `/privacy.html`
- `/terms.html`
- `/404.html`

The 19 routes above have been fully confirmed against the repository in Phase 0 discovery. All 19 files and their metadata/links exist without discrepancies.

## 4. Functional requirements
- Preserve all navigation, mobile navigation, dropdowns, anchors, buttons, forms, project/service links, filters, galleries, lightboxes, carousels and other interactions that exist in the source.
- Preserve smooth scrolling and motion behavior where it is part of the current experience, while respecting `prefers-reduced-motion`.
- Preserve external contact links (telephone, WhatsApp, email, maps and social links).
- Forms must retain their current behavior. Do not invent a backend submission endpoint. If a form currently relies on a third-party service or has no working submission path, report that and ask before changing it.
- All routes must load directly, refresh correctly and navigate internally without broken links.
- Preserve existing page content and business facts. Do not rewrite copy or invent claims.

## 5. Design requirements
- Treat the current website as the source of truth for design unless the user supplies a replacement design specification or visual references.
- Preserve the existing global tokens, colors, typography, spacing, radii, shadows, gradients, image crops and motion characteristics.
- Mobile and tablet layouts are mandatory. No horizontal overflow or inaccessible controls.
- `docs/design.md` is intentionally blank and must remain blank until the user supplies it.

## 6. SEO and discoverability requirements
- Preserve meaningful per-page `<title>`, meta description, canonical URL, Open Graph/Twitter metadata, robots directives, structured data and heading hierarchy wherever present.
- Keep `robots.txt`, `llms.txt`, sitemap references, favicon files and appropriate Vercel headers.
- Ensure each public page has crawlable content in the initial HTML. Do not assume a client-rendered React SPA alone is SEO-equivalent to the original HTML.
- Prefer static prerendering/SSG or another approach that emits page-specific HTML for all indexable routes. Explain the chosen approach before implementing it.
- Preserve semantic HTML, descriptive image alt text, internal links and accessible navigation.
- Validate metadata and rendered HTML for every route after migration.

## 7. Non-goals
- No backend, Supabase, authentication, CMS or database.
- No redesign, new features, content expansion or unrelated refactoring.
- No replacement of animation libraries without evidence that it is needed.
- No deletion or recompression of original assets unless required and approved.

## 8. Acceptance criteria
- Every source page has a corresponding working React route/output.
- Visual comparison shows no unintended layout or styling regression at desktop, tablet and mobile sizes.
- Existing interactions work and keyboard accessibility is maintained or improved.
- No console errors, missing assets, broken links or route-refresh failures.
- SEO metadata and crawlable page content are preserved for every route.
- Build and preview commands work from a clean install.
- Handover documents are current and another developer can continue without reverse-engineering the project.
