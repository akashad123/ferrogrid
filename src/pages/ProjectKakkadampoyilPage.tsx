import React from 'react';
import { ProjectCarousel } from '@/components/common/ProjectCarousel';
import { FinalCta } from '@/components/sections/FinalCta';
import { useLightbox } from '@/lib/lightboxContext';
import { LightboxItem } from '@/types';

const KAKKADAMPOYIL_GALLERY: LightboxItem[] = [
  {
    src: 'images/kakkadampoyil/earth-sheltered-retreat.webp',
    alt: 'Earth-sheltered cottages',
    caption: 'Earth-sheltered cottages',
  },
  {
    src: 'images/kakkadampoyil/pool-and-cottage.webp',
    srcset: 'images/kakkadampoyil/pool-and-cottage-800w.webp 800w, images/kakkadampoyil/pool-and-cottage.webp 1400w',
    alt: 'Valley-view pool',
    caption: 'Valley-view pool',
  },
  {
    src: 'images/kakkadampoyil/grassy-mound-habitat.webp',
    alt: 'Arched mound entrances',
    caption: 'Arched mound entrances',
  },
  {
    src: 'images/kakkadampoyil/organic-dome-house.webp',
    alt: 'Organic dome house',
    caption: 'Organic dome house',
  },
  {
    src: 'images/kakkadampoyil/pool-dome-progress.webp',
    alt: 'Pool & dome in progress',
    caption: 'Pool & dome in progress',
  },
  {
    src: 'images/kakkadampoyil/pod-under-construction.webp',
    srcset: 'images/kakkadampoyil/pod-under-construction-800w.webp 800w, images/kakkadampoyil/pod-under-construction.webp 1400w',
    alt: 'Pods under construction',
    caption: 'Pods under construction',
  },
];

