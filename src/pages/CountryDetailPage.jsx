import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCountryBySlug, countries } from '../data/overseas';
import { getFaIcon } from '../utils/icons';
import styles from './CountryDetailPage.module.css';

export default function CountryDetailPage() {
  const { slug } = useParams();
  const country = getCountryBySlug(slug);

  useEffect(() => {
    if (country) {
      document.title = `Study in ${country.name} — ProFRONTIER International Online Academy`;
    }
    window.scrollTo(0, 0);
  }, [country]);

  if (!country) return <Navigate to="/overseas" replace />;

  const otherCountries = countries
    .filter((c) => c.slug !== country.slug)
    .slice(0, 3);

  return (
    <div>
      {/* Premium Apple/Antigravity Hero Banner */}
      <div className={styles.heroBanner}>
        <div className={styles.bannerGlow1} />
        <div className={styles.bannerGlow2} />
        <div className={`container ${styles.bannerContainer}`}>
          <div className={styles.bannerContent}>
            <div className={styles.breadcrumb}>
              <Link to="/">Home</Link>
              <span>•</span>
              <Link to="/overseas">Overseas</Link>
              <span>•</span>
              <span className={styles.activeBreadcrumb}>{country.name}</span>
            </div>
            <span className={styles.catBadge}>OVERSEAS EDUCATION</span>
            <h1 className={styles.mainTitle}>
              Study in {country.name}{' '}
              <i className={getFaIcon(country.flag)} style={{ marginLeft: '12px' }}></i>
            </h1>
            <p className={styles.subtitle}>{country.tagline}</p>
          </div>

          <div className={styles.bannerVisual}>
            <div className={styles.mockupContainer}>
              <div className={styles.mockupHeader}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
                <span className={styles.mockupTitle}>{country.name} — Global Study</span>
              </div>
              <div className={styles.mockupBody}>
                <img src={`/assets/countries/${country.slug}.png`} alt={country.name} className={styles.visualImage} />
                <div className={styles.mockupOverlay} />
                <div className={styles.visualFloatingBadge}>
                  <i className="fa-solid fa-plane-up" style={{ color: 'var(--blue)', marginRight: '6px' }}></i>
                  <span>Post-Study Work Permit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Main Content */}
            <div className={styles.main}>
              {/* Quick Info Grid */}
              <div className={styles.infoGrid}>
                <div className={`${styles.infoCard} reveal reveal--delay-1 glow-card`}>
                  <span className={styles.infoIcon}><i className="fa-solid fa-graduation-cap"></i></span>
                  <div>
                    <h4>Intake Months</h4>
                    <p>{country.intakeMonths.join(', ')}</p>
                  </div>
                </div>
                <div className={`${styles.infoCard} reveal reveal--delay-2 glow-card`}>
                  <span className={styles.infoIcon}><i className="fa-solid fa-file-signature"></i></span>
                  <div>
                    <h4>Requirements</h4>
                    <p>{country.requirements}</p>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className={`${styles.sectionBlock} reveal`}>
                <h2>Overview</h2>
                <p className={styles.leadText}>{country.description}</p>
                <p>{country.overview}</p>
              </div>

              {/* Top Universities */}
              <div className={`${styles.sectionBlock} reveal`}>
                <h2>Top Universities / Institutions</h2>
                <ul className={styles.uniList}>
                  {country.topUniversities.map((uni, idx) => (
                    <li key={idx} className={styles.uniItem}>
                      <span className={styles.bullet}>⬡</span>
                      <span>{uni}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Study Here */}
              <div className={`${styles.sectionBlock} reveal`}>
                <h2>Why Choose {country.name}?</h2>
                <div className={styles.whyGrid}>
                  <div className={`${styles.whyCard} reveal reveal--delay-1 glow-card`}>
                    <h5>World-Class Standards</h5>
                    <p>Degrees earned in {country.name} are globally recognized and highly valued by employers worldwide.</p>
                  </div>
                  <div className={`${styles.whyCard} reveal reveal--delay-2 glow-card`}>
                    <h5>Multicultural Environment</h5>
                    <p>Experience a diverse society that welcomes international students and offers rich cultural exposure.</p>
                  </div>
                  <div className={`${styles.whyCard} reveal reveal--delay-3 glow-card`}>
                    <h5>Career Opportunities</h5>
                    <p>Take advantage of post-study work permits to launch your international career in leading global organizations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              <div className={`${styles.sideCard} reveal reveal--delay-1 glow-card`}>
                <h3 className={styles.sideTitle}>Key Facts</h3>
                <div className={styles.factList}>
                  {country.keyFacts.map((fact, idx) => (
                    <div key={idx} className={styles.factItem}>
                      <span className={styles.factLabel}>{fact.label}</span>
                      <span className={styles.factValue}>{fact.value}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn btn--gradient btn--full btn--lg">
                  Inquire Now →
                </Link>
                <Link to="/contact" className="btn btn--outline btn--full">
                  Speak to counselor
                </Link>

                <div className={styles.sideContact}>
                  <p>Have questions about studying abroad?</p>
                  <a href="tel:+96555377150"><i className="fa-solid fa-phone" style={{ marginRight: '6px' }}></i> +965-55377150</a>
                  <a href="mailto:profrontieronlineacademy@gmail.com"><i className="fa-solid fa-envelope" style={{ marginRight: '6px' }}></i> Email Us</a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Countries */}
          {otherCountries.length > 0 && (
            <div className={styles.recommendations}>
              <h2 className={styles.recTitle}>Explore Other Destinations</h2>
              <div className={styles.recGrid}>
                {otherCountries.map((c, i) => (
                  <Link
                    key={c.id}
                    to={`/overseas/${c.slug}`}
                    className={`${styles.recCard} glass-card glow-card reveal reveal--delay-${i + 1}`}
                    style={{ '--accent': c.color }}
                  >
                    <div className={styles.recFlag}><i className={getFaIcon(c.flag)}></i></div>
                    <h3>Study in {c.name}</h3>
                    <p>{c.tagline}</p>
                    <span className={styles.recLink}>View Details →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
