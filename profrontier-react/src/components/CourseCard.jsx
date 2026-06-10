import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getFaIcon } from '../utils/icons';
import styles from './CourseCard.module.css';

export default function CourseCard({ course, index = 0 }) {
  const ref = useScrollReveal({ delay: index * 80 });
  const hasImage = Boolean(course.image);

  return (
    <div ref={ref} className={`${styles.card} reveal glow-card`}>
      {/* Image / gradient hero header */}
      <div
        className={styles.imageContainer}
        style={!hasImage ? { background: course.color || 'linear-gradient(135deg, #0a1628, #0d2240)' } : undefined}
      >
        {hasImage ? (
          <>
            <img src={course.image} alt={course.title} className={styles.image} />
            <div className={styles.imageOverlay} />
          </>
        ) : (
          <div className={styles.gradientHero}>
            <div className={styles.gradientHeroIcon}>{course.icon}</div>
            <div className={styles.gradientHeroGlow} />
          </div>
        )}
        {course.badge && (
          <span className={`${styles.badge} ${course.badge === 'Most Popular' ? styles.badgeBlue : styles.badgePurple}`}>
            {course.badge}
          </span>
        )}
        {hasImage && (
          <div className={styles.floatingIcon}>
            <i className={getFaIcon(course.icon)}></i>
          </div>
        )}
      </div>

      {/* Main card content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.desc}>{course.description}</p>

        <div className={styles.meta}>
          <span>
            <span className={styles.metaIcon}><i className="fa-regular fa-clock"></i></span>
            {course.duration}
          </span>
          <span>
            <span className={styles.metaIcon}><i className="fa-solid fa-star"></i></span>
            {course.rating}
          </span>
          <span>
            <span className={styles.metaIcon}><i className="fa-solid fa-users"></i></span>
            {course.students}
          </span>
        </div>

        <div className={styles.level}>
          <span className={styles.levelDot} />
          {course.level}
        </div>

        <div className={styles.actions}>
          <Link to={`/courses/${course.slug}`} className="btn btn--outline btn--sm">
            View Details
          </Link>
          <Link to="/contact" className="btn btn--gradient btn--sm">
            Enroll Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
