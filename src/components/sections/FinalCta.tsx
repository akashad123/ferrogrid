import React from 'react';

export const FinalCta: React.FC = () => {
  return (
    <section className="shell">
      <div className="final-cta reveal">
        <div className="final-cta-content">
          <h2>
            Ready to Build Your Resort Cottage<br />
            or Swimming Pool?
          </h2>
          <p>
            Start your project today with a free, no-obligation site consultation from our expert team.
          </p>
          <a href="contact.html" className="btn btn-light" id="finalCtaBtn">
            <span>
              <span className="cta-lead">Request a </span>Free Site Consultation
            </span>
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
  );
};