export const ProjectKakkadampoyilPage: React.FC = () => {
  const { openLightbox } = useLightbox();

  return (
    <>
      {/* ====== PAGE HERO (case study) ====== */}
      <section className="page-hero case shell">
        <div className="case-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span aria-hidden="true">/</span>
            <a href="projects.html">Projects</a>
            <span aria-hidden="true">/</span>
            Kakkadampoyil Retreat
          </nav>
          <div className="case-title-row">
            <h1>Kakkadampoyil Earth-Sheltered Retreat</h1>
            <span className="signature-status">Ongoing Work</span>
          </div>
        </div>
        <div className="page-hero-media">
          <img
            src="images/kakkadampoyil/earth-sheltered-retreat.webp"
            sizes="100vw"
            width={1050}
            height={1400}
            alt="Grass-covered earth-sheltered cottages in a forest valley, Kakkadampoyil"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <dl className="case-facts">
          <div>
            <dt>Location</dt>
            <dd>Kakkadampoyil, Kozhikode</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>Resort Cottages</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Ongoing</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>Earth-sheltered cottages &amp; valley pool</dd>
          </div>
        </dl>
      </section>

      {/* ====== OVERVIEW ====== */}
      <section className="shell" id="overview">
        <div className="split align-start">
          <div className="reveal">
            <span className="section-label">The Project</span>
            <h2 className="section-title">Built into the misty hills of Kakkadampoyil</h2>
          </div>
          <div className="split-content reveal">
            <p className="lead-text">
              At Kakkadampoyil, Kozhikode, FERROGRID is building an earth-sheltered resort retreat —
              grass-roofed cottages, organic dome houses and a freeform swimming pool looking out over
              the valley.
            </p>
            <p>
              By shaping the structures in ferrocement and banking them into the natural slope, the
              buildings keep comfortable indoor temperatures and preserve the skyline of the hill.
            </p>
            <ul className="check-list">
              <li>Earth-sheltered cottage suites</li>
              <li>Organic twin dome houses</li>
              <li>Freeform valley-view pool</li>
              <li>Living green turf roofs</li>
            </ul>
            <p className="case-service-link">
              Explore our <a href="service-resort-cottages.html">Resort Cottages</a> and{' '}
              <a href="service-swimming-pools.html">Swimming Pools</a> services.
            </p>
          </div>
        </div>
      </section>

      {/* ====== CONSTRUCTION JOURNEY ====== */}
      <section className="shell" id="journey">
        <div className="panel dark journey">
          <div className="section-head split reveal">
            <div>
              <span className="section-label">Construction Journey</span>
              <h2 className="section-title">How it's taking shape</h2>
            </div>
            <p className="section-aside">
              Drag or use the arrows — <span>each stage photographed on site.</span>
            </p>
          </div>

          <ProjectCarousel>
            <figure className="journey-card">
              <img
                srcSet="images/kakkadampoyil/pod-under-construction-800w.webp 800w, images/kakkadampoyil/pod-under-construction.webp 1400w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width={1400}
                height={1050}
                src="images/kakkadampoyil/pod-under-construction.webp"
                alt="Pods on site"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="journey-step">Stage 01</span>
                <strong>Pods on site</strong>
                Ferrocement pods are formed and plastered on the hillside.
              </figcaption>
            </figure>
            <figure className="journey-card">
              <img
                width={1050}
                height={1400}
                src="images/kakkadampoyil/pool-dome-progress.webp"
                alt="Pool & dome"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="journey-step">Stage 02</span>
                <strong>Pool &amp; dome</strong>
                The pool shell and its dome structure rise together.
              </figcaption>
            </figure>
            <figure className="journey-card">
              <img
                width={1050}
                height={1400}
                src="images/kakkadampoyil/organic-dome-house.webp"
                alt="Organic dome houses"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="journey-step">Stage 03</span>
                <strong>Organic dome houses</strong>
                Twin domes with porthole windows and arched doorways.
              </figcaption>
            </figure>
            <figure className="journey-card">
              <img
                width={1050}
                height={1400}
                src="images/kakkadampoyil/grassy-mound-habitat.webp"
                alt="Grass cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="journey-step">Stage 04</span>
                <strong>Grass cover</strong>
                Earth and grass are laid over the shells.
              </figcaption>
            </figure>
            <figure className="journey-card">
              <img
                width={1050}
                height={1400}
                src="images/kakkadampoyil/earth-sheltered-retreat.webp"
                alt="Into the landscape"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="journey-step">Stage 05</span>
                <strong>Into the landscape</strong>
                The cottages settle into the forested valley.
              </figcaption>
            </figure>
          </ProjectCarousel>

          <div className="featured-footer">
            <a href="contact.html" className="btn btn-light">
              Plan a Similar Project
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
      </section>

      {/* ====== GALLERY ====== */}
      <section className="shell" id="gallery">
        <div className="section-head split reveal">
          <div>
            <span className="section-label">Gallery</span>
            <h2 className="section-title">Photos from site</h2>
          </div>
          <p className="section-aside">
            6 photos — <span>tap any to view it full screen.</span>
          </p>
        </div>
        <div className="photo-gallery count-6 reveal">
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
                width={idx === 1 || idx === 5 ? 1400 : 1050}
                height={idx === 1 || idx === 5 ? 1050 : 1400}
                alt={img.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ====== NEXT PROJECT ====== */}
      <section className="shell" id="next">
        <a href="project-pulpally.html" className="next-project">
          <img
            srcSet="images/pulpally/domes-aerial-800w.webp 800w, images/pulpally/domes-aerial.webp 1600w"
            sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
            width={1600}
            height={1200}
            src="images/pulpally/domes-aerial.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="next-project-info">
            <div>
              <span className="next-project-label">Next Project &middot; Pulpally, Wayanad</span>
              <h2>Pulpally Resort</h2>
            </div>
            <span className="round-btn" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 7l10 10M17 7v10H7" />
              </svg>
            </span>
          </div>
        </a>
      </section>

      {/* ====== FINAL CTA ====== */}
      <FinalCta />
    </>
  );
};
