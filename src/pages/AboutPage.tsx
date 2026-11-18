import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BrandsMarquee } from '../components/sections/BrandsMarquee';
import { FinalCta } from '../components/sections/FinalCta';
import { CONTACT_INFO } from '../../src/data/navigationData';

export const AboutPage: React.FC = () => {
  return (
    <>
      {/* ====== PAGE HERO (statement) ====== */}
      <section className="page-hero statement shell">
        <div className="page-hero-panel">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <div className="statement-head">
            <h1>About FERROGRID</h1>
            <div className="statement-side">
              <p>
                We are a specialized ferrocement construction company providing innovative, durable,
                and cost-effective construction solutions for residential, commercial, and customized
                projects.
              </p>
              <div className="page-hero-actions">
                <a href="services.html" className="btn btn-dark">
                  Our Services
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
                <a href="contact.html" className="btn btn-ghost">
                  Contact Us
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
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className="shell">
        <div className="panel dark stats-band">
          <div className="stat-item reveal">
            <span className="stat-number" data-count="50" data-suffix="+">
              50+
            </span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '0.08s' }}>
            <span className="stat-number" data-count="26" data-suffix="+">
              26+
            </span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '0.16s' }}>
            <span className="stat-number" data-count="3" data-suffix="+">
              3+
            </span>
            <span className="stat-label">States Covered</span>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '0.24s' }}>
            <span className="stat-number" data-count="98" data-suffix="%">
              98%
            </span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </section>

      {/* ====== STORY ====== */}
      <section className="shell" id="story">
        <div className="split">
          <figure className="split-media">
            <img
              width="1050"
              height="1400"
              src="images/grotto/earthen-room-window.webp"
              alt="FERROGRID craftsman hand-finishing a sculpted ferrocement wall with a circular window"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="split-content reveal">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Specialized Ferrocement Construction Company</h2>
            <p className="lead-text">
              We responsibly undertake a wide range of ferro-cement works inside and outside Kerala
              for resorts and homestays.
            </p>
            <p>
              Our work includes ferro-cement underground cave houses, underground DJ/multipurpose
              auditoriums, mud-packed eco-houses, pillar houses, A-frame and semi-A-frame
              structures, treehouses, swimming pools, pool villas, artistic works, designed
              compound walls, water storage tanks, rainwater harvesting systems, and biogas plants.
            </p>
            <p>
              Our expertise in ferrocement construction allows us to create lightweight, economical,
              and flexible designs in almost any shape or structure according to customer
              requirements. We focus on quality workmanship, modern construction techniques,
              affordability, and sustainable building solutions while delivering reliable
              structures.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHAT WE BUILD ====== */}
      <section className="shell" id="what-we-build">
        <div className="panel">
          <div className="section-head split reveal">
            <div>
              <span className="section-label">What We Build</span>
              <h2 className="section-title">One material, endless possibilities</h2>
            </div>
            <p className="section-aside">
              Ferro-cement works for resorts and homestays —
              <span>inside and outside Kerala.</span>
            </p>
          </div>
          <div className="reveal">
            <ul className="chips">
              <li className="chip">Underground cave houses</li>
              <li className="chip">Underground DJ / multipurpose auditoriums</li>
              <li className="chip">Mud-packed eco-houses</li>
              <li className="chip">Pillar houses</li>
              <li className="chip">A-frame &amp; semi-A-frame structures</li>
              <li className="chip">Treehouses</li>
              <li className="chip">Swimming pools</li>
              <li className="chip">Pool villas</li>
              <li className="chip">Artistic works</li>
              <li className="chip">Designed compound walls</li>
              <li className="chip">Water storage tanks</li>
              <li className="chip">Rainwater harvesting systems</li>
              <li className="chip">Biogas plants</li>
            </ul>
          </div>
          <div className="center-cta reveal">
            <a href="services.html" className="btn btn-dark">
              Explore Our Services
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

      {/* ====== VALUES ====== */}
      <section className="shell" id="values">
        <div className="section-head center reveal">
          <span className="section-label">Our Approach</span>
          <h2 className="section-title">What we stand for</h2>
        </div>
        <div className="benefit-grid four">
          <div className="benefit-card reveal" style={{ transitionDelay: '0.05s' }}>
            <span className="benefit-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z" />
              </svg>
            </span>
            <h3>Quality Workmanship</h3>
            <p>Skilled ferrocement craftsmen and careful finishing on every structure we build.</p>
          </div>
          <div className="benefit-card reveal" style={{ transitionDelay: '0.12s' }}>
            <span className="benefit-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8" />
              </svg>
            </span>
            <h3>Modern Techniques</h3>
            <p>Proven ferrocement methods supported by our own modern machinery.</p>
          </div>
          <div className="benefit-card reveal" style={{ transitionDelay: '0.19s' }}>
            <span className="benefit-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="6" width="18" height="13" rx="2" />
                <path d="M3 10h18M16 14.5h2" />
              </svg>
            </span>
            <h3>Affordability</h3>
            <p>Lightweight, economical designs that make the most of your budget.</p>
          </div>
          <div className="benefit-card reveal" style={{ transitionDelay: '0.26s' }}>
            <span className="benefit-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
                <path d="M5 19l8-8" />
              </svg>
            </span>
            <h3>Sustainability</h3>
            <p>Less material, natural forms and green roofs that sit lightly on the land.</p>
          </div>
        </div>
      </section>

      {/* ====== TEAM & MACHINERY ====== */}
      <section className="shell" id="fleet">
        <div className="panel fleet">
          <div className="section-head split reveal">
            <div>
              <span className="section-label">Our Strength</span>
              <h2 className="section-title">Our Own Team &amp; Machinery</h2>
            </div>
            <p className="section-aside">
              FERROGRID-owned trucks, backhoe and goods carriers
              <span>keep materials and equipment moving to even the most remote resort sites.</span>
            </p>
          </div>
          <div className="fleet-grid">
            <figure className="fleet-item reveal" style={{ transitionDelay: '0.05s' }}>
              <img
                src="images/team/fleet-truck.webp"
                alt="FERROGRID-branded Eicher truck with a backhoe on site"
                width="900"
                height="1200"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Heavy Transport</figcaption>
            </figure>
            <figure className="fleet-item reveal" style={{ transitionDelay: '0.15s' }}>
              <img
                src="images/team/jcb-backhoe.webp"
                alt="FERROGRID JCB backhoe loader at a construction site"
                width="900"
                height="1200"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Excavation &amp; Earthworks</figcaption>
            </figure>
            <figure className="fleet-item reveal" style={{ transitionDelay: '0.25s' }}>
              <img
                src="images/team/goods-carrier.webp"
                alt="FERROGRID goods carrier pickup truck"
                width="900"
                height="1200"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Material Delivery</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ====== AT A GLANCE ====== */}
      <section className="shell" id="facts">
        <div className="panel glance">
          <div className="reveal">
            <span className="section-label">At a Glance</span>
            <h2 className="section-title">FERROGRID in brief</h2>
            <dl className="facts-list">
              <div>
                <dt>Company</dt>
                <dd>FERROGRID</dd>
              </div>
              <div>
                <dt>Speciality</dt>
                <dd>Ferrocement construction</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>26+ years, 50+ projects</dd>
              </div>
              <div>
                <dt>Head office</dt>
                <dd>Sultan Bathery, Wayanad, Kerala</dd>
              </div>
              <div>
                <dt>Serving</dt>
                <dd>Kerala, Karnataka and Tamil Nadu — expanding pan-India and internationally</dd>
              </div>
              <div>
                <dt>Builds</dt>
                <dd>
                  Swimming pools, resort cottages &amp; domes, underground houses, eco huts, farm
                  buildings, waterfalls &amp; grottos
                </dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>
                  <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a> ·{' '}
                  <a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="reveal">
            <span className="section-label">Areas We Serve</span>
            <h2 className="section-title">Where we build</h2>
            <p className="glance-text">
              We currently build across Kerala, Karnataka and Tamil Nadu, and we are expanding pan-India
              and internationally. Places where we have built include:
            </p>
            <div className="area-groups">
              <div className="area-group">
                <h3>Kerala</h3>
                <ul className="chips">
                  <li className="chip">Wayanad</li>
                  <li className="chip">Pulpally</li>
                  <li className="chip">Sultan Bathery</li>
                  <li className="chip">Kakkadampoyil, Kozhikode</li>
                  <li className="chip">Munnar</li>
                  <li className="chip">Thrissur</li>
                </ul>
              </div>
              <div className="area-group">
                <h3>Karnataka</h3>
                <ul className="chips">
                  <li className="chip">Coorg</li>
                </ul>
              </div>
              <div className="area-group">
                <h3>Tamil Nadu</h3>
                <ul className="chips">
                  <li className="chip">Ooty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHERE WE WORK ====== */}
      <section className="shell" id="where">
        <div className="split">
          <div className="split-content reveal">
            <span className="section-label">Where We Work</span>
            <h2 className="section-title">Based in Wayanad, building across South India</h2>
            <p className="lead-text">
              Our office is in Sultan Bathery, Wayanad. From here we build ferrocement projects for
              resorts, homestays and property owners across Kerala, Karnataka and Tamil Nadu — and
              we are expanding pan-India and internationally.
            </p>
            <div className="office-card">
              <div className="office-row">
                <span className="office-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  <strong>FERROGRID</strong>
                  {CONTACT_INFO.address}
                </span>
              </div>
              <div className="office-row">
                <span className="office-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <span>
                  <strong>Office hours</strong>
                  {CONTACT_INFO.workingHours}
                </span>
              </div>
              <div className="office-row">
                <span className="office-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>
                  <strong>Call or WhatsApp</strong>
                  <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a>
                </span>
              </div>
              <div className="office-row">
                <span className="office-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6l-5.4 2.9 1.2-6-4.5-4.2 6.1-.7z" />
                  </svg>
                </span>
                <span>
                  <strong>Google reviews</strong>
                  <a
                    href={CONTACT_INFO.googleMap}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See FERROGRID on Google
                  </a>
                </span>
              </div>
              <a href="contact.html#map" className="btn btn-dark">
                Get Directions
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
          <figure className="split-media">
            <img
              srcSet="images/pulpally/site-progress-800w.webp 800w, images/pulpally/site-progress.webp 1400w"
              sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
              width="1400"
              height="1050"
              src="images/pulpally/site-progress.webp"
              alt="FERROGRID construction site with domes taking shape"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="testimonials shell" id="testimonials">
        <div className="section-head center reveal">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">Client Testimonials</h2>
        </div>
        <div className="testimonials-grid">
          <figure className="testimonial-card reveal" style={{ transitionDelay: '0.05s' }}>
            <span className="testimonial-tag">Pool &amp; 4 cottages</span>
            <blockquote>
              FERROGRID built our pool and four cottages in about three months. The work is neat,
              and guests often ask us how the curved cottages were made.
            </blockquote>
            <figcaption>
              <span className="testimonial-initials" aria-hidden="true">
                RM
              </span>
              <span>
                <strong>Ramdarsh M S</strong>
                Wayanad
              </span>
            </figcaption>
          </figure>

          <figure className="testimonial-card reveal" style={{ transitionDelay: '0.15s' }}>
            <span className="testimonial-tag">Swimming pool</span>
            <blockquote>
              We spoke to a few contractors before choosing FERROGRID. Their quote was lower, and
              the pool was handed over before the date they gave us.
            </blockquote>
            <figcaption>
              <span className="testimonial-initials" aria-hidden="true">
                AT
              </span>
              <span>
                <strong>Aleena Thomas</strong>
                Thrissur
              </span>
            </figcaption>
          </figure>

          <figure className="testimonial-card reveal" style={{ transitionDelay: '0.25s' }}>
            <span className="testimonial-tag">Underground cellar</span>
            <blockquote>
              Our underground cellar has curved walls and a finish we couldn't get with normal
              concrete. The team explained each step before they started.
            </blockquote>
            <figcaption>
              <span className="testimonial-initials" aria-hidden="true">
                R
              </span>
              <span>
                <strong>Rajesh</strong>
                Pulpally
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ====== BRANDS ====== */}
      <BrandsMarquee />

      {/* ====== FINAL CTA ====== */}
      <FinalCta />
    </>
  );
};
