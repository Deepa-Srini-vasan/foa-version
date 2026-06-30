import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  {
    label: 'Courses',
    to: '/courses',
    dropdown: [
      { label: 'Health Care & Quality', to: '/courses?cat=healthcare', icon: 'fa-solid fa-hospital' },
      { label: 'English Exam Preparation', to: '/courses?cat=language', icon: 'fa-solid fa-file-signature' },
      { label: 'Languages', to: '/courses?cat=language', icon: 'fa-solid fa-earth-americas' },
      { label: 'Soft Skills', to: '/courses?cat=softskills', icon: 'fa-solid fa-brain' },
      { label: 'Finance', to: '/courses?cat=finance', icon: 'fa-solid fa-coins' },
      { label: 'Information Technology', to: '/courses?cat=it', icon: 'fa-solid fa-laptop-code' },
      { label: 'Human Resources', to: '/courses?cat=hr', icon: 'fa-solid fa-user-tie' },
      { label: 'Aviation', to: '/courses?cat=aviation', icon: 'fa-solid fa-plane' },
    ],
  },
  {
    label: 'Overseas',
    to: '/overseas',
    dropdown: [
      { label: 'Study in Australia', to: '/overseas/australia', icon: 'fa-solid fa-map-location-dot' },
      { label: 'Study in UK', to: '/overseas/uk', icon: 'fa-solid fa-landmark' },
      { label: 'Study in USA', to: '/overseas/usa', icon: 'fa-solid fa-building-columns' },
      { label: 'Study in Canada', to: '/overseas/canada', icon: 'fa-solid fa-tree' },
      { label: 'Study in Ireland', to: '/overseas/ireland', icon: 'fa-solid fa-clover' },
      { label: 'Study in Germany', to: '/overseas/germany', icon: 'fa-solid fa-gears' },
      { label: 'Study in France', to: '/overseas/france', icon: 'fa-solid fa-archway' },
      { label: 'Study in New Zealand', to: '/overseas/new-zealand', icon: 'fa-solid fa-compass' },
    ],
  },
  { label: 'IT Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();
  const headerRef = useRef(null);

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdowns({});
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img
            src="/assets/categories/fronts.png"
            alt="ProFRONTIER International Online Academy"
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.menu}>
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className={`${styles.menuItem} ${item.dropdown ? styles.hasDropdown : ''}`}
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
              >
                {item.label}
                {item.dropdown && <span className={styles.arrow}>▾</span>}
              </NavLink>

              {item.dropdown && activeDropdown === item.label && (
                <ul className={styles.dropdown}>
                  {item.dropdown.map((d) => (
                    <li key={d.label}>
                      <Link to={d.to} className={styles.dropdownLink}>
                        <i className={d.icon} style={{ marginRight: '8px', opacity: 0.8 }}></i>
                        {d.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScdiM_tq3c_2lB08z5j86KoxYjXlq0uBvX9N6t3G_B-gTz40g/viewform" target="_blank" rel="noopener noreferrer" className="btn btn--gradient btn--sm" onClick={() => trackEvent({ eventName: 'Lead', category: 'Enrollment', label: 'Header Desktop CTA' })}>
            Enroll Now <span>→</span>
          </a>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay & Slide-in Drawer */}
      <div className={`${styles.mobileContainer} ${menuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)} />
        <div className={styles.mobileMenu}>
          <div className={styles.mobileHeader}>
            <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
              <img
                src="/assets/categories/fronts.png"
                alt="ProFRONTIER International Online Academy"
                className={styles.logoImage}
              />
            </Link>
            <button
              className={styles.mobileClose}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <ul className={styles.mobileNav}>
            {NAV_ITEMS.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isExpanded = !!mobileDropdowns[item.label];
              return (
                <li key={item.label} className={styles.mobileItem}>
                  {hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className={`${styles.mobileLink} ${styles.mobileLinkDropdownToggle} ${isExpanded ? styles.expanded : ''}`}
                      >
                        {item.label}
                        <i className={`fa-solid fa-chevron-down ${styles.mobileArrow} ${isExpanded ? styles.rotated : ''}`}></i>
                      </button>
                      <ul className={`${styles.mobileDropdown} ${isExpanded ? styles.showDropdown : ''}`}>
                        {item.dropdown.map((d) => (
                          <li key={d.label}>
                            <Link
                              to={d.to}
                              className={styles.mobileDropdownLink}
                              onClick={() => setMenuOpen(false)}
                            >
                              <i className={d.icon} style={{ marginRight: '8px', opacity: 0.8 }}></i>
                              {d.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>

          <div className={styles.mobileFooterActions}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScdiM_tq3c_2lB08z5j86KoxYjXlq0uBvX9N6t3G_B-gTz40g/viewform" target="_blank" rel="noopener noreferrer" className="btn btn--gradient btn--full" onClick={() => { setMenuOpen(false); trackEvent({ eventName: 'Lead', category: 'Enrollment', label: 'Header Mobile CTA' }); }}>
              Enroll Now <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
