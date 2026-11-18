import React from 'react';

export const NotFoundPage: React.FC = () => {
  return (
    <section className="page-hero simple error-page shell">
      <div className="page-hero-panel">
        <span className="error-code" aria-hidden="true">
          404
        </span>
        <h1>Page not found</h1>
        <p>The page you're looking for has moved or doesn't exist. Let's get you back on solid ground.</p>
        <div className="page-hero-actions">
          <a href="index.html" className="btn btn-dark">
            Back to Home
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
          <a href="projects.html" className="btn btn-ghost">
            View Projects
          </a>
          <a href="contact.html" className="btn btn-ghost">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
