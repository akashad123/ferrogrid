import React, { useRef, useEffect, useState } from 'react';
import { useLightbox } from '../../lib/lightboxContext';

export const PhotoLightbox: React.FC = () => {
  const { isOpen, items, currentIndex, closeLightbox, showNext, showPrev } = useLightbox();
  const [swapping, setSwapping] = useState(false);
  const swipeStartX = useRef<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const currentItem = items[currentIndex];

  useEffect(() => {
    if (isOpen && closeBtnRef.current) {
      closeBtnRef.current.focus({ preventScroll: true });
    }
  }, [isOpen]);

  if (!isOpen || !currentItem) return null;

  const pad = (n: number) => String(n).padStart(2, '0');
  const countText = `${pad(currentIndex + 1)} / ${pad(items.length)}`;

  const handlePointerDown = (e: React.PointerEvent) => {
    swipeStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (swipeStartX.current === null) return;
    const dx = e.clientX - swipeStartX.current;
    swipeStartX.current = null;
    if (Math.abs(dx) > 50) {
      if (dx < 0) showNext();
      else showPrev();
    }
  };

  const handleNext = () => {
    setSwapping(true);
    setTimeout(() => {
      showNext();
      setSwapping(false);
    }, 150);
  };

  const handlePrev = () => {
    setSwapping(true);
    setTimeout(() => {
      showPrev();
      setSwapping(false);
    }, 150);
  };

  return (
    <div
      className={`lightbox is-open`}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="lightbox-backdrop" onClick={closeLightbox} />

      <div className={`lightbox-stage ${swapping ? 'is-swapping' : ''}`}>
        <img src={currentItem.src} alt={currentItem.alt || currentItem.caption || ''} />
      </div>

      <p className="lightbox-caption">{currentItem.caption || currentItem.alt}</p>

      {items.length > 1 && <span className="lightbox-count">{countText}</span>}

      <button
        ref={closeBtnRef}
        type="button"
        className="lightbox-btn lightbox-close"
        aria-label="Close photo viewer"
        onClick={closeLightbox}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox-btn lightbox-prev"
            aria-label="Previous photo"
            onClick={handlePrev}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox-btn lightbox-next"
            aria-label="Next photo"
            onClick={handleNext}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};
