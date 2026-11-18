import React, { useRef, useState, useEffect, useCallback } from 'react';

interface ProjectCarouselProps {
  children: React.ReactNode;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ children }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth - 2;
    setCanPrev(track.scrollLeft > 2);
    setCanNext(track.scrollLeft < max);
  }, []);

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 300;
    const card = track.firstElementChild as HTMLElement;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
  };

  const handlePrev = () => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: -getStep(), behavior: 'smooth' });
  };

  const handleNext = () => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: getStep(), behavior: 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateButtons();
    track.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);

    // Draggable track on mouse pointer
    let dragging = false;
    let moved = false;
    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      dragging = true;
      moved = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) {
        moved = true;
        track.classList.add('is-dragging');
      }
      if (moved) track.scrollLeft = startScroll - dx;
    };

    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      if (!moved) return;
      const step = getStep();
      const target = Math.round(track.scrollLeft / step) * step;
      track.classList.remove('is-dragging');
      track.scrollTo({ left: target, behavior: 'smooth' });
    };

    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    track.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    track.addEventListener('click', onClickCapture, true);

    return () => {
      track.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
      track.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      track.removeEventListener('click', onClickCapture, true);
    };
  }, [updateButtons]);

  return (
    <div className="carousel" data-carousel>
      <div ref={trackRef} className="carousel-track" data-carousel-track>
        {children}
      </div>

      <div className="carousel-nav">
        <button
          type="button"
          className="carousel-btn prev"
          data-carousel-prev
          aria-label="Previous slide"
          disabled={!canPrev}
          onClick={handlePrev}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className="carousel-btn next"
          data-carousel-next
          aria-label="Next slide"
          disabled={!canNext}
          onClick={handleNext}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
