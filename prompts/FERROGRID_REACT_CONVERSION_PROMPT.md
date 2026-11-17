# MASTER TASK — Convert the supplied FERROGRID website into React

You are working as a senior frontend engineer responsible for a safe, production-quality migration and developer handover.

## Objective
Convert the supplied FERROGRID website, currently built with HTML, CSS and vanilla JavaScript, into a React-only static frontend. This is a faithful technology migration, **not a redesign**. Preserve the existing content, visual design, functionality, SEO and URL behavior.

The user has explicitly selected React and static frontend only. Do not add Supabase, a database, authentication, server APIs or backend services. Do not switch to another framework.

## Mandatory first step: inspect before coding
Do not start by generating a fresh React template or rewriting the site. First inspect the entire repository and all related functionality.

The supplied archive includes (verify against the extracted repository):
- Multiple HTML routes: home, about, contact, FAQ, ferrocement, process, projects, project details, services, service details, privacy, terms and 404.
- `css/site.css` with the existing global visual system and tokens.
- `js/main.js` for navigation, interactions and form behavior.
- `js/motion.js` for visual effects, scroll behavior, carousel/lightbox and motion.
- `js/lenis.min.js` for smooth scrolling.
- Local image/video assets and favicon assets.
- `robots.txt`, `llms.txt`, page metadata and `vercel.json`.

Complete a discovery report before implementation:
1. Enumerate every source page and its intended URL.
2. Identify shared layout sections and repeated components.
3. Map every interaction on every page to its source code.
4. Inventory forms and their actual submission behavior.
5. Inventory animation/motion behavior and reduced-motion handling.
6. Inventory image/video references, responsive variants and alt text.
7. Record SEO metadata, canonical URLs, structured data, robots/llms/sitemap behavior.
8. Record hosting/deployment assumptions and security/cache headers.
9. Identify risks and any genuine unknowns.

Ask only the essential unresolved questions that materially affect implementation. React and static frontend are already confirmed. Ask whether the project should remain JavaScript or use TypeScript only if that is not already established. Explain the SEO rendering strategy before committing to it.

## Architecture and SEO
This is a multi-page public marketing website. Do not blindly turn it into a client-only SPA. Choose the simplest maintainable React approach that emits page-specific HTML for indexable routes (static prerendering/SSG or an equivalent compatible solution). Preserve existing `.html` URLs where practical. If a URL change is necessary, propose redirects and obtain approval first.

Do not add a backend. Keep the project static and deployable to the current hosting environment unless inspection proves a change is required.

## Visual fidelity
- Treat the existing website as the design source of truth.
- Preserve layout, content order, colors, typography, spacing, widths, radii, borders, shadows, image crops, video behavior and motion.
- Reuse the existing CSS and global tokens as the starting point. Do not replace the design with a generic template.
- Avoid unnecessary CSS rewrites or styling framework migrations.
- Mobile responsiveness is mandatory. Verify mobile, tablet, laptop and wide desktop.
- Avoid horizontal overflow, clipped text, broken menus and touch-hostile controls.
- Keep the user's `docs/design.md` untouched and empty. No design specification was included in the source ZIP; the user will provide it separately if needed.

## React migration rules
- Convert page content into route-level React components.
- Create reusable shared components only for genuinely shared UI (header, navigation, footer, repeated cards/sections).
- Migrate imperative DOM interactions into React state, refs and effects where appropriate.
- Ensure event listeners, observers, animation loops, Lenis instances and third-party instances are cleaned up.
- Do not let legacy scripts and React compete to control the same DOM.
- Preserve current behavior before optimizing or simplifying it.
- Keep original asset files and sensible asset paths. Do not delete or rename media without a verified reason.
- Do not add Framer Motion or GSAP automatically. Audit existing animation behavior first. Retain or replace the existing implementation only where necessary; ask before introducing a new animation dependency.
- Do not invent form APIs or pretend a form submits if no working endpoint exists.

