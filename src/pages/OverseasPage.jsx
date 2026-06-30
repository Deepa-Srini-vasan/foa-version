import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { countries } from '../data/overseas';
import { getFaIcon } from '../utils/icons';
import styles from './OverseasPage.module.css';

const COUNTRY_THEMES = {
  australia: {
    accentColor: '#00A3FF',
    glowColor: 'rgba(0, 163, 255, 0.15)',
    borderGlow: 'rgba(0, 163, 255, 0.25)',
    subColor: '#60CDFF',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M15,75 Q40,65 30,30 Q55,60 55,75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35,75 Q65,55 55,20 Q80,50 75,75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M55,75 Q85,50 75,10 Q95,40 95,75" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="75" x2="90" y2="75" strokeWidth="6" />
      </svg>
    ),
  },
  uk: {
    accentColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    borderGlow: 'rgba(139, 92, 246, 0.25)',
    subColor: '#C084FC',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
        <rect x="42" y="32" width="16" height="50" rx="1" />
        <path d="M40,32 L60,32 M44,32 L44,82 M56,32 L56,82" />
        <circle cx="50" cy="42" r="4" />
        <path d="M42,32 L50,15 L58,32 Z" fill="currentColor" fillOpacity="0.1" />
        <line x1="50" y1="15" x2="50" y2="5" />
        <line x1="30" y1="82" x2="70" y2="82" strokeWidth="6" />
      </svg>
    ),
  },
  usa: {
    accentColor: '#00D4AA',
    glowColor: 'rgba(0, 212, 170, 0.15)',
    borderGlow: 'rgba(0, 212, 170, 0.25)',
    subColor: '#4EF7D0',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M42,40 Q50,45 58,40" />
        <path d="M42,40 L30,35 L45,42 L38,28 L48,43 L50,22 L52,43 L62,28 L55,42 L70,35 L58,40" strokeLinejoin="round" />
        <path d="M46,43 L46,50 Q50,54 54,50 L54,43" />
        <path d="M58,48 L68,25 M68,25 L64,28 M68,25 L72,28" />
        <path d="M68,25 C68,18 74,18 72,15 C68,18 64,22 68,25" fill="currentColor" />
        <path d="M42,48 L32,52 L34,58 L42,54 Z" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
        <line x1="25" y1="82" x2="75" y2="82" strokeWidth="6" />
      </svg>
    ),
  },
  canada: {
    accentColor: '#EF4444',
    glowColor: 'rgba(239, 68, 68, 0.15)',
    borderGlow: 'rgba(239, 68, 68, 0.25)',
    subColor: '#FCA5A5',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50,80 L50,90 M50,80 C47,75 42,70 42,70 L35,72 L38,62 L28,62 L32,54 L22,46 L34,44 L32,32 L44,36 L50,18 L56,36 L68,32 L66,44 L78,46 L68,54 L72,62 L62,62 L65,72 L58,70 C58,70 53,75 50,80 Z" fill="currentColor" fillOpacity="0.1" />
      </svg>
    ),
  },
  ireland: {
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    borderGlow: 'rgba(16, 185, 129, 0.25)',
    subColor: '#6EE7B7',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50,55 C42,45 32,48 35,58 C38,68 48,65 50,55" fill="currentColor" fillOpacity="0.1" />
        <path d="M50,55 C45,38 55,38 50,55" fill="currentColor" fillOpacity="0.1" />
        <path d="M50,55 C58,45 68,48 65,58 C62,68 52,65 50,55" fill="currentColor" fillOpacity="0.1" />
        <path d="M50,55 Q50,75 40,85" />
      </svg>
    ),
  },
  germany: {
    accentColor: '#FBBF24',
    glowColor: 'rgba(251, 191, 36, 0.15)',
    borderGlow: 'rgba(251, 191, 36, 0.25)',
    subColor: '#FDE68A',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="20" y1="75" x2="80" y2="75" strokeWidth="6" />
        <rect x="25" y="35" width="50" height="8" fill="currentColor" fillOpacity="0.1" />
        <line x1="30" y1="43" x2="30" y2="75" />
        <line x1="38" y1="43" x2="38" y2="75" />
        <line x1="46" y1="43" x2="46" y2="75" />
        <line x1="54" y1="43" x2="54" y2="75" />
        <line x1="62" y1="43" x2="62" y2="75" />
        <line x1="70" y1="43" x2="70" y2="75" />
        <path d="M45,35 L50,23 L55,35 Z" fill="currentColor" />
        <circle cx="50" cy="23" r="3" />
      </svg>
    ),
  },
  france: {
    accentColor: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.15)',
    borderGlow: 'rgba(236, 72, 153, 0.25)',
    subColor: '#FBCFE8',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M47,20 L53,20 L57,80 L43,80 Z" />
        <path d="M35,85 C42,76 58,76 65,85" />
        <line x1="45" y1="45" x2="55" y2="45" />
        <line x1="43" y1="60" x2="57" y2="60" />
        <line x1="50" y1="20" x2="50" y2="10" />
      </svg>
    ),
  },
  'new-zealand': {
    accentColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.15)',
    borderGlow: 'rgba(6, 182, 212, 0.25)',
    subColor: '#67E8F9',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="50" cy="50" r="35" fill="currentColor" fillOpacity="0.1" />
        <path d="M50,15 L55,45 L50,50 Z" fill="currentColor" />
        <path d="M50,85 L45,55 L50,50 Z" />
        <path d="M15,50 L45,45 L50,50 Z" />
        <path d="M85,50 L55,55 L50,50 Z" />
        <circle cx="50" cy="50" r="4" fill="#fff" />
      </svg>
    ),
  },
};

