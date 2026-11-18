import React from 'react';
import { FerroMesh } from '../components/common/FerroMesh';
import { ProjectCarousel } from '../components/common/ProjectCarousel';
import { BrandsMarquee } from '../components/sections/BrandsMarquee';
import { Testimonials } from '../components/sections/Testimonials';
import { FinalCta } from '../components/sections/FinalCta';
import { SERVICES } from '../data/servicesData';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* ====== HERO (cinematic background image) ====== */}
      <section className="hero-cine" id="home">
        <div className="hero-stage" data-mesh="reveal">
          <FerroMesh reveal />
          <div className="hero-media-wrap">
            <img
              src="images/hero-home.jpg"
              alt="Grass-roofed ferrocement earth-sheltered cave cottage in the hills, built by FERROGRID"
              className="hero-bg-img"
              width="1920"
              height="1080"
              fetchpriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-shade" aria-hidden="true" />

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
                  width="14"
                  height="14"
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
                  width="14"
                  height="14"
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

      {/* ====== ABOUT INTRO ====== */}
      <section className="about shell" id="about">
        <div className="panel about-panel">
          {/* Section Head: Eyebrow + Title + Contextual Narrative */}
          <div className="section-head split reveal">
            <div className="about-head-main">
              <span className="section-label">About FERROGRID</span>
              <h2 className="section-title">
                We Build What Conventional Concrete <em>Cannot Easily Do.</em>
              </h2>
            </div>
            <div className="section-aside about-head-aside">
              <p className="about-aside-lead">
                Headquartered in Sultan Bathery, Wayanad — crafting lightweight, high-strength ferrocement structures across South India for over 26 years.
              </p>
              <p className="about-aside-sub">
                We replace rigid wooden shuttering with dense multi-layered wire mesh and polymer-modified matrix, enabling fluid curves, living green roofs, and cave architecture.
              </p>
            </div>
          </div>

          {/* Four Redesigned Metric Cards in an Elegant Deck */}
          <div className="about-stats-deck">
            <div className="about-stat-card reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="about-stat-top">
                <span className="about-stat-icon-wrap">
                  <img
                    className="about-stat-icon"
                    src="images/thumbs/stat-team.webp"
                    alt=""
                    width="44"
                    height="44"
                    loading="lazy"
                  />
                </span>
                <div className="about-stat-num" data-count="26">
                  26<span className="stat-suffix">+</span>
                </div>
              </div>
              <h3 className="about-stat-title">Years of Experience</h3>
              <p className="about-stat-desc">
                Pioneering complex organic ferrocement engineering &amp; master craftsmanship since 1998.
              </p>
            </div>

            <div className="about-stat-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="about-stat-top">
                <span className="about-stat-icon-wrap">
                  <img
                    className="about-stat-icon"
                    src="images/thumbs/stat-projects.webp"
                    alt=""
                    width="44"
                    height="44"
                    loading="lazy"
                  />
                </span>
                <div className="about-stat-num" data-count="50">
                  50<span className="stat-suffix">+</span>
                </div>
              </div>
              <h3 className="about-stat-title">Projects Completed</h3>
              <p className="about-stat-desc">
                Swimming pools, eco-dome villas, cave cottages, underground huts &amp; grottos.
              </p>
            </div>

            <div className="about-stat-card reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="about-stat-top">
                <span className="about-stat-icon-wrap">
                  <img
                    className="about-stat-icon"
                    src="images/thumbs/stat-states.webp"
                    alt=""
                    width="44"
                    height="44"
                    loading="lazy"
                  />
                </span>
                <div className="about-stat-num" data-count="3">
                  3<span className="stat-suffix">+</span>
                </div>
              </div>
              <h3 className="about-stat-title">States Covered</h3>
              <p className="about-stat-desc">
                Active project footprint across tourist destinations in Kerala, Karnataka &amp; Tamil Nadu.
              </p>
            </div>

            <div className="about-stat-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="about-stat-top">
                <span className="about-stat-icon-wrap">
                  <img
                    className="about-stat-icon"
                    src="images/thumbs/stat-clients.webp"
                    alt=""
                    width="44"
                    height="44"
                    loading="lazy"
                  />
                </span>
                <div className="about-stat-num" data-count="100" data-suffix="%">
                  100<span className="stat-suffix">%</span>
                </div>
              </div>
              <h3 className="about-stat-title">In-House Machinery</h3>
              <p className="about-stat-desc">
                Directly owned JCB backhoes, shotcrete pumps, heavy-duty mixers &amp; logistics fleet.
              </p>
            </div>
          </div>

          {/* Story & Multi-Image Showcase */}
          <div className="about-story-showcase">
            <div className="about-story-col reveal">
              <span className="about-story-eyebrow">Why Ferrocement?</span>
              <h3 className="about-story-heading">
                Sculptural freedom with superior strength, rapid execution, and zero shuttering constraints.
              </h3>
              <p className="about-story-p">
                Traditional concrete demands heavy formwork, produces thick flat slabs, and struggles with organic contours. Ferrocement frees architecture from geometric limits: our multi-layered high-tensile wire mesh acts as both armature and reinforcement, creating ultra-dense, thin-walled shells that are monolithic, crack-resistant, and inherently water-tight.
              </p>

              <div className="about-highlights-grid">
                <div className="about-highlight-item">
                  <span className="about-highlight-bullet" aria-hidden="true">✓</span>
                  <div>
                    <strong>60% Less Concrete Volume</strong>
                    <span>Significantly reduces carbon footprint, structural dead load, and material transit cost.</span>
                  </div>
                </div>
                <div className="about-highlight-item">
                  <span className="about-highlight-bullet" aria-hidden="true">✓</span>
                  <div>
                    <strong>Seamless Monolithic Shell</strong>
                    <span>No cold joints or casting seams, delivering permanent water-tightness for pools and earth-shelters.</span>
                  </div>
                </div>
                <div className="about-highlight-item">
                  <span className="about-highlight-bullet" aria-hidden="true">✓</span>
                  <div>
                    <strong>Natural Earth Integration</strong>
                    <span>Ideal for hillside contours, subterranean Hobbit houses, and living green roofs that stay naturally cool.</span>
                  </div>
                </div>
              </div>

              <div className="about-story-actions">
                <a href="about.html" className="btn btn-primary btn-sm">
                  More About FERROGRID
                  <svg className="btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="process.html" className="btn btn-ghost btn-sm">
                  How We Build
                </a>
              </div>
            </div>

            {/* Multi-Image Composition */}
            <div className="about-images-col reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="about-image-card about-image-card-primary">
                <figure className="about-image-figure">
                  <img
                    src="images/team/morning-briefing.webp"
                    srcSet="images/team/morning-briefing-800w.webp 800w, images/team/morning-briefing.webp 1400w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    alt="FERROGRID specialised construction crew during a morning briefing on site"
                    width="1200"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="about-image-caption">
                    <span className="caption-dot" />
                    Specialised site crew in Wayanad
                  </figcaption>
                </figure>
              </div>

              <div className="about-image-card about-image-card-secondary">
                <figure className="about-image-figure">
                  <img
                    src="images/cottages/hillside-eco-cabins.webp"
                    srcSet="images/cottages/hillside-eco-cabins-800w.webp 800w, images/cottages/hillside-eco-cabins.webp 1400w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    alt="Living-roof ferrocement earth-sheltered resort cottages in the hills"
                    width="800"
                    height="533"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="about-image-caption">
                    <span className="caption-dot" />
                    Living-roof resort cottages
                  </figcaption>
                </figure>
              </div>

              <div className="about-experience-badge">
                <span className="badge-highlight">Since 1998</span>
                <span className="badge-label">South India&apos;s Leading Ferrocement Developers</span>
              </div>
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
                <h3>{s.title}</h3>
                <p>{s.description.slice(0, 140)}...</p>
                <div className="service-card-action">
                  <span className="btn-learn-more">
                    Learn more
                    <svg
                      className="btn-icon"
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
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
