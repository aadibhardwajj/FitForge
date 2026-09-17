import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './AuthModal.module.css';

const GOALS = ['Build Muscle', 'Lose Body Fat', 'Increase Strength', 'General Fitness', 'Endurance'];
const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export default function AuthModal({ isOpen, onClose, initialTab = 'login' }) {
  const [tab, setTab] = useState(initialTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('Build Muscle');
  const [level, setLevel] = useState('Intermediate');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login, register } = useAuth();

  useEffect(() => {
    setTab(initialTab);
    setError('');
  }, [initialTab, isOpen]);

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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    if (tab === 'login') {
      const res = login(email, password);
      setLoading(false);
      if (res.success) {
        onClose();
      } else {
        setError(res.error);
      }
    } else {
      if (!name.trim()) {
        setError('Please enter your full name.');
        setLoading(false);
        return;
      }

      const res = register({ name, email, password, goal, level });
      setLoading(false);
      if (res.success) {
        onClose();
      } else {
        setError(res.error);
      }
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className={styles.header}>
          <div className={styles.iconCircle}>⚡</div>
          <h2 className={styles.title}>
            {tab === 'login' ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p className={styles.subtitle}>
            {tab === 'login'
              ? 'Log in to access your saved workouts and fitness profile'
              : 'Join FitForge to build and track your custom workout plan'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${tab === 'login' ? styles.activeTab : ''}`}
            onClick={() => {
              setTab('login');
              setError('');
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`${styles.tab} ${tab === 'register' ? styles.activeTab : ''}`}
            onClick={() => {
              setTab('register');
              setError('');
            }}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.errorAlert}>{error}</div>}

          {tab === 'register' && (
            <div className={styles.field}>
              <label className={styles.label}>Full Name</label>
              <div className={styles.inputWrap}>
                <span className={styles.inputIcon}>👤</span>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="e.g. Alex Turner"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          <div className={styles.field}>
            <label className={styles.label}>Email Address</label>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>✉️</span>
              <input
                type="email"
                className={styles.input}
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.input}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className={styles.pwdToggle}
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {tab === 'register' && (
            <>
              <div className={styles.field}>
                <label className={styles.label}>Primary Fitness Goal</label>
                <div className={styles.selectWrap}>
                  <select
                    className={styles.select}
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  >
                    {GOALS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Experience Level</label>
                <div className={styles.levelButtons}>
                  {LEVELS.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      className={`${styles.lvlBtn} ${level === lvl ? styles.activeLvl : ''}`}
                      onClick={() => setLevel(lvl)}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Processing...' : tab === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className={styles.footer}>
          {tab === 'login' ? (
            <p>
              Don't have an account yet?{' '}
              <button
                type="button"
                className={styles.switchLink}
                onClick={() => {
                  setTab('register');
                  setError('');
                }}
              >
                Create Account
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button
                type="button"
                className={styles.switchLink}
                onClick={() => {
                  setTab('login');
                  setError('');
                }}
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
