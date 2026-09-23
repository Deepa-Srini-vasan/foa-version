import { Link } from 'react-router-dom';
import { contactInfo } from '../data/team';
import { getCourseLink } from '../data/courseUrls';
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
              ProFRONTIER International Online Academy offers career-focused online courses in English communication, IELTS, OET, PTE, AI, healthcare quality, HR, finance, IT, software, soft skills, and corporate training — helping learners and professionals build practical skills, confidence, and global career readiness.
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
              {[
                { label: 'CPHQ', slug: 'cphq' },
                { label: 'CPPS', slug: 'cpps' },
                { label: 'CPHRM', slug: 'cphrm' },
                { label: 'IELTS', slug: 'ielts' },
                { label: 'OET', slug: 'oet' },
                { label: 'PTE', slug: 'pte' },
                { label: 'Business English', slug: 'business-english' },
                { label: 'Professional Communication', slug: 'professional-communication' },
                { label: 'AI Courses', slug: 'ai-courses' },
                { label: 'HR Courses', slug: 'hr-courses' },
                { label: 'Finance Courses', slug: 'finance-courses' },
                { label: 'Soft Skills Training', slug: 'soft-skills-training' },
                { label: 'Corporate Training', slug: 'corporate-training' },
                { label: 'British Accent Training', slug: 'british-accent-training' }
              ].map((item) => {
                let link;
                if (item.slug === 'professional-communication') {
                  link = { to: '/courses?cat=language', isExternal: false };
                } else if (item.slug === 'ai-courses') {
                  link = { to: '/courses?cat=it', isExternal: false };
                } else if (item.slug === 'hr-courses') {
                  link = { to: '/courses?cat=hr', isExternal: false };
                } else if (item.slug === 'finance-courses') {
                  link = { to: '/courses?cat=finance', isExternal: false };
                } else if (item.slug === 'soft-skills-training') {
                  link = { to: '/courses?cat=softskills', isExternal: false };
                } else if (item.slug === 'corporate-training') {
                  link = { to: '/courses?cat=softskills', isExternal: false };
                } else if (item.slug === 'british-accent-training') {
                  link = getCourseLink('voice-accent');
                } else {
                  link = getCourseLink(item.slug);
                }
                return (
                  <li key={item.slug}>
                    {link.isExternal ? (
                      <a href={link.to} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ) : (
                      <Link to={link.to}>{item.label}</Link>
                    )}
                  </li>
                );
              })}
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
