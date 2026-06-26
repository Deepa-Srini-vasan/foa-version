import { useState, useRef } from 'react';
import styles from './FAQItem.module.css';

export default function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.text}>{faq.question}</span>
        <span className={styles.icon}>
          <svg
            className={`${styles.iconSvg} ${open ? styles.iconOpen : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={styles.iconPlus} />
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        ref={bodyRef}
        className={styles.answerWrap}
        style={{
          maxHeight: open ? `${bodyRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className={styles.answer}>
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
