import React, { useRef, useEffect } from 'react';
import { BRANDS } from '../../data/brandsData';

export const BrandsMarquee: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Check prefers-reduced-motion
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let animId = 0;
    let x = 0;
    let isHovered = false;
    let lastTime = performance.now();

    const group = track.querySelector('.marquee-group') as HTMLElement;
    if (!group) return;

    const width = group.offsetWidth;

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 50) / 1000;
      lastTime = now;

      const speed = isHovered ? 15 : 45;
      x = (x - speed * dt) % width;
      if (x > 0) x -= width;

      track.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    const onEnter = () => { isHovered = true; };
    const onLeave = () => { isHovered = false; };

    track.addEventListener('mouseenter', onEnter);
    track.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener('mouseenter', onEnter);
      track.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="brands shell" aria-label="Brands we build with">
      <div className="brands-band">
        <p className="brands-label">Brands We Build With</p>
        <div className="marquee-row" data-direction="-1">
          <div className="marquee-track" ref={trackRef}>
            <div className="marquee-group">
              {BRANDS.map((brand, i) => (
                <span key={`b1-${i}`} className="brand-chip">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    decoding="async"
                  />
                </span>
              ))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {BRANDS.map((brand, i) => (
                <span key={`b2-${i}`} className="brand-chip">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    decoding="async"
                  />
                </span>
              ))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {BRANDS.map((brand, i) => (
                <span key={`b3-${i}`} className="brand-chip">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    decoding="async"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
