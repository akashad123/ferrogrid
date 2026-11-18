import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      {/* ====== PAGE HERO ====== */}
      <section className="page-hero simple shell">
        <div className="page-hero-panel">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span aria-hidden="true">/</span>
            Privacy Policy
          </nav>
          <h1>Privacy Policy</h1>
          <p>How we handle information shared through this website.</p>
        </div>
      </section>

      {/* ====== LEGAL CONTENT ====== */}
      <section className="shell legal">
        <div className="legal-layout">
          <aside className="legal-aside">
            <p className="legal-updated">Last updated: June 19, 2026</p>
            <nav className="legal-toc" aria-label="On this page">
              <a href="#collect">Information We Collect</a>
              <a href="#use">How We Use Information</a>
              <a href="#forms">Form Processing</a>
              <a href="#sharing">Data Sharing</a>
              <a href="#contact-us">Contact</a>
            </nav>
          </aside>

          <div className="legal-body">
            <section id="collect">
              <h2>Information We Collect</h2>
              <p>
                When you submit an inquiry, we collect the details you provide, such as your name,
                phone number, email address, project type, location, and project message.
              </p>
            </section>

            <section id="use">
              <h2>How We Use Information</h2>
              <p>
                We use submitted details to respond to inquiries, schedule consultations, understand
                project requirements, and communicate about FERROGRID services.
              </p>
            </section>

            <section id="forms">
              <h2>Form Processing</h2>
              <p>
                Contact form submissions are processed through Web3Forms. Your information may be
                handled by that service only for the purpose of delivering your inquiry to us.
              </p>
            </section>

            <section id="sharing">
              <h2>Data Sharing</h2>
              <p>
                We do not sell inquiry details. We may share information only when needed to respond
                to your project request, comply with law, or protect our business operations.
              </p>
            </section>

            <section id="contact-us">
              <h2>Contact</h2>
              <p>
                For privacy questions, contact us at{' '}
                <a href="mailto:info@ferrogrid.in">info@ferrogrid.in</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
