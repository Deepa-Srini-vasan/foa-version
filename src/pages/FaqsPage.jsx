import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FAQItem from '../components/FAQItem';
import FaqBackground from '../components/FaqBackground';
import { faqs, generalFaqs } from '../data/faqs';
import styles from './FaqsPage.module.css';

export default function FaqsPage() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'FAQs — ProFRONTIER International Online Academy';
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
  );

  const filteredGeneralFaqs = generalFaqs.filter(
    (f) =>
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
  );

  const hasResults = filteredFaqs.length > 0 || filteredGeneralFaqs.length > 0;

  return (
    <div>
      <PageBanner
        title="Frequently Asked Questions"
        description="Find answers to common questions about our online courses, pricing, teachers, and study abroad counseling."
        category="Help Center"
        breadcrumbs={[{ label: 'FAQs' }]}
        hideGrid={true}
      />

      <section className={`section ${styles.faqSection}`}>
        {/* ── Live canvas background ───────────────────────── */}
        <FaqBackground />
        <div className="container">
          {/* Search Box */}
          <div className={`${styles.searchContainer} reveal`}>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}><i className="fa-solid fa-magnifying-glass"></i></span>
              <input
                type="text"
                placeholder="Search questions or answers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button className={styles.clearBtn} onClick={() => setSearch('')}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          </div>

          {hasResults ? (
            <div className={styles.faqSections}>
              {filteredFaqs.length > 0 && (
                <div className={`${styles.sectionBlock} reveal`}>
                  <h2 className={styles.sectionTitle}>Academy & Courses</h2>
                  <div className={styles.faqList}>
                    {filteredFaqs.map((faq, idx) => (
                      <FAQItem key={faq.id} faq={faq} index={idx} />
                    ))}
                  </div>
                </div>
              )}

              {filteredGeneralFaqs.length > 0 && (
                <div className={`${styles.sectionBlock} reveal`}>
                  <h2 className={styles.sectionTitle}>General & Studying Abroad</h2>
                  <div className={styles.faqList}>
                    {filteredGeneralFaqs.map((faq, idx) => (
                      <FAQItem
                        key={faq.id}
                        faq={faq}
                        index={filteredFaqs.length + idx}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.noResults}>
              <span className={styles.noResultsIcon}><i className="fa-solid fa-lightbulb"></i></span>
              <h3>No results found</h3>
              <p>We couldn't find any FAQs matching "{search}". Try searching for other terms like "IELTS", "pricing", "fees", or "refund".</p>
              <button className="btn btn--outline" onClick={() => setSearch('')}>
                Reset Search
              </button>
            </div>
          )}

          {/* Quick Help Card */}
          <div className={`${styles.helpCard} glass-card glow-card reveal`}>
            <div className={styles.helpContent}>
              <h3>Still have questions?</h3>
              <p>Our counselors and support team are here to help you. Speak to us directly for tailored guidance.</p>
            </div>
            <div className={styles.helpActions}>
              <a href="/contact" className="btn btn--gradient">
                Contact Counselor →
              </a>
              <a href="tel:+96555377150" className="btn btn--outline">
                Call +965-55377150
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
