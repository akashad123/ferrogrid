import React from 'react';
import { FAQ_GROUPS } from '@/data/faqData';
import { FinalCta } from '@/components/sections/FinalCta';

export const FaqPage: React.FC = () => {
  return (
    <>
      {/* ====== PAGE HERO ====== */}
      <section className="page-hero simple shell">
        <div className="page-hero-panel">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span aria-hidden="true">/</span>
            FAQ
          </nav>
          <h1>Ferrocement FAQ</h1>
          <p>
            Straight answers about ferrocement — how strong and waterproof it is, how long it
            lasts, what it costs, and how we build pools, cottages and underground houses.
          </p>
          <nav className="faq-jump" aria-label="FAQ topics">
            {FAQ_GROUPS.map((group) => (
              <a key={group.id} href={`#${group.id}`} className="chip-link">
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ====== FAQ GROUPS ====== */}
      {FAQ_GROUPS.map((group) => (
        <section key={group.id} className="shell faq-group" id={group.id}>
          <div className="faq-layout">
            <div className="section-head reveal">
              <span className="section-label">FAQ</span>
              <h2 className="section-title">{group.title}</h2>
            </div>
            <div className="faq-list reveal">
              {group.items.map((item, idx) => (
                <details key={idx} className="faq-item">
                  <summary>
                    {item.question}
                    <span className="faq-icon" aria-hidden="true"></span>
                  </summary>
                  <div
                    className="faq-answer"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ====== FINAL CTA ====== */}
      <FinalCta />
    </>
  );
};
