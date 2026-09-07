/* ============================================
   ANIMATIONS.JS — GSAP Text & Scroll Animations
   Stackly Music School Academy
   Uses GSAP + ScrollTrigger from CDN
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  /* ---------- Hero Centered Animation ---------- */
  const heroBadge = document.querySelector('.hero-badge-outline');
  const heroTitle = document.querySelector('.hero-title-centered');
  const heroText = document.querySelector('.hero-text-centered');
  const heroBtns = document.querySelector('.hero-btns-centered');
  const heroStats = document.querySelector('.hero-stats-float');

  if (heroTitle) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });
    if (heroBadge) tl.from(heroBadge, { y: 20, opacity: 0, duration: 0.6 }, 0.2);
    tl.from(heroTitle, { y: 50, opacity: 0, duration: 1 }, 0.35)
      .from(heroText, { y: 30, opacity: 0 }, 0.6)
      .from(heroBtns, { y: 25, opacity: 0 }, 0.75);
    if (heroStats) {
      tl.from(heroStats.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.6 }, 0.9);
    }
  }

  /* ---------- Page Hero Animation ---------- */
  const pageHeroH1 = document.querySelector('.page-hero h1');
  const pageHeroP = document.querySelector('.page-hero p');
  const pageHeroLabel = document.querySelector('.page-hero .section-label');
  if (pageHeroH1) {
    const ptl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
    if (pageHeroLabel) ptl.from(pageHeroLabel, { y: 20, opacity: 0, duration: 0.5 }, 0.2);
    ptl.from(pageHeroH1, { y: 40, opacity: 0 }, 0.35)
       .from(pageHeroP, { y: 20, opacity: 0 }, 0.55);
  }

  /* ---------- Section Title Scroll Reveal ---------- */
  document.querySelectorAll('.section-title').forEach(title => {
    gsap.fromTo(title,
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: title, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  });

  /* ---------- Section Subtitles ---------- */
  document.querySelectorAll('.section-subtitle').forEach(sub => {
    gsap.fromTo(sub,
      { y: 20, opacity: 0 },
      { scrollTrigger: { trigger: sub, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.15 }
    );
  });

  /* ---------- Stagger Children ---------- */
  document.querySelectorAll('.stagger-children').forEach(container => {
    const children = Array.from(container.children);
    if (children.length === 0) return;
    gsap.fromTo(children,
      { y: 40, opacity: 0 },
      { scrollTrigger: { trigger: container, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
    );
  });

  /* ---------- Stats Grid ---------- */
  document.querySelectorAll('.stats-grid').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
  });

  /* ---------- Split Section Animations ---------- */
  document.querySelectorAll('.split-grid').forEach(grid => {
    const left = grid.querySelector(':first-child');
    const right = grid.querySelector(':last-child');
    if (left) {
      gsap.fromTo(left,
        { x: -40, opacity: 0 },
        { scrollTrigger: { trigger: grid, start: 'top 80%' }, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
      );
    }
    if (right) {
      gsap.fromTo(right,
        { x: 40, opacity: 0 },
        { scrollTrigger: { trigger: grid, start: 'top 80%' }, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.15 }
      );
    }
  });

  /* ---------- Bento Grid Items ---------- */
  document.querySelectorAll('.bento-grid').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 30, opacity: 0, scale: 0.98 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out' }
    );
  });

  /* ---------- Instrument Cards ---------- */
  document.querySelectorAll('.instrument-grid').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 40, opacity: 0, scale: 0.95 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'back.out(1.4)' }
    );
  });

  /* ---------- Process Steps ---------- */
  document.querySelectorAll('.process-grid').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 40, opacity: 0 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' }
    );
  });

  /* ---------- Timeline Items ---------- */
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    gsap.fromTo(item,
      { x: -30, opacity: 0 },
      { scrollTrigger: { trigger: item, start: 'top 85%' }, x: 0, opacity: 1, duration: 0.7, delay: i * 0.1, ease: 'power3.out' }
    );
  });

  /* ---------- Standalone Reveals ---------- */
  document.querySelectorAll('.reveal').forEach(el => {
    gsap.fromTo(el,
      { y: 40, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  });
  document.querySelectorAll('.reveal-left').forEach(el => {
    gsap.fromTo(el,
      { x: -50, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 85%' }, x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  });
  document.querySelectorAll('.reveal-right').forEach(el => {
    gsap.fromTo(el,
      { x: 50, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 85%' }, x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  });

  /* ---------- Pricing Cards ---------- */
  document.querySelectorAll('.pricing-grid').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 50, opacity: 0 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  });

  /* ---------- Testimonials ---------- */
  document.querySelectorAll('.testimonials-grid').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
    );
  });

  /* ---------- Tutor Cards ---------- */
  document.querySelectorAll('.tutors-grid').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 40, opacity: 0, rotateY: 8 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, rotateY: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  });

  /* ---------- FAQ Items ---------- */
  document.querySelectorAll('.faq-list').forEach(list => {
    gsap.fromTo(list.children,
      { y: 20, opacity: 0 },
      { scrollTrigger: { trigger: list, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
    );
  });

  /* ---------- CTA Parallax ---------- */
  const cta = document.querySelector('.cta-section');
  if (cta) {
    gsap.fromTo(cta.querySelector('.cta-content'),
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: cta, start: 'top 80%' }, y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    );
  }

  /* ---------- Event Cards ---------- */
  document.querySelectorAll('.event-card').forEach((card, i) => {
    gsap.fromTo(card,
      { x: i % 2 === 0 ? -30 : 30, opacity: 0 },
      { scrollTrigger: { trigger: card, start: 'top 88%' }, x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
    );
  });
});

/* Add to the end of js/animations.js */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // 1. Parallax Image
  gsap.utils.toArray('.parallax-img').forEach(img => {
    gsap.to(img, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: img.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // 2. Scale Reveal
  gsap.utils.toArray('.scale-reveal').forEach(el => {
    gsap.from(el, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // 3. Horizontal Scroll Gallery
  const hSection = document.querySelector('.horizontal-gallery-section');
  const hInner = document.querySelector('.horizontal-scroll-inner');
  if (hSection && hInner) {
    if (window.innerWidth > 768) {
      let getToValue = () => -(hInner.scrollWidth - window.innerWidth);
      gsap.to(hInner, {
        x: getToValue,
        ease: "none",
        scrollTrigger: {
          trigger: hSection,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () => "+=" + (hInner.scrollWidth - window.innerWidth)
        }
      });
    }
  }

  // 4. Float Icon Cards Stagger
  const floatCards = gsap.utils.toArray('.float-icon-card');
  if (floatCards.length > 0) {
    gsap.from(floatCards, {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: floatCards[0].parentElement,
        start: "top 85%"
      }
    });
    
    // Add hover float effect to icons
    floatCards.forEach(card => {
      const icon = card.querySelector('.f-icon');
      card.addEventListener('mouseenter', () => {
        gsap.to(icon, { y: -10, scale: 1.1, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }

  // 5. Contact Zoom & Fade
  const zoomImg = document.querySelector('.zoom-img');
  const fadeBox = document.querySelector('.fade-up-box');
  
  if (zoomImg && fadeBox) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: zoomImg.parentElement,
        start: "top 75%"
      }
    });
    tl.from(zoomImg, { scale: 1.2, duration: 1.5, ease: "power3.out" })
      .from(fadeBox, { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=1");
  }
});
