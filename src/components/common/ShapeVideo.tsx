import React, { useRef, useState, useEffect } from 'react';

interface ShapeStep {
  from: number;
  num: string;
  title: string;
  desc: string;
}

const STEPS: ShapeStep[] = [
  { from: 0, num: '01', title: 'Steel Skeleton', desc: 'Rebar frame shaped to exact structure contours' },
  { from: 2.8, num: '02', title: 'Wire Mesh Layers', desc: 'Multiple layers of fine woven steel mesh tied tightly' },
  { from: 5.6, num: '03', title: 'Mortar Penetration', desc: 'Rich, dense cement mortar packed completely through mesh' },
  { from: 8.4, num: '04', title: 'Monolithic Shell', desc: 'Seamless, waterproof, curved shell cured to high strength' },
];

export const ShapeVideo: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    const base = 'images/ferrocement_video/ferrocement-takes-shape';
    const phone = window.matchMedia('(max-width: 768px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let userPaused = reduceMotion;
    setIsPaused(userPaused);
    let currentSrc = '';
    let animId = 0;
    let inView = false;

    const chooseSrc = () => {
      const shape = phone.matches ? 'square' : 'wide';
      return `${base}-${shape}-720`;
    };

    const load = () => {
      const src = chooseSrc();
      if (src === currentSrc) return;
      currentSrc = src;
      setIsPlaying(false);
      video.innerHTML = `
        <source src="${src}.webm" type='video/webm; codecs="vp9"'>
        <source src="${src}.mp4" type="video/mp4">
      `;
      video.load();
    };

    const paintSteps = () => {
      const t = video.currentTime || 0;
      let cur = 0;
      for (let i = 0; i < STEPS.length; i++) {
        if (t >= STEPS[i].from) cur = i;
      }
      setActiveStepIndex(cur);
    };

    const tick = () => {
      paintSteps();
      if (!video.paused) {
        animId = requestAnimationFrame(tick);
      }
    };

    const play = () => {
      if (userPaused || !inView || document.hidden) return;
      load();
      video.play().catch(() => setIsPaused(true));
    };

    video.addEventListener('playing', () => {
      setIsPlaying(true);
      setIsPaused(false);
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(tick);
    });

    video.addEventListener('pause', () => {
      setIsPaused(true);
      paintSteps();
    });

    video.addEventListener('timeupdate', paintSteps);

    let obs: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      obs = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          if (inView) play();
          else video.pause();
        },
        { threshold: 0.25 }
      );
      obs.observe(wrap);
    } else {
      inView = true;
      play();
    }

    return () => {
      cancelAnimationFrame(animId);
      video.removeEventListener('timeupdate', paintSteps);
      obs?.disconnect();
    };
  }, []);

  const jumpTo = (time: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = time + 0.05;
    video.play().catch(() => {});
    setIsPaused(false);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <div
      ref={wrapRef}
      className={`shape-video-block ${isPlaying ? 'is-playing' : ''}`}
      data-shape-video
      data-src-base="images/ferrocement_video/ferrocement-takes-shape"
    >
      <div className="shape-video-frame">
        <video
          ref={videoRef}
          className="shape-video"
          muted
          playsInline
          loop
          preload="none"
          aria-label="Animation showing the four steps of building with ferrocement"
        />
        <button
          type="button"
          className={`shape-video-toggle ${isPaused ? 'is-paused' : ''}`}
          aria-label={isPaused ? 'Play animation' : 'Pause animation'}
          onClick={togglePlay}
        >
          <svg className="icon-pause" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="5" y="4" width="4" height="16" rx="1" />
            <rect x="15" y="4" width="4" height="16" rx="1" />
          </svg>
          <svg className="icon-play" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 4.5v15l12-7.5-12-7.5z" />
          </svg>
        </button>
      </div>

      <div className="shape-steps">
        {STEPS.map((step, idx) => (
          <div
            key={step.num}
            className={`shape-step ${activeStepIndex === idx ? 'is-active' : ''}`}
            data-from={step.from}
          >
            <button
              type="button"
              onClick={() => jumpTo(step.from)}
              aria-label={`Jump to step ${step.num}: ${step.title}`}
            >
              <span className="step-badge">{step.num}</span>
              <div className="step-body">
                <strong>{step.title}</strong>
                <p>{step.desc}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
