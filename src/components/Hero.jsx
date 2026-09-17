import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero({ onStart }) {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const colors = ['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981'];
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.className = styles.particle;
      p.style.left = Math.random() * 100 + '%';
      const size = Math.random() * 3 + 1;
      p.style.width = p.style.height = size + 'px';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (Math.random() * 15 + 10) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      container.appendChild(p);
    }
    return () => { if (container) container.innerHTML = ''; };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.particles} ref={particlesRef} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Premium Workout Guide
        </div>

        <h1 className={styles.title}>
          Train <span className="gradient-text">Smarter</span>,<br />
          Build <span className="gradient-text">Stronger</span>
        </h1>

        <p className={styles.subtitle}>
          Unlock targeted exercises for every muscle group. From chest to calves — get the perfect workout, every time.
        </p>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={onStart}>
            <span>Explore Muscles</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className={styles.btnGhost} onClick={() => document.getElementById('tips')?.scrollIntoView({ behavior: 'smooth' })}>
            Pro Tips
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>80+</span>
            <span className={styles.statLabel}>Exercises</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>10</span>
            <span className={styles.statLabel}>Muscle Groups</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>3</span>
            <span className={styles.statLabel}>Difficulty Levels</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}