const getCountryTheme = (id) => {
  return COUNTRY_THEMES[id] || {
    accentColor: '#00A3FF',
    glowColor: 'rgba(0, 163, 255, 0.15)',
    borderGlow: 'rgba(0, 163, 255, 0.25)',
    subColor: '#60CDFF',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
        <circle cx="50" cy="50" r="30" />
      </svg>
    )
  };
};

export default function OverseasPage() {
  useEffect(() => {
    document.title = 'Overseas Education — ProFRONTIER International Online Academy';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="page-banner__breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Overseas Education</span>
          </div>
          <span className="section__tag page-banner__tag">STUDY ABROAD</span>
          <h1>Overseas <span className="gradient-text">Education</span></h1>
          <p>We guide students to top universities across 8+ countries — your global future starts with ProFRONTIER</p>
        </div>
      </div>

      {/* Why Study Abroad */}
      <section className="section--sm" style={{ background: 'linear-gradient(135deg, rgba(0,163,255,0.04), rgba(139,92,246,0.04))', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className={styles.whyGrid}>
            {[
              { icon: 'fa-solid fa-earth-americas', title: 'Global Exposure', desc: 'Experience diverse cultures and global perspectives that shape outstanding professionals.' },
              { icon: 'fa-solid fa-graduation-cap', title: 'World-Class Degrees', desc: 'Earn degrees recognised by top employers worldwide from QS-ranked institutions.' },
              { icon: 'fa-solid fa-briefcase', title: 'Career Advantage', desc: 'International graduates command higher salaries and access to global job markets.' },
              { icon: 'fa-solid fa-handshake', title: 'Global Network', desc: 'Build lifelong connections with peers and professionals from 100+ countries.' },
            ].map((w, i) => (
              <div key={w.title} className={`${styles.whyCard} reveal reveal--delay-${(i % 4) + 1} glow-card`}>
                <span className={styles.whyIcon}><i className={w.icon}></i></span>
                <div>
                  <strong>{w.title}</strong>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">OVERSEAS EDUCATION</span>
            <h2 className="section__title">Study Abroad, <span className="gradient-text">Shape Your Future</span></h2>
            <p className="section__desc">Explore top destinations with world-class universities, diverse cultures, and life-changing opportunities.</p>
          </div>
          <div className={styles.countriesGrid}>
            {countries.map((c, i) => {
              const theme = getCountryTheme(c.id);
              return (
                <div
                  key={c.id}
                  className={`${styles.cardContainer} reveal reveal--delay-${(i % 3) + 1}`}
                  style={{
                    '--accent-glow': theme.glowColor,
                    '--border-glow': theme.borderGlow,
                    '--accent-color': theme.accentColor,
                  }}
                >
                  <div className={styles.countryCard}>
                    {/* Front Side */}
                    <div className={styles.cardFront}>
                      <div
                        className={styles.countryBadge}
                        style={{
                          borderColor: theme.accentColor,
                          color: theme.accentColor,
                          boxShadow: `0 0 20px ${theme.glowColor}`,
                        }}
                      >
                        {theme.iconSvg}
                      </div>
                      <div className={styles.countryInfo}>
                        <div className={styles.countryCardHeader}>
                          <h3>{c.name}</h3>
                          <span className={styles.hoverTip}>Hover to flip 🔄</span>
                        </div>
                        <p className={styles.countryTagline} style={{ color: theme.subColor }}>
                          {c.tagline}
                        </p>
                        <p className={styles.countryDescFront}>
                          {c.description}
                        </p>
                        <div className={styles.countryMeta}>
                          <span className={styles.metaBadge}>
                            <i className="fa-solid fa-building-columns" style={{ marginRight: '6px' }}></i>
                            {c.topUniversities.length} Top Universities
                          </span>
                          <span className={styles.metaBadge}>
                            <i className="fa-regular fa-calendar" style={{ marginRight: '6px' }}></i>
                            Intake: {c.intakeMonths.join(' & ')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <Link to={`/overseas/${c.slug}`} className={styles.cardBack}>
                      <img
                        src={`/assets/countries/${c.slug}.png`}
                        alt={c.name}
                        className={styles.backImage}
                      />
                      <div className={styles.backOverlay} />
                      <div className={styles.backContent}>
                        <span className={styles.backFlag}>{c.flag}</span>
                        <h3>Study in {c.name}</h3>
                        <p>{c.tagline}</p>
                        <span className={styles.exploreBtn}>
                          Explore Program →
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-xl)' }}>
          <span className="section__tag">FREE CONSULTATION</span>
          <h2 className="section__title">Ready to Study <span className="gradient-text">Abroad?</span></h2>
          <p className="section__desc">Our overseas education advisors are ready to guide you through the entire application process — from course selection to visa application.</p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn--gradient btn--lg">Book Free Consultation →</Link>
            <Link to="/courses" className="btn btn--ghost btn--lg">View Language Courses</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
