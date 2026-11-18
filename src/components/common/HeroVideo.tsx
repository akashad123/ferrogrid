import React, { useRef, useState, useEffect } from 'react';

interface HeroVideoProps {
  srcBase?: string;
  portraitPoster?: string;
  landscapePoster?: string;
  alt?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  srcBase = 'images/hero_video/hero-v2',
  portraitPoster = 'images/hero_video/hero-v2-poster-portrait.webp',
  landscapePoster = 'images/hero_video/hero-v2-poster-landscape.webp',
  alt = 'Grass-roofed ferrocement cave cottages in the hills, built by FERROGRID',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [ringProgress, setRingProgress] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const connection = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection || {};
    const lowData = !!connection.saveData || /(^|-)2g$/.test(connection.effectiveType || '');
    const slowNetwork = connection.effectiveType === '3g';
    const autoplayAllowed = !reduceMotion && !lowData;

    let userPaused = !autoplayAllowed;
    setIsPaused(userPaused);
    let currentBase = '';
    let animFrame = 0;
    let inView = true;

    const chooseBase = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      const orientation = isPortrait ? 'portrait' : 'landscape';
      const box = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = box.width * dpr;
      const h = box.height * dpr;
      const needsHD = orientation === 'portrait' ? w > 520 || h > 920 : w > 900 || h > 520;
      const size = needsHD && !slowNetwork ? 1080 : 720;
      return `${srcBase}-${orientation}-${size}`;
    };

    const drawRing = () => {
      if (video.duration) {
        setRingProgress(1 - video.currentTime / video.duration);
      }
      if (!video.paused) {
        animFrame = requestAnimationFrame(drawRing);
      }
    };

    const tryPlay = () => {
      if (userPaused || !inView || document.hidden || !currentBase) return;
      video.play().catch(() => {
        setIsPaused(true);
      });
    };

    const loadSource = () => {
      const base = chooseBase();
      if (base === currentBase) return;
      currentBase = base;
      setIsPlaying(false);
      video.innerHTML = `
        <source src="${base}.webm" type='video/webm; codecs="vp9"'>
        <source src="${base}.mp4" type="video/mp4">
      `;
      video.load();
      tryPlay();
    };

    const handlePlaying = () => {
      setIsPlaying(true);
      setIsPaused(false);
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(drawRing);
    };

    const handlePause = () => {
      setIsPaused(true);
    };

    video.addEventListener('playing', handlePlaying);
    video.addEventListener('pause', handlePause);

    // Initial delayed load
    const timer = setTimeout(() => {
      setShowToggle(true);
      if (!userPaused) {
        loadSource();
      }
    }, 400);

    // IntersectionObserver to pause video off-screen
    let obs: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      obs = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          if (inView) {
            tryPlay();
          } else {
            video.pause();
          }
        },
        { threshold: 0.05 }
      );
      obs.observe(wrap);
    }

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        tryPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (!userPaused) loadSource();
      }, 350);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      cancelAnimationFrame(animFrame);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', handleResize);
      obs?.disconnect();
    };
  }, [srcBase]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setIsPaused(false);
      video.play().catch(() => setIsPaused(true));
    } else {
      setIsPaused(true);
      video.pause();
    }
  };

  return (
    <>
      <div
        ref={wrapRef}
        className={`hero-video-wrap ${isPlaying ? 'is-playing' : ''}`}
        data-hero-video
        data-src-base={srcBase}
      >
        <picture className="hero-poster">
          <source media="(max-aspect-ratio: 3/4)" srcSet={portraitPoster} />
          <img
            src={landscapePoster}
            alt={alt}
            width={1920}
            height={1080}
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        <video
          ref={videoRef}
          className="hero-video"
          muted
          playsInline
          loop
          preload="none"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>

      <div className="hero-shade" aria-hidden="true" />

      {showToggle && (
        <div className="hero-below">
          <button
            type="button"
            className={`hero-video-toggle ${isPaused ? 'is-paused' : ''}`}
            aria-label={isPaused ? 'Play background video' : 'Pause background video'}
            onClick={togglePlay}
          >
            <svg className="hero-video-ring" viewBox="0 0 48 48" aria-hidden="true">
              <circle className="ring-track" cx="24" cy="24" r="22" />
              <circle
                className="ring-progress"
                cx="24"
                cy="24"
                r="22"
                style={{ strokeDashoffset: ringProgress }}
              />
            </svg>
            <span className="toggle-icon">
              <svg
                className="icon-pause"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="5" y="4" width="4" height="16" rx="1" />
                <rect x="15" y="4" width="4" height="16" rx="1" />
              </svg>
              <svg
                className="icon-play"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 4.5v15l12-7.5-12-7.5z" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </>
  );
};
