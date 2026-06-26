import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ITServicesPage.module.css';

const SERVICES = [
  {
    id: 'web-dev',
    icon: 'fa-solid fa-code',
    title: 'Web Development',
    description: 'We build fast, responsive and scalable websites that deliver exceptional user experiences.',
    features: ['Responsive CSS Layouts', 'SEO & Speed Optimized', 'React & Next.js Platforms', 'E-commerce Solutions'],
    isPurple: false,
    svg: (
      <svg viewBox="0 0 100 100" className={styles.cardSvg}>
        <path d="M15 75 h70 v4 a3 3 0 01-3 3 H18 a3 3 0 01-3-3 v-4 z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="22" y="30" width="56" height="45" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="30" y1="40" x2="48" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="30" y1="48" x2="62" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="30" y1="56" x2="56" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M64 62 l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8" />
      </svg>
    )
  },
  {
    id: 'app-dev',
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'App Development',
    description: 'Cross-platform mobile apps with modern technologies for seamless performance.',
    features: ['iOS & Android Apps', 'React Native & Flutter', 'App Store Publishing', 'API & Database Integration'],
    isPurple: true,
    svg: (
      <svg viewBox="0 0 100 100" className={styles.cardSvg}>
        <rect x="32" y="20" width="36" height="64" rx="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="45" y1="80" x2="55" y2="80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <line x1="46" y1="24" x2="54" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <rect x="38" y="32" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
        <circle cx="44" cy="56" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
        <circle cx="56" cy="56" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
        <line x1="38" y1="68" x2="62" y2="68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    )
  },
  {
    id: 'marketing',
    icon: 'fa-solid fa-chart-line',
    title: 'Digital Marketing',
    description: 'Data-driven strategies that boost visibility, engagement and conversion.',
    features: ['Search Engine Optimization', 'Social Media Marketing', 'Google & Meta Ads', 'Analytics & Reporting'],
    isPurple: false,
    svg: (
      <svg viewBox="0 0 100 100" className={styles.cardSvg}>
        <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <line x1="20" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <rect x="28" y="60" width="8" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
        <rect x="42" y="48" width="8" height="32" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
        <rect x="56" y="38" width="8" height="42" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
        <rect x="70" y="24" width="8" height="56" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M22 68 L38 52 L52 58 L78 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M72 22 h6 v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    )
  },
  {
    id: 'hosting',
    icon: 'fa-solid fa-server',
    title: 'Domain & Hosting',
    description: 'Reliable hosting and domain services that ensure your website is always online.',
    features: ['Secure Cloud Hosting', '99.9% Uptime Guarantee', 'Domain Registration', 'SSL & Backup Solutions'],
    isPurple: false,
    svg: (
      <svg viewBox="0 0 100 100" className={styles.cardSvg}>
        <path d="M30 65 a12 12 0 010-24 a15 15 0 0128-4 a12 12 0 0118 8 a10 10 0 01-4 20 z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="36" y="48" width="28" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
        <rect x="36" y="58" width="28" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
        <circle cx="40" cy="52" r="1" fill="currentColor" />
        <circle cx="40" cy="62" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'design',
    icon: 'fa-solid fa-palette',
    title: 'Graphic Design',
    description: 'Creative designs that represent your brand and leave a lasting impression.',
    features: ['Logo & Branding Guides', 'UI/UX Wireframing', 'Marketing Collaterals', 'Social Media Designs'],
    isPurple: true,
    svg: (
      <svg viewBox="0 0 100 100" className={styles.cardSvg}>
        <path d="M20 70 C35 30, 65 30, 80 70" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" fill="none" opacity="0.5" />
        <rect x="17" y="67" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="#030712" />
        <rect x="47" y="41" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="#030712" />
        <rect x="77" y="67" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="#030712" />
        <path d="M50 44 L40 68 L47 68 L50 78 L53 68 L60 68 z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    )
  },
  {
    id: 'cms',
    icon: 'fa-solid fa-cubes',
    title: 'Custom CMS',
    description: 'Scalable and secure CMS solutions to manage your content with ease.',
    features: ['Tailored Admin Panels', 'No Plugins, Safe Code', 'MERN Stack Databases', 'Secure & Scalable'],
    isPurple: false,
    svg: (
      <svg viewBox="0 0 100 100" className={styles.cardSvg}>
        <rect x="20" y="24" width="60" height="52" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="26" cy="30" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="32" cy="30" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="38" cy="30" r="1.5" fill="currentColor" opacity="0.5" />
        <line x1="20" y1="36" x2="80" y2="36" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <rect x="26" y="42" width="16" height="26" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.7" />
        <rect x="46" y="42" width="28" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.7" />
        <rect x="46" y="57" width="28" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.7" />
      </svg>
    )
  }
];

const STEPS = [
  { num: '01', title: 'Consultation', desc: 'We discuss your project goals, scope, and target audience to outline the optimal solution.' },
  { num: '02', title: 'UI/UX Design', desc: 'Our designers craft high-fidelity visual guidelines and mockups to align on the user experience.' },
  { num: '03', title: 'Development', desc: 'Our programmers write clean, modular, and optimized code, integrating robust databases and secure APIs.' },
  { num: '04', title: 'Launch', desc: 'We run rigorous testing across viewports, deploy to staging, run performance audits, and go live.' }
];

export default function ITServicesPage() {
  useEffect(() => {
    document.title = 'IT Services — ProFRONTIER International Online Academy';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      {/* ── Layered SVG Backgrounds ───────────────────────── */}
      <div className={styles.servicesBg} aria-hidden="true">
        <img
          src="/assets/faq-bg-orbits.svg"
          alt=""
          className={`${styles.bgImg} ${styles.bgOrbits}`}
        />
        <img
          src="/assets/faq-bg-network.svg"
          alt=""
          className={`${styles.bgImg} ${styles.bgNetwork}`}
        />
      </div>
      
      {/* Intro Header Section */}
      <section className={styles.introSection}>
        {/* Globe Background Glows */}
        <div className={styles.headerGlobe}>
          <div className={styles.headerGlobeWireframe} />
        </div>
        <div className={styles.orbitGlowRight} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.header}>
            <span className={styles.badge}>OUR IT SERVICES</span>
            <h2 className={styles.heading}>
              Solutions That Drive <span className={styles.headingGradient}>Your Success</span>
            </h2>
            <p className={styles.subtitle}>
              Innovative IT solutions tailored to help your business grow, scale and stay ahead in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.grid}>
            {SERVICES.map((s, i) => {
              const isPurple = s.isPurple;
              const cardClass = isPurple ? styles.cardPurple : styles.cardCyan;
              const checkColor = isPurple ? '#d946ef' : '#38bdf8';
              
              return (
                <div
                  key={s.title}
                  className={`${styles.card} ${cardClass} reveal reveal--delay-${(i % 3) + 1} glow-card`}
                >
                  {/* Card Header with Icon Circle and Title */}
                  <div className={styles.cardHeader}>
                    <div className={styles.iconCircle}>
                      <i className={s.icon}></i>
                    </div>
                    <div className={styles.cardHeaderTitle}>
                      <h3>{s.title}</h3>
                      <p className={styles.cardDesc}>{s.description}</p>
                    </div>
                  </div>
                  
                  <div className={styles.cardDivider} />
                  
                  {/* Card Body with split list and outline SVG illustration */}
                  <div className={styles.cardBody}>
                    <div className={styles.cardLeft}>
                      <ul className={styles.featuresList}>
                        {s.features.map((feat) => (
                          <li key={feat}>
                            <i className="fa-solid fa-circle-check" style={{ color: checkColor }}></i>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.cardRight}>
                      {s.svg}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className={`${styles.processSection} section`}>
        <div className="container">
          <div className="section__header reveal">
            <span className="section__tag">WORKFLOW</span>
            <h2 className="section__title">Our Development <span className="gradient-text">Workflow</span></h2>
            <p className="section__desc">From concept to production launch, we follow a systematic and transparent lifecycle</p>
          </div>

          <div className={styles.timeline}>
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className={`${styles.step} reveal reveal--delay-${i + 1}`}
              >
                <div className={styles.stepNum}>{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className={`${styles.ctaSection} reveal`}>
            <div className={`${styles.ctaCard} glow-card`}>
              <h2>Ready to Bring Your Idea to Life?</h2>
              <p>
                Get a free consultation and project estimation. Tell us about your project requirements and let's build something future-proof together.
              </p>
              <Link to="/contact?inquiry=it-services" className="btn btn--gradient btn--lg">
                Book Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
