import { useState } from 'react';
import styles from './FAQItem.module.css';

export default function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.open : ''} glow-card`}>
      <button
        className={styles.question}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.text}>{faq.question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className={styles.answer}>
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
