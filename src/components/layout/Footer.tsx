import React from 'react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../data/navigationData';

export const Footer: React.FC = () => {
  return (
    <footer className="shell">
      <div className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <img
                className="brand-mark"
                src="images/logo-mark.webp"
                alt=""
                width="52"
                height="52"
                loading="lazy"
              />
              <span className="brand-text">
                <span className="brand-name">
                  FERRO<span>GRID</span>
                </span>
                <span className="brand-tagline">The Ferro Crete Developers</span>
              </span>
            </div>
            <p>
              Ferrocement construction specialists with 26+ years of experience. We design and build
              durable, beautiful, and cost-effective structures across Kerala, Karnataka and Tamil Nadu.
            </p>
            <div className="footer-socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                >
                  {s.name === 'Facebook' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {s.name === 'Instagram' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg>
                  )}
                  {s.name === 'LinkedIn' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  )}
                  {s.name === 'YouTube' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="service-swimming-pools.html">Swimming Pools</a>
              </li>
              <li>
                <a href="service-resort-cottages.html">Resort Cottages</a>
              </li>
              <li>
                <a href="service-eco-friendly-huts.html">Eco-Friendly Huts</a>
              </li>
              <li>
                <a href="service-underground-houses.html">Underground Houses</a>
              </li>
              <li>
                <a href="service-farm-stay-buildings.html">Farm Stay Buildings</a>
              </li>
              <li>
                <a href="service-water-features.html">Water Features</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="projects.html">Our Projects</a>
              </li>
              <li>
                <a href="ferrocement.html">Ferrocement</a>
              </li>
              <li>
                <a href="process.html">Our Process</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li>
                <a href="index.html#testimonials">Client Reviews</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a>
              </li>
              <li>
                <a href={CONTACT_INFO.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a>
              </li>
              <li>
                <a href="contact.html#map">Office Location</a>
              </li>
              <li>
                <a href={CONTACT_INFO.googleMap} target="_blank" rel="noopener noreferrer">
                  Find us on Google
                </a>
              </li>
            </ul>
            <p className="footer-address">{CONTACT_INFO.address}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 FERROGRID. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
