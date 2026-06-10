/* ============================================================
   ProFRONTIER — Dark Neon EdTech Website
   script.js
============================================================ */

'use strict';

// ─── PARTICLE CANVAS ─────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  let animId;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const PARTICLE_COUNT = 80;
  const particles = [];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.6 + 0.3;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.speed = Math.random() * 0.35 + 0.05;
      this.dx = (Math.random() - 0.5) * 0.4;
      this.dy = -this.speed;
      this.color = Math.random() > 0.5 ? '0,163,255' : '139,92,246';
    }
    update() {
      this.x += this.dx;
      this.y += this.dy;
      this.alpha -= 0.0007;
      if (this.y < 0 || this.alpha <= 0) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(loop);
  }
  loop();
})();


// ─── HEADER SCROLL EFFECT ────────────────────────────────────
const header = document.getElementById('header');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  header.classList.toggle('scrolled', scrolled);
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


// ─── MOBILE MENU ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

navMenu.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});


// ─── ACTIVE NAV LINK ON SCROLL ───────────────────────────────
const sections = document.querySelectorAll('main section[id], header');
const navLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const id = entry.target.id;
        const matched = document.querySelector(`.nav__link[href="#${id}"]`);
        if (matched) matched.classList.add('active');
      }
    });
  },
  { threshold: 0.35 }
);

document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));


// ─── DARK / LIGHT THEME TOGGLE ───────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

let isDark = true;

function applyTheme(dark) {
  document.body.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeIcon.textContent = dark ? '☽' : '☀';
  localStorage.setItem('pf-theme', dark ? 'dark' : 'light');
}

// Restore saved theme
const saved = localStorage.getItem('pf-theme');
if (saved === 'light') { isDark = false; applyTheme(false); }

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  applyTheme(isDark);
});


// ─── PRICING TOGGLE ──────────────────────────────────────────
const billingToggle = document.getElementById('billing-toggle');
const priceAmounts = document.querySelectorAll('.price-amount');

billingToggle.addEventListener('change', () => {
  const isAnnual = billingToggle.checked;
  priceAmounts.forEach(el => {
    const val = isAnnual ? el.dataset.annual : el.dataset.monthly;
    el.textContent = val;
  });
});


// ─── TESTIMONIAL SLIDER ──────────────────────────────────────
const track = document.getElementById('testimonials-track');
const dots = document.querySelectorAll('.dot');
const CARDS_PER_VIEW = (() => {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
})();
let currentSlide = 0;
const totalSlides = dots.length;

function goToSlide(n) {
  currentSlide = n;
  const cardWidth = track.querySelector('.testimonial-card').offsetWidth + 24;
  const offset = n * cardWidth * (window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3);
  track.style.transform = `translateX(-${offset}px)`;
  dots.forEach((d, i) => d.classList.toggle('dot--active', i === n));
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

// Auto-slide
setInterval(() => {
  goToSlide((currentSlide + 1) % totalSlides);
}, 5000);

// Swipe support
let touchStartX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) goToSlide(Math.min(currentSlide + 1, totalSlides - 1));
    else goToSlide(Math.max(currentSlide - 1, 0));
  }
}, { passive: true });


// ─── SCROLL REVEAL ───────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach(el => revealObserver.observe(el));


// ─── ADD REVEAL CLASSES TO ELEMENTS ──────────────────────────
function addReveal() {
  const sectionHeaders = document.querySelectorAll('.section__header, .about__content > *');
  sectionHeaders.forEach((el, i) => {
    el.classList.add('reveal');
    if (i > 0) el.classList.add(`reveal-delay-${Math.min(i, 5)}`);
  });

  document.querySelectorAll('.course-card').forEach((el, i) => {
    el.classList.add('reveal', `reveal-delay-${(i % 3) + 1}`);
  });

  document.querySelectorAll('.why-card').forEach((el, i) => {
    el.classList.add('reveal', `reveal-delay-${(i % 3) + 1}`);
  });

  document.querySelectorAll('.testimonial-card').forEach((el, i) => {
    el.classList.add('reveal', `reveal-delay-${(i % 3) + 1}`);
  });

  document.querySelectorAll('.pricing-card').forEach((el, i) => {
    el.classList.add('reveal', `reveal-delay-${i + 1}`);
  });

  document.querySelectorAll('.stat-card').forEach((el, i) => {
    el.classList.add('reveal', `reveal-delay-${i + 1}`);
  });

  document.querySelectorAll('.about-stat-card').forEach((el, i) => {
    el.classList.add('reveal', `reveal-delay-${i + 1}`);
  });
}

addReveal();

// Re-observe newly classed elements
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ─── TOAST NOTIFICATION ──────────────────────────────────────
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toast-msg');
  const icon = toast.querySelector('.toast-icon');

  msg.textContent = message;
  icon.textContent = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';

  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}


