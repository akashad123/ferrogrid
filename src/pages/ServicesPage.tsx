import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FinalCta } from '../components/sections/FinalCta';

export const ServicesPage: React.FC = () => {
  return (
    <>
      {/* ====== PAGE HERO (photo mosaic) ====== */}
      <section className="page-hero shell">
        <div className="page-hero-panel">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <h1>Our Services</h1>
          <p>
            From swimming pools to resort cottages and underground spaces, we design and build
            ferrocement structures for resorts, homestays, and property developers.
          </p>
          <div className="page-hero-actions">
            <a href="contact.html" className="btn btn-dark">
              Get Free Consultation
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
            <a href="#all-services" className="btn btn-ghost">
              Browse Services
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

        <div className="page-hero-media mosaic">
          <figure>
            <img
              srcSet="images/pools/infinity-pool-retreat-800w.webp 800w, images/pools/infinity-pool-retreat.webp 1400w"
              sizes="100vw"
              width="1400"
              height="788"
              src="images/pools/infinity-pool-retreat.webp"
              alt="Ferrocement infinity-edge pool"
              fetchpriority="high"
              decoding="async"
            />
          </figure>
          <figure>
            <img
              width="1050"
              height="1400"
              src="images/kakkadampoyil/organic-dome-house.webp"
              alt="Organic ferrocement dome house"
              decoding="async"
            />
          </figure>
          <figure>
            <img
              srcSet="images/grotto/carved-stone-grotto-800w.webp 800w, images/grotto/carved-stone-grotto.webp 1400w"
              sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
              width="1400"
              height="788"
              src="images/grotto/carved-stone-grotto.webp"
              alt="Carved ferrocement rock grotto"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      {/* ====== ALL SERVICES ====== */}
      <section className="shell" id="all-services">
        <div className="section-head split reveal">
          <div>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Six specialities, one material</h2>
          </div>
          <p className="section-aside">
            Every service is built in ferrocement —
            <span>thin, strong shells shaped to your design.</span>
          </p>
        </div>

        <div className="service-rows">
          <article className="service-row reveal">
            <a
              href="service-swimming-pools.html"
              className="service-row-media"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                srcSet="images/pools/infinity-pool-retreat-800w.webp 800w, images/pools/infinity-pool-retreat.webp 1400w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1400"
                height="788"
                src="images/pools/infinity-pool-retreat.webp"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="service-row-num">01</span>
            </a>
            <div className="service-row-body">
              <h3>Swimming Pools</h3>
              <p>
                Custom ferrocement pools with seamless curves, waterproof strength, and 50+ year
                durability.
              </p>
              <ul className="check-list">
                <li>Infinity-edge pools</li>
                <li>Freeform &amp; natural pools</li>
                <li>Courtyard &amp; mosaic-tile pools</li>
              </ul>
              <a href="service-swimming-pools.html" className="btn btn-dark">
                Explore Swimming Pools
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
          </article>

          <article className="service-row reveal">
            <a
              href="service-resort-cottages.html"
              className="service-row-media"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                srcSet="images/cottages/hillside-eco-cabins-800w.webp 800w, images/cottages/hillside-eco-cabins.webp 1400w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1400"
                height="1032"
                src="images/cottages/hillside-eco-cabins.webp"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="service-row-num">02</span>
            </a>
            <div className="service-row-body">
              <h3>Resort Cottages</h3>
              <p>
                Organic-shaped cottages for eco-resorts, homestays, and boutique hospitality
                projects.
              </p>
              <ul className="check-list">
                <li>Dome cottages</li>
                <li>Earth-sheltered &amp; green-roof pods</li>
                <li>Cave-style cottages</li>
              </ul>
              <a href="service-resort-cottages.html" className="btn btn-dark">
                Explore Resort Cottages
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
          </article>

          <article className="service-row reveal">
            <a
              href="service-eco-friendly-huts.html"
              className="service-row-media"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                srcSet="images/hero1-800w.webp 800w, images/hero1.webp 1448w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1448"
                height="1086"
                src="images/hero1.webp"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="service-row-num">03</span>
            </a>
            <div className="service-row-body">
              <h3>Eco-Friendly Huts</h3>
              <p>
                Sustainable huts for eco-tourism, farm stays, and glamping retreats that blend with
                nature.
              </p>
              <ul className="check-list">
                <li>Green-roof domes</li>
                <li>Mud-packed eco-houses</li>
                <li>Glamping pods</li>
              </ul>
              <a href="service-eco-friendly-huts.html" className="btn btn-dark">
                Explore Eco-Friendly Huts
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
          </article>

          <article className="service-row reveal">
            <a
              href="service-underground-houses.html"
              className="service-row-media"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                srcSet="images/project/ferrocement-underground-cave-entrance-800w.webp 800w, images/project/ferrocement-underground-cave-entrance.webp 1448w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1448"
                height="1086"
                src="images/project/ferrocement-underground-cave-entrance.webp"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="service-row-num">04</span>
            </a>
            <div className="service-row-body">
              <h3>Underground Houses</h3>
              <p>
                Underground houses, cave huts, waterproof cellars and bunkers built with high-strength
                ferrocement.
              </p>
              <ul className="check-list">
                <li>Underground houses &amp; cave huts</li>
                <li>Wine cellars &amp; storage units</li>
                <li>Waterproof bunkers</li>
              </ul>
              <a href="service-underground-houses.html" className="btn btn-dark">
                Explore Underground Houses
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
          </article>

          <article className="service-row reveal">
            <a
              href="service-farm-stay-buildings.html"
              className="service-row-media"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                srcSet="images/farm/cow-house-left-800w.webp 800w, images/farm/cow-house-left.webp 1400w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1400"
                height="1050"
                src="images/farm/cow-house-left.webp"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="service-row-num">05</span>
            </a>
            <div className="service-row-body">
              <h3>Farm Stay Buildings</h3>
              <p>
                Weather-resistant structures designed for agricultural tourism, plantations, and
                rural landscapes.
              </p>
              <ul className="check-list">
                <li>Farm stay guest cottages</li>
                <li>Vaulted cattle sheds</li>
                <li>Water storage tanks</li>
              </ul>
              <a href="service-farm-stay-buildings.html" className="btn btn-dark">
                Explore Farm Stay Buildings
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
          </article>

          <article className="service-row reveal">
            <a
              href="service-water-features.html"
              className="service-row-media"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                srcSet="images/grotto/carved-stone-grotto-800w.webp 800w, images/grotto/carved-stone-grotto.webp 1400w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1400"
                height="788"
                src="images/grotto/carved-stone-grotto.webp"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="service-row-num">06</span>
            </a>
            <div className="service-row-body">
              <h3>Water Features</h3>
              <p>
                Custom waterfalls, ponds, fountains, and water elements that elevate resort and
                landscape environments.
              </p>
              <ul className="check-list">
                <li>Waterfalls &amp; cascades</li>
                <li>Ponds &amp; plunge pools</li>
                <li>Fountains</li>
              </ul>
              <a href="service-water-features.html" className="btn btn-dark">
                Explore Water Features
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
          </article>
        </div>
      </section>

      {/* ====== MORE WORKS ====== */}
      <section className="shell" id="more-works">
        <div className="panel dark">
          <div className="section-head split reveal">
            <div>
              <span className="section-label">Also On Our List</span>
              <h2 className="section-title">More ferrocement works</h2>
            </div>
            <p className="section-aside">
              Beyond our six core services,
              <span>we also build these for resorts, homes and farms.</span>
            </p>
          </div>
          <div className="reveal">
            <ul className="chips">
              <li className="chip">Pool villas</li>
              <li className="chip">Treehouses</li>
              <li className="chip">Pillar houses</li>
              <li className="chip">Artistic works</li>
              <li className="chip">Designed compound walls</li>
              <li className="chip">Water storage tanks</li>
              <li className="chip">Rainwater harvesting systems</li>
              <li className="chip">Biogas plants</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====== PROCESS ====== */}
      <section className="process shell" id="process">
        <div className="section-head split reveal">
          <div>
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Proven Process</h2>
          </div>
          <p className="section-aside">
            A streamlined, transparent approach from concept to completion —
            <span>keeping you informed and in control at every stage.</span>
          </p>
        </div>

        <ol className="process-steps">
          <li className="process-step reveal" style={{ transitionDelay: '0.05s' }}>
            <span className="step-num">1</span>
            <h3>Consultation</h3>
            <p>Free discussion to understand your vision, budget, and requirements.</p>
          </li>
          <li className="process-step reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="step-num">2</span>
            <h3>Site Visit</h3>
            <p>Our team visits your location to assess terrain and access conditions.</p>
          </li>
          <li className="process-step reveal" style={{ transitionDelay: '0.15s' }}>
            <span className="step-num">3</span>
            <h3>Design &amp; Planning</h3>
            <p>Custom designs, layout, and detailed 3D renderings.</p>
          </li>
          <li className="process-step reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="step-num">4</span>
            <h3>Construction</h3>
            <p>Expert execution by trained ferrocement specialists.</p>
          </li>
          <li className="process-step reveal" style={{ transitionDelay: '0.25s' }}>
            <span className="step-num">5</span>
            <h3>Handover</h3>
            <p>Final inspection, quality certification, and site walkthrough.</p>
          </li>
        </ol>

        <div className="center-cta reveal">
          <a href="process.html" className="btn btn-ghost">
            See Our Full Process
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
      </section>

      {/* ====== FAQ ====== */}
      <section className="shell" id="faq">
        <div className="faq-layout">
          <div className="section-head reveal">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Choosing the right service</h2>
            <p>
              Can't find your answer? <a href="contact.html">Contact our team</a> — we respond within
              24 hours.
            </p>
          </div>
          <div className="faq-list reveal">
            <details className="faq-item">
              <summary>
                Which service is right for my property?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Tell us about your site, your guests and your budget during the free consultation
                  and we will suggest the best options — often a combination, such as cottages with a
                  pool or a water feature.
                </p>
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
                Can you combine several services in one project?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Yes. Our Kakkadampoyil project combines earth-sheltered cottages, dome houses and a
                  swimming pool on one site, built by the same team.
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
