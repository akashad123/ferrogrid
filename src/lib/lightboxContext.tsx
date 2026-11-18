import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { LightboxItem } from '../types';
import { stopLenis, startLenis } from './lenis';

interface LightboxContextType {
  isOpen: boolean;
  items: LightboxItem[];
  currentIndex: number;
  openLightbox: (items: LightboxItem[], index: number, sourceEl?: HTMLElement | null) => void;
  closeLightbox: () => void;
  showNext: () => void;
  showPrev: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openLightbox = useCallback((newItems: LightboxItem[], index: number, sourceEl?: HTMLElement | null) => {
    if (!newItems.length) return;
    setItems(newItems);
    setCurrentIndex(Math.max(0, Math.min(index, newItems.length - 1)));
    triggerRef.current = sourceEl || (document.activeElement as HTMLElement);
    setIsOpen(true);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('lightbox-open');
    }
    stopLenis();
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('lightbox-open');
    }
    startLenis();
    if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
      triggerRef.current.focus({ preventScroll: true });
    }
  }, []);

  const showNext = useCallback(() => {
    if (items.length < 2) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const showPrev = useCallback(() => {
    if (items.length < 2) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') showNext();
      else if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, showNext, showPrev]);

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        items,
        currentIndex,
        openLightbox,
        closeLightbox,
        showNext,
        showPrev,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = (): LightboxContextType => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
