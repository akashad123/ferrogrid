import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <>
      {/* ====== PAGE HERO ====== */}
      <section className="page-hero simple shell">
        <div className="page-hero-panel">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span aria-hidden="true">/</span>
            Terms of Service
          </nav>
          <h1>Terms of Service</h1>
          <p>Terms for using this website and sending project inquiries.</p>
        </div>
      </section>

      {/* ====== LEGAL CONTENT ====== */}
      <section className="shell legal">
        <div className="legal-layout">
          <aside className="legal-aside">
            <p className="legal-updated">Last updated: June 19, 2026</p>
            <nav className="legal-toc" aria-label="On this page">
              <a href="#website-use">Website Use</a>
              <a href="#project-info">Project Information</a>
              <a href="#inquiries">Inquiry Submissions</a>
              <a href="#external">External Services</a>
              <a href="#contact-us">Contact</a>
            </nav>
          </aside>

          <div className="legal-body">
            <section id="website-use">
              <h2>Website Use</h2>
              <p>
                This website provides general information about FERROGRID services, projects, and
                contact options. You agree to use it lawfully and not interfere with its operation.
              </p>
            </section>

            <section id="project-info">
              <h2>Project Information</h2>
              <p>
                Images, descriptions, sizes, timelines, and service details are provided for general
                reference. Final scope, pricing, specifications, and timelines are confirmed only
                through written project discussions or agreements.
              </p>
            </section>

            <section id="inquiries">
              <h2>Inquiry Submissions</h2>
              <p>
                When you submit an inquiry, you confirm that the information provided is accurate
                enough for us to contact you and understand your project request.
              </p>
            </section>

            <section id="external">
              <h2>External Services</h2>
              <p>
                This website may link to external platforms such as WhatsApp, social media pages,
                Google Maps, and Web3Forms. Their own terms and privacy practices apply when you use
                those services.
              </p>
            </section>

            <section id="contact-us">
              <h2>Contact</h2>
              <p>
                For questions about these terms, contact us at{' '}
                <a href="mailto:info@ferrogrid.in">info@ferrogrid.in</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
