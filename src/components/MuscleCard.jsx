import { exercisesDB } from '../data/exercises';
import styles from './MuscleCard.module.css';

export default function MuscleCard({ muscle, index, onSelect }) {
  const count = (exercisesDB[muscle.id] || []).length;

  return (
    <div
      className={styles.card}
      style={{ '--card-color': muscle.color, animationDelay: `${index * 0.06}s` }}
      onClick={() => onSelect(muscle)}
      tabIndex={0}
      role="button"
      aria-label={`View ${muscle.name} exercises`}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(muscle)}
    >
      <div className={styles.glow} />
      <span className={styles.icon}>{muscle.icon}</span>
      <div className={styles.name}>{muscle.name}</div>
      <div className={styles.count}>{count} exercises</div>
      <div className={styles.tag}>{muscle.tag}</div>
      <div className={styles.arrow}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
