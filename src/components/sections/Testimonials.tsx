import React from 'react';
import { TESTIMONIALS } from '../../data/testimonialsData';

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials shell" id="testimonials">
      <div className="section-head center reveal">
        <span className="section-label">Client Stories</span>
        <h2 className="section-title">What Our Clients Say</h2>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, index) => (
          <figure
            key={t.id}
            className="testimonial-card reveal"
            style={{ transitionDelay: `${0.05 + index * 0.1}s` }}
          >
            <span className="testimonial-tag">{t.tag}</span>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span className="testimonial-initials" aria-hidden="true">
                {t.initials}
              </span>
              <span>
                <strong>{t.author}</strong>
                {t.location}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="testimonials-cta reveal">
        <a href="contact.html" className="btn btn-dark" id="testimonialsCtaBtn">
          Request a Free Quote
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
    </section>
  );
};
