import { useState } from 'react';
import { exercisesDB } from '../data/exercises';
import ExerciseCard from '../components/ExerciseCard';
import ExerciseModal from '../components/ExerciseModal';
import styles from './ExercisesPage.module.css';

const FILTERS = ['all', 'beginner', 'intermediate', 'advanced'];

export default function ExercisesPage({ muscle, onBack }) {
  const [filter, setFilter] = useState('all');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const allExercises = exercisesDB[muscle.id] || [];
  const filtered = filter === 'all' ? allExercises : allExercises.filter(e => e.difficulty === filter);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={onBack}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Muscles
          </button>

          <div className={styles.titleBlock}>
            <span className={styles.muscleIcon}>{muscle.icon}</span>
            <div>
              <h2 className={styles.title}>
                <span className="gradient-text">{muscle.name}</span> Exercises
              </h2>
              <p className={styles.subtitle}>{allExercises.length} exercises · {muscle.desc}</p>
            </div>
          </div>

          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Filter:</span>
            {FILTERS.map(f => (
              <button
                key={f}
                className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Exercise Count */}
        <p className={styles.resultCount}>
          Showing <strong>{filtered.length}</strong> {filter !== 'all' ? filter : ''} exercise{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🔍</span>
            <p>No {filter} exercises found for {muscle.name}.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((ex, i) => (
              <ExerciseCard key={ex.name} exercise={ex} index={i} onOpen={setSelectedExercise} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedExercise && (
        <ExerciseModal
          exercise={selectedExercise}
          muscle={muscle}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </section>
  );
}
