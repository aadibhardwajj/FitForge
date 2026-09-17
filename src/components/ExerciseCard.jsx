import { useAuth } from '../context/AuthContext';
import styles from './ExerciseCard.module.css';

const diffColors = {
  beginner:     { bg: 'rgba(16,185,129,0.15)', color: '#34d399', border: 'rgba(16,185,129,0.2)' },
  intermediate: { bg: 'rgba(251,191,36,0.12)',  color: '#fbbf24', border: 'rgba(251,191,36,0.2)' },
  advanced:     { bg: 'rgba(239,68,68,0.12)',    color: '#f87171', border: 'rgba(239,68,68,0.2)'  },
};

export default function ExerciseCard({ exercise, index, onOpen, onRequireAuth }) {
  const { isFavorite, toggleFavorite, currentUser } = useAuth();
  const diff = diffColors[exercise.difficulty] || diffColors.beginner;
  const favored = isFavorite(exercise.name);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (!currentUser) {
      if (onRequireAuth) onRequireAuth();
      return;
    }
    toggleFavorite(exercise.name);
  };

  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={() => onOpen(exercise)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => e.key === 'Enter' && onOpen(exercise)}
    >
      <div className={styles.header}>
        <div className={styles.info}>
          <div className={styles.name}>{exercise.name}</div>
          <div className={styles.sub}>{exercise.equipment}</div>
        </div>

        <div className={styles.headerActions}>
          <span
            className={styles.badge}
            style={{ background: diff.bg, color: diff.color, border: `1px solid ${diff.border}` }}
          >
            {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
          </span>

          <button
            type="button"
            className={`${styles.favBtn} ${favored ? styles.activeFav : ''}`}
            onClick={handleFavoriteClick}
            title={favored ? 'Remove from saved' : 'Save to favorites'}
            aria-label={favored ? 'Remove from saved' : 'Save to favorites'}
          >
            {favored ? '❤️' : '🤍'}
          </button>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.desc}>{exercise.desc}</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.meta}>
          <span className={styles.metaItem}>🔁 {exercise.sets} × {exercise.reps}</span>
          <span className={styles.metaItem}>⏱ {exercise.rest}</span>
        </div>
        <span className={styles.detailBtn}>Details →</span>
      </div>
    </div>
  );
}
