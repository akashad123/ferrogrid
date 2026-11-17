# Architecture — FERROGRID React Static Frontend

## 1. Architecture Decision
This is a static frontend migration. No backend, database, Supabase, or external server APIs are in scope.
- **Framework & Tooling**: React + Vite static site generation (SSG).
- **SEO & Rendering Strategy**: Static prerendering (`react-dom/server` build step) emitting crawlable, pre-rendered HTML files for each of the 19 public routes (`dist/index.html`, `dist/about.html`, `dist/contact.html`, etc.).
- **URL Compatibility**: Preserves all original `.html` URL endpoints as recorded in `sitemap.xml` and canonical tags, guaranteeing zero broken bookmarks, no 404s, and zero SEO ranking disruption.
- **Client Hydration**: Fast client-side hydration for dynamic interactivity, routing, lightbox, filtering, video playback controls, and animations.
- **Hosting Target**: Fully static output deployable to Vercel (using the existing `vercel.json` security and cache headers) or any static CDN.

## 2. Page & Route Inventory (19 Routes)
| File | Intended URL | Purpose / Classification | Has JSON-LD | Primary Sections |
|---|---|---|---|---|
| `index.html` | `/` and `/index.html` | Homepage | Yes (Organization, WebSite, WebPage) | Hero Cine, Marquee, About, Services, Projects Carousel, Process, Brands, Fleet, Testimonials, Final CTA |
| `about.html` | `/about.html` | Company & About | Yes (AboutPage, Breadcrumbs) | Page Hero, Story, What We Build, Values, Fleet, Facts, Service Area, Testimonials, Brands, Final CTA |
| `contact.html` | `/contact.html` | Contact & Inquiries | Yes (ContactPage, Breadcrumbs) | Page Hero, Contact Items (Phone, WhatsApp, Email, Office), Web3Forms Inquiry Form, Map Section |
| `faq.html` | `/faq.html` | Frequently Asked Questions | Yes (FAQPage, Breadcrumbs) | Page Hero, Accordion FAQ Groups (Ferrocement, Pools, Underground, Cottages, Cost, Working with Us) |
| `ferrocement.html` | `/ferrocement.html` | Ferrocement Education & Tech | Yes (HowTo, FAQPage, Breadcrumbs) | Page Hero, Interactive "Takes Shape" Video, Advantages, RCC Comparison, Pools, Applications, Sticky Steps, FAQ, Final CTA |
| `process.html` | `/process.html` | Construction Process | Yes (FAQPage, Breadcrumbs) | Page Hero, Timeline Track (Consultation, Site Visit, Design, Construction, Handover), Preparation, FAQ, Final CTA |
| `projects.html` | `/projects.html` | Projects Hub & Gallery | Yes (CollectionPage, Breadcrumbs) | Page Hero, Category Filter Tabs (`all`, `pools`, `cottages`, `underground`, `farmstay`, `waterfeature`), Projects Grid, Expandable Show More/Less |
| `project-pulpally.html` | `/project-pulpally.html` | Case Study: Pulpally Resort | Yes (CreativeWork, Breadcrumbs) | Case Hero, Overview, Construction Journey Carousel, Photo Gallery, Next Project CTA |
| `project-kakkadampoyil.html` | `/project-kakkadampoyil.html` | Case Study: Kakkadampoyil | Yes (CreativeWork, Breadcrumbs) | Case Hero, Overview, Construction Journey Carousel, Photo Gallery, Next Project CTA |
| `services.html` | `/services.html` | Services Overview Hub | Yes (CollectionPage, FAQPage, Breadcrumbs) | Page Hero, Service Rows (with thumb media and specs), Process Highlight, FAQ, Final CTA |
| `service-swimming-pools.html` | `/service-swimming-pools.html` | Detail: Swimming Pools | Yes (Service, FAQPage, Breadcrumbs) | Stacked Hero, Overview, Feature Panels, Photo Gallery, Related Work, FAQ, Other Services, Final CTA |
| `service-resort-cottages.html` | `/service-resort-cottages.html` | Detail: Resort Cottages | Yes (Service, FAQPage, Breadcrumbs) | Stacked Hero, Overview, Feature Panels, Photo Gallery, Related Work, FAQ, Other Services, Final CTA |
| `service-eco-friendly-huts.html` | `/service-eco-friendly-huts.html` | Detail: Eco-Friendly Huts | Yes (Service, FAQPage, Breadcrumbs) | Stacked Hero, Overview, Feature Panels, Photo Gallery, Related Work, FAQ, Other Services, Final CTA |
| `service-underground-houses.html` | `/service-underground-houses.html` | Detail: Underground Houses | Yes (Service, FAQPage, Breadcrumbs) | Stacked Hero, Overview, Feature Panels, Photo Gallery, Related Work, FAQ, Other Services, Final CTA |
| `service-farm-stay-buildings.html` | `/service-farm-stay-buildings.html` | Detail: Farm Stay Buildings | Yes (Service, FAQPage, Breadcrumbs) | Stacked Hero, Overview, Feature Panels, Photo Gallery, Related Work, FAQ, Other Services, Final CTA |
| `service-water-features.html` | `/service-water-features.html` | Detail: Water Features | Yes (Service, FAQPage, Breadcrumbs) | Stacked Hero, Overview, Feature Panels, Photo Gallery, Related Work, FAQ, Other Services, Final CTA |
| `privacy.html` | `/privacy.html` | Privacy Policy | Yes (WebPage, Breadcrumbs) | Simple Hero, Legal Sections (Data collection, use, forms, sharing, contact) |
| `terms.html` | `/terms.html` | Terms of Service | Yes (WebPage, Breadcrumbs) | Simple Hero, Legal Sections (Website use, accuracy, inquiries, external links, terms) |
| `404.html` | `/404.html` | Not Found Page | No | Error Hero ("Page not found", quick links back to Home, Services, Projects, Contact) |

