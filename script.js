/* ============================================
   MicroPropPlants.com - Main Script
   ============================================ */

(function () {
  'use strict';

  /* --- Mobile Navigation --- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on mobile link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Contact Form --- */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = contactForm.querySelector('.form-submit');
      const originalText = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Simulate form submission (replace with real endpoint as needed)
      setTimeout(function () {
        contactForm.innerHTML =
          '<div style="text-align:center;padding:2rem;">' +
          '<div style="font-size:3rem;margin-bottom:1rem;">✅</div>' +
          '<h3 style="color:var(--color-primary-dark);margin-bottom:0.5rem;">Message Received!</h3>' +
          '<p>Thank you for reaching out. We\'ll get back to you within 1–2 business days.</p>' +
          '</div>';
      }, 1000);
    });
  }

  /* --- Smooth scroll for hash links not handled by CSS --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Intersection Observer for fade-in animations --- */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.product-card, .step-card, .feature-card, .about-icon-card').forEach(function (el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }
})();
