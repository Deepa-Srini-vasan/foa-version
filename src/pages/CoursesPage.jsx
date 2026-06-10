import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { courses, courseCategories, getCoursesByCategory } from '../data/courses';
import { getFaIcon } from '../utils/icons';
import styles from './CoursesPage.module.css';

export default function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const activeCat = searchParams.get('cat') || 'all';

  useEffect(() => {
    document.title = 'Courses — ProFRONTIER International Online Academy';
    window.scrollTo(0, 0);
  }, []);

  const filtered = getCoursesByCategory(activeCat).filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="page-banner__breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Courses</span>
          </div>
          <span className="section__tag page-banner__tag">100+ PROGRAMS</span>
          <h1>All <span className="gradient-text">Courses</span></h1>
          <p>Professional courses from Finance, IT, HR, Aviation, Languages, Soft Skills, Safety First — carefully assessed for quality and educational soundness.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Search */}
          <div className={`${styles.searchRow} reveal`}>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}><i className="fa-solid fa-magnifying-glass"></i></span>
              <input
                type="text"
                placeholder="Search courses (IELTS, CMA, French...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button className={styles.clearBtn} onClick={() => setSearch('')}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
            <div className={styles.resultCount}>
              {filtered.length} course{filtered.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {/* Category Filters */}
          <div className={`${styles.categories} reveal reveal--delay-1`}>
            {courseCategories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.catBtn} ${activeCat === cat.id ? styles.catBtnActive : ''}`}
                onClick={() => setSearchParams(cat.id === 'all' ? {} : { cat: cat.id })}
              >
                <i className={getFaIcon(cat.icon)} style={{ marginRight: '6px' }}></i> {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
            </div>
          ) : (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}><i className="fa-solid fa-magnifying-glass"></i></div>
              <h3>No courses found</h3>
              <p>Try a different search term or category.</p>
              <button className="btn btn--outline" onClick={() => { setSearch(''); setSearchParams({}); }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.ctaBanner} section--sm`}>
        <div className="container">
          <div className={styles.ctaBannerInner}>
            <div>
              <h2>Can't find what you're looking for?</h2>
              <p>We have 100+ courses. Contact us and our advisors will find the perfect program for your goals.</p>
            </div>
            <Link to="/contact" className="btn btn--gradient btn--lg">Talk to an Advisor →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