## 3. Project Directory Structure
```text
ferrogrid-main/
├── public/
│   ├── favicon/                # All favicon & web manifest assets
│   ├── images/                 # All 89 production images & videos
│   ├── .htaccess               # Apache/LiteSpeed caching & mime rules
│   ├── llms.txt                # AI assistants context file
│   ├── robots.txt              # Search engine & AI crawler directives
│   └── sitemap.xml             # XML sitemap with 18 indexed routes
├── src/
│   ├── app/
│   │   ├── App.jsx             # Shell wrapper (Header, Router/View, Footer, Floats, Lightbox)
│   │   └── routes.js           # Route manifest with metadata & component mappings
│   ├── components/
│   │   ├── common/             # Reusable UI (Button, Pill, Breadcrumbs, PhotoLightbox, VideoPlayer)
│   │   ├── layout/             # Header, MegaMenu, MobileDrawer, Footer, FloatingActions
│   │   └── sections/           # Shared sections (BrandsMarquee, Testimonials, FinalCta, ProcessTimeline)
│   ├── data/                   # Structured data for services, projects, FAQs, testimonials
│   ├── hooks/                  # useScrollLock, useInView, useMediaQuery, useReducedMotion
│   ├── lib/                    # lenis integration, seo utils, analytics/scroll helpers
│   ├── pages/                  # Route-level components for all 19 pages
│   ├── styles/
│   │   ├── tokens.css          # Design tokens (colors, typography, radii, shadows, motion)
│   │   └── site.css            # Existing comprehensive design system (reused cleanly)
│   ├── entry-client.jsx        # Client hydration entry
│   └── entry-server.jsx        # Server prerender entry for SSG build
├── prerender.js                # Static site generator script (outputs 19 .html files)
├── docs/                       # Project documentation & handover records
├── vercel.json                 # Security headers & asset cache configurations
├── vite.config.js              # Vite configuration
├── package.json
└── README.md
```

## 4. Component Boundaries & Shared UI
- **Shared Chrome**: `Header` (with desktop mega-menu & mobile drawer), `Footer` (brand summary, link clusters, copyright), and `FloatingActions` (Call & WhatsApp slide-out pills).
- **Global Lightbox Modal**: `PhotoLightbox` managed at layout root, connected via custom event or lightweight context.
- **Shared Sections**:
  - `FinalCta`: Used on 14 pages.
  - `BrandsMarquee`: Used on Home and About.
  - `Testimonials`: Used on Home and About.
  - `Breadcrumb`: Standardized component for all 17 interior pages.
  - `ProjectCard` and `ProjectFilter`: Reused between Home carousel and Projects gallery.
  - `FaqAccordion`: Reused between dedicated FAQ page and Service/Process sub-FAQs.

## 5. Styling Strategy
- Retain the exact visual design system from `css/site.css` (6,615 lines) with zero regressions.
- CSS custom properties (`--clr-green`, `--clr-orange`, `--radius-xl`, `--font-main`, `--shell-max`, etc.) are preserved.
- No bulky third-party UI libraries or competing CSS frameworks introduced.

## 6. Motion & Interaction Architecture
- **Lenis Smooth Scroll**: Initialized in `src/lib/lenis.js` for desktop fine-pointers; auto-paused when mobile menu or lightbox modal is open.
- **Hero Video**: Controlled via React lifecycle with intersection observer, DPR calculation, low-data/reduced-motion checks, and SVG progress ring.
- **Ferrocement Interactive Video**: Synced state between HTML5 video playback and step buttons with progress indicators.
- **Carousels**: Reusable carousel component supporting smooth button scrolling and mouse drag gestures.
- **Photo Lightbox**: Full keyboard accessibility (Esc, ArrowLeft, ArrowRight, Tab lock) and touch swipe navigation.
- **Scroll Effects**: Intersection observers for `.reveal`, active header hide/reveal on scroll, and counters.

## 7. Form Handling (Web3Forms)
- `contact.html` contains the only form in the application (`#contactForm`).
- Uses Web3Forms endpoint (`https://api.web3forms.com/submit`) with existing access key (`096fea7a-8158-4f2f-a358-c2f212d6f567`).
- Implemented as a controlled React component with stateful submit button (Default -> "Sending..." -> "✓ Request Sent Successfully!" -> Reset), botcheck honeypot, and clear error feedback without requiring any backend.

## 8. Decisions Log
- **SSG Prerendering**: Vite + custom prerender script producing static `.html` files for all 19 routes during `npm run build`.
- **URL Preservation**: Retain `.html` suffixes on all sub-routes to match indexed search engine URLs and existing public links.
- **No Backend**: No database, authentication, or server API routes added.
