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

      // Custom validation
      var isValid = true;
      contactForm.querySelectorAll('[required]').forEach(function (field) {
        field.classList.remove('field-error');
        if (!field.value.trim()) {
          field.classList.add('field-error');
          isValid = false;
        }
      });

      // Basic email format check
      var emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value.trim()) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
          emailField.classList.add('field-error');
          isValid = false;
        }
      }

      if (!isValid) {
        var firstError = contactForm.querySelector('.field-error');
        if (firstError) { firstError.focus(); }
        return;
      }

      var btn = contactForm.querySelector('.form-submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Simulate form submission (replace with real endpoint as needed)
      setTimeout(function () {
        contactForm.innerHTML =
          '<div class="form-success">' +
          '<div class="form-success-icon">✅</div>' +
          '<h3 class="form-success-heading">Message Received!</h3>' +
          '<p>Thank you for reaching out. We\'ll get back to you within 1–2 business days.</p>' +
          '</div>';
      }, 1000);
    });
  }

  /* --- Smooth scroll for hash links not handled by CSS --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var hash = this.getAttribute('href');
      var target;
      try {
        target = document.querySelector(hash);
      } catch (_) {
        return;
      }
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
