import { useState } from 'react';
import { muscleGroups } from '../data/exercises';
import MuscleCard from '../components/MuscleCard';
import styles from './MusclesPage.module.css';

export default function MusclesPage({ onSelect }) {
  const [search, setSearch] = useState('');

  const filtered = muscleGroups.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className={styles.section} id="muscles">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Choose Your Target</span>
          <h2 className={styles.title}>Select a <span className="gradient-text">Muscle Group</span></h2>
          <p className={styles.desc}>Pick the body part you want to train and get a curated list of the best exercises.</p>
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              className={styles.search}
              placeholder="Search muscle groups..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search muscle groups"
            />
            {search && (
              <button className={styles.clearBtn} onClick={() => setSearch('')} aria-label="Clear search">✕</button>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🤷</span>
            <p>No muscle groups found for "<strong>{search}</strong>"</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((m, i) => (
              <MuscleCard key={m.id} muscle={m} index={i} onSelect={onSelect} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