// ─── CTA FORM SUBMISSION ────────────────────────────────────
const ctaForm = document.getElementById('cta-form');

ctaForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const btn = this.querySelector('[type="submit"]');
  const originalText = btn.textContent;

  btn.textContent = 'Sending...';
  btn.disabled = true;
  btn.style.opacity = '0.7';

  // Simulate async submission
  setTimeout(() => {
    btn.textContent = '✓ Consultation Booked!';
    btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
    btn.style.opacity = '1';
    showToast('Consultation booked! We will contact you within 24 hours.');
    ctaForm.reset();

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }, 1500);
});


// ─── SMOOTH NUMBER COUNTER ANIMATION ─────────────────────────
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 1800;
  const startTime = performance.now();
  const isFloat = typeof target === 'string' && target.includes('.');

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = isFloat
      ? (parseFloat(target) * ease).toFixed(1)
      : Math.floor(parseFloat(target) * ease);
    el.textContent = val + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(update);
}

const statNums = document.querySelectorAll('.stat-num');
let counterStarted = false;

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counterStarted) {
      counterStarted = true;
      const data = [
        { el: statNums[0], val: '80', suffix: '+' },
        { el: statNums[1], val: '15000', suffix: '' },
        { el: statNums[2], val: '20', suffix: '+' },
        { el: statNums[3], val: '98', suffix: '%' },
      ];
      data.forEach(({ el, val, suffix }, i) => {
        setTimeout(() => {
          if (el) animateCounter(el, val, suffix);
          if (i === 1 && statNums[1]) {
            // Format 15000 as 15K+
            setTimeout(() => { statNums[1].textContent = '15K+'; }, 1900);
          }
        }, i * 150);
      });
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero__stats');
if (heroStats) counterObserver.observe(heroStats);


// ─── CURSOR GLOW EFFECT (desktop only) ───────────────────────
if (window.matchMedia('(pointer: fine)').matches) {
  const cursorGlow = document.createElement('div');
  cursorGlow.style.cssText = `
    position: fixed;
    pointer-events: none;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,163,255,0.06) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
    z-index: 0;
  `;
  document.body.appendChild(cursorGlow);

  let mx = 0, my = 0, cx = 0, cy = 0;

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
  });

  (function animGlow() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    cursorGlow.style.left = cx + 'px';
    cursorGlow.style.top = cy + 'px';
    requestAnimationFrame(animGlow);
  })();
}


// ─── HERO PARALLAX (subtle) ──────────────────────────────────
const heroVisual = document.getElementById('hero-visual');
if (heroVisual && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    const rx = ((e.clientX / window.innerWidth) - 0.5) * 14;
    const ry = ((e.clientY / window.innerHeight) - 0.5) * 8;
    heroVisual.style.transform = `perspective(1000px) rotateY(${rx}deg) rotateX(${-ry}deg)`;
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    heroVisual.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  });
}


// ─── NEON BUTTON RIPPLE EFFECT ───────────────────────────────
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px; height: ${size}px;
      border-radius: 50%;
      background: rgba(255,255,255,0.15);
      top: ${e.clientY - rect.top - size/2}px;
      left: ${e.clientX - rect.left - size/2}px;
      transform: scale(0);
      animation: rippleEffect 0.6s ease-out forwards;
      pointer-events: none;
    `;
    if (getComputedStyle(this).position === 'static') this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

// Ripple keyframes
const style = document.createElement('style');
style.textContent = `@keyframes rippleEffect { to { transform: scale(2.5); opacity: 0; } }`;
document.head.appendChild(style);


// ─── GLITCH TEXT EFFECT on logo ──────────────────────────────
const logoName = document.querySelector('.logo-name');
if (logoName) {
  logoName.addEventListener('mouseenter', () => {
    logoName.style.animation = 'none';
    void logoName.offsetWidth;
    logoName.style.animation = 'glitchText 0.4s ease';
  });

  const glitchStyle = document.createElement('style');
  glitchStyle.textContent = `
    @keyframes glitchText {
      0% { text-shadow: none; }
      20% { text-shadow: -2px 0 #00A3FF, 2px 0 #8B5CF6; }
      40% { text-shadow: 2px 0 #00A3FF, -2px 0 #8B5CF6; letter-spacing: 0.1em; }
      60% { text-shadow: -1px 0 #00A3FF; letter-spacing: 0.04em; }
      100% { text-shadow: none; }
    }
  `;
  document.head.appendChild(glitchStyle);
}


// ─── KEYBOARD NAVIGATION ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
});


console.log('%c🎓 ProFRONTIER International Online Academy', 'font-size:16px;font-weight:bold;background:linear-gradient(135deg,#00A3FF,#8B5CF6);-webkit-background-clip:text;color:transparent;');
console.log('%cBuilt with passion for global learners 🌍', 'color:#94A3B8;font-size:12px;');
