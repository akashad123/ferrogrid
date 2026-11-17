/**
 * FERROGRID — Main JavaScript
 * Handles navigation, animations, filtering, and form interactions.
 */

(() => {
  'use strict';

  const smoothScrollTo = (target) => {
    if (window.ferroScroll) window.ferroScroll.scrollTo(target);
    else target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ===== Navbar Scroll Effect =====
  const navbar = document.getElementById('navbar');

  const handleScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Run on initial load to set correct state
  handleScroll();

  // ===== Mobile Navigation =====
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  const closeMobileNav = () => {
    if (!hamburger || !navLinks) return;
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('menu-open');
    navLinks.querySelectorAll('.nav-item.sub-open').forEach(item => {
      item.classList.remove('sub-open');
      const toggle = item.querySelector('.nav-sub-toggle');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Show services');
      }
    });
  };

  const toggleMobileNav = () => {
    if (!hamburger || !navLinks) return;
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.documentElement.classList.toggle('menu-open', isOpen);
  };

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', toggleMobileNav);

    // Escape closes the menu; widening past the mobile breakpoint resets it
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMobileNav();
        hamburger.focus();
      }
    });
    window.matchMedia('(max-width: 1240px)').addEventListener('change', (mq) => {
      if (!mq.matches) closeMobileNav();
    });
  }

  // Services list folds out inside the mobile menu, so the whole menu fits on short phones
  document.querySelectorAll('.nav-sub-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.closest('.nav-item').classList.toggle('sub-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Hide services' : 'Show services');
    });
  });

  // Close mobile nav when clicking outside of it, or when clicking a link inside it
  document.addEventListener('click', (event) => {
    if (!hamburger || !navLinks) return;
    const isClickInsideSidebar = navLinks.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (navLinks.classList.contains('open')) {
      // Close if clicked outside the sidebar (and not on hamburger)
      // OR if clicked on a link (anchor element) inside the sidebar
      if ((!isClickInsideSidebar && !isClickOnHamburger) || (isClickInsideSidebar && event.target.closest('a'))) {
        closeMobileNav();
      }
    }
  });

  // ===== Active Nav Link on Scroll =====
  // Only for in-page "#section" menu links; skipped entirely when the menu links to other pages
  const sections = document.querySelectorAll('section[id]');
  const hashAnchors = [...document.querySelectorAll('.nav-links > a[href^="#"]')];

  if (hashAnchors.length && sections.length) {
    let activeQueued = false;
    const updateActiveLink = () => {
      activeQueued = false;
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) current = section.id;
      });
      hashAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
    };
    window.addEventListener('scroll', () => {
      if (!activeQueued) {
        activeQueued = true;
        requestAnimationFrame(updateActiveLink);
      }
    }, { passive: true });
  }

  // ===== Scroll Reveal Animation =====
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ===== Animated Counter =====
  const counters = document.querySelectorAll('[data-count]');

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-count'), 10);
    if (Number.isNaN(target)) return;

    let current = 0;
    const increment = target / 60;
    const stat = counter.closest('.hero-stat');
    const label = stat ? stat.querySelector('.hero-stat-label') : null;
    const suffix = counter.dataset.suffix || (label && label.textContent.includes('%') ? '%' : '+');
    const render = (value) => {
      counter.innerHTML = `${value}<span class="stat-suffix">${suffix}</span>`;
    };

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        render(Math.ceil(current));
        requestAnimationFrame(updateCounter);
      } else {
        render(target);
      }
    };

    updateCounter();
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }

  // ===== Project Filter & Show More =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const showMoreBtn = document.getElementById('show-more-projects-btn');
  let isExpanded = false;

  function updateProjects(isInitial = false) {
    const activeBtn = document.querySelector('.filter-btn.active');
    const filter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';

    // Find all matching cards
    const matchingCards = [];
    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        matchingCards.push(card);
      } else {
        card.style.display = 'none';
      }
    });

    // Determine how many to show (limit to 3 only if showMoreBtn exists, otherwise show all)
    const limit = (isExpanded || !showMoreBtn) ? matchingCards.length : 3;

    matchingCards.forEach((card, index) => {
      if (index < limit) {
        if (card.style.display !== 'block') {
          card.style.display = 'block';
          if (!isInitial) {
            card.style.animation = 'none';
            // Trigger reflow
            card.offsetHeight;
            card.style.animation = 'fadeInUp 0.5s var(--ease-out) forwards';
          }
        }
      } else {
        card.style.display = 'none';
      }
    });

    // Update the Show More button visibility and text
    if (showMoreBtn) {
      if (matchingCards.length > 3) {
        showMoreBtn.parentElement.style.display = 'block';
        if (isExpanded) {
          showMoreBtn.classList.add('expanded');
          showMoreBtn.innerHTML = `
            Show Less
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(180deg); transition: transform var(--dur-fast) var(--ease-spring);">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          `;
        } else {
          showMoreBtn.classList.remove('expanded');
          showMoreBtn.innerHTML = `
            Show More
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transition: transform var(--dur-fast) var(--ease-spring);">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          `;
        }
      } else {
        showMoreBtn.parentElement.style.display = 'none';
      }
    }
  }

  // Filter button click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      isExpanded = false; // Reset expansion when changing filters

      // Hide all first to force fadeInUp animation for the newly shown ones
      projectCards.forEach(card => {
        card.style.display = 'none';
      });

      updateProjects();
    });
  });

  // Show more button click handler
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      updateProjects();

      // If closing, scroll smoothly to the top of the projects section
      if (!isExpanded) {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          smoothScrollTo(projectsSection);
        }
      }
    });
  }

  // Check URL parameters for active filter
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam) {
    const targetBtn = Array.from(filterBtns).find(btn => btn.getAttribute('data-filter') === filterParam);
    if (targetBtn) {
      filterBtns.forEach(b => b.classList.remove('active'));
      targetBtn.classList.add('active');
    }
  }

  // Run on initial page load
  updateProjects(true);

  // ===== Form Submission (Web3Forms) =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('submitBtn');
      const originalText = submitBtn.innerHTML;

      // 1. Show Loading State
      submitBtn.innerHTML = 'Sending...';
      submitBtn.style.opacity = '0.8';
      submitBtn.disabled = true;

      // 2. Gather Form Data
      const formData = new FormData(contactForm);

      try {
        // 3. Send data securely to Web3Forms
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (response.ok && data.success !== false) {
          // 4. Success UX
          submitBtn.innerHTML = `
            <span style="display:flex;align-items:center;gap:10px;">
              ✓ Request Sent Successfully!
            </span>
          `;
          submitBtn.style.background = 'var(--clr-green)';
          submitBtn.style.opacity = '1';
          contactForm.reset();
        } else {
          // Handle Server Error
          submitBtn.innerHTML = '❌ Error Sending';
          console.error(data.message || 'Form submission failed.');
        }
      } catch (error) {
        // Handle Network Error
        submitBtn.innerHTML = '❌ Network Error';
        console.error(error);
      }

      // 5. Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.style.opacity = '1';
        submitBtn.disabled = false;
      }, 3000);
    });
  }

  // ===== Smooth Scroll for all anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return; // Allow default behaviour for bare # links
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        smoothScrollTo(target);
      }
    });
  });

  // ===== Hero Video =====
  // Picks the right file for the screen (portrait/landscape x 720p/1080p, WebM with MP4 fallback),
  // loads it after the page is ready, fades it in over the matching still frame, pauses when it is
  // off-screen or the tab is hidden, and respects reduced-motion and data-saver preferences.
  const heroVideoWrap = document.querySelector('[data-hero-video]');
  if (heroVideoWrap) {
    const video = heroVideoWrap.querySelector('video');
    const posterImg = heroVideoWrap.querySelector('.hero-poster img');
    const toggle = document.querySelector('.hero-video-toggle');
    const ring = toggle ? toggle.querySelector('.ring-progress') : null;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = navigator.connection || {};
    const lowData = !!connection.saveData || /(^|-)2g$/.test(connection.effectiveType || '');
    const slowNetwork = connection.effectiveType === '3g';
    const srcBase = heroVideoWrap.dataset.srcBase || 'images/hero_video/hero-v2';
    const autoplayAllowed = () => !reduceMotion.matches && !lowData;

    let currentBase = '';
    let av1Supported = false;
    const av1Check = navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
      ? navigator.mediaCapabilities.decodingInfo({
        type: 'file',
        video: { contentType: 'video/webm; codecs="av01.0.08M.08"', width: 1920, height: 1080, bitrate: 3000000, framerate: 30 },
      }).then((info) => { av1Supported = info.supported && info.smooth && info.powerEfficient; }).catch(() => {})
      : Promise.resolve();
    let userPaused = !autoplayAllowed();
    let inView = true;
    let started = false;
    let ringFrame = 0;

    const chooseBase = () => {
      const poster = posterImg.currentSrc || posterImg.src;
      const orientation = poster.includes('portrait') ? 'portrait' : 'landscape';
      const box = heroVideoWrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const [w, h] = [box.width * dpr, box.height * dpr];
      // Full HD for clarity; 720p for small boxes on low-density screens and on slow (3G) connections
      const needsHD = orientation === 'portrait' ? (w > 520 || h > 920) : (w > 900 || h > 520);
      const size = needsHD && !slowNetwork ? 1080 : 720;
      return `${srcBase}-${orientation}-${size}`;
    };

    const setToggleState = () => {
      if (!toggle) return;
      const paused = video.paused || userPaused;
      toggle.classList.toggle('is-paused', paused);
      toggle.setAttribute('aria-label', paused ? 'Play background video' : 'Pause background video');
    };

    const drawRing = () => {
      if (ring && video.duration) ring.style.strokeDashoffset = String(1 - video.currentTime / video.duration);
      ringFrame = video.paused ? 0 : requestAnimationFrame(drawRing);
    };

    const tryPlay = () => {
      if (userPaused || !inView || document.hidden || !currentBase) return;
      const attempt = video.play();
      if (attempt && attempt.catch) attempt.catch(() => setToggleState());
    };

    const loadSource = () => {
      const base = chooseBase();
      if (base === currentBase) return;
      currentBase = base;
      heroVideoWrap.classList.remove('is-playing');
      // AV1 (best quality per byte) only where the device decodes it smoothly and power-efficiently
      const av1 = av1Supported && base.endsWith('1080')
        ? `<source src="${base}-av1.webm" type='video/webm; codecs="av01.0.08M.08"'>` : '';
      video.innerHTML = av1 + `<source src="${base}.webm" type='video/webm; codecs="vp9"'>` +
        `<source src="${base}.mp4" type="video/mp4">`;
      video.load();
      tryPlay();
    };

    video.addEventListener('playing', () => {
      heroVideoWrap.classList.add('is-playing');
      setToggleState();
      if (!ringFrame) ringFrame = requestAnimationFrame(drawRing);
    });
    video.addEventListener('pause', setToggleState);

    const start = () => {
      if (started) return;
      started = true;
      if (toggle) toggle.hidden = false;
      setToggleState();
      Promise.race([av1Check, new Promise((resolve) => setTimeout(resolve, 800))])
        .then(() => { if (!userPaused) loadSource(); });
    };

    if (toggle) {
      toggle.addEventListener('click', () => {
        userPaused = !userPaused;
        if (userPaused) {
          video.pause();
        } else {
          loadSource();
          tryPlay();
        }
        setToggleState();
      });
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView) tryPlay(); else video.pause();
      }, { threshold: 0.05 }).observe(heroVideoWrap);
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) video.pause(); else tryPlay();
    });

    // Re-pick the file when the screen changes shape (e.g. a phone is rotated)
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { if (started && !userPaused) loadSource(); }, 350);
    });

    // Load the video once the page itself has loaded, so the still frame and text appear first
    if (document.readyState === 'complete') setTimeout(start, 200);
    else window.addEventListener('load', () => setTimeout(start, 200), { once: true });
    setTimeout(start, 3500);
  }

  // ===== Ferrocement "takes shape" video (ferrocement page) =====
  // Square file on phones, wide file elsewhere (720p or 1080p by box size), WebM with MP4 fallback. Starts
  // loading just before it scrolls into view, plays muted on loop while visible, and lights up the step that
  // matches the moment on screen. Reduced-motion and data-saver visitors get the still frame and a play button.
  const shapeVideo = document.querySelector('[data-shape-video]');
  if (shapeVideo) {
    const video = shapeVideo.querySelector('video');
    const frame = shapeVideo.querySelector('.shape-video-frame');
    const toggle = shapeVideo.querySelector('.shape-video-toggle');
    const steps = [...shapeVideo.querySelectorAll('.shape-step')]
      .map(el => ({ el, from: parseFloat(el.dataset.from) || 0 }));
    const phone = window.matchMedia('(max-width: 768px)');
    const connection = navigator.connection || {};
    const lowData = !!connection.saveData || /(^|-)2g$/.test(connection.effectiveType || '');
    const base = shapeVideo.dataset.srcBase;
    let userPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches || lowData;
    let inView = false;
    let currentSrc = '';
    let frameId = 0;

    const chooseSrc = () => {
      const shape = phone.matches ? 'square' : 'wide';
      const width = frame.getBoundingClientRect().width * Math.min(window.devicePixelRatio || 1, 2);
      const hd = width > (shape === 'square' ? 860 : 1300) && connection.effectiveType !== '3g';
      return `${base}-${shape}-${hd ? 1080 : 720}`;
    };

    const load = () => {
      const src = chooseSrc();
      if (src === currentSrc) return;
      currentSrc = src;
      shapeVideo.classList.remove('is-playing');
      video.innerHTML = `<source src="${src}.webm" type='video/webm; codecs="vp9"'>` +
        `<source src="${src}.mp4" type="video/mp4">`;
      video.load();
    };

    const paintSteps = () => {
      const t = video.currentTime || 0;
      const last = steps.length - 1;
      steps.forEach((step, i) => {
        const end = i < last ? steps[i + 1].from : (video.duration || step.from + 1);
        step.el.classList.toggle('is-active', t >= step.from && (i === last || t < end));
        const p = t >= end ? 1 : t <= step.from ? 0 : (t - step.from) / (end - step.from);
        step.el.style.setProperty('--p', p.toFixed(3));
      });
    };

    const tick = () => {
      paintSteps();
      frameId = video.paused ? 0 : requestAnimationFrame(tick);
    };

    const setToggle = () => {
      toggle.classList.toggle('is-paused', video.paused);
      toggle.setAttribute('aria-label', video.paused ? 'Play animation' : 'Pause animation');
    };

    const play = () => {
      if (userPaused || !inView || document.hidden) return;
      load();
      const attempt = video.play();
      if (attempt && attempt.catch) attempt.catch(setToggle);
    };

    video.addEventListener('playing', () => {
      shapeVideo.classList.add('is-playing');
      setToggle();
      if (!frameId) frameId = requestAnimationFrame(tick);
    });
    video.addEventListener('pause', () => { setToggle(); paintSteps(); });
    video.addEventListener('seeked', paintSteps);
    // backup for when the browser throttles animation frames (e.g. battery saver)
    video.addEventListener('timeupdate', paintSteps);

    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      userPaused = !video.paused;
      if (userPaused) video.pause(); else play();
    });

    // Tapping a step jumps the animation to that moment
    steps.forEach(step => step.el.querySelector('button').addEventListener('click', () => {
      userPaused = false;
      inView = true;
      load();
      const seek = () => { video.currentTime = step.from + 0.05; paintSteps(); };
      if (video.readyState >= 1) seek(); else video.addEventListener('loadedmetadata', seek, { once: true });
      play();
    }));

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView) play(); else video.pause();
      }, { threshold: 0.25 }).observe(frame);
      // Fetch the file a little before it scrolls into view, so it is ready to play
      const early = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting || userPaused) return;
        early.disconnect();
        video.preload = 'auto';
        load();
      }, { rootMargin: '400px 0px' });
      early.observe(frame);
    } else {
      inView = true;
      play();
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) video.pause(); else play();
    });

    // Swap between the square and wide file when the screen crosses the phone breakpoint
    const onBreakpoint = () => {
      if (!currentSrc) return;
      load();
      play();
    };
    if (phone.addEventListener) phone.addEventListener('change', onBreakpoint);
    else if (phone.addListener) phone.addListener(onBreakpoint);
  }

  // ===== Floating buttons step aside while the hero's own buttons are on screen =====
  const heroActions = document.querySelector('.hero-cine .hero-actions');
  if (heroActions && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      document.documentElement.classList.toggle('hero-cta-visible', entry.isIntersecting);
    }).observe(heroActions);
  }

  // ===== Carousels (Featured Projects) =====
  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('[data-carousel-track]');
    const scope = carousel.parentElement;
    const prevBtn = scope.querySelector('[data-carousel-prev]');
    const nextBtn = scope.querySelector('[data-carousel-next]');
    if (!track) return;

    const step = () => {
      const card = track.firstElementChild;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    };

    const updateButtons = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      if (prevBtn) prevBtn.disabled = track.scrollLeft <= 2;
      if (nextBtn) nextBtn.disabled = track.scrollLeft >= max;
    };

    if (prevBtn) prevBtn.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    if (nextBtn) nextBtn.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    track.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    updateButtons();
  });
})();
