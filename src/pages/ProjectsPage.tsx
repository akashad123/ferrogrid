import React, { useState, useEffect } from 'react';
import { PROJECTS_LIST, ProjectCardItem } from '@/data/projectsData';
import { ProjectCard } from '@/components/common/ProjectCard';
import { useLightbox } from '@/lib/lightboxContext';
import { LightboxItem } from '@/types';

const FILTER_OPTIONS = [
  { filter: 'all', label: 'All Projects' },
  { filter: 'cottages', label: 'Cottages' },
  { filter: 'pools', label: 'Swimming Pools' },
  { filter: 'underground', label: 'Underground' },
  { filter: 'grotto', label: 'Rock Art & Grottos' },
  { filter: 'farmstay', label: 'Farm Stay' },
  { filter: 'waterfeature', label: 'Water Features' },
];

const PULPALLY_GALLERY: LightboxItem[] = [
  {
    src: 'images/pulpally/domes-aerial.webp',
    srcset: 'images/pulpally/domes-aerial-800w.webp 800w, images/pulpally/domes-aerial.webp 1600w',
    alt: 'Aerial view of ferrocement eco-domes at the Pulpally Resort site',
    caption: 'Dome cluster taking shape',
  },
  {
    src: 'images/pulpally/green-roof-earthworks.webp',
    alt: 'Finished domes with living green roofs',
    caption: 'Green-roofed domes',
  },
  {
    src: 'images/pulpally/pod-construction.webp',
    alt: 'Ferrocement pod with mesh shell and round openings',
    caption: 'Pod shell & openings',
  },
  {
    src: 'images/pulpally/rebar-progress.webp',
    alt: 'Rebar framework for dome structures',
    caption: 'Rebar framework',
  },
  {
    src: 'images/pulpally/site-progress.webp',
    srcset: 'images/pulpally/site-progress-800w.webp 800w, images/pulpally/site-progress.webp 1400w',
    alt: 'Wide view of the Pulpally Resort construction site',
    caption: 'Site overview',
  },
];

const KAKKADAMPOYIL_GALLERY: LightboxItem[] = [
  {
    src: 'images/kakkadampoyil/earth-sheltered-retreat.webp',
    alt: 'Grass-covered earth-sheltered cottages in a forest valley',
    caption: 'Earth-sheltered cottages',
  },
  {
    src: 'images/kakkadampoyil/grassy-mound-habitat.webp',
    alt: 'Grassy mound cottage with arched entrances',
    caption: 'Arched mound entrances',
  },
  {
    src: 'images/kakkadampoyil/organic-dome-house.webp',
    alt: 'Twin organic ferrocement dome house',
    caption: 'Organic dome house',
  },
  {
    src: 'images/kakkadampoyil/pool-dome-progress.webp',
    alt: 'Pool and dome structure under construction',
    caption: 'Pool & dome in progress',
  },
  {
    src: 'images/kakkadampoyil/pod-under-construction.webp',
    srcset: 'images/kakkadampoyil/pod-under-construction-800w.webp 800w, images/kakkadampoyil/pod-under-construction.webp 1400w',
    alt: 'Ferrocement pods under construction with an excavator on site',
    caption: 'Pods under construction',
  },
];