## SEO requirements — mandatory
For every page:
- Preserve page-specific title and meta description.
- Preserve canonical URL and existing Open Graph/Twitter metadata.
- Preserve structured data and robots directives when present.
- Preserve semantic heading order, meaningful link text and image alt text.
- Ensure page content is present in the generated HTML for crawlers; verify output files, not only the browser DOM.
- Preserve `robots.txt`, `llms.txt`, sitemap references and favicon assets.
- Preserve internal link destinations and existing public URL behavior.
- Keep appropriate 404 handling and Vercel headers.
- Avoid duplicate titles, descriptions, canonicals or accidental `noindex`.
- Report any missing or conflicting source metadata instead of inventing business claims.

## Code quality and folder structure
Use a clear structure appropriate to the repository, for example:
- `src/app/` for app bootstrap and route configuration.
- `src/pages/` for page-level components.
- `src/components/layout/` for shared header/footer/navigation.
- `src/components/common/` for genuinely reusable UI.
- `src/data/` for repeated structured content where useful.
- `src/hooks/` and `src/lib/` for reusable logic.
- `src/styles/` for tokens and global styles.
- `public/images/`, `public/favicon/` and public SEO files for static assets.

Naming:
- React components/files: PascalCase.
- Functions, variables and hooks: camelCase; hooks begin with `use`.
- Static assets and route slugs: kebab-case unless compatibility requires preserving current names.
- Use descriptive names; avoid vague abbreviations and duplicate abstractions.

Dynamic coding:
- Avoid duplicated hard-coded values, magic numbers and repeated content where a data structure or token is clearer.
- Do not over-engineer unique static copy into complex configuration.
- Keep global theme tokens for colors, typography, spacing, breakpoints, radii and motion.
- Never hard-code secrets or invent API values.

## Strict change-control instruction
Investigate the existing implementation and all related functionality first. Add the requested functionality with the smallest possible change set. Preserve all existing functionality, data flow, business logic, content and UI/UX. Do not modify or refactor unrelated code. If an existing component, service, schema or function is shared with another feature, understand its dependencies before changing it. Only make changes necessary for this migration, and verify existing features still work afterward.

Do not hallucinate. If a material doubt exists, ask before making an irreversible or scope-changing decision. Do not ask questions whose answers are already explicit in this prompt.

## Required documentation — update automatically
Maintain these files after each meaningful task without asking the user to remind you:
- `docs/prd.md`
- `docs/architecture.md`
- `docs/rules.md`
- `docs/phases.md`
- `docs/memory.md`

`docs/design.md` must remain empty until the user supplies or approves design content. Do not place screenshots, screen recordings or other reference media in a repository `reference/` folder. The user supplies those assets directly in the current coding-agent session.

At each checkpoint, update completed items, current status, decisions, files touched, tests, known issues and exact continuation steps. Never claim updates were made if they were not.

## Git workflow
Work module by module. After each module:
1. Run relevant checks and verify the affected feature.
2. Review the diff for unrelated changes and accidental deletions.
3. Commit with a clear message.
4. Push the working branch if a remote is configured and credentials/permissions are available.
5. If remote/auth/branch protection prevents a push, report the exact blocker; do not claim success.
Never force-push or push to a protected production branch without explicit authorization.

## Execution phases
1. Discovery and baseline.
2. React foundation and SEO-capable routing/rendering.
3. Shared site shell.
4. Page migration in logical groups.
5. Interactions and motion.
6. SEO, accessibility and performance.
7. Responsive visual QA, route QA and release handover.

Do not skip discovery or combine all phases into one unreviewable code dump.

## Definition of done
- All original pages and public routes are represented.
- All original content and working interactions are preserved.
- No broken links, missing assets, console errors or route-refresh failures.
- Mobile/tablet/desktop behavior is verified.
- Page-specific SEO metadata and crawlable HTML are verified for every route.
- Build succeeds from a clean install.
- Documentation is updated and another developer can continue from `docs/memory.md`.
- Git commit/push status is accurately reported.

## Final response format
Summarize: what changed, routes completed, functionality preserved, SEO/rendering approach, responsive checks, tests run/results, commit and push status, known issues, and the exact next step. Be concise and truthful.
