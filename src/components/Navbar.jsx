import { useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ onNavigate }) {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle(styles.scrolled, window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => onNavigate('home')}>
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>FitForge</span>
        </button>
        <div className={styles.links}>
          <button className={styles.link} onClick={() => onNavigate('muscles')}>Muscles</button>
          <button className={styles.link} onClick={() => onNavigate('tips')}>Tips</button>
        </div>
        <button className={styles.cta} onClick={() => onNavigate('muscles')}>Start Training</button>
      </div>
    </nav>
  );
}
