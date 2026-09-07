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
  const hWrapper = document.querySelector('.horizontal-scroll-wrapper');
  if (hWrapper) {
    const cards = gsap.utils.toArray('.h-card');
    if (cards.length > 0 && window.innerWidth > 768) {
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: hWrapper,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => "+=" + hWrapper.offsetWidth
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
