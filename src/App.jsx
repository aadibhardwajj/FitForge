import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MusclesPage from './pages/MusclesPage';
import ExercisesPage from './pages/ExercisesPage';
import TipsSection from './components/TipsSection';
import styles from './App.module.css';

// Views: 'home' | 'muscles' | 'exercises'
export default function App() {
  const [view, setView] = useState('home');
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const handleNavigate = useCallback((target) => {
    if (target === 'home') {
      setView('home');
      setSelectedMuscle(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'muscles') {
      setView('muscles');
      setSelectedMuscle(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'tips') {
      setView('home');
      setSelectedMuscle(null);
      // Scroll to tips after state settles
      setTimeout(() => {
        document.getElementById('tips')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, []);

  const handleSelectMuscle = useCallback((muscle) => {
    setSelectedMuscle(muscle);
    setView('exercises');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBack = useCallback(() => {
    setView('muscles');
    setSelectedMuscle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.app}>
      <Navbar onNavigate={handleNavigate} />

      {view === 'home' && (
        <>
          <Hero onStart={() => handleNavigate('muscles')} />
          <MusclesPage onSelect={handleSelectMuscle} />
          <TipsSection />
          <footer className={styles.footer}>
            <div className={styles.footerInner}>
              <div className={styles.logo}>
                <span className={styles.logoIcon}>⚡</span>
                <span className={styles.logoText}>FitForge</span>
              </div>
              <p className={styles.footerTagline}>Built for athletes. Designed for results.</p>
              <p className={styles.footerCopy}>© 2026 FitForge. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}

      {view === 'muscles' && (
        <>
          <MusclesPage onSelect={handleSelectMuscle} />
          <TipsSection />
          <footer className={styles.footer}>
            <div className={styles.footerInner}>
              <div className={styles.logo}>
                <span className={styles.logoIcon}>⚡</span>
                <span className={styles.logoText}>FitForge</span>
              </div>
              <p className={styles.footerTagline}>Built for athletes. Designed for results.</p>
              <p className={styles.footerCopy}>© 2026 FitForge. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}

      {view === 'exercises' && selectedMuscle && (
        <ExercisesPage muscle={selectedMuscle} onBack={handleBack} />
      )}
    </div>
  );
}
