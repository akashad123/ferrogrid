# FERROGRID React Conversion Kit

This kit contains project instructions and handover documents for converting the supplied static FERROGRID website into a React-only static frontend.

## What was found in the supplied ZIP

- 18 HTML pages, including the home, about, contact, FAQ, process, projects, service and legal pages.
- Shared styling in `css/site.css` (about 122 KB).
- Interaction code in `js/main.js` and animation code in `js/motion.js`.
- Lenis smooth scrolling in `js/lenis.min.js`.
- A substantial local image/video library under `images/`, plus favicon assets.
- Existing SEO/AI-discovery files: `robots.txt`, `llms.txt`, canonical URLs and page metadata in the HTML.
- Existing Vercel response headers in `vercel.json`.
- The CSS already defines global design tokens, including brand green, orange accents, typography and layout variables.

## Important clarification about design references

There is **no `design.md` file in the supplied ZIP**. This kit intentionally creates an empty `docs/design.md` placeholder. Keep screenshots, screen recordings and temporary visual references outside the repository; provide them directly to the coding agent when needed. Do not create or populate a `reference/` folder.

## Recommended target for this conversion

- React + Vite + JavaScript (unless you explicitly choose TypeScript).
- Static frontend only: no Supabase, database, server API or authentication should be added by default.
- React Router only if the migration needs client-side routing. Preserve crawlable page URLs and SEO; evaluate static prerendering/SSG before choosing a client-only SPA.
- Keep existing assets and visual design; migrate functionality with the smallest safe change set.
- Do not introduce Framer Motion or GSAP merely because they are available. First inventory the current motion implementation and preserve it or replace it only when justified.

## Start here

1. Open `prompts/FERROGRID_REACT_CONVERSION_PROMPT.md` and give it to the coding agent with the ZIP/repository.
2. Provide any reference screenshots or recordings directly in the same agent session.
3. Keep `docs/design.md` empty until you supply your own design specification.
4. Use `prompts/FRONTEND_ONLY_PROJECT_MASTER_PROMPT.md` for future static/frontend-only projects, or `prompts/FULL_STACK_PROJECT_MASTER_PROMPT.md` for projects with a real backend.
5. Use `prompts/SCREENSHOT_TO_UI_DESIGN_AND_IMPLEMENTATION_PROMPT.md` whenever you provide screenshots, images or screen recordings and want the agent to analyze and implement the matching UI.
