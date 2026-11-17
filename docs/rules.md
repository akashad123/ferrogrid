# Development Rules

## 1. Non-negotiable working method
1. Investigate the existing implementation and all related functionality before changing anything.
2. Add requested functionality with the smallest possible change set.
3. Preserve existing functionality, data flow, business logic, content and UI/UX.
4. Do not modify or refactor unrelated code.
5. If a component, utility, style, asset, schema or function is shared, inspect its dependencies before changing it.
6. Verify affected features and relevant neighboring features after every change.
7. Do not hallucinate missing requirements, content, endpoints, credentials or design decisions. Ask concise questions when a material ambiguity blocks safe work.
8. Answer and implement only what was requested, except for necessary safety, compatibility, accessibility or SEO work.

## 2. Stack confirmation gate
Before implementation, inspect the repository and summarize the detected stack. Then ask the user to confirm the target stack if it has not already been explicitly confirmed for this task.

For this FERROGRID migration, the user has explicitly requested a React-only static frontend. Use React. Do not add Supabase. Ask only about unresolved choices that materially affect implementation, such as JavaScript vs TypeScript or the SEO rendering strategy. Do not repeatedly ask questions already answered.

Default preference for future projects:
- Frontend-only: ask whether React is required and whether JavaScript or TypeScript is preferred.
- Full-stack: ask for frontend, backend, database, authentication, hosting and any existing integrations.
- Treat React + Supabase as a suggested default only when appropriate, not as automatic permission to add a backend.
- Framer Motion and GSAP are alternatives, not automatic dependencies. Inspect existing motion needs and ask before changing the stack.

## 3. Folder structure and naming
- Use a clear, conventional folder structure based on the project's actual complexity.
- Use PascalCase for React component files and component names.
- Use camelCase for variables, functions, hooks and JavaScript/TypeScript modules; hooks start with `use`.
- Use kebab-case for static assets, CSS files and route slugs unless the existing project convention must be preserved.
- Use descriptive names. Avoid `data1`, `temp`, `newFinal`, ambiguous abbreviations and duplicate components.
- Keep page components, reusable components, data, hooks, utilities and styles separated where this improves clarity.
- Do not create empty layers or folders without a purpose.

## 4. Dynamic and data-driven code
- Avoid hard-coded repeated content, duplicated values and magic numbers. Use data structures, constants and design tokens where appropriate.
- Do not over-engineer genuinely unique static copy into a database or complex configuration system.
- Never hard-code secrets, API keys, credentials or environment-specific URLs.
- Keep route metadata, navigation and repeated content maintainable.
- Do not fabricate data to make a feature appear functional.

## 5. Global styles and responsive design
- Establish and reuse global theme tokens for colors, typography, spacing, sizing, breakpoints, shadows and motion.
- Do not scatter arbitrary colors and spacing values across components when a token is appropriate.
- Mobile view is mandatory, not optional. Test at narrow mobile, standard mobile, tablet, laptop and wide desktop sizes.
- Use fluid layouts and responsive media. Avoid fixed widths that cause overflow.
- Preserve keyboard navigation, visible focus, semantic elements and adequate contrast.
- Respect `prefers-reduced-motion`.

## 6. Change control
- Inspect before edit. Explain the intended small change set for non-trivial work.
- Do not rewrite files wholesale when a focused edit is sufficient.
- Do not delete existing code, content or assets unless demonstrably unused and removal is approved.
- Do not silently change dependencies, framework versions, route URLs, schemas, build tools or deployment settings.
- Do not introduce a library for a task that can be solved cleanly with the existing stack.
- Keep backward compatibility where the current site or deployment depends on it.

## 7. Testing and quality
- Run relevant lint, typecheck and build commands after changes when configured.
- Test affected routes, mobile navigation, forms, galleries, links, motion and other touched interactions.
- Check browser console and network requests for errors and missing assets.
- Verify direct route loads and refreshes.
- Verify SEO output from generated HTML.
- Report tests not run and why; never claim unperformed tests passed.

## 8. Git workflow
- Work in small, reviewable modules.
- After each completed module: run relevant checks, review the diff, commit with a descriptive message, then push the working branch if a remote is configured and credentials/permissions are available.
- Never force-push, rewrite shared history, push directly to a protected production branch, or bypass hooks.
- If no remote exists, authentication is unavailable, or the target branch is unclear, stop and tell the user what is needed. Do not claim a push happened.
- Do not commit secrets, generated junk, local environment files or temporary reference screenshots.

## 9. Documentation and handover — automatic maintenance
After every meaningful task/prompt, automatically update the relevant project documents without waiting for the user to remind you:
- `docs/prd.md`: requirements and scope changes.
- `docs/architecture.md`: architecture, stack, routes, dependencies and key decisions.
- `docs/rules.md`: only if development conventions change.
- `docs/phases.md`: progress, completed work, current phase and next tasks.
- `docs/design.md`: only when the user provides or approves design specifications. It starts empty.
- `docs/memory.md`: current implementation state, decisions, changed files, commands, known issues and exact next steps.

Do not ask the user to manually maintain these files. Keep them concise, accurate and current. Never claim documentation was updated unless the files were actually changed.

## 10. Handover standard
At the end of each module, leave enough information for a new developer to continue:
- What was completed and why.
- What files were changed.
- How the feature works and important dependencies.
- What was tested and results.
- Known limitations, unresolved questions and risks.
- Exact next step and where work should resume.
- Current Git branch and latest commit/push status.
