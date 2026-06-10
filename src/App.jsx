import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

// Layout components
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import OverseasPage from './pages/OverseasPage';
import CountryDetailPage from './pages/CountryDetailPage';
import ContactPage from './pages/ContactPage';
import FaqsPage from './pages/FaqsPage';
import ITServicesPage from './pages/ITServicesPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import CareersPage from './pages/CareersPage';

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// WhatsApp floating button component
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/96566779011"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}

// Back to top button component
function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${visible ? 'visible' : ''}`}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-chevron-up"></i>
    </button>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Global Scroll Reveal and Glow Card Hover Mouse Tracking
  useEffect(() => {
    // 1. Scroll Reveal IntersectionObserver + MutationObserver
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const observeReveals = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => {
        if (!el.classList.contains('revealed')) {
          revealObserver.observe(el);
        }
      });
    };

    observeReveals();

    const mutationObserver = new MutationObserver(() => {
      observeReveals();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // 2. High-performance Mouse Glow coordinate tracking via Event Delegation
    const handleMouseMove = (e) => {
      const card = e.target.closest('.glow-card');
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [location.pathname]);

  return (
    <div className="app-container">
      {/* Background Particle Canvas */}
      <ParticleCanvas />

      {/* Navigation Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Router */}
      <main style={{ minHeight: 'calc(100vh - var(--nav-height) - 400px)', position: 'relative' }}>
        <div key={location.pathname} className="page-fade-in">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/overseas" element={<OverseasPage />} />
            <Route path="/overseas/:slug" element={<CountryDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/services" element={<ITServicesPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Float Buttons */}
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
