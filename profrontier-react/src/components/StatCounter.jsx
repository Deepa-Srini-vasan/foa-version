import { useCounter } from '../hooks/useCounter';
import { getFaIcon } from '../utils/icons';
import styles from './StatCounter.module.css';

export default function StatCounter({ stat }) {
  const { value, ref } = useCounter(stat.value, 2200);
  return (
    <div ref={ref} className={styles.stat}>
      <div className={styles.icon}><i className={getFaIcon(stat.icon)}></i></div>
      <div className={styles.num}>
        {value.toLocaleString()}{stat.suffix}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}