const BEHIND_THE_BUILD_GALLERY: LightboxItem[] = [
  {
    src: 'images/cottages/eco-cabins-construction.webp',
    alt: 'Hillside eco-cabins and arched pods under construction with a backhoe on site',
    caption: 'Hillside eco-cabins under construction',
  },
  {
    src: 'images/cottages/tunnel-construction.webp',
    srcset: 'images/cottages/tunnel-construction-800w.webp 800w, images/cottages/tunnel-construction.webp 1400w',
    alt: 'Row of arched ferrocement tunnel pods being built',
    caption: 'Arched tunnel pods',
  },
  {
    src: 'images/grotto/grotto-construction.webp',
    srcset: 'images/grotto/grotto-construction-800w.webp 800w, images/grotto/grotto-construction.webp 1400w',
    alt: 'Rock grotto shell being sculpted on site',
    caption: 'Grotto sculpting',
  },
  {
    src: 'images/pools/forest-pool-site.webp',
    alt: 'Forest pool excavation and reinforcement work',
    caption: 'Forest pool groundwork',
  },
  {
    src: 'images/farm/cow-house-inside.webp',
    srcset: 'images/farm/cow-house-inside-800w.webp 800w, images/farm/cow-house-inside.webp 1400w',
    alt: 'Interior of a vaulted ferrocement cattle shed',
    caption: 'Vaulted cattle shed interior',
  },
];

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { openLightbox } = useLightbox();

  // Read URL params on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const filter = params.get('filter');
      if (filter && FILTER_OPTIONS.some((opt) => opt.filter === filter)) {
        setActiveFilter(filter);
      }
    }
  }, []);

  const filteredProjects: ProjectCardItem[] =
    activeFilter === 'all'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ====== PAGE HERO ====== */}
      <section className="page-hero shell">
        <div className="page-hero-panel">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span aria-hidden="true">/</span>
            Projects
          </nav>
          <h1>Our Projects</h1>
          <p>
            Browse real ferrocement work from across South India — resort domes, swimming pools,
            cave houses, rock grottos and farm buildings.
          </p>
          <div className="page-hero-actions">
            <a href="contact.html" className="btn btn-dark">
              Request Free Consultation
              <svg
                className="btn-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7l10 10M17 7v10H7" />
              </svg>
            </a>
            <a href="#projects" className="btn btn-ghost">
              All Projects
              <svg
                className="btn-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="page-hero-media">
          <img
            srcSet="images/project/stilt-cottages-ferrocement-pods-800w.webp 800w, images/project/stilt-cottages-ferrocement-pods.webp 1672w"
            sizes="100vw"
            src="images/project/stilt-cottages-ferrocement-pods.webp"
            alt="Stilt cottages above ferrocement pods beside a resort pond"
            width={1672}
            height={941}
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </section>

      {/* ====== MARQUEE ====== */}
      <section className="marquee shell" aria-label="What we build">
        <div className="marquee-band">
          <div className="marquee-row" data-direction="-1">
            <div className="marquee-track">
              <span>Swimming Pools</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
              <span>Resort Cottages</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
              <span>Eco-Friendly Huts</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
              <span>Underground Houses</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
              <span>Farm Stay Buildings</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
              <span>Water Features</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
            </div>
          </div>
          <div className="marquee-row outline" data-direction="1">
            <div className="marquee-track">
              <span>Ferrocement Construction</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
              <span>Rock Art &amp; Grottos</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
              <span>Treehouses</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
              <span>A-Frame Structures</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
              <span>Landscape Works</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
              <span>Custom Buildings</span>
              <span className="marquee-sep" aria-hidden="true">
                &#10022;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SIGNATURE PROJECTS (ONGOING) ====== */}
      <section className="shell signature" id="ongoing">
        <div className="section-head split reveal">
          <div>
            <span className="section-label">Currently Building</span>
            <h2 className="section-title">Our Signature Projects</h2>
          </div>
          <p className="section-aside">
            Two of our largest ferrocement resort projects,{' '}
            <span>photographed on site as they take shape.</span>
          </p>
        </div>

        {/* Pulpally Resort, Wayanad */}
        <article className="panel signature-project reveal">
          <div className="signature-project-head">
            <div>
              <span className="signature-status">Ongoing Work</span>
              <h3>Pulpally Resort</h3>
              <p className="signature-location">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Pulpally, Wayanad
              </p>
            </div>
            <div className="signature-side">
              <p className="signature-desc">
                A resort village of double-curved ferrocement domes, from rebar mesh frames to
                finished pods with living green roofs.
              </p>
              <a href="project-pulpally.html" className="btn btn-dark btn-sm">
                View Case Study
                <svg
                  className="btn-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 7l10 10M17 7v10H7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="photo-gallery">
            {PULPALLY_GALLERY.map((img, idx) => (
              <figure
                key={idx}
                onClick={() => openLightbox(PULPALLY_GALLERY, idx)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={img.src}
                  srcSet={img.srcset}
                  sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                  width={idx === 0 ? 1600 : idx === 4 ? 1400 : 1050}
                  height={idx === 0 ? 1200 : idx === 4 ? 1050 : 1400}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption dangerouslySetInnerHTML={{ __html: img.caption }} />
              </figure>
            ))}
          </div>
        </article>

        {/* Kakkadampoyil */}
        <article className="panel dark signature-project reveal">
          <div className="signature-project-head">
            <div>
              <span className="signature-status">Ongoing Work</span>
              <h3>Kakkadampoyil Earth-Sheltered Retreat</h3>
              <p className="signature-location">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Kakkadampoyil, Kozhikode
              </p>
            </div>
            <div className="signature-side">
              <p className="signature-desc">
                Grass-roofed cottages, organic dome houses and a valley-view pool, set into the
                forested hills.
              </p>
              <a href="project-kakkadampoyil.html" className="btn btn-light btn-sm">
                View Case Study
                <svg
                  className="btn-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 7l10 10M17 7v10H7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="photo-gallery">
            {KAKKADAMPOYIL_GALLERY.map((img, idx) => (
              <figure
                key={idx}
                onClick={() => openLightbox(KAKKADAMPOYIL_GALLERY, idx)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={img.src}
                  srcSet={img.srcset}
                  sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                  width={idx === 4 ? 1400 : 1050}
                  height={idx === 4 ? 1050 : 1400}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </article>
      </section>

      {/* ====== ALL PROJECTS ====== */}
      <section className="shell" id="projects">
        <div className="section-head center reveal">
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">All Projects</h2>
        </div>

        <div className="projects-filter reveal">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.filter}
              type="button"
              className={`filter-btn ${activeFilter === opt.filter ? 'active' : ''}`}
              data-filter={opt.filter}
              onClick={() => setActiveFilter(opt.filter)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} delayIndex={idx} />
          ))}
        </div>
      </section>

      {/* ====== BEHIND THE BUILD ====== */}
      <section className="shell" id="behind-the-build">
        <div className="panel dark">
          <div className="section-head split reveal">
            <div>
              <span className="section-label">On Site</span>
              <h2 className="section-title">Behind the Build</h2>
            </div>
            <p className="section-aside">
              Every curve is shaped by hand —{' '}
              <span>mesh, mortar and craftsmanship before the finish goes on.</span>
            </p>
          </div>
          <div className="photo-gallery reveal">
            {BEHIND_THE_BUILD_GALLERY.map((img, idx) => (
              <figure
                key={idx}
                onClick={() => openLightbox(BEHIND_THE_BUILD_GALLERY, idx)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={img.src}
                  srcSet={img.srcset}
                  sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                  width={img.srcset ? 1400 : 1050}
                  height={img.srcset ? 788 : 1400}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
