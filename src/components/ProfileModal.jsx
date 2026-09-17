import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './ProfileModal.module.css';

export default function ProfileModal({ isOpen, onClose, onViewFavorites }) {
  const { currentUser, favorites, logout } = useAuth();

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !currentUser) return null;

  const initials = currentUser.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className={styles.avatarSection}>
          <div className={styles.avatar}>{initials}</div>
          <h2 className={styles.userName}>{currentUser.name}</h2>
          <p className={styles.userEmail}>{currentUser.email}</p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statIcon}>🎯</span>
            <span className={styles.statLabel}>Fitness Goal</span>
            <span className={styles.statValue}>{currentUser.goal}</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statIcon}>⚡</span>
            <span className={styles.statLabel}>Experience Level</span>
            <span className={styles.statValue}>{currentUser.level}</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statIcon}>❤️</span>
            <span className={styles.statLabel}>Saved Workouts</span>
            <span className={styles.statValue}>{favorites.length} Exercises</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statIcon}>📅</span>
            <span className={styles.statLabel}>Member Since</span>
            <span className={styles.statValue}>{currentUser.joinedDate || 'Sep 2026'}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.favBtn}
            onClick={() => {
              onClose();
              if (onViewFavorites) onViewFavorites();
            }}
          >
            <span>❤️ View Saved Exercises ({favorites.length})</span>
          </button>

          <button type="button" className={styles.logoutBtn} onClick={handleLogout}>
            <span>🚪 Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
