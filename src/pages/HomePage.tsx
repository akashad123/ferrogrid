import React from 'react';
import { HeroVideo } from '../components/common/HeroVideo';
import { FerroMesh } from '../components/common/FerroMesh';
import { ProjectCarousel } from '../components/common/ProjectCarousel';
import { BrandsMarquee } from '../components/sections/BrandsMarquee';
import { Testimonials } from '../components/sections/Testimonials';
import { FinalCta } from '../components/sections/FinalCta';
import { SERVICES } from '../data/servicesData';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* ====== HERO (cinematic video) ====== */}
      <section className="hero-cine" id="home">
        <div className="hero-stage" data-mesh="reveal">
          <FerroMesh reveal />
          <HeroVideo
            srcBase="images/hero_video/hero-v2"
            portraitPoster="images/hero_video/hero-v2-poster-portrait.webp"
            landscapePoster="images/hero_video/hero-v2-poster-landscape.webp"
            alt="Grass-roofed ferrocement cave cottages in the hills, built by FERROGRID"
          />

          <div className="hero-content">
            <h1 className="hero-title">
              Specialists in Ferrocement <em>Swimming Pools,</em> Resort Cottages &amp; Innovative
              Structures
            </h1>

            <p className="hero-ticker">
              <span className="sr-only">
                We build swimming pools, cave cottages, underground houses, eco dome houses, grottos
                and waterfalls.
              </span>
              <span className="hero-ticker-lead" aria-hidden="true">
                We build
              </span>
              <span className="hero-ticker-window" aria-hidden="true">
                <span className="hero-ticker-list">
                  <span>Swimming Pools</span>
                  <span>Cave Cottages</span>
                  <span>Underground Houses</span>
                  <span>Eco Dome Houses</span>
                  <span>Grottos &amp; Waterfalls</span>
                  <span>Swimming Pools</span>
                </span>
              </span>
            </p>

            <div className="hero-actions">
              <a href="contact.html" className="btn btn-light" id="heroCta">
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
              <a href="projects.html" className="btn btn-glass" id="heroViewProjects">
                View Our Projects
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

      {/* ====== ABOUT INTRO ====== */}
      <section className="about shell" id="about">
        <div className="panel about-panel">
          <div className="section-head split reveal">
            <div>
              <span className="section-label">About FERROGRID</span>
              <h2 className="section-title">We Build What Conventional Concrete Cannot Easily Do</h2>
            </div>
            <p className="section-aside">
              Headquartered in Sultan Bathery, Wayanad —
              <span>
                crafting lightweight, high-strength ferrocement structures across South India for over
                two decades.
              </span>
            </p>
          </div>

          <div className="about-grid">
            <div className="about-stats-grid">
              <div className="hero-stat reveal" style={{ transitionDelay: '0.05s' }}>
                <div className="hero-stat-num" data-count="26">
                  26<span className="stat-suffix">+</span>
                </div>
                <div className="hero-stat-label">Years of Experience</div>
              </div>
              <div className="hero-stat reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="hero-stat-num" data-count="50">
                  50<span className="stat-suffix">+</span>
                </div>
                <div className="hero-stat-label">Projects Completed</div>
              </div>
              <div className="hero-stat reveal" style={{ transitionDelay: '0.15s' }}>
                <div className="hero-stat-num" data-count="3">
                  3<span className="stat-suffix">+</span>
                </div>
                <div className="hero-stat-label">States Covered</div>
              </div>
              <div className="hero-stat reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="hero-stat-num" data-count="100" data-suffix="%">
                  100<span className="stat-suffix">%</span>
                </div>
                <div className="hero-stat-label">In-House Machinery</div>
              </div>
            </div>

            <div className="about-media mosaic reveal" style={{ transitionDelay: '0.15s' }}>
              <figure className="mosaic-large">
                <img
                  src="images/team/morning-briefing.webp"
                  alt="FERROGRID construction crew during a morning briefing"
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Our specialised crew on site</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section className="services shell" id="services">
        <div className="section-head center reveal">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Comprehensive Ferrocement Solutions</h2>
          <p className="section-sub">
            From freeform swimming pools to subterranean cave huts — designed, engineered, and built
            in-house.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, idx) => (
            <a
              key={s.id}
              href={s.slug}
              className="service-card reveal"
              style={{ transitionDelay: `${0.05 * (idx + 1)}s` }}
            >
              <div className="service-card-media">
                <img
                  src={s.heroImage}
                  alt={s.heroAlt}
                  width="600"
                  height="450"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="service-card-body">
                <span className="service-card-tag">{s.shortTitle}</span>
                <h3>{s.title}</h3>
                <p>{s.description.slice(0, 140)}...</p>
                <span className="service-card-link">
                  Learn more &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="center-cta reveal">
          <a href="services.html" className="btn btn-ghost">
            View All Services
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

      {/* ====== FEATURED PROJECTS ====== */}
      <section className="shell" id="projects">
        <div className="panel featured">
          <div className="section-head split reveal">
            <div>
              <span className="section-label">Our Portfolio</span>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <p className="section-aside">
              Explore our completed projects across India —
              <span>each one a testament to the versatility and beauty of ferrocement construction.</span>
            </p>
          </div>

          <ProjectCarousel>
            <a href="project-pulpally.html" className="feat-card">
              <img
                srcSet="images/pulpally/domes-aerial-800w.webp 800w, images/pulpally/domes-aerial.webp 1600w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1600"
                height="1200"
                src="images/pulpally/domes-aerial.webp"
                alt="Cluster of ferrocement eco-domes under construction at Pulpally, Wayanad"
                loading="lazy"
                decoding="async"
              />
              <span className="feat-badge">Ongoing Work</span>
              <div className="feat-info">
                <span className="feat-cat">Resort Cottages</span>
                <h3>Pulpally Resort</h3>
                <span className="feat-meta">Pulpally, Wayanad</span>
              </div>
            </a>

            <a href="project-kakkadampoyil.html" className="feat-card">
              <img
                width="1050"
                height="1400"
                src="images/kakkadampoyil/earth-sheltered-retreat.webp"
                alt="Grass-covered earth-sheltered ferrocement cottages in a forested valley"
                loading="lazy"
                decoding="async"
              />
              <span className="feat-badge">Ongoing Work</span>
              <div className="feat-info">
                <span className="feat-cat">Resort Cottages</span>
                <h3>Kakkadampoyil Earth-Sheltered Retreat</h3>
                <span className="feat-meta">Kakkadampoyil, Kozhikode</span>
              </div>
            </a>

            <a href="projects.html?filter=pools" className="feat-card">
              <img
                srcSet="images/pools/infinity-pool-retreat-800w.webp 800w, images/pools/infinity-pool-retreat.webp 1400w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1400"
                height="788"
                src="images/pools/infinity-pool-retreat.webp"
                alt="Ferrocement infinity-edge swimming pool with swim-up seating"
                loading="lazy"
                decoding="async"
              />
              <div className="feat-info">
                <span className="feat-cat">Swimming Pool</span>
                <h3>Resort Pool</h3>
                <span className="feat-meta">Wayanad · 2,400 sq.ft</span>
              </div>
            </a>

            <a href="projects.html?filter=grotto" className="feat-card">
              <img
                srcSet="images/grotto/carved-stone-grotto-800w.webp 800w, images/grotto/carved-stone-grotto.webp 1400w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1400"
                height="788"
                src="images/grotto/carved-stone-grotto.webp"
                alt="Carved ferrocement rock grotto with stone pillars and timber door"
                loading="lazy"
                decoding="async"
              />
              <div className="feat-info">
                <span className="feat-cat">Rock Art &amp; Grottos</span>
                <h3>Carved Stone Grotto Entrance</h3>
                <span className="feat-meta">Completed</span>
              </div>
            </a>

            <a href="project-kakkadampoyil.html" className="feat-card">
              <img
                srcSet="images/kakkadampoyil/pool-and-cottage-800w.webp 800w, images/kakkadampoyil/pool-and-cottage.webp 1400w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1400"
                height="1050"
                src="images/kakkadampoyil/pool-and-cottage.webp"
                alt="Blue-tiled freeform swimming pool beside a dome cottage overlooking a valley"
                loading="lazy"
                decoding="async"
              />
              <span className="feat-badge">Ongoing Work</span>
              <div className="feat-info">
                <span className="feat-cat">Swimming Pool</span>
                <h3>Kakkadampoyil Valley-View Pool</h3>
                <span className="feat-meta">Kakkadampoyil, Kozhikode</span>
              </div>
            </a>

            <a href="projects.html?filter=cottages" className="feat-card">
              <img
                srcSet="images/cottages/hillside-eco-cabins-800w.webp 800w, images/cottages/hillside-eco-cabins.webp 1400w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1400"
                height="1032"
                src="images/cottages/hillside-eco-cabins.webp"
                alt="Hillside eco cottages built with curved ferrocement shells"
                loading="lazy"
                decoding="async"
              />
              <div className="feat-info">
                <span className="feat-cat">Resort Cottages</span>
                <h3>Hillside Eco Cabins</h3>
                <span className="feat-meta">Completed</span>
              </div>
            </a>
          </ProjectCarousel>
        </div>
      </section>

      {/* ====== PROCESS ====== */}
      <section className="process shell" id="process">
        <div className="section-head center reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">From Concept to Handover</h2>
          <p className="section-sub">A streamlined 5-step process perfected over 26+ years of building.</p>
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

      {/* ====== BRANDS ====== */}
      <BrandsMarquee />

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

      {/* ====== TESTIMONIALS ====== */}
      <Testimonials />

      {/* ====== FINAL CTA ====== */}
      <FinalCta />
    </>
  );
};
