import React, { useState, useEffect, useRef } from 'react';
import { SERVICES_MEGA_ITEMS, SOCIAL_LINKS, CONTACT_INFO } from '../../data/navigationData';
import { stopLenis, startLenis } from '../../lib/lenis';

interface HeaderProps {
  currentPath?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  const lastScrollY = useRef(0);
  const navLinksRef = useRef<HTMLElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  // Scroll effect for header (shrink on 60px, auto-hide on 240px scroll down)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(y > 60);

          const delta = y - lastScrollY.current;
          if (y < 240 || isMenuOpen) {
            setIsHidden(false);
          } else if (delta > 3) {
            setIsHidden(true);
          } else if (delta < -3) {
            setIsHidden(false);
          }
          lastScrollY.current = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (isMenuOpen) {
      document.documentElement.classList.add('menu-open');
      stopLenis();
    } else {
      document.documentElement.classList.remove('menu-open');
      setIsSubOpen(false);
      startLenis();
    }
  }, [isMenuOpen]);

  // Close mobile menu on Escape key or window resize > 1240px
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1240 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Close when clicking outside mobile drawer
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        navLinksRef.current &&
        !navLinksRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSub = () => setIsSubOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`site-header ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'header-hidden' : ''}`}
      id="navbar"
    >
      <div className="shell">
        <div className="header-inner">
          <div className="header-left">
            <a href="index.html" className="brand" id="navBrand" aria-label="FERROGRID home">
              <img className="brand-mark" src="images/logo-mark.webp" alt="" width="38" height="38" />
              <span className="brand-text">
                <span className="brand-name">
                  FERRO<span>GRID</span>
                </span>
                <span className="brand-tagline">The Ferro Crete Developers</span>
              </span>
            </a>

            <nav
              ref={navLinksRef}
              className={`nav-links ${isMenuOpen ? 'open' : ''}`}
              id="navLinks"
              data-lenis-prevent
              aria-label="Main navigation"
            >
              <a
                href="about.html"
                className={currentPath === 'about.html' ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </a>

              <div className={`nav-item has-menu ${isSubOpen ? 'sub-open' : ''}`}>
                <a
                  href="services.html"
                  className={`nav-trigger ${currentPath.startsWith('service') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Services
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </a>

                <button
                  type="button"
                  className="nav-sub-toggle"
                  aria-expanded={isSubOpen}
                  aria-controls="navServices"
                  aria-label={isSubOpen ? 'Hide services' : 'Show services'}
                  onClick={toggleSub}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div className="mega-menu" id="navServices">
                  <div className="mega-grid">
                    {SERVICES_MEGA_ITEMS.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="mega-link"
                        onClick={closeMenu}
                      >
                        <img src={item.thumb} alt="" width="52" height="52" loading="lazy" />
                        <span>
                          <strong>{item.title}</strong>
                          <small>{item.subtitle}</small>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mega-foot">
                    <a href="services.html" onClick={closeMenu}>
                      All services &rarr;
                    </a>
                    <a href="process.html" onClick={closeMenu}>
                      How we work &rarr;
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="projects.html"
                className={currentPath.startsWith('project') ? 'active' : ''}
                onClick={closeMenu}
              >
                Projects
              </a>
              <a
                href="ferrocement.html"
                className={currentPath === 'ferrocement.html' ? 'active' : ''}
                onClick={closeMenu}
              >
                Ferrocement
              </a>
              <a
                href="contact.html"
                className={currentPath === 'contact.html' ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </a>

              <div className="nav-cta">
                <a href="contact.html" className="btn btn-dark" onClick={closeMenu}>
                  Get Free Consultation
                </a>
              </div>

              <div className="sidebar-socials">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                  >
                    {s.name === 'Facebook' && (
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {s.name === 'Instagram' && (
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                      </svg>
                    )}
                    {s.name === 'LinkedIn' && (
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    )}
                    {s.name === 'YouTube' && (
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div className="header-actions">
            <a href="contact.html" className="pill">
              <span className="pill-dot" />
              Get Free Consultation
            </a>
            <a href={CONTACT_INFO.phoneHref} className="pill">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {CONTACT_INFO.phone}
            </a>
          </div>

          <button
            ref={hamburgerRef}
            type="button"
            className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`}
            id="navHamburger"
            aria-label="Toggle navigation menu"
            aria-controls="navLinks"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};
