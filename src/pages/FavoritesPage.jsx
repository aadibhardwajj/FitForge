import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { exercisesDB, muscleGroups } from '../data/exercises';
import ExerciseCard from '../components/ExerciseCard';
import ExerciseModal from '../components/ExerciseModal';
import styles from './FavoritesPage.module.css';

export default function FavoritesPage({ onBack, onExplore }) {
  const { favorites } = useAuth();
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Flatten all exercises and attach muscle info
  const allExercises = Object.entries(exercisesDB).flatMap(([muscleId, list]) => {
    const muscle = muscleGroups.find((m) => m.id === muscleId);
    return list.map((ex) => ({ ...ex, muscleId, muscle }));
  });

  const savedExercises = allExercises.filter((ex) => favorites.includes(ex.name));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={onBack}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Muscles
          </button>

          <div className={styles.titleBlock}>
            <span className={styles.icon}>❤️</span>
            <div>
              <h2 className={styles.title}>
                My Saved <span className="gradient-text">Workouts</span>
              </h2>
              <p className={styles.subtitle}>
                Your personalized library of favorite exercises for quick workout routines.
              </p>
            </div>
          </div>
        </div>

        {savedExercises.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🏋️‍♂️</span>
            <h3 className={styles.emptyTitle}>No saved exercises yet</h3>
            <p className={styles.emptyDesc}>
              Browse through muscle groups and click the heart icon on any exercise to add it to your routine!
            </p>
            <button className={styles.exploreBtn} onClick={onExplore}>
              Explore Muscle Groups
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {savedExercises.map((ex, i) => (
              <ExerciseCard
                key={ex.name}
                exercise={ex}
                index={i}
                onOpen={() => setSelectedExercise(ex)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedExercise && (
        <ExerciseModal
          exercise={selectedExercise}
          muscle={selectedExercise.muscle}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </section>
  );
}
