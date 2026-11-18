import React from 'react';
import { ProjectCarousel } from '@/components/common/ProjectCarousel';
import { FinalCta } from '@/components/sections/FinalCta';
import { useLightbox } from '@/lib/lightboxContext';
import { LightboxItem } from '@/types';

const PULPALLY_GALLERY: LightboxItem[] = [
  {
    src: 'images/pulpally/domes-aerial.webp',
    srcset: 'images/pulpally/domes-aerial-800w.webp 800w, images/pulpally/domes-aerial.webp 1600w',
    alt: 'Dome cluster taking shape',
    caption: 'Dome cluster taking shape',
  },
  {
    src: 'images/pulpally/green-roof-earthworks.webp',
    alt: 'Green-roofed domes',
    caption: 'Green-roofed domes',
  },
  {
    src: 'images/pulpally/pod-construction.webp',
    alt: 'Pod shell & openings',
    caption: 'Pod shell & openings',
  },
  {
    src: 'images/pulpally/rebar-progress.webp',
    alt: 'Rebar framework',
    caption: 'Rebar framework',
  },
  {
    src: 'images/pulpally/site-progress.webp',
    srcset: 'images/pulpally/site-progress-800w.webp 800w, images/pulpally/site-progress.webp 1400w',
    alt: 'Site overview',
    caption: 'Site overview',
  },
  {
    src: 'images/pulpally/eco-dome-site.webp',
    alt: 'Domes before plastering',
    caption: 'Domes before plastering',
  },
  {
    src: 'images/hero1.webp',
    srcset: 'images/hero1-800w.webp 800w, images/hero1.webp 1448w',
    alt: 'Finished dome cottage',
    caption: 'Finished dome cottage',
  },
  {
    src: 'images/projects/pulpally_site.jpeg',
    alt: 'Round doorway detail',
    caption: 'Round doorway detail',
  },
];

export const ProjectPulpallyPage: React.FC = () => {
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
            Pulpally Resort
          </nav>
          <div className="case-title-row">
            <h1>Pulpally Resort</h1>
            <span className="signature-status">Ongoing Work</span>
          </div>
        </div>
        <div className="page-hero-media">
          <img
            srcSet="images/pulpally/domes-aerial-800w.webp 800w, images/pulpally/domes-aerial.webp 1600w"
            sizes="100vw"
            width={1600}
            height={1200}
            src="images/pulpally/domes-aerial.webp"
            alt="Aerial view of ferrocement eco-domes taking shape at the Pulpally Resort site"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <dl className="case-facts">
          <div>
            <dt>Location</dt>
            <dd>Pulpally, Wayanad</dd>
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
            <dd>Eco-domes &amp; green-roof pods</dd>
          </div>
        </dl>
      </section>

      {/* ====== OVERVIEW ====== */}
      <section className="shell" id="overview">
        <div className="split align-start">
          <div className="reveal">
            <span className="section-label">The Project</span>
            <h2 className="section-title">A resort village of ferrocement domes</h2>
          </div>
          <div className="split-content reveal">
            <p className="lead-text">
              The Pulpally Resort is one of FERROGRID’s largest ongoing projects — a resort village
              of double-curved ferrocement eco-domes at Pulpally in Wayanad.
            </p>
            <p>
              Each dome starts as a steel rebar framework, is wrapped in layers of wire mesh and
              hand-plastered into a seamless shell. Finished pods are covered with a living green
              roof, so the village settles into the landscape.
            </p>
            <ul className="check-list">
              <li>Double-curved dome cottages</li>
              <li>Rebar and wire-mesh frameworks</li>
              <li>Hand-plastered ferrocement shells</li>
              <li>Living green-roof finish</li>
            </ul>
            <p className="case-service-link">
              Part of our <a href="service-resort-cottages.html">Resort Cottages</a> work — see{' '}
              <a href="ferrocement.html">how ferrocement is made</a>.
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
                width={1050}
                height={1400}
                src="images/pulpally/rebar-progress.webp"
                alt="Rebar framework"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="journey-step">Stage 01</span>
                <strong>Rebar framework</strong>
                Steel rods are bent and tied into the skeleton of each dome.
              </figcaption>
            </figure>
            <figure className="journey-card">
              <img
                width={1050}
                height={1400}
                src="images/pulpally/pod-construction.webp"
                alt="Mesh & openings"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="journey-step">Stage 02</span>
                <strong>Mesh &amp; openings</strong>
                Wire mesh is wrapped over the frame and round openings are formed.
              </figcaption>
            </figure>
            <figure className="journey-card">
              <img
                width={1050}
                height={1400}
                src="images/pulpally/eco-dome-site.webp"
                alt="Dome cluster"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="journey-step">Stage 03</span>
                <strong>Dome cluster</strong>
                Pods take shape across the site, ready for plastering.
              </figcaption>
            </figure>
            <figure className="journey-card">
              <img
                width={1050}
                height={1400}
                src="images/pulpally/green-roof-earthworks.webp"
                alt="Green-roof finish"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="journey-step">Stage 04</span>
                <strong>Green-roof finish</strong>
                Finished shells are covered with earth and planted with grass.
              </figcaption>
            </figure>
            <figure className="journey-card">
              <img
                srcSet="images/hero1-800w.webp 800w, images/hero1.webp 1448w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width={1448}
                height={1086}
                src="images/hero1.webp"
                alt="Finished cottage"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="journey-step">Stage 05</span>
                <strong>Finished cottage</strong>
                A completed dome with its sculpted round doorway.
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
            8 photos — <span>tap any to view it full screen.</span>
          </p>
        </div>
        <div className="photo-gallery count-8 reveal">
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
                width={idx === 0 ? 1600 : idx === 4 || idx === 6 ? 1400 : 1050}
                height={idx === 0 ? 1200 : idx === 4 || idx === 6 ? 1050 : 1400}
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
        <a href="project-kakkadampoyil.html" className="next-project">
          <img
            width={1050}
            height={1400}
            src="images/kakkadampoyil/earth-sheltered-retreat.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="next-project-info">
            <div>
              <span className="next-project-label">Next Project &middot; Kakkadampoyil, Kozhikode</span>
              <h2>Kakkadampoyil Earth-Sheltered Retreat</h2>
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
