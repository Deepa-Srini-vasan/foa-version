import { useState, useRef, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { getFaIcon } from '../utils/icons';
import styles from './TestimonialSlider.module.css';

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  const startX = useRef(0);
  const intervalRef = useRef(null);

  const count = testimonials.length;

  const go = (idx) => {
    setActive(((idx % count) + count) % count);
  };

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 5000);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrev = () => { go(active - 1); clearInterval(intervalRef.current); startAuto(); };
  const handleNext = () => { go(active + 1); clearInterval(intervalRef.current); startAuto(); };

  const handleTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? handleNext() : handlePrev();
  };

  const handleCardClick = (t, idx, isCenter) => {
    if (isCenter) {
      setExpandedId(prev => prev === t.id ? null : t.id);
    } else {
      go(idx);
      clearInterval(intervalRef.current);
      startAuto();
    }
  };

  // Show 3 at a time on large screens
  const visibleIndices = [
    (active - 1 + count) % count,
    active,
    (active + 1) % count,
  ];

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.slider}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleIndices.map((idx, pos) => {
          const t = testimonials[idx];
          const isLeft = pos === 0;
          const isCenter = pos === 1;
          const isRight = pos === 2;
          
          const isExpanded = expandedId === t.id;
          const maxChar = 130;
          const isLong = t.quote.length > maxChar;
          const displayQuote = (isLong && !isExpanded) ? `${t.quote.slice(0, maxChar)}...` : t.quote;

          return (
            <div
              key={t.id}
              onClick={() => handleCardClick(t, idx, isCenter)}
              className={`${styles.card} ${isCenter ? styles.center : ''} ${isLeft ? styles.left : ''} ${isRight ? styles.right : ''} glow-card`}
            >
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <i key={idx} className="fa-solid fa-star"></i>
                ))}
              </div>
              <div className={styles.quoteWrapper}>
                <blockquote className={styles.quote}>&ldquo;{displayQuote}&rdquo;</blockquote>
                {isLong && !isExpanded && <span className={styles.readMore}>Read More <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px', marginLeft: '4px' }}></i></span>}
                {isLong && isExpanded && <span className={styles.readMore}>Show Less <i className="fa-solid fa-chevron-up" style={{ fontSize: '10px', marginLeft: '4px' }}></i></span>}
              </div>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.image ? (
                    <img src={t.image} alt={t.name} className={styles.avatarImg} />
                  ) : (
                    t.avatar
                  )}
                </div>
                <div className={styles.authorInfo}>
                  <strong>{t.name}</strong>
                  <span>
                    {t.designation} • {t.country}{' '}
                    <i className={getFaIcon(t.flag)} style={{ marginLeft: '4px' }}></i>
                  </span>
                  <span className={styles.course}>
                    <i className="fa-solid fa-book-open" style={{ marginRight: '6px' }}></i> {t.course}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button className={styles.arrow} onClick={handlePrev} aria-label="Previous">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => { go(i); clearInterval(intervalRef.current); startAuto(); }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.arrow} onClick={handleNext} aria-label="Next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>


    </div>
  );
}
