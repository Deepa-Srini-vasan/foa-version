import { Link } from 'react-router-dom';
import { contactInfo } from '../data/team';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img
                src="/assets/categories/fronts.png"
                alt="ProFRONTIER International Online Academy"
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>
              We are providing a top-notch education and training. We carefully select
              the best online courses from around the world to bring to you, in the
              comfort of your own home, an affordable, world-class education.
            </p>
            <div className={styles.social}>
              <a href={contactInfo.social.facebook} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Facebook">f</a>
              <a href={contactInfo.social.twitter} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Twitter">𝕏</a>
              <a href={contactInfo.social.instagram} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram">▣</a>
              <a href={contactInfo.social.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.colList}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/overseas">Overseas Education</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Popular Courses</h4>
            <ul className={styles.colList}>
              <li><Link to="/courses/cphq">CPHQ Training</Link></li>
              <li><Link to="/courses/ielts">IELTS Preparation</Link></li>
              <li><Link to="/courses/oet">OET Training</Link></li>
              <li><Link to="/courses/pte">PTE Academic</Link></li>
              <li><Link to="/courses/cpps">CPPS Training</Link></li>
              <li><Link to="/courses/business-english">Business English</Link></li>
              <li><Link to="/courses/cma">CMA Certification</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={`${styles.colList} ${styles.contactList}`}>
              {contactInfo.emails.map((e) => (
                <li key={e}><span><i className="fa-solid fa-envelope"></i></span> <a href={`mailto:${e}`}>{e}</a></li>
              ))}
              {contactInfo.phones.map((p) => (
                <li key={p}><span><i className="fa-solid fa-phone"></i></span> <a href={`tel:${p}`}>{p}</a></li>
              ))}
              <li><span><i className="fa-solid fa-location-dot"></i></span> {contactInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 All Rights Reserved — ProFRONTIER International Online Academy</p>
          <div className={styles.legal}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
