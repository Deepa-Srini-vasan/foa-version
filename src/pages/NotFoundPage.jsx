import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found — ProFRONTIER International Online Academy';
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.glowBlob1} />
      <div className={styles.glowBlob2} />

      <div className={styles.content}>
        <div className={styles.illustration}>
          <span className={styles.code}>404</span>
          <div className={styles.orbit}>
            <div className={styles.ring1} />
            <div className={styles.ring2} />
            <span className={styles.floatingObject}>⬡</span>
          </div>
        </div>

        <h1 className="gradient-text">Lost in Cyberspace?</h1>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Let's get you back on track.
        </p>

        <div className={styles.actions}>
          <Link to="/" className="btn btn--gradient btn--lg">
            Back to Home
          </Link>
          <Link to="/courses" className="btn btn--outline btn--lg">
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
