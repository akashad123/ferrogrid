import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function initLenis(): Lenis | null {
  if (typeof window === 'undefined') return null;

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (finePointer && !reduceMotion) {
    if (lenisInstance) return lenisInstance;

    lenisInstance = new Lenis({
      lerp: 0.1,
      autoRaf: true,
      allowNestedScroll: true,
      stopInertiaOnNavigate: true,
    });

    (window as unknown as { ferroScroll: Lenis }).ferroScroll = lenisInstance;
    return lenisInstance;
  }

  return null;
}

export function stopLenis(): void {
  if (lenisInstance) {
    lenisInstance.stop();
  }
}

export function startLenis(): void {
  if (lenisInstance) {
    lenisInstance.start();
  }
}

export function destroyLenis(): void {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
    delete (window as unknown as { ferroScroll?: Lenis }).ferroScroll;
  }
}

export function smoothScrollTo(target: Element | string | number): void {
  if (typeof window === 'undefined') return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target as HTMLElement);
  } else if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (target instanceof Element) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
  }
}
