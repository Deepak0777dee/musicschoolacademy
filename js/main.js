/* ============================================
   MAIN.JS — Stackly Music School Academy
   Navigation, Mobile Menu, Scroll,
   Stat Counters, Form Validation, FAQ
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Page Loader ---------- */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 600);
    });
    setTimeout(() => loader.classList.add('hidden'), 3000);
  }

  /* ---------- Header Scroll ---------- */
  const header = document.getElementById('mainHeader');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile Menu ---------- */
  const hamBtn = document.querySelector('.ham-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');
  const mobileOverlay = document.getElementById('mobile-overlay');

  function openMobile() {
    if (mobileMenu) mobileMenu.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMobile() {
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (hamBtn) hamBtn.addEventListener('click', openMobile);
  if (mobileClose) mobileClose.addEventListener('click', closeMobile);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobile);

  /* ---------- Stat Counter ---------- */
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const start = performance.now();

          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * eased);
            el.textContent = current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => counterObserver.observe(el));
  }

  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  /* ---------- Dashboard: Sidebar Toggle ---------- */
  const sidebar = document.getElementById('sidebar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebarClose = document.getElementById('sidebarClose');

  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
  if (sidebarClose && sidebar) {
    sidebarClose.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  }

  /* ---------- Active Sidebar Link ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  /* ---------- Dynamic Footer ---------- */
  const footerEl = document.querySelector('.footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="logo"><img src="images/logo-stackly.webp" alt="Stackly" /></a>
            <p>Stackly Music School Academy nurtures musical talent through expert instruction, inspiring performances, and a vibrant learning community.</p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="courses.html">Courses</a></li>
              <li><a href="tutors.html">Tutors</a></li>
              <li><a href="events.html">Events</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Instruments</h4>
            <ul>
              <li><a href="courses.html">Piano</a></li>
              <li><a href="courses.html">Violin</a></li>
              <li><a href="courses.html">Guitar</a></li>
              <li><a href="courses.html">Voice</a></li>
              <li><a href="courses.html">Drums</a></li>
              <li><a href="courses.html">Theory</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@thestackly.com">info@thestackly.com</a></li>
              <li><a href="tel:+917010792745">+91 70107 92745</a></li>
              <li><a href="contact.html">MMR Complex, Salem, TN</a></li>
              <li><a href="contact.html">Mon–Fri 9AM–6PM</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Stackly Music School Academy. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="404.html">Privacy</a>
            <a href="404.html">Terms</a>
            <a href="404.html">Cookies</a>
          </div>
        </div>
      </div>
    `;
  }

});

/* ---------- Form Validation ---------- */
function validateField(input) {
  const group = input.closest('.form-group');
  const errorDiv = group ? group.querySelector('.form-error') : null;
  let message = '';

  if (input.required && !input.value.trim()) {
    message = 'This field is required';
  } else if (input.type === 'email' && input.value.trim()) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(input.value.trim())) {
      message = 'Please enter a valid email';
    }
  } else if (input.type === 'tel' && input.value.trim()) {
    if (!/^\d{10}$/.test(input.value.replace(/\s/g, ''))) {
      message = 'Phone number must be 10 digits';
    }
  } else if (input.pattern && input.value.trim()) {
    const re = new RegExp('^' + input.pattern + '$');
    if (!re.test(input.value.trim())) {
      message = input.title || 'Invalid format';
    }
  } else if (input.minLength > 0 && input.value.length < input.minLength) {
    message = `Minimum ${input.minLength} characters required`;
  }

  if (errorDiv) errorDiv.textContent = message;
  if (message) {
    input.style.borderColor = 'var(--danger)';
    return false;
  } else {
    input.style.borderColor = '';
    return true;
  }
}

/* ---------- Password Toggle ---------- */
document.addEventListener('click', (e) => {
  const toggle = e.target.closest('.password-toggle');
  if (!toggle) return;
  const wrapper = toggle.closest('.password-wrapper');
  const input = wrapper ? wrapper.querySelector('input') : null;
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
});

/* ---------- Redirect Empty Actions to 404 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const el = e.target.closest('button, a');
    if (!el) return;

    if (el.tagName === 'A') {
      const href = el.getAttribute('href');
      if (!href || href === '#' || href === '') {
        e.preventDefault();
        window.location.href = '404.html';
      }
    } else if (el.tagName === 'BUTTON') {
      const hasOnclick = el.hasAttribute('onclick');
      const hasId = el.hasAttribute('id');
      const isSubmit = el.getAttribute('type') === 'submit' || (el.closest('form') && !el.hasAttribute('type'));
      const functionalClasses = ['ham-btn', 'mobile-close', 'sidebar-close', 'faq-question', 'password-toggle', 'mobile-menu-btn', 'role-option'];
      const hasFunctionalClass = functionalClasses.some(cls => el.classList.contains(cls));

      if (!hasOnclick && !isSubmit && !hasFunctionalClass && !hasId) {
        e.preventDefault();
        window.location.href = '404.html';
      }
    }
  });
});
