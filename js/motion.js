/**
 * FERROGRID — Motion & interaction layer
 * Hero entrance, split-word headline reveals, an interactive
 * ferro-mesh in the hero, scroll parallax, magnetic buttons, tilt cards,
 * a custom cursor, marquee, process progress, draggable carousel and a
 * photo lightbox. Decorative motion is skipped when the visitor prefers
 * reduced motion.
 */

(() => {
  'use strict';

  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  // ===== Smooth wheel scrolling =====
  // Mouse wheels and trackpads get eased, inertial scrolling. Touch screens keep the browser's own
  // momentum scroll, which already feels natural and stays locked to the finger.
  if (window.Lenis && finePointer && !reduceMotion) {
    const lenis = new window.Lenis({
      lerp: 0.1,
      autoRaf: true,
      allowNestedScroll: true,
      stopInertiaOnNavigate: true
    });
    window.ferroScroll = lenis;

    // Hold the page still behind the open menu or photo viewer
    let locked = false;
    new MutationObserver(() => {
      const shouldLock = root.classList.contains('menu-open') || root.classList.contains('lightbox-open');
      if (shouldLock === locked) return;
      locked = shouldLock;
      if (locked) lenis.stop();
      else lenis.start();
    }).observe(root, { attributes: true, attributeFilter: ['class'] });
  }

  // ===== Shared scroll loop =====
  const scrollTasks = [];
  let scrollQueued = false;
  const runScrollTasks = () => {
    scrollQueued = false;
    const y = window.scrollY;
    scrollTasks.forEach(task => task(y));
  };
  const queueScroll = () => {
    if (!scrollQueued) {
      scrollQueued = true;
      requestAnimationFrame(runScrollTasks);
    }
  };
  window.addEventListener('scroll', queueScroll, { passive: true });
  window.addEventListener('resize', queueScroll);

  const onceInView = (elements, callback, threshold = 0.2) => {
    if (!('IntersectionObserver' in window)) {
      elements.forEach(callback);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin: '0px 0px -40px 0px' });
    elements.forEach(el => observer.observe(el));
  };

  // ===== Split text into word spans =====
  const splitText = (el, makeWord) => {
    let index = 0;
    const walk = (node) => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            frag.appendChild(/^\s+$/.test(part) ? document.createTextNode(' ') : makeWord(part, index++));
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
          walk(child);
        }
      });
    };
    walk(el);
  };

  const maskedWord = (text, i) => {
    const word = document.createElement('span');
    const inner = document.createElement('span');
    word.className = 'word';
    inner.className = 'word-inner';
    inner.style.setProperty('--wi', i);
    inner.textContent = text;
    word.appendChild(inner);
    return word;
  };

  const splitWords = (el) => {
    if (el.classList.contains('split-words')) return;
    splitText(el, maskedWord);
    el.classList.add('split-words');
  };

  // ===== Hero entrance =====
  const heroTitles = [...document.querySelectorAll('.hero-title, .page-hero h1')];
  let pageRevealed = false;

  const revealPage = () => {
    if (pageRevealed) return;
    pageRevealed = true;
    root.classList.add('is-ready');
    heroTitles.forEach(title => title.classList.add('is-in'));
    setTimeout(() => root.classList.add('is-settled'), 2800);
  };

  if (reduceMotion) {
    revealPage();
  } else {
    heroTitles.forEach(splitWords);
    requestAnimationFrame(() => requestAnimationFrame(revealPage));
  }

  // ===== Scroll progress bar =====
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  progress.innerHTML = '<span></span>';
  document.body.appendChild(progress);
  const progressBar = progress.firstElementChild;

  scrollTasks.push((y) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? (y / max).toFixed(4) : 0})`;
  });

  // ===== Auto-hiding header =====
  const header = document.getElementById('navbar');
  const navLinks = document.getElementById('navLinks');
  let lastScrollY = window.scrollY;

  scrollTasks.push((y) => {
    if (!header) return;
    const delta = y - lastScrollY;
    const menuOpen = navLinks && navLinks.classList.contains('open');
    if (y < 240 || menuOpen) {
      header.classList.remove('header-hidden');
    } else if (delta > 3) {
      header.classList.add('header-hidden');
    } else if (delta < -3) {
      header.classList.remove('header-hidden');
    }
    lastScrollY = y;
  });

  // ===== Lightbox (photos in galleries, project cards, fleet, about) =====
  const lightboxSources = [
    { item: '.photo-gallery figure', scope: '.photo-gallery', caption: el => el.querySelector('figcaption') },
    { item: '.project-card-img', scope: '.projects-grid', caption: el => el.closest('.project-card').querySelector('.project-card-title') },
    { item: '.fleet-item', scope: '.fleet-grid', caption: el => el.querySelector('figcaption') },
    { item: '.about-photo', scope: '.about-photo', caption: () => null },
    { item: '.journey-card', scope: '.carousel-track', caption: el => el.querySelector('strong') },
    { item: '.mosaic figure', scope: '.mosaic', caption: () => null },
    { item: '.split-media, .feature-panel-media, .timeline-media', scope: '.split-media, .feature-panel-media, .timeline-media', caption: () => null },
  ];

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.hidden = true;
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Photo viewer');
  lightbox.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-stage"><img alt=""></div>
    <p class="lightbox-caption"></p>
    <span class="lightbox-count"></span>
    <button type="button" class="lightbox-btn lightbox-close" aria-label="Close photo viewer">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    <button type="button" class="lightbox-btn lightbox-prev" aria-label="Previous photo">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <button type="button" class="lightbox-btn lightbox-next" aria-label="Next photo">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    </button>`;
  document.body.appendChild(lightbox);

  const stage = lightbox.querySelector('.lightbox-stage');
  const stageImg = stage.querySelector('img');
  const captionEl = lightbox.querySelector('.lightbox-caption');
  const countEl = lightbox.querySelector('.lightbox-count');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  let lbItems = [];
  let lbIndex = 0;
  let lbReturnFocus = null;
  let lbSuppressClick = false;

  const setStageBox = (r) => {
    stage.style.left = `${r.left}px`;
    stage.style.top = `${r.top}px`;
    stage.style.width = `${r.width}px`;
    stage.style.height = `${r.height}px`;
  };

  const fitStageBox = (img) => {
    const w = img.naturalWidth || 4;
    const h = img.naturalHeight || 3;
    const mobile = window.innerWidth < 768;
    const scale = Math.min(
      (window.innerWidth * (mobile ? 0.94 : 0.84)) / w,
      (window.innerHeight * (mobile ? 0.62 : 0.78)) / h
    );
    const width = w * scale;
    const height = h * scale;
    return { left: (window.innerWidth - width) / 2, top: (window.innerHeight - height) / 2, width, height };
  };

  const updateLightboxMeta = () => {
    const pad = n => String(n).padStart(2, '0');
    captionEl.textContent = lbItems[lbIndex].caption;
    countEl.textContent = `${pad(lbIndex + 1)} / ${pad(lbItems.length)}`;
    prevBtn.hidden = nextBtn.hidden = countEl.hidden = lbItems.length < 2;
  };

  const openLightbox = (items, index) => {
    lbItems = items;
    lbIndex = Math.max(0, index);
    lbReturnFocus = document.activeElement;
    const thumb = lbItems[lbIndex].img;

    stageImg.src = thumb.src;
    stageImg.alt = thumb.alt;
    updateLightboxMeta();
    lightbox.hidden = false;
    root.classList.add('lightbox-open');

    stage.classList.add('no-transition');
    setStageBox(thumb.getBoundingClientRect());
    void stage.offsetWidth;
    stage.classList.remove('no-transition');
    requestAnimationFrame(() => {
      lightbox.classList.add('is-open');
      setStageBox(fitStageBox(thumb));
    });
    closeBtn.focus({ preventScroll: true });
  };

  const closeLightbox = () => {
    if (lightbox.hidden) return;
    const r = lbItems[lbIndex].img.getBoundingClientRect();
    const thumbVisible = r.width > 0 && r.bottom > 0 && r.top < window.innerHeight;
    lightbox.classList.remove('is-open');
    if (thumbVisible) setStageBox(r);
    else stage.classList.add('is-fading');
    setTimeout(() => {
      lightbox.hidden = true;
      stage.classList.remove('is-fading');
      root.classList.remove('lightbox-open');
      if (lbReturnFocus && lbReturnFocus.focus) lbReturnFocus.focus({ preventScroll: true });
    }, 620);
  };

  const showLightboxStep = (step) => {
    if (lbItems.length < 2) return;
    lbIndex = (lbIndex + step + lbItems.length) % lbItems.length;
    const thumb = lbItems[lbIndex].img;
    stage.classList.add('is-swapping');
    setTimeout(() => {
      const next = new Image();
      next.onload = next.onerror = () => {
        stageImg.src = next.src;
        stageImg.alt = thumb.alt;
        setStageBox(fitStageBox(next));
        updateLightboxMeta();
        stage.classList.remove('is-swapping');
      };
      next.src = thumb.src;
    }, 200);
  };

  lightboxSources.forEach(({ item }) => {
    document.querySelectorAll(item).forEach(el => el.classList.add('has-lightbox'));
  });

  document.addEventListener('click', (e) => {
    for (const source of lightboxSources) {
      const hit = e.target.closest(source.item);
      if (!hit) continue;
      const scope = hit.closest(source.scope) || hit;
      const nodes = (scope.matches(source.item) ? [scope] : [...scope.querySelectorAll(source.item)])
        .filter(node => node.offsetParent !== null);
      const items = nodes.map(node => {
        const img = node.querySelector('img');
        const captionNode = source.caption(node);
        return { img, caption: (captionNode ? captionNode.textContent : img.alt).trim() };
      });
      openLightbox(items, nodes.indexOf(hit));
      return;
    }
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => showLightboxStep(-1));
  nextBtn.addEventListener('click', () => showLightboxStep(1));
  lightbox.addEventListener('click', (e) => {
    if (lbSuppressClick) {
      lbSuppressClick = false;
      return;
    }
    if (e.target.classList.contains('lightbox-backdrop')) closeLightbox();
  });

  let swipeStartX = null;
  lightbox.addEventListener('pointerdown', (e) => { swipeStartX = e.clientX; });
  lightbox.addEventListener('pointerup', (e) => {
    if (swipeStartX === null) return;
    const dx = e.clientX - swipeStartX;
    swipeStartX = null;
    if (Math.abs(dx) > 50) {
      lbSuppressClick = true;
      showLightboxStep(dx < 0 ? 1 : -1);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') showLightboxStep(1);
    else if (e.key === 'ArrowLeft') showLightboxStep(-1);
    else if (e.key === 'Tab') {
      const focusable = [closeBtn, prevBtn, nextBtn].filter(btn => !btn.hidden);
      const i = focusable.indexOf(document.activeElement);
      e.preventDefault();
      focusable[(i + (e.shiftKey ? -1 : 1) + focusable.length) % focusable.length].focus();
    }
  });

  window.addEventListener('resize', () => {
    if (!lightbox.hidden) setStageBox(fitStageBox(stageImg));
  });

  // ===== Draggable carousel (mouse) =====
  document.querySelectorAll('[data-carousel-track]').forEach(track => {
    let dragging = false;
    let moved = false;
    let startX = 0;
    let startScroll = 0;

    track.addEventListener('dragstart', e => e.preventDefault());
    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      dragging = true;
      moved = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
    });
    window.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) {
        moved = true;
        track.classList.add('is-dragging');
      }
      if (moved) track.scrollLeft = startScroll - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!dragging) return;
      dragging = false;
      if (!moved) return;
      const card = track.firstElementChild;
      const step = card ? card.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0) : 1;
      const target = Math.round(track.scrollLeft / step) * step;
      track.classList.remove('is-dragging');
      track.scrollTo({ left: target, behavior: 'smooth' });
    });
    track.addEventListener('click', (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    }, true);
  });

  // ===== Sticky scroll story (Ferrocement page) =====
  document.querySelectorAll('[data-sticky-steps]').forEach(block => {
    const steps = [...block.querySelectorAll('.sticky-step')];
    const images = [...block.querySelectorAll('.sticky-media img')];
    const tag = block.querySelector('.sticky-media-tag b');
    if (!('IntersectionObserver' in window)) return;
    const activate = (index) => {
      steps.forEach((step, i) => step.classList.toggle('is-active', i === index));
      images.forEach((img, i) => img.classList.toggle('is-active', i === index));
      if (tag) tag.textContent = String(index + 1).padStart(2, '0');
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activate(steps.indexOf(entry.target));
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach(step => observer.observe(step));
  });

  // ===== Process timeline progress =====
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const timelineSteps = [...timeline.querySelectorAll('.timeline-step')];
    scrollTasks.push(() => {
      const vh = window.innerHeight;
      const r = timeline.getBoundingClientRect();
      timeline.style.setProperty('--tp', clamp((vh * 0.55 - r.top) / r.height, 0, 1).toFixed(3));
      timelineSteps.forEach(step => step.classList.toggle('is-active', step.getBoundingClientRect().top < vh * 0.55));
    });
  }

  // ===== Generic in-view trigger (e.g. the ferrocement diagram) =====
  onceInView([...document.querySelectorAll('[data-inview]')], el => el.classList.add('is-in'), 0.2);

  if (reduceMotion) {
    runScrollTasks();
    return;
  }

  // ===== Section headline reveals =====
  const scrollTitles = [...document.querySelectorAll('.section-title, .final-cta h2, .contact-form h3, .signature-project-head h3, .service-row-body h3, .timeline-text h2, .next-project h2')];
  scrollTitles.forEach(splitWords);
  onceInView(scrollTitles, el => el.classList.add('is-in'), 0.3);

  // ===== Scroll-lit lead paragraph =====
  const fillTargets = [...document.querySelectorAll('.about-lead')].map(el => {
    splitText(el, (text) => {
      const span = document.createElement('span');
      span.className = 'fill-word';
      span.textContent = text;
      return span;
    });
    return { el, words: [...el.querySelectorAll('.fill-word')] };
  });

  scrollTasks.push(() => {
    const vh = window.innerHeight;
    fillTargets.forEach(({ el, words }) => {
      const r = el.getBoundingClientRect();
      const p = clamp((vh * 0.9 - r.top) / (vh * 0.45), 0, 1);
      const lit = Math.round(p * words.length);
      words.forEach((word, i) => word.classList.toggle('is-lit', i < lit));
    });
  });

  // ===== Image wipe reveals =====
  // A fully clipped element counts as invisible to IntersectionObserver, so watch the parent instead.
  const wipeTargets = [...document.querySelectorAll('.about-photo, .fleet-item, .photo-gallery figure, .split-media, .feature-panel-media, .timeline-media, .service-row-media')];
  wipeTargets.forEach(el => {
    el.classList.add('img-reveal');
    el.style.setProperty('--rd', `${([...el.parentElement.children].indexOf(el) % 5) * 0.09}s`);
  });
  const wipeParents = [...new Set(wipeTargets.map(el => el.parentElement))];
  onceInView(wipeParents, parent => {
    parent.querySelectorAll(':scope > .img-reveal').forEach(el => el.classList.add('is-in'));
  }, 0.1);

  // ===== Parallax =====
  const heroParallax = [...document.querySelectorAll('.page-hero-media > img')];
  const innerParallax = [...document.querySelectorAll('.about-photo img, .fleet-item img, .photo-gallery img, .split-media img, .feature-panel-media img, .timeline-media img')];
  const ctaBand = document.querySelector('.final-cta');

  // Mouse/trackpad only: on touch screens the browser scrolls on its own thread, so script-driven
  // offsets trail the finger by a frame and read as jitter.
  if (finePointer && !reduceMotion) scrollTasks.push((y) => {
    const vh = window.innerHeight;
    const moves = [];
    heroParallax.forEach(el => {
      const box = el.parentElement.getBoundingClientRect();
      if (box.bottom < 0) return;
      moves.push([el, clamp(y * 0.12, 0, box.height * 0.08)]);
    });
    innerParallax.forEach(el => {
      const box = el.parentElement.getBoundingClientRect();
      if (box.bottom < -100 || box.top > vh + 100) return;
      const offset = (box.top + box.height / 2 - vh / 2) / vh;
      const limit = box.height * 0.045;
      moves.push([el, clamp(-offset * box.height * 0.09, -limit, limit)]);
    });
    let ctaShift = null;
    if (ctaBand) {
      const r = ctaBand.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) ctaShift = -((r.top + r.height / 2 - vh / 2) / vh) * 80;
    }
    // Writes after all reads, so the browser lays the page out once per frame
    moves.forEach(([el, px]) => { el.style.translate = `0 ${px.toFixed(1)}px`; });
    if (ctaShift !== null) ctaBand.style.backgroundPosition = `0 0, center calc(40% + ${ctaShift.toFixed(1)}px)`;
  });

  // ===== Process progress line =====
  const processSteps = document.querySelector('.process-steps');
  if (processSteps) {
    const track = document.createElement('div');
    track.className = 'process-track';
    track.setAttribute('aria-hidden', 'true');
    track.innerHTML = '<span></span>';
    processSteps.parentNode.insertBefore(track, processSteps);
    const steps = [...processSteps.children];

    scrollTasks.push(() => {
      const vh = window.innerHeight;
      if (track.offsetParent === null) {
        steps.forEach(step => step.classList.toggle('is-active', step.getBoundingClientRect().top < vh * 0.7));
        return;
      }
      const r = processSteps.getBoundingClientRect();
      const p = clamp((vh * 0.9 - r.top) / (vh * 0.55), 0, 1);
      track.style.setProperty('--p', p.toFixed(3));
      steps.forEach((step, i) => step.classList.toggle('is-active', p >= (i + 0.6) / steps.length));
    });
  }

  // ===== Marquee =====
  const marquees = [...document.querySelectorAll('.marquee-row')].map(row => {
    const track = row.querySelector('.marquee-track');
    const group = document.createElement('div');
    group.className = 'marquee-group';
    while (track.firstChild) group.appendChild(track.firstChild);
    track.appendChild(group);
    const state = { row, track, group, width: 0, x: 0, dir: Number(row.dataset.direction) || -1, visible: true, hover: false };
    const fill = () => {
      state.width = group.offsetWidth;
      if (!state.width) return;
      while (track.children.length < 12 && track.scrollWidth < row.clientWidth + state.width * 2) {
        const copy = group.cloneNode(true);
        copy.setAttribute('aria-hidden', 'true');
        track.appendChild(copy);
      }
    };
    fill();
    window.addEventListener('resize', fill);
    window.addEventListener('load', fill);
    row.addEventListener('mouseenter', () => { state.hover = true; });
    row.addEventListener('mouseleave', () => { state.hover = false; });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => { state.visible = entry.isIntersecting; }).observe(row);
    }
    return state;
  });

  if (marquees.length) {
    let lastTime = performance.now();
    let lastY = window.scrollY;
    let boost = 0;
    let scrollDir = 1;
    const tick = (now) => {
      const dt = Math.min(now - lastTime, 50) / 1000;
      lastTime = now;
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (dy) scrollDir = dy > 0 ? 1 : -1;
      boost = lerp(boost, Math.min(Math.abs(dy) / Math.max(dt, 0.001) * 0.6, 900), 0.08);
      marquees.forEach(m => {
        if (!m.visible || !m.width) return;
        const speed = (55 + boost) * (m.hover ? 0.25 : 1);
        m.x = (m.x + speed * dt * m.dir * scrollDir) % m.width;
        if (m.x > 0) m.x -= m.width;
        m.track.style.transform = `translate3d(${m.x.toFixed(2)}px, 0, 0)`;
      });
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // ===== Interactive ferro-mesh (hero panels) =====
  const initMesh = (host) => {
    const canvas = document.createElement('canvas');
    canvas.className = 'mesh-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    host.prepend(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // "reveal" mode (over the hero video): no resting grid — the steel mesh only shows around the cursor
    // and in tap ripples, like seeing the reinforcement inside the structure
    const reveal = host.dataset.mesh === 'reveal';
    let idleCleared = false;

    const GAP = 38;
    const RADIUS = 190;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, power: 0, active: false };
    const ripples = [];
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let points = new Float32Array(0);
    let glow = new Float32Array(0);
    let visible = true;
    let running = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = host.clientWidth;
      height = host.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / GAP) + 3;
      rows = Math.ceil(height / GAP) + 3;
      points = new Float32Array(cols * rows * 2);
      glow = new Float32Array(cols * rows);
    };

    const frame = (t) => {
      if (!visible) {
        running = false;
        return;
      }
      mouse.x = lerp(mouse.x, mouse.tx, 0.12);
      mouse.y = lerp(mouse.y, mouse.ty, 0.12);
      mouse.power = lerp(mouse.power, mouse.active ? 1 : 0, 0.06);
      for (let i = ripples.length - 1; i >= 0; i--) {
        if (t - ripples[i].start > 1800) ripples.splice(i, 1);
      }
      if (reveal && mouse.power < 0.01 && !ripples.length) {
        if (!idleCleared) {
          ctx.clearRect(0, 0, width, height);
          idleCleared = true;
        }
        requestAnimationFrame(frame);
        return;
      }
      idleCleared = false;

      const offsetX = (width % GAP) / 2 - GAP;
      const offsetY = (height % GAP) / 2 - GAP;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let x = offsetX + c * GAP + Math.cos(t * 0.0006 + r * 0.45) * 2;
          let y = offsetY + r * GAP + Math.sin(t * 0.0008 + c * 0.4 + r * 0.15) * 2.5;
          let g = 0;

          if (mouse.power > 0.01) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const d = Math.hypot(dx, dy);
            if (d < RADIUS && d > 0.001) {
              const f = 1 - d / RADIUS;
              const push = f * f * 30 * mouse.power;
              x += (dx / d) * push;
              y += (dy / d) * push;
              g = f * mouse.power;
            }
          }

          for (const ripple of ripples) {
            const age = t - ripple.start;
            const rx = x - ripple.x;
            const ry = y - ripple.y;
            const rd = Math.hypot(rx, ry);
            const band = 1 - Math.abs(rd - age * 0.45) / 50;
            if (band > 0 && rd > 0.001) {
              const life = 1 - age / 1800;
              x += (rx / rd) * band * 16 * life;
              y += (ry / rd) * band * 16 * life;
              g = Math.max(g, band * life);
            }
          }

          const k = r * cols + c;
          points[k * 2] = x;
          points[k * 2 + 1] = y;
          glow[k] = g;
        }
      }

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      if (!reveal) {
        ctx.strokeStyle = 'rgba(35, 101, 55, 0.075)';
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const k = (r * cols + c) * 2;
            if (c === 0) ctx.moveTo(points[k], points[k + 1]);
            else ctx.lineTo(points[k], points[k + 1]);
          }
        }
        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const k = (r * cols + c) * 2;
            if (r === 0) ctx.moveTo(points[k], points[k + 1]);
            else ctx.lineTo(points[k], points[k + 1]);
          }
        }
        ctx.stroke();
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const k = r * cols + c;
          const g = glow[k];
          if (g < 0.04) continue;
          const x = points[k * 2];
          const y = points[k * 2 + 1];
          ctx.strokeStyle = reveal
            ? `rgba(255, 255, 255, ${(g * 0.6).toFixed(3)})`
            : `rgba(35, 101, 55, ${(g * 0.5).toFixed(3)})`;
          ctx.beginPath();
          if (c + 1 < cols) {
            ctx.moveTo(x, y);
            ctx.lineTo(points[(k + 1) * 2], points[(k + 1) * 2 + 1]);
          }
          if (r + 1 < rows) {
            ctx.moveTo(x, y);
            ctx.lineTo(points[(k + cols) * 2], points[(k + cols) * 2 + 1]);
          }
          ctx.stroke();
          ctx.fillStyle = `rgba(255, 103, 0, ${(g * 0.9).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.2 + g * 2.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(frame);
    };

    const start = () => {
      if (!running && visible) {
        running = true;
        requestAnimationFrame(frame);
      }
    };

    host.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const r = host.getBoundingClientRect();
      mouse.tx = e.clientX - r.left;
      mouse.ty = e.clientY - r.top;
      if (!mouse.active && mouse.power < 0.05) {
        mouse.x = mouse.tx;
        mouse.y = mouse.ty;
      }
      mouse.active = true;
    });
    host.addEventListener('pointerleave', () => { mouse.active = false; });
    host.addEventListener('pointerdown', (e) => {
      const r = host.getBoundingClientRect();
      ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, start: performance.now() });
      if (ripples.length > 4) ripples.shift();
    });

    resize();
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(host);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        start();
      }).observe(host);
    }
    start();
  };

  document.querySelectorAll('.hero-panel, .page-hero-panel, .hero-stage').forEach(initMesh);

  // ===== Pointer-only effects: magnetic buttons, tilt cards, cursor =====
  if (finePointer) {
    const addTransition = (el, extra) => {
      el.style.transition = `${getComputedStyle(el).transition}, ${extra}`;
    };

    document.querySelectorAll('.btn, .pill, .arrow-btn, .filter-btn, .nav-hamburger, .float-icon, .footer-socials a').forEach(el => {
      addTransition(el, 'translate 0.45s cubic-bezier(0.22, 1, 0.36, 1)');
      el.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.translate = `${(x * 0.22).toFixed(1)}px ${(y * 0.32).toFixed(1)}px`;
      });
      el.addEventListener('pointerleave', () => { el.style.translate = ''; });
    });

    document.querySelectorAll('.service-card, .feature-card, .project-card, .feat-card, .contact-item, .benefit-card, .mini-card').forEach(el => {
      el.classList.add('tilt');
      addTransition(el, 'rotate 0.6s cubic-bezier(0.22, 1, 0.36, 1)');
      el.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        const angle = Math.hypot(px, py) * 7;
        el.style.rotate = angle > 0.05 ? `${(-py).toFixed(3)} ${px.toFixed(3)} 0 ${angle.toFixed(2)}deg` : '';
        el.style.setProperty('--gx', `${((px + 0.5) * 100).toFixed(1)}%`);
        el.style.setProperty('--gy', `${((py + 0.5) * 100).toFixed(1)}%`);
      });
      el.addEventListener('pointerleave', () => { el.style.rotate = ''; });
    });

    const setCursorLabel = (selector, text) => {
      document.querySelectorAll(selector).forEach(el => { el.dataset.cursor = text; });
    };
    setCursorLabel('.has-lightbox', 'View');
    setCursorLabel('.feat-card', 'Drag');
    setCursorLabel('.service-card', 'Explore');

    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<span class="cursor-circle"></span><span class="cursor-label"></span>';
    document.body.appendChild(cursor);
    const cursorLabel = cursor.querySelector('.cursor-label');
    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let cursorRunning = false;

    const moveCursor = () => {
      cx = lerp(cx, mx, 0.2);
      cy = lerp(cy, my, 0.2);
      cursor.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      if (Math.abs(cx - mx) > 0.1 || Math.abs(cy - my) > 0.1) requestAnimationFrame(moveCursor);
      else cursorRunning = false;
    };

    window.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      mx = e.clientX;
      my = e.clientY;
      if (!cursor.classList.contains('is-visible')) {
        cx = mx;
        cy = my;
        cursor.classList.add('is-visible');
      }
      if (!cursorRunning) {
        cursorRunning = true;
        requestAnimationFrame(moveCursor);
      }
    }, { passive: true });

    document.documentElement.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));

    document.addEventListener('pointerover', (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      cursor.classList.toggle('is-hidden', !!target.closest('iframe, input, textarea, select'));
      const labelled = target.closest('[data-cursor]');
      if (labelled && !root.classList.contains('lightbox-open')) {
        cursorLabel.textContent = labelled.dataset.cursor;
        cursor.classList.add('has-label');
        cursor.classList.remove('is-hover');
        return;
      }
      cursor.classList.remove('has-label');
      cursor.classList.toggle('is-hover', !!target.closest('a, button, label'));
    });
  }

  runScrollTasks();
})();
