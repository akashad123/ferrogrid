import React, { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'network-error';

export const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: '',
    location: '',
    message: '',
    botcheck: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Honeypot check
    if (formData.botcheck) {
      setStatus('success');
      return;
    }

    try {
      const body = new FormData();
      body.append('access_key', '096fea7a-8158-4f2f-a358-c2f212d6f567');
      body.append('fullName', formData.fullName);
      body.append('phone', formData.phone);
      body.append('email', formData.email);
      body.append('projectType', formData.projectType);
      body.append('location', formData.location);
      body.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
      });

      const data = await response.json();

      if (response.ok && data.success !== false) {
        setStatus('success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          projectType: '',
          location: '',
          message: '',
          botcheck: false,
        });
      } else {
        setStatus('error');
        console.error(data.message || 'Form submission failed.');
      }
    } catch (err) {
      setStatus('network-error');
      console.error(err);
    } finally {
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  return (
    <>
      {/* ====== PAGE HERO ====== */}
      <section className="page-hero shell">
        <div className="page-hero-panel">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span aria-hidden="true">/</span>
            Contact
          </nav>
          <h1>Contact Us</h1>
          <p>
            Have questions about ferrocement construction or want a custom design? We're here to
            help build your vision.
          </p>
          <div className="page-hero-actions">
            <a href="#inquiryForm" className="btn btn-dark">
              Request Free Consultation
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
            <a
              href="https://wa.me/916235029900"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              WhatsApp Us
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
        <div className="page-hero-media">
          <img
            srcSet="images/project/sculpted-cave-cottages-ferrocement-800w.webp 800w, images/project/sculpted-cave-cottages-ferrocement.webp 1586w"
            sizes="100vw"
            src="images/project/sculpted-cave-cottages-ferrocement.webp"
            alt="Stone path leading to sculpted ferrocement cave cottages"
            width={1586}
            height={992}
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </section>

      {/* ====== CONTACT SECTION ====== */}
      <section className="shell contact" id="contact">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item reveal">
              <span className="contact-item-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div className="contact-item-content">
                <h4>Phone</h4>
                <a href="tel:+916235029900">062350 29900</a>
                <p>Mon — Sat, 9:00 AM to 5:00 PM (Closed Sundays)</p>
              </div>
            </div>

            <div className="contact-item reveal" style={{ transitionDelay: '0.05s' }}>
              <span className="contact-item-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <div className="contact-item-content">
                <h4>WhatsApp</h4>
                <a href="https://wa.me/916235029900" target="_blank" rel="noopener noreferrer">
                  062350 29900
                </a>
                <p>Quick responses, Monday to Saturday</p>
              </div>
            </div>

            <div className="contact-item reveal" style={{ transitionDelay: '0.1s' }}>
              <span className="contact-item-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </span>
              <div className="contact-item-content">
                <h4>Email</h4>
                <a href="mailto:info@ferrogrid.in">info@ferrogrid.in</a>
                <p>We respond within 24 hours</p>
              </div>
            </div>

            <div className="contact-item dark reveal" style={{ transitionDelay: '0.15s' }}>
              <span className="contact-item-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div className="contact-item-content">
                <h4>Office</h4>
                <p>
                  FERROGRID
                  <br />
                  Anugraha Complex, SBM 15/1077, above SBI,
                  <br />
                  Sultan Bathery, Keralam 673592
                </p>
                <a
                  href="https://share.google/7NXniVBUS8ZVzJ3dT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-google"
                >
                  See us on Google &rarr;
                </a>
                <p className="contact-areas">
                  Serving Kerala, Karnataka and Tamil Nadu — expanding pan-India and
                  internationally.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form panel reveal" id="inquiryForm">
            <h3>Request a Free Consultation</h3>
            <p>Fill in your details and our team will get back to you within 24 hours.</p>
            <form id="contactForm" onSubmit={handleSubmit}>
              {/* Honeypot Spam Protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                checked={formData.botcheck}
                onChange={handleChange}
              />

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your full name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option value="swimming-pool">Swimming Pool</option>
                    <option value="resort-cottage">Resort Cottage</option>
                    <option value="eco-hut">Eco-Friendly Hut</option>
                    <option value="underground">Underground Structure</option>
                    <option value="farm-stay">Farm Stay Building</option>
                    <option value="water-feature">Water Feature</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="location">Project Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project — size, timeline, budget range, any special requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-submit">
                  <button
                    type="submit"
                    className="btn btn-dark"
                    id="submitBtn"
                    disabled={status === 'loading'}
                    style={{
                      opacity: status === 'loading' ? 0.8 : 1,
                      background: status === 'success' ? 'var(--clr-green)' : undefined,
                    }}
                  >
                    {status === 'loading' && 'Sending...'}
                    {status === 'success' && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        ✓ Request Sent Successfully!
                      </span>
                    )}
                    {status === 'error' && '❌ Error Sending'}
                    {status === 'network-error' && '❌ Network Error'}
                    {status === 'idle' && (
                      <>
                        Request Free Consultation
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
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ====== MAP SECTION ====== */}
      <section className="shell map-section" id="map">
        <div className="map-container reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4266753265965!2d76.25680337505513!3d11.66414388854378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6093b42ef6e75%3A0xb4169f3bb3e6c86d!2sFerrogrid!5e0!3m2!1sen!2sin!4v1791404911104!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="FERROGRID office location — Anugraha Complex, SBM 15/1077, above SBI, Sultan Bathery, Keralam 673592"
          />
        </div>
      </section>
    </>
  );
};
