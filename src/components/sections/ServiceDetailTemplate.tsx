import React from 'react';
import { ServicePageData } from '@/data/servicePagesData';
import { SERVICES } from '@/data/servicesData';
import { PROJECTS_LIST, ProjectCardItem } from '@/data/projectsData';
import { ProjectCard } from '@/components/common/ProjectCard';
import { FinalCta } from '@/components/sections/FinalCta';
import { useLightbox } from '@/lib/lightboxContext';
import { LightboxItem } from '@/types';

interface ServiceDetailTemplateProps {
  data: ServicePageData;
}

/**
 * Shared template component for Service Detail pages.
 * Faithfully mirrors the 8-section layout of each service page.
 */
export const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({ data }) => {
  const { openLightbox } = useLightbox();

  // Find related projects matching titles or category
  const relatedProjects: ProjectCardItem[] = data.relatedProjectTitles
    .map((title) => PROJECTS_LIST.find((p) => p.title.toLowerCase() === title.toLowerCase()))
    .filter((p): p is ProjectCardItem => p !== undefined);

  // If some couldn't be matched by title, fallback to category
  if (relatedProjects.length < 3) {
    const fallback = PROJECTS_LIST.filter(
      (p) => p.category === data.filterParam && !relatedProjects.some((rp) => rp.title === p.title)
    );
    relatedProjects.push(...fallback.slice(0, 3 - relatedProjects.length));
  }

  // Other services (exclude current slug)
  const otherServices = SERVICES.filter((s) => s.slug !== data.slug);

  // Format gallery items for lightbox
  const lightboxItems: LightboxItem[] = data.gallery.map((g) => ({
    src: g.src,
    caption: g.caption,
    alt: g.alt,
    srcset: g.srcset,
  }));

  return (
    <>
      {/* ====== PAGE HERO (stacked) ====== */}
      <section className="page-hero stacked shell">
        <div className="page-hero-panel">
          <div className="stacked-head">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="index.html">Home</a>
                <span aria-hidden="true">/</span>
                <a href="services.html">Services</a>
                <span aria-hidden="true">/</span>
                {data.breadcrumbTitle}
              </nav>
              <h1>{data.title}</h1>
            </div>
            <div className="stacked-side">
              <p>{data.heroDesc}</p>
              <div className="page-hero-actions">
                <a href="contact.html" className="btn btn-dark">
                  Get Free Quote
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
                <a href={`projects.html?filter=${data.filterParam}`} className="btn btn-ghost">
                  View Projects
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
        <div className="page-hero-media">
          <img
            src={data.heroImg.src}
            srcSet={data.heroImg.srcset}
            sizes="100vw"
            alt={data.heroImg.alt}
            width={data.heroImg.width}
            height={data.heroImg.height}
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </section>

      {/* ====== OVERVIEW ====== */}
      <section className="shell" id="overview">
        {data.answerBox && (
          <div className="answer-box reveal">
            <span className="answer-label">Quick answer</span>
            <h2>{data.answerBox.title}</h2>
            <p>{data.answerBox.text}</p>
            <a
              href={data.answerBox.linkHref}
              dangerouslySetInnerHTML={{ __html: data.answerBox.linkText }}
            />
          </div>
        )}

        <div className="split align-start">
          <div className="reveal">
            <span className="section-label">Overview</span>
            <h2 className="section-title">{data.overview.title}</h2>
          </div>
          <div className="split-content reveal">
            <p className="lead-text">{data.overview.leadText}</p>
            {data.overview.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        <div className="benefit-grid four">
          {data.benefits.map((b, idx) => (
            <div
              key={idx}
              className="benefit-card reveal"
              style={{ transitionDelay: `${0.05 + idx * 0.07}s` }}
            >
              <span className="benefit-icon" dangerouslySetInnerHTML={{ __html: b.icon }} />
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== WHAT WE BUILD ====== */}
      {data.features && (
        <section className="shell" id="features">
          <div className="panel dark feature-panel">
            <div className="feature-panel-content reveal">
              <span className="section-label">What We Build</span>
              <h2 className="section-title">{data.features.title}</h2>
              <ul className="check-list two">
                {data.features.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              <p className="feature-ideal">Ideal for</p>
              <ul className="chips">
                {data.features.chips.map((chip, idx) => (
                  <li key={idx} className="chip">
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="feature-panel-media">
              <img
                width={data.features.width}
                height={data.features.height}
                src={data.features.imgSrc}
                alt={data.features.imgAlt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>
      )}

      {/* ====== GALLERY ====== */}
      {data.gallery.length > 0 && (
        <section className="shell" id="gallery">
          <div className="section-head split reveal">
            <div>
              <span className="section-label">Gallery</span>
              <h2 className="section-title">From our sites</h2>
            </div>
            <p className="section-aside">
              Real FERROGRID work — <span>tap any photo to view it full screen.</span>
            </p>
          </div>
          <div className={`photo-gallery ${data.galleryCountClass} reveal`}>
            {data.gallery.map((item, idx) => (
              <figure
                key={idx}
                onClick={() => openLightbox(lightboxItems, idx)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={item.src}
                  srcSet={item.srcset}
                  sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                  width={item.width || 1400}
                  height={item.height || 1050}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ====== RELATED PROJECTS ====== */}
      {relatedProjects.length > 0 && (
        <section className="shell" id="related">
          <div className="section-head split reveal">
            <div>
              <span className="section-label">Projects</span>
              <h2 className="section-title">Related projects</h2>
            </div>
            <a href={`projects.html?filter=${data.filterParam}`} className="btn btn-ghost">
              View All Projects
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
          <div className="projects-grid">
            {relatedProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} delayIndex={idx} />
            ))}
          </div>
        </section>
      )}

      {/* ====== FAQ ====== */}
      {data.faqs.length > 0 && (
        <section className="shell" id="faq">
          <div className="faq-layout">
            <div className="section-head reveal">
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Questions about {data.breadcrumbTitle.toLowerCase()}</h2>
              <p>
                More answers in our <a href="faq.html">ferrocement FAQ</a>, or{' '}
                <a href="contact.html">contact our team</a> — we respond within 24 hours.
              </p>
            </div>
            <div className="faq-list reveal">
              {data.faqs.map((faq, idx) => (
                <details key={idx} className="faq-item">
                  <summary>
                    {faq.q}
                    <span className="faq-icon" aria-hidden="true"></span>
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== OTHER SERVICES ====== */}
      <section className="shell" id="other-services">
        <div className="section-head split reveal">
          <div>
            <span className="section-label">Explore More</span>
            <h2 className="section-title">Other services</h2>
          </div>
          <a href="services.html" className="btn btn-ghost">
            All Services
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
        <div className="mini-grid">
          {otherServices.map((svc) => (
            <a key={svc.slug} href={svc.slug} className="mini-card reveal">
              <img src={svc.thumb} alt="" width="72" height="72" loading="lazy" />
              <span>
                <strong>{svc.shortTitle}</strong>
                <small>{svc.tagline}</small>
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

      {/* ====== FINAL CTA ====== */}
      <FinalCta />
    </>
  );
};
