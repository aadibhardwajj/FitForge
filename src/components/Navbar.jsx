import { useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';

export default function Navbar({ onNavigate, onOpenAuth, onOpenProfile }) {
  const navRef = useRef(null);
  const { currentUser, favorites } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle(styles.scrolled, window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initials = currentUser?.name
    ? currentUser.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U';

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => onNavigate('home')}>
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>FitForge</span>
        </button>

        <div className={styles.links}>
          {currentUser && (
            <button className={styles.link} onClick={() => onNavigate('dashboard')}>
              📊 Dashboard
            </button>
          )}
          <button className={styles.link} onClick={() => onNavigate('muscles')}>
            Muscles
          </button>
          <button className={styles.link} onClick={() => onNavigate('tips')}>
            Tips
          </button>
          {currentUser && (
            <button className={styles.link} onClick={() => onNavigate('favorites')}>
              <span>Saved</span>
              {favorites.length > 0 && (
                <span className={styles.favBadge}>{favorites.length}</span>
              )}
            </button>
          )}
        </div>

        <div className={styles.authArea}>
          {currentUser ? (
            <button className={styles.profilePill} onClick={onOpenProfile} title="View Profile">
              <span className={styles.avatar}>{initials}</span>
              <span className={styles.profileName}>{currentUser.name.split(' ')[0]}</span>
              <span className={styles.goalTag}>{currentUser.goal}</span>
            </button>
          ) : (
            <div className={styles.authButtons}>
              <button className={styles.signInBtn} onClick={() => onOpenAuth('login')}>
                Sign In
              </button>
              <button className={styles.signUpBtn} onClick={() => onOpenAuth('register')}>
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
