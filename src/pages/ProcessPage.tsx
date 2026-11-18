import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FinalCta } from '../components/sections/FinalCta';

export const ProcessPage: React.FC = () => {
  useEffect(() => {
    const timeline = document.querySelector('.timeline') as HTMLElement;
    if (!timeline) return;

    const timelineSteps = Array.from(timeline.querySelectorAll('.timeline-step')) as HTMLElement[];

    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

    const handleScroll = () => {
      const vh = window.innerHeight;
      const r = timeline.getBoundingClientRect();
      timeline.style.setProperty('--tp', clamp((vh * 0.55 - r.top) / r.height, 0, 1).toFixed(3));
      timelineSteps.forEach((step) => {
        step.classList.toggle('is-active', step.getBoundingClientRect().top < vh * 0.55);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ====== PAGE HERO ====== */}
      <section className="page-hero simple shell">
        <div className="page-hero-panel">
          <Breadcrumbs items={[{ label: 'Our Process' }]} />
          <h1>Our Proven Process</h1>
          <p>
            A streamlined, transparent approach from concept to completion — keeping you informed
            and in control at every stage.
          </p>
          <ol className="hero-steps">
            <li>
              <a href="#step-1">
                <span>1</span>Consultation
              </a>
            </li>
            <li>
              <a href="#step-2">
                <span>2</span>Site Visit
              </a>
            </li>
            <li>
              <a href="#step-3">
                <span>3</span>Design &amp; Planning
              </a>
            </li>
            <li>
              <a href="#step-4">
                <span>4</span>Construction
              </a>
            </li>
            <li>
              <a href="#step-5">
                <span>5</span>Handover
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* ====== TIMELINE ====== */}
      <section className="shell" id="steps">
        <ol className="timeline">
          <li className="timeline-step" id="step-1">
            <div className="timeline-marker">
              <span>1</span>
            </div>
            <div className="timeline-card reveal">
              <div className="timeline-text">
                <span className="timeline-kicker">Step 01</span>
                <h2>Consultation</h2>
                <p>Free discussion to understand your vision, budget, and requirements.</p>
                <ul className="check-list">
                  <li>Share your idea, site photos and budget range</li>
                  <li>Learn what ferrocement can do for your project</li>
                  <li>Free, no-obligation advice</li>
                </ul>
              </div>
              <figure className="timeline-media">
                <img
                  srcSet="images/team/morning-briefing-800w.webp 800w, images/team/morning-briefing.webp 1400w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                  width="1400"
                  height="1050"
                  src="images/team/morning-briefing.webp"
                  alt="FERROGRID team discussing a project"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </li>

          <li className="timeline-step" id="step-2">
            <div className="timeline-marker">
              <span>2</span>
            </div>
            <div className="timeline-card reveal">
              <div className="timeline-text">
                <span className="timeline-kicker">Step 02</span>
                <h2>Site Visit</h2>
                <p>Our team visits your location to assess terrain and access conditions.</p>
                <ul className="check-list">
                  <li>Assessment of terrain, slope and soil</li>
                  <li>Access for materials and machinery</li>
                  <li>Water, drainage and site measurements</li>
                </ul>
              </div>
              <figure className="timeline-media">
                <img
                  srcSet="images/pulpally/site-progress-800w.webp 800w, images/pulpally/site-progress.webp 1400w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                  width="1400"
                  height="1050"
                  src="images/pulpally/site-progress.webp"
                  alt="Wide view of a FERROGRID project site"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </li>

          <li className="timeline-step" id="step-3">
            <div className="timeline-marker">
              <span>3</span>
            </div>
            <div className="timeline-card reveal">
              <div className="timeline-text">
                <span className="timeline-kicker">Step 03</span>
                <h2>Design &amp; Planning</h2>
                <p>Custom designs, layout, and detailed 3D renderings.</p>
                <ul className="check-list">
                  <li>Custom design shaped to your site</li>
                  <li>Layout and detailed 3D renderings</li>
                  <li>Agreed scope before work begins</li>
                </ul>
              </div>
              <figure className="timeline-media">
                <img
                  width="1050"
                  height="1400"
                  src="images/kakkadampoyil/organic-dome-house.webp"
                  alt="Organic ferrocement dome house design"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </li>

          <li className="timeline-step" id="step-4">
            <div className="timeline-marker">
              <span>4</span>
            </div>
            <div className="timeline-card reveal">
              <div className="timeline-text">
                <span className="timeline-kicker">Step 04</span>
                <h2>Construction</h2>
                <p>Expert execution by trained ferrocement specialists.</p>
                <ul className="check-list">
                  <li>Steel framework and layers of wire mesh</li>
                  <li>Hand-plastered ferrocement shell</li>
                  <li>Finishing — tiles, textures or green roofs</li>
                </ul>
              </div>
              <figure className="timeline-media">
                <img
                  width="1050"
                  height="1400"
                  src="images/pulpally/pod-construction.webp"
                  alt="Ferrocement pod under construction"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </li>

          <li className="timeline-step" id="step-5">
            <div className="timeline-marker">
              <span>5</span>
            </div>
            <div className="timeline-card reveal">
              <div className="timeline-text">
                <span className="timeline-kicker">Step 05</span>
                <h2>Handover</h2>
                <p>Final inspection, quality certification, and site walkthrough.</p>
                <ul className="check-list">
                  <li>Final inspection</li>
                  <li>Quality certification</li>
                  <li>Site walkthrough with your team</li>
                </ul>
              </div>
              <figure className="timeline-media">
                <img
                  srcSet="images/hero1-800w.webp 800w, images/hero1.webp 1448w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                  width="1448"
                  height="1086"
                  src="images/hero1.webp"
                  alt="Finished grass-roofed ferrocement cottage"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </li>
        </ol>
      </section>

      {/* ====== BEFORE YOU CALL ====== */}
      <section className="shell" id="prepare">
        <div className="panel dark prepare">
          <div className="reveal">
            <span className="section-label">Before You Call</span>
            <h2 className="section-title">Details that help us quote faster</h2>
            <p className="prepare-text">
              Share whatever you have — rough ideas are fine. The more we know, the more useful our
              first conversation will be.
            </p>
            <div className="prepare-actions">
              <a href="contact.html#inquiryForm" className="btn btn-light">
                Send Project Details
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
              <a
                href="https://wa.me/916235029900"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <ul className="prepare-list reveal">
            <li>
              <strong>Project type</strong>
              <span>Pool, cottage, hut, underground space…</span>
            </li>
            <li>
              <strong>Location</strong>
              <span>City, state and site access</span>
            </li>
            <li>
              <strong>Size</strong>
              <span>Rough dimensions or number of units</span>
            </li>
            <li>
              <strong>Timeline</strong>
              <span>When you would like to start</span>
            </li>
            <li>
              <strong>Budget range</strong>
              <span>An approximate figure helps</span>
            </li>
            <li>
              <strong>Special requirements</strong>
              <span>Photos, sketches or references</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="shell" id="faq">
        <div className="faq-layout">
          <div className="section-head reveal">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common questions</h2>
            <p>
              Can't find your answer? <a href="contact.html">Contact our team</a> — we respond within
              24 hours.
            </p>
          </div>
          <div className="faq-list reveal">
            <details className="faq-item">
              <summary>
                Is the first consultation really free?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>Yes. The first consultation is free and comes with no obligation.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Do you work outside Kerala?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Yes. We currently build across Kerala, Karnataka and Tamil Nadu, and we are
                  expanding pan-India and internationally. Get in touch wherever your site is.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                How much does a project cost?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Every project is priced individually. The cost depends on your land (slope, soil
                  and access), the type and size of the structure, and the finishes you choose.
                  Share your site details for a free consultation and quote.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                How long does a project take?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  It depends on the type and size of the structure, site access and finishes. We
                  share a clear timeline once the site visit and design are complete.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Do you provide designs and 3D renderings?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Yes. Our design and planning stage includes custom designs, layouts and detailed
                  3D renderings.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                How do I get a quote?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Send your project details through our contact form, call 062350 29900 or message
                  us on WhatsApp. We respond within 24 hours.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <FinalCta />
    </>
  );
};
