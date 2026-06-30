import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseBySlug, getCoursesByCategory } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { getFaIcon } from '../utils/icons';
import styles from './CourseDetailPage.module.css';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  useEffect(() => {
    if (course) {
      document.title = `${course.title} — ProFRONTIER International Online Academy`;
    }
    window.scrollTo(0, 0);
  }, [course]);

  if (!course) return <Navigate to="/courses" replace />;

  const related = getCoursesByCategory(course.category)
    .filter((c) => c.slug !== course.slug)
    .slice(0, 3);

  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner__breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/courses">Courses</Link>
            <span>›</span>
            <span>{course.title}</span>
          </div>
          <span className="section__tag page-banner__tag">{course.category.toUpperCase()}</span>
          <h1>
            <i className={getFaIcon(course.icon)} style={{ marginRight: '12px' }}></i>{' '}
            <span className="gradient-text">{course.title}</span>
          </h1>
          <p>{course.subtitle}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Main */}
            <div className={styles.main}>
              {/* Meta Badges */}
              <div className={styles.metaRow}>
                <span className={styles.metaBadge}>
                  <i className="fa-regular fa-clock" style={{ marginRight: '6px' }}></i> {course.duration}
                </span>
                <span className={styles.metaBadge}>
                  <i className="fa-solid fa-star" style={{ marginRight: '6px', color: '#EAB308' }}></i> {course.rating}/5
                </span>
                <span className={styles.metaBadge}>
                  <i className="fa-solid fa-users" style={{ marginRight: '6px' }}></i> {course.students} students
                </span>
              </div>

              {/* Overview */}
              <div className={`${styles.section} reveal`}>
                <h2>Overview</h2>
                <p>{course.overview}</p>
              </div>

              {/* Description */}
              <div className={`${styles.section} reveal`}>
                <h2>Course Description</h2>
                <p>{course.description}</p>
              </div>

              {/* Benefits */}
              <div className={`${styles.section} reveal`}>
                <h2>What You Will Learn</h2>
                <div className={styles.benefitsGrid}>
                  {course.benefits.map((b) => (
                    <div key={b} className={styles.benefitItem}>
                      <span className={styles.checkIcon}>
                        <i className="fa-solid fa-circle-check" style={{ color: 'var(--teal)' }}></i>
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              <div className={`${styles.sideCard} reveal reveal--delay-1 glow-card`}>
                <div className={styles.sideHeader}>
                  <div className={styles.sideIcon}>
                    <i className={getFaIcon(course.icon)}></i>
                  </div>
                  <div>
                    <h3>{course.title}</h3>
                  </div>
                </div>

                <div className={styles.sideMeta}>
                  <div className={styles.sideMetaItem}>
                    <span><i className="fa-regular fa-clock"></i></span> <span>Duration</span> <strong>{course.duration}</strong>
                  </div>
                  <div className={styles.sideMetaItem}>
                    <span><i className="fa-solid fa-users"></i></span> <span>Students</span> <strong>{course.students}</strong>
                  </div>
                  <div className={styles.sideMetaItem}>
                    <span><i className="fa-solid fa-star" style={{ color: '#EAB308' }}></i></span> <span>Rating</span> <strong>{course.rating}/5</strong>
                  </div>
                  <div className={styles.sideMetaItem}>
                    <span><i className="fa-solid fa-book-open"></i></span> <span>Materials</span> <strong className={styles.free}>FREE</strong>
                  </div>
                  <div className={styles.sideMetaItem}>
                    <span><i className="fa-solid fa-graduation-cap"></i></span> <span>Demo</span> <strong className={styles.free}>FREE Trial</strong>
                  </div>
                </div>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLScdiM_tq3c_2lB08z5j86KoxYjXlq0uBvX9N6t3G_B-gTz40g/viewform" target="_blank" rel="noopener noreferrer" className="btn btn--gradient btn--full btn--lg">
                  Enroll Now →
                </a>
                <Link to="/contact" className="btn btn--outline btn--full">
                  Book Free Demo
                </Link>

                <div className={styles.sideContact}>
                  <p>Need help choosing?</p>
                  <a href="tel:+96522094240">📞 +965-22094240</a>
                  <a href="mailto:profrontieronlineacademy@gmail.com">📧 Email Us</a>
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className={`${styles.related} reveal`}>
              <h2 className={styles.relatedTitle}>Related Courses</h2>
              <div className={styles.relatedGrid}>
                {related.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
