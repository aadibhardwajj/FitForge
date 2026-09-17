import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './ExerciseModal.module.css';

const diffColors = {
  beginner:     { bg: 'rgba(16,185,129,0.15)', color: '#34d399', border: 'rgba(16,185,129,0.2)' },
  intermediate: { bg: 'rgba(251,191,36,0.12)',  color: '#fbbf24', border: 'rgba(251,191,36,0.2)' },
  advanced:     { bg: 'rgba(239,68,68,0.12)',    color: '#f87171', border: 'rgba(239,68,68,0.2)'  },
};

export default function ExerciseModal({ exercise, muscle, onClose, onRequireAuth }) {
  const { isFavorite, toggleFavorite, currentUser } = useAuth();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  if (!exercise) return null;
  const diff = diffColors[exercise.difficulty] || diffColors.beginner;
  const favored = isFavorite(exercise.name);

  const handleFavoriteClick = () => {
    if (!currentUser) {
      if (onRequireAuth) onRequireAuth();
      return;
    }
    toggleFavorite(exercise.name);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.inner}>
          {/* Hero */}
          <div className={styles.hero}>
            <span className={styles.muscleIcon}>{muscle?.icon}</span>
            <div className={styles.heroMain}>
              <div className={styles.titleRow}>
                <h2 className={styles.title}>{exercise.name}</h2>
                <button
                  type="button"
                  className={`${styles.modalFavBtn} ${favored ? styles.activeModalFav : ''}`}
                  onClick={handleFavoriteClick}
                  title={favored ? 'Saved to routine' : 'Save exercise'}
                >
                  {favored ? '❤️ Saved' : '🤍 Save'}
                </button>
              </div>

              <div className={styles.badges}>
                <span className={styles.badge} style={{ background: diff.bg, color: diff.color, border: `1px solid ${diff.border}` }}>
                  {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
                </span>
                <span className={styles.badge} style={{ background: 'rgba(100,116,139,0.12)', color: '#94a3b8', border: '1px solid rgba(100,116,139,0.2)' }}>
                  {exercise.equipment}
                </span>
                <span className={styles.badge} style={{ background: 'rgba(99,102,241,0.12)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.2)' }}>
                  {muscle?.name}
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <div className={styles.statVal}>{exercise.sets}</div>
              <div className={styles.statKey}>Sets</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statVal}>{exercise.reps}</div>
              <div className={styles.statKey}>Reps</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statVal}>{exercise.rest}</div>
              <div className={styles.statKey}>Rest</div>
            </div>
          </div>

          {/* About */}
          <div className={styles.sectionTitle}><span>📋</span> About This Exercise</div>
          <p className={styles.desc}>{exercise.desc}</p>

          {/* Steps */}
          <div className={styles.sectionTitle}><span>📝</span> How To Perform</div>
          <ul className={styles.steps}>
            {exercise.steps.map((step, i) => (
              <li key={i} className={styles.step}>
                <div className={styles.stepNum}>{i + 1}</div>
                <span>{step}</span>
              </li>
            ))}
          </ul>

          {/* Pro Tip */}
          <div className={styles.tipBox}>
            <span className={styles.tipEmoji}>💡</span>
            <span><strong>Pro Tip:</strong> {exercise.tip}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
