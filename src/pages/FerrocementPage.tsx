import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShapeVideo } from '../components/common/ShapeVideo';
import { FinalCta } from '../components/sections/FinalCta';
import { SERVICES } from '../data/servicesData';

export const FerrocementPage: React.FC = () => {
  const [activeStickyStep, setActiveStickyStep] = useState(0);

  useEffect(() => {
    const block = document.querySelector('[data-sticky-steps]');
    if (!block || !('IntersectionObserver' in window)) return;

    const steps = Array.from(block.querySelectorAll('.sticky-step'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = steps.indexOf(entry.target as HTMLElement);
            if (idx !== -1) {
              setActiveStickyStep(idx);
            }
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ====== PAGE HERO (diagram) ====== */}
      <section className="page-hero shell">
        <div className="page-hero-panel">
          <Breadcrumbs items={[{ label: 'Ferrocement' }]} />
          <h1>What is Ferrocement?</h1>
          <p>
            Ferrocement is cement mortar packed into many layers of thin steel wire mesh. The result
            is a thin, strong, seamless shell — like a boat hull — that can take almost any shape.
          </p>
          <div className="page-hero-actions">
            <a href="#how" className="btn btn-dark">
              See How It's Made
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
            <a href="services.html" className="btn btn-ghost">
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
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="page-hero-media diagram" data-inview>
          <svg
            viewBox="0 0 560 500"
            role="img"
            aria-label="Cross-section of a ferrocement shell: skeletal steel rods and layers of wire mesh inside a cement mortar shell"
          >
            <path
              className="d-band"
              d="M 50.0 440.0 A 230 230 0 0 1 510.0 440.0 L 466.0 440 A 186 186 0 0 0 94.0 440 Z"
            />
            <path
              className="d-mesh"
              pathLength="1"
              style={{ '--d': '0.20s' } as React.CSSProperties}
              d="M 84.0 440.0 A 196 196 0 0 1 476.0 440.0"
            />
            <path
              className="d-mesh"
              pathLength="1"
              style={{ '--d': '0.45s' } as React.CSSProperties}
              d="M 72.0 440.0 A 208 208 0 0 1 488.0 440.0"
            />
            <path
              className="d-mesh"
              pathLength="1"
              style={{ '--d': '0.70s' } as React.CSSProperties}
              d="M 60.0 440.0 A 220 220 0 0 1 500.0 440.0"
            />
            <line
              className="d-tick"
              style={{ '--d': '0.900s' } as React.CSSProperties}
              x1="470.0"
              y1="420.0"
              x2="503.8"
              y2="416.5"
            />
            <line
              className="d-tick"
              style={{ '--d': '0.925s' } as React.CSSProperties}
              x1="466.8"
              y1="400.3"
              x2="500.1"
              y2="393.2"
            />
            <line
              className="d-tick"
              style={{ '--d': '0.950s' } as React.CSSProperties}
              x1="461.7"
              y1="381.0"
              x2="494.0"
              y2="370.5"
            />
            <line
              className="d-tick"
              style={{ '--d': '0.975s' } as React.CSSProperties}
              x1="454.5"
              y1="362.3"
              x2="485.5"
              y2="348.5"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.000s' } as React.CSSProperties}
              x1="445.4"
              y1="344.5"
              x2="474.9"
              y2="327.5"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.025s' } as React.CSSProperties}
              x1="434.5"
              y1="327.7"
              x2="462.0"
              y2="307.7"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.050s' } as React.CSSProperties}
              x1="421.9"
              y1="312.2"
              x2="447.2"
              y2="289.4"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.075s' } as React.CSSProperties}
              x1="407.8"
              y1="298.1"
              x2="430.6"
              y2="272.8"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.100s' } as React.CSSProperties}
              x1="392.3"
              y1="285.5"
              x2="412.3"
              y2="258.0"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.125s' } as React.CSSProperties}
              x1="375.5"
              y1="274.6"
              x2="392.5"
              y2="245.1"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.150s' } as React.CSSProperties}
              x1="357.7"
              y1="265.5"
              x2="371.5"
              y2="234.5"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.175s' } as React.CSSProperties}
              x1="339.0"
              y1="258.3"
              x2="349.5"
              y2="226.0"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.200s' } as React.CSSProperties}
              x1="319.7"
              y1="253.2"
              x2="326.8"
              y2="219.9"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.225s' } as React.CSSProperties}
              x1="300.0"
              y1="250.0"
              x2="303.5"
              y2="216.2"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.250s' } as React.CSSProperties}
              x1="280.0"
              y1="249.0"
              x2="280.0"
              y2="215.0"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.275s' } as React.CSSProperties}
              x1="260.0"
              y1="250.0"
              x2="256.5"
              y2="216.2"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.300s' } as React.CSSProperties}
              x1="240.3"
              y1="253.2"
              x2="233.2"
              y2="219.9"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.325s' } as React.CSSProperties}
              x1="221.0"
              y1="258.3"
              x2="210.5"
              y2="226.0"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.350s' } as React.CSSProperties}
              x1="202.3"
              y1="265.5"
              x2="188.5"
              y2="234.5"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.375s' } as React.CSSProperties}
              x1="184.5"
              y1="274.6"
              x2="167.5"
              y2="245.1"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.400s' } as React.CSSProperties}
              x1="167.7"
              y1="285.5"
              x2="147.7"
              y2="258.0"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.425s' } as React.CSSProperties}
              x1="152.2"
              y1="298.1"
              x2="129.4"
              y2="272.8"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.450s' } as React.CSSProperties}
              x1="138.1"
              y1="312.2"
              x2="112.8"
              y2="289.4"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.475s' } as React.CSSProperties}
              x1="125.5"
              y1="327.7"
              x2="98.0"
              y2="307.7"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.500s' } as React.CSSProperties}
              x1="114.6"
              y1="344.5"
              x2="85.1"
              y2="327.5"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.525s' } as React.CSSProperties}
              x1="105.5"
              y1="362.3"
              x2="74.5"
              y2="348.5"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.550s' } as React.CSSProperties}
              x1="98.3"
              y1="381.0"
              x2="66.0"
              y2="370.5"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.575s' } as React.CSSProperties}
              x1="93.2"
              y1="400.3"
              x2="59.9"
              y2="393.2"
            />
            <line
              className="d-tick"
              style={{ '--d': '1.600s' } as React.CSSProperties}
              x1="90.0"
              y1="420.0"
              x2="56.2"
              y2="416.5"
            />
            <circle
              className="d-rod"
              style={{ '--d': '1.50s' } as React.CSSProperties}
              cx="479.9"
              cy="382.7"
              r="5.5"
            />
            <circle
              className="d-rod"
              style={{ '--d': '1.57s' } as React.CSSProperties}
              cx="443.9"
              cy="311.9"
              r="5.5"
            />
            <circle
              className="d-rod"
              style={{ '--d': '1.64s' } as React.CSSProperties}
              cx="384.0"
              cy="259.9"
              r="5.5"
            />
            <circle
              className="d-rod"
              style={{ '--d': '1.71s' } as React.CSSProperties}
              cx="308.9"
              cy="234.0"
              r="5.5"
            />
            <circle
              className="d-rod"
              style={{ '--d': '1.78s' } as React.CSSProperties}
              cx="229.7"
              cy="238.2"
              r="5.5"
            />
            <circle
              className="d-rod"
              style={{ '--d': '1.85s' } as React.CSSProperties}
              cx="157.7"
              cy="271.7"
              r="5.5"
            />
            <circle
              className="d-rod"
              style={{ '--d': '1.92s' } as React.CSSProperties}
              cx="103.6"
              cy="329.8"
              r="5.5"
            />
            <g className="d-label" style={{ '--d': '2.10s' } as React.CSSProperties}>
              <line className="d-leader" x1="103.8" y1="292.2" x2="64" y2="176" />
              <circle className="d-dot" cx="103.8" cy="292.2" r="3.5" />
              <text x="26" y="162" textAnchor="start">
                Cement mortar shell
              </text>
            </g>
            <g className="d-label" style={{ '--d': '2.35s' } as React.CSSProperties}>
              <line className="d-leader" x1="380.5" y1="251.0" x2="470" y2="150" />
              <circle className="d-dot" cx="380.5" cy="251.0" r="3.5" />
              <text x="540" y="136" textAnchor="end">
                Layers of wire mesh
              </text>
            </g>
            <g className="d-label" style={{ '--d': '2.60s' } as React.CSSProperties}>
              <line className="d-leader" x1="443.9" y1="311.9" x2="404" y2="384" />
              <circle className="d-dot" cx="443.9" cy="311.9" r="3.5" />
              <text x="396" y="404" textAnchor="end">
                Skeletal steel rods
              </text>
            </g>
            <line className="d-ground" x1="16" y1="440" x2="544" y2="440" />
            <text className="d-caption" x="280" y="480" textAnchor="middle">
              Cross-section of a ferrocement shell
            </text>
          </svg>
        </div>
      </section>

      {/* ====== IN SIMPLE WORDS ====== */}
      <section className="shell" id="simple">
        <div className="section-head split reveal">
          <div>
            <span className="section-label">In Simple Words</span>
            <h2 className="section-title">Steel fabric + cement = a thin, strong shell</h2>
          </div>
          <p className="section-aside">
            Think of an eggshell or a boat hull — thin, curved and surprisingly strong.
            <span>Ferrocement works the same way, with steel mesh spread through every millimetre.</span>
          </p>
        </div>

        <ShapeVideo />

        <div className="panel dark stats-band fc-facts">
          <div className="stat-item reveal">
            <span className="stat-number">
              25–50<small>mm</small>
            </span>
            <span className="stat-label">Typical shell thickness — about 1 to 2 inches</span>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '0.08s' }}>
            <span className="stat-number">&frac14;</span>
            <span className="stat-label">Roughly the weight of a 9-inch brick wall of the same size</span>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '0.16s' }}>
            <span className="stat-number">1848</span>
            <span className="stat-label">First used to build a boat in France — proven for over 175 years</span>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '0.24s' }}>
            <span className="stat-number" data-count="26" data-suffix="+">
              26+
            </span>
            <span className="stat-label">Years FERROGRID has been building with it</span>
          </div>
        </div>
      </section>

      {/* ====== HOW IT'S MADE (sticky steps) ====== */}
      <section className="shell" id="how">
        <div className="section-head split reveal">
          <div>
            <span className="section-label">How It's Made</span>
            <h2 className="section-title">From steel skeleton to seamless shell</h2>
          </div>
          <p className="section-aside">
            Every FERROGRID structure follows the same four stages —
            <span>whether it's a pool, a dome or a grotto.</span>
          </p>
        </div>

        <div className="sticky-steps" data-sticky-steps>
          <div className="sticky-media" aria-hidden="true">
            <img
              width="1050"
              height="1400"
              src="images/pulpally/rebar-progress.webp"
              alt=""
              data-step="0"
              className={activeStickyStep === 0 ? 'is-active' : ''}
              loading="lazy"
            />
            <img
              width="1050"
              height="1400"
              src="images/pulpally/pod-construction.webp"
              alt=""
              data-step="1"
              className={activeStickyStep === 1 ? 'is-active' : ''}
              loading="lazy"
            />
            <img
              srcSet="images/grotto/grotto-construction-800w.webp 800w, images/grotto/grotto-construction.webp 1400w"
              sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
              width="1400"
              height="788"
              src="images/grotto/grotto-construction.webp"
              alt=""
              data-step="2"
              className={activeStickyStep === 2 ? 'is-active' : ''}
              loading="lazy"
            />
            <img
              width="1050"
              height="1400"
              src="images/pulpally/green-roof-earthworks.webp"
              alt=""
              data-step="3"
              className={activeStickyStep === 3 ? 'is-active' : ''}
              loading="lazy"
            />
            <span className="sticky-media-tag">
              Stage <b>{String(activeStickyStep + 1).padStart(2, '0')}</b> / 04
            </span>
          </div>

          <ol className="sticky-list">
            <li className={`sticky-step ${activeStickyStep === 0 ? 'is-active' : ''}`} data-step="0">
              <img
                width="1050"
                height="1400"
                className="sticky-step-img"
                src="images/pulpally/rebar-progress.webp"
                alt="Steel rebar framework for ferrocement domes"
                loading="lazy"
              />
              <span className="step-num">1</span>
              <h3>Skeletal steel framework</h3>
              <p>
                Steel rods are bent and tied into the skeleton of the structure — the outline of a
                dome, a pool, a shell or a wall.
              </p>
            </li>
            <li className={`sticky-step ${activeStickyStep === 1 ? 'is-active' : ''}`} data-step="1">
              <img
                width="1050"
                height="1400"
                className="sticky-step-img"
                src="images/pulpally/pod-construction.webp"
                alt="Wire mesh wrapped over a ferrocement pod frame"
                loading="lazy"
              />
              <span className="step-num">2</span>
              <h3>Layers of wire mesh</h3>
              <p>
                Several layers of fine steel wire mesh are wrapped and tied over the frame, spreading
                reinforcement evenly through the whole shell.
              </p>
            </li>
            <li className={`sticky-step ${activeStickyStep === 2 ? 'is-active' : ''}`} data-step="2">
              <img
                srcSet="images/grotto/grotto-construction-800w.webp 800w, images/grotto/grotto-construction.webp 1400w"
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                width="1400"
                height="788"
                className="sticky-step-img"
                src="images/grotto/grotto-construction.webp"
                alt="Craftsmen plastering and sculpting a ferrocement grotto"
                loading="lazy"
              />
              <span className="step-num">3</span>
              <h3>Hand-plastered mortar</h3>
              <p>
                Rich cement mortar is pressed through and over the mesh by hand, forming a dense,
                seamless shell with no gaps for water to find.
              </p>
            </li>
            <li className={`sticky-step ${activeStickyStep === 3 ? 'is-active' : ''}`} data-step="3">
              <img
                width="1050"
                height="1400"
                className="sticky-step-img"
                src="images/pulpally/green-roof-earthworks.webp"
                alt="Finished ferrocement domes with green roofs"
                loading="lazy"
              />
              <span className="step-num">4</span>
              <h3>Curing &amp; finishing</h3>
              <p>
                The shell is cured carefully, then finished to suit the project — tiled, textured like
                rock, painted, or covered with earth and grass.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ====== ADVANTAGES ====== */}
      <section className="shell" id="advantages">
        <div className="section-head center reveal">
          <span className="section-label">Why Ferrocement</span>
          <h2 className="section-title">Advantages you can see in every build</h2>
        </div>
        <div className="benefit-grid three">
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
                <path d="M3 20c0-8 4-14 9-14s9 6 9 14" />
                <path d="M8 20c0-5 2-9 4-9s4 4 4 9" />
              </svg>
            </span>
            <h3>Almost any shape</h3>
            <p>
              Domes, curves, caves and freeform pools — the mesh is shaped first, so design is not
              limited to straight lines.
            </p>
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
                <path d="M6 9h12l2 11H4L6 9z" />
                <path d="M9 9a3 3 0 0 1 6 0" />
              </svg>
            </span>
            <h3>Thin &amp; lightweight</h3>
            <p>
              Thin shells weigh far less than conventional walls and slabs, which suits hilly and
              remote sites.
            </p>
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
                <rect x="4" y="4" width="16" height="16" rx="1" />
                <path d="M4 9.3h16M4 14.6h16M9.3 4v16M14.6 4v16" />
              </svg>
            </span>
            <h3>Crack resistant</h3>
            <p>
              Closely spaced mesh spreads stress through the whole shell, helping it resist cracking.
            </p>
          </div>
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
                <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
              </svg>
            </span>
            <h3>Watertight</h3>
            <p>
              A dense, seamless mortar shell makes ferrocement ideal for pools, tanks and underground
              spaces.
            </p>
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
                <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
                <path d="M5 19l8-8" />
              </svg>
            </span>
            <h3>Less material</h3>
            <p>
              Thin sections use less cement and steel than conventional construction for the same
              space.
            </p>
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
                <path d="M12 3l9 5-9 5-9-5 9-5z" />
                <path d="M3 13l9 5 9-5" />
              </svg>
            </span>
            <h3>Little formwork</h3>
            <p>The mesh itself holds the shape, so complex forms need far less shuttering.</p>
          </div>
        </div>
      </section>

      {/* ====== COMPARISON ====== */}
      <section className="shell" id="compare">
        <div className="panel">
          <div className="section-head split reveal">
            <div>
              <span className="section-label">Side by Side</span>
              <h2 className="section-title">Ferrocement vs RCC vs brick</h2>
            </div>
            <p className="section-aside">
              A quick, general comparison —
              <span>the right choice always depends on your site and design.</span>
            </p>
          </div>

          <div className="fc-bars" data-inview>
            <div className="fc-bar-card">
              <h3>Wall thickness</h3>
              <div className="fc-bar is-fc">
                <span className="fc-bar-name">Ferrocement</span>
                <span className="fc-bar-track">
                  <span className="fc-bar-fill" style={{ '--w': '17%' } as React.CSSProperties} />
                </span>
                <span className="fc-bar-value">25–50 mm</span>
              </div>
              <div className="fc-bar">
                <span className="fc-bar-name">RCC</span>
                <span className="fc-bar-track">
                  <span className="fc-bar-fill" style={{ '--w': '55%' } as React.CSSProperties} />
                </span>
                <span className="fc-bar-value">100–150 mm</span>
              </div>
              <div className="fc-bar">
                <span className="fc-bar-name">Brick</span>
                <span className="fc-bar-track">
                  <span className="fc-bar-fill" style={{ '--w': '100%' } as React.CSSProperties} />
                </span>
                <span className="fc-bar-value">230 mm</span>
              </div>
            </div>

            <div className="fc-bar-card">
              <h3>Weight per square metre of wall</h3>
              <div className="fc-bar is-fc">
                <span className="fc-bar-name">Ferrocement</span>
                <span className="fc-bar-track">
                  <span className="fc-bar-fill" style={{ '--w': '21%' } as React.CSSProperties} />
                </span>
                <span className="fc-bar-value">&asymp; 60–125 kg</span>
              </div>
              <div className="fc-bar">
                <span className="fc-bar-name">RCC</span>
                <span className="fc-bar-track">
                  <span className="fc-bar-fill" style={{ '--w': '70%' } as React.CSSProperties} />
                </span>
                <span className="fc-bar-value">&asymp; 250–375 kg</span>
              </div>
              <div className="fc-bar">
                <span className="fc-bar-name">Brick</span>
                <span className="fc-bar-track">
                  <span className="fc-bar-fill" style={{ '--w': '100%' } as React.CSSProperties} />
                </span>
                <span className="fc-bar-value">&asymp; 440 kg</span>
              </div>
            </div>
          </div>

          <div className="table-wrap reveal">
            <table className="compare-table stack">
              <thead>
                <tr>
                  <th scope="col">Aspect</th>
                  <th scope="col">Ferrocement</th>
                  <th scope="col">RCC concrete</th>
                  <th scope="col">Brick / block masonry</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Shapes possible</th>
                  <td data-label="Ferrocement">Curves, domes, caves and freeform shells</td>
                  <td data-label="RCC concrete">
                    Mostly straight walls and flat slabs — curves need costly custom shuttering
                  </td>
                  <td data-label="Brick / block masonry">Straight walls, small arches</td>
                </tr>
                <tr>
                  <th scope="row">Cracking</th>
                  <td data-label="Ferrocement">Fine mesh everywhere spreads stress, so it resists cracking</td>
                  <td data-label="RCC concrete">Bars are spaced further apart; cracks can open between them</td>
                  <td data-label="Brick / block masonry">Mortar joints can crack if the ground settles</td>
                </tr>
                <tr>
                  <th scope="row">Water-tightness</th>
                  <td data-label="Ferrocement">Dense, seamless shell</td>
                  <td data-label="RCC concrete">Joints usually need extra waterproofing</td>
                  <td data-label="Brick / block masonry">Porous — needs plaster and waterproofing</td>
                </tr>
                <tr>
                  <th scope="row">Shuttering</th>
                  <td data-label="Ferrocement">Very little — the mesh holds the shape</td>
                  <td data-label="RCC concrete">Full shuttering for every pour</td>
                  <td data-label="Brick / block masonry">None, but slow to lay brick by brick</td>
                </tr>
                <tr>
                  <th scope="row">Hilly &amp; remote sites</th>
                  <td data-label="Ferrocement">Light materials that can be carried by hand</td>
                  <td data-label="RCC concrete">Needs shuttering, mixers and often ready-mix trucks</td>
                  <td data-label="Brick / block masonry">Heavy bricks to transport</td>
                </tr>
                <tr>
                  <th scope="row">Cost</th>
                  <td data-label="Ferrocement">Often lower for shells, roofs, pools and tanks*</td>
                  <td data-label="RCC concrete">Standard</td>
                  <td data-label="Brick / block masonry">Low per wall, but needs heavier foundations</td>
                </tr>
                <tr>
                  <th scope="row">Best for</th>
                  <td data-label="Ferrocement">Pools, domes, cottages, caves, tanks and rock art</td>
                  <td data-label="RCC concrete">Columns, beams and multi-storey buildings</td>
                  <td data-label="Brick / block masonry">Ordinary rooms and boundary walls</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="fc-note">
            *Studies in India have reported ferrocement roofing costing roughly 25–40% less than RCC.
            Your actual cost depends on your land, the design and finishes, so we quote after a free
            site visit.
          </p>
        </div>
      </section>

      {/* ====== POOL COMPARISON ====== */}
      <section className="shell" id="pools">
        <div className="section-head split reveal">
          <div>
            <span className="section-label">Planning a Pool?</span>
            <h2 className="section-title">Ferrocement vs RCC vs fibreglass pools</h2>
          </div>
          <p className="section-aside">
            The three most common ways to build a pool —
            <span>and how they compare for resorts and hilly sites.</span>
          </p>
        </div>
        <div className="table-wrap bordered reveal">
          <table className="compare-table stack">
            <thead>
              <tr>
                <th scope="col">Aspect</th>
                <th scope="col">Ferrocement pool</th>
                <th scope="col">RCC pool</th>
                <th scope="col">Fibreglass pool</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Shape &amp; size</th>
                <td data-label="Ferrocement pool">Any shape or size — freeform, infinity edge, natural rock</td>
                <td data-label="RCC pool">Any size; curves need complex shuttering</td>
                <td data-label="Fibreglass pool">Factory moulds only; width limited by road transport</td>
              </tr>
              <tr>
                <th scope="row">Joints</th>
                <td data-label="Ferrocement pool">One seamless shell</td>
                <td data-label="RCC pool">Construction joints that must be sealed</td>
                <td data-label="Fibreglass pool">Seamless one-piece shell</td>
              </tr>
              <tr>
                <th scope="row">Site access</th>
                <td data-label="Ferrocement pool">Materials carried by hand — ideal for slopes and resorts</td>
                <td data-label="RCC pool">Shuttering, mixers and often a concrete pump</td>
                <td data-label="Fibreglass pool">Needs a truck and crane to reach the pit</td>
              </tr>
              <tr>
                <th scope="row">Finishes</th>
                <td data-label="Ferrocement pool">Tiles, mosaic, stone or rock texture</td>
                <td data-label="RCC pool">Tiles, mosaic or stone</td>
                <td data-label="Fibreglass pool">Factory gel-coat colours</td>
              </tr>
              <tr>
                <th scope="row">Repairs</th>
                <td data-label="Ferrocement pool">Patched on site by skilled masons</td>
                <td data-label="RCC pool">Patched on site</td>
                <td data-label="Fibreglass pool">Needs specialist gel-coat repair</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ====== GOOD TO KNOW ====== */}
      <section className="shell" id="good-to-know">
        <div className="section-head center reveal">
          <span className="section-label">Good to Know</span>
          <h2 className="section-title">Honest answers before you build</h2>
        </div>
        <div className="benefit-grid three">
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
                <rect x="5" y="3" width="14" height="18" rx="1" />
                <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
              </svg>
            </span>
            <h3>Not for tall buildings</h3>
            <p>
              For columns, beams and multi-storey frames, RCC is the right tool. We often combine
              both — RCC where loads are heavy, ferrocement for shells, roofs and features.
            </p>
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
                <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5z" />
              </svg>
            </span>
            <h3>Workmanship matters</h3>
            <p>
              The mesh must be fully packed and covered with mortar — gaps let steel rust. Skilled,
              experienced crews make the difference, which is why every shell is built by our own
              team.
            </p>
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
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </span>
            <h3>Planned for heat</h3>
            <p>
              A thin roof in full sun warms up quickly, so we plan earth or green-roof cover,
              insulation, light coatings and ventilation to keep rooms cool.
            </p>
          </div>
        </div>
      </section>

      {/* ====== APPLICATIONS ====== */}
      <section className="shell" id="applications">
        <div className="section-head split reveal">
          <div>
            <span className="section-label">Where We Use It</span>
            <h2 className="section-title">Ferrocement in our services</h2>
          </div>
          <p className="section-aside">
            One material across every service —
            <span>choose one to see what we build.</span>
          </p>
        </div>
        <div className="mini-grid">
          {SERVICES.map((s) => (
            <a key={s.id} href={s.slug} className="mini-card reveal">
              <img src={s.thumb} alt="" width="72" height="72" loading="lazy" />
              <span>
                <strong>{s.shortTitle}</strong>
                <small>{s.tagline}</small>
              </span>
              <span className="round-btn" aria-hidden="true">
                <svg
                  width="15"
                  height="15"
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
            </a>
          ))}
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="shell" id="faq">
        <div className="faq-layout">
          <div className="section-head reveal">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Ferrocement questions, answered</h2>
            <p>
              See all answers in our <a href="faq.html">ferrocement FAQ</a>, or{' '}
              <a href="contact.html">ask our team</a>.
            </p>
          </div>
          <div className="faq-list reveal">
            <details className="faq-item">
              <summary>
                What is ferrocement?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Ferrocement is a thin, strong form of reinforced concrete made from layers of
                  closely spaced steel wire mesh, filled and covered with rich cement mortar. The
                  mesh can be shaped first, so ferrocement can form curves, domes, caves and freeform
                  shells that are hard to build with conventional concrete.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Is ferrocement the same as RCC (reinforced cement concrete)?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  No. Both use cement and steel, but RCC uses thicker sections with reinforcement
                  bars spaced further apart, while ferrocement uses thin sections with many layers of
                  fine wire mesh spread evenly through the shell. This makes ferrocement lighter and
                  better at controlling cracks in thin, curved shapes.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                How strong is ferrocement?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Ferrocement is strong for its thickness because the closely spaced mesh spreads
                  stress through the whole shell. Curved forms such as domes and arches add further
                  strength, which is why ferrocement is used for pools, water tanks, domes and
                  underground spaces.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Is ferrocement waterproof?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  A well-built ferrocement shell is dense and seamless, which makes it highly
                  water-resistant — ideal for swimming pools, water tanks and underground rooms. We
                  also plan waterproofing and drainage to suit each site.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                How long does a ferrocement structure last?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  With good design, workmanship and routine care, ferrocement structures are built to
                  last for decades. We build our ferrocement swimming pools for 50+ years of
                  durability.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Is ferrocement cheaper than conventional construction?
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  It can be more economical, because thin shells use less cement and steel and need
                  less formwork. The final cost still depends on your land, the structure and the
                  finishes, so we quote each project after a site visit.
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
