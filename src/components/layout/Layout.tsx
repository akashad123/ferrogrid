import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { PhotoLightbox } from '../common/PhotoLightbox';
import { LightboxProvider, useLightbox } from '../../lib/lightboxContext';
import { initLenis, destroyLenis } from '../../lib/lenis';
import { LightboxItem } from '../../types';

interface LayoutProps {
  currentPath?: string;
  children: React.ReactNode;
}

// Inner component that attaches global click listeners for lightbox images
const LightboxAttacher: React.FC = () => {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const hit = target.closest(
        '.photo-gallery figure, .project-card-img, .fleet-item, .about-photo, .journey-card, .mosaic figure, .split-media, .feature-panel-media, .timeline-media'
      );
      if (!hit) return;

      const scope =
        hit.closest(
          '.photo-gallery, .projects-grid, .fleet-grid, .carousel-track, .mosaic'
        ) || hit;

      const items: LightboxItem[] = [];
      const nodes = Array.from(
        scope.matches(
          '.photo-gallery figure, .project-card-img, .fleet-item, .about-photo, .journey-card, .mosaic figure, .split-media, .feature-panel-media, .timeline-media'
        )
          ? [scope]
          : scope.querySelectorAll(
              '.photo-gallery figure, .project-card-img, .fleet-item, .about-photo, .journey-card, .mosaic figure, .split-media, .feature-panel-media, .timeline-media'
            )
      ) as HTMLElement[];

      let clickedIndex = 0;
      nodes.forEach((node, i) => {
        const img = node.querySelector('img') || (node.tagName === 'IMG' ? (node as HTMLImageElement) : null);
        if (!img) return;

        const captionNode =
          node.querySelector('figcaption') ||
          node.closest('.project-card')?.querySelector('.project-card-title') ||
          node.querySelector('strong');

        const caption = captionNode ? captionNode.textContent?.trim() || '' : img.alt || '';

        items.push({
          src: img.currentSrc || img.src,
          alt: img.alt || caption,
          caption,
        });

        if (node === hit || node.contains(hit)) {
          clickedIndex = i;
        }
      });

      if (items.length > 0) {
        e.preventDefault();
        openLightbox(items, clickedIndex, hit as HTMLElement);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [openLightbox]);

  return null;
};

export const Layout: React.FC<LayoutProps> = ({ currentPath = '', children }) => {
  useEffect(() => {
    // 1. Initialize Lenis smooth scroll
    initLenis();

    // 2. IntersectionObserver for reveal elements
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    let revealObserver: IntersectionObserver | null = null;

    if ('IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );
      revealElements.forEach((el) => revealObserver?.observe(el));
    } else {
      revealElements.forEach((el) => el.classList.add('revealed'));
    }

    // 3. Animated counters [data-count]
    const counters = document.querySelectorAll('[data-count]');
    let counterObserver: IntersectionObserver | null = null;

    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.getAttribute('data-count') || '0', 10);
      if (Number.isNaN(target)) return;

      let current = 0;
      const increment = target / 60;
      const stat = counter.closest('.hero-stat');
      const label = stat ? stat.querySelector('.hero-stat-label') : null;
      const suffix =
        (counter as HTMLElement).dataset.suffix ||
        (label && label.textContent?.includes('%') ? '%' : '+');

      const update = () => {
        current += increment;
        if (current < target) {
          counter.innerHTML = `${Math.ceil(current)}<span class="stat-suffix">${suffix}</span>`;
          requestAnimationFrame(update);
        } else {
          counter.innerHTML = `${target}<span class="stat-suffix">${suffix}</span>`;
        }
      };
      update();
    };

    if ('IntersectionObserver' in window) {
      counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((c) => counterObserver?.observe(c));
    } else {
      counters.forEach(animateCounter);
    }

    // 4. Hero & section word splitting for entrance animations
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.add('js');
    document.documentElement.classList.add('is-ready');
    if (reduceMotion) {
      document.documentElement.classList.add('is-settled');
    }

    return () => {
      revealObserver?.disconnect();
      counterObserver?.disconnect();
      destroyLenis();
    };
  }, [currentPath]);

  return (
    <LightboxProvider>
      <LightboxAttacher />
      <Header currentPath={currentPath} />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
      <PhotoLightbox />
    </LightboxProvider>
  );
};
