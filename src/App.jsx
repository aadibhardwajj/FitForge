import { useState, useCallback } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MusclesPage from './pages/MusclesPage';
import ExercisesPage from './pages/ExercisesPage';
import FavoritesPage from './pages/FavoritesPage';
import TipsSection from './components/TipsSection';
import AuthModal from './components/AuthModal';
import ProfileModal from './components/ProfileModal';
import styles from './App.module.css';

// Views: 'home' | 'muscles' | 'exercises' | 'favorites'
function MainContent() {
  const [view, setView] = useState('home');
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [authModal, setAuthModal] = useState({ open: false, tab: 'login' });
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const { currentUser } = useAuth();

  const handleNavigate = useCallback((target) => {
    if (target === 'home') {
      setView('home');
      setSelectedMuscle(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'muscles') {
      setView('muscles');
      setSelectedMuscle(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'favorites') {
      setView('favorites');
      setSelectedMuscle(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'tips') {
      if (view !== 'home') {
        setView('home');
      }
      setSelectedMuscle(null);
      setTimeout(() => {
        document.getElementById('tips')?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  }, [view]);

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

  const openAuth = useCallback((tab = 'login') => {
    setAuthModal({ open: true, tab });
  }, []);

  const closeAuth = useCallback(() => {
    setAuthModal(prev => ({ ...prev, open: false }));
  }, []);

  return (
    <div className={styles.app}>
      <Navbar
        onNavigate={handleNavigate}
        onOpenAuth={openAuth}
        onOpenProfile={() => setProfileModalOpen(true)}
      />

      {view === 'home' && (
        <>
          <Hero onStart={() => handleNavigate('muscles')} />
          <MusclesPage onSelect={handleSelectMuscle} />
          <TipsSection />
          <Footer />
        </>
      )}

      {view === 'muscles' && (
        <>
          <MusclesPage onSelect={handleSelectMuscle} />
          <TipsSection />
          <Footer />
        </>
      )}

      {view === 'exercises' && selectedMuscle && (
        <>
          <ExercisesPage
            muscle={selectedMuscle}
            onBack={handleBack}
            onRequireAuth={() => openAuth('login')}
          />
          <Footer />
        </>
      )}

      {view === 'favorites' && (
        <>
          <FavoritesPage
            onBack={() => handleNavigate('muscles')}
            onExplore={() => handleNavigate('muscles')}
          />
          <Footer />
        </>
      )}

      {/* Modals */}
      <AuthModal
        isOpen={authModal.open}
        initialTab={authModal.tab}
        onClose={closeAuth}
      />

      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        onViewFavorites={() => handleNavigate('favorites')}
      />
    </div>
  );
}

function Footer() {
  return (
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
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
}
