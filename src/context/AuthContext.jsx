import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

const USERS_KEY = 'fitforge_users';
const ACTIVE_USER_KEY = 'fitforge_active_user';

const getDefaultMetrics = () => ({
  calories: {
    consumed: 1650,
    target: 2400,
    meals: [
      { id: 'm_1', name: 'Oatmeal & Protein Shake', cal: 520, time: '08:30 AM' },
      { id: 'm_2', name: 'Grilled Chicken & Rice', cal: 680, time: '01:15 PM' },
      { id: 'm_3', name: 'Greek Yogurt & Almonds', cal: 450, time: '05:00 PM' }
    ]
  },
  workouts: {
    count: 14,
    totalMinutes: 620,
    caloriesBurned: 4800,
    sessions: [
      { id: 'w_1', title: 'Chest & Triceps Hypertrophy', duration: 55, calories: 420, date: 'Today, 10:00 AM', type: 'Strength' },
      { id: 'w_2', title: 'Back & Biceps Power', duration: 50, calories: 390, date: 'Yesterday', type: 'Strength' },
      { id: 'w_3', title: 'HIIT Cardio Session', duration: 30, calories: 310, date: '2 days ago', type: 'Cardio' }
    ]
  },
  weight: {
    current: 74.5,
    start: 78.0,
    target: 72.0,
    unit: 'kg',
    history: [
      { date: 'Sep 1', weight: 78.0 },
      { date: 'Sep 5', weight: 77.2 },
      { date: 'Sep 10', weight: 75.8 },
      { date: 'Sep 14', weight: 75.0 },
      { date: 'Today', weight: 74.5 }
    ]
  },
  steps: {
    today: 7850,
    target: 10000,
    distanceKm: 5.8
  }
});

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem(ACTIVE_USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [favorites, setFavorites] = useState(() => {
    if (!currentUser) return [];
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const user = users.find(u => u.email === currentUser.email);
      return user?.favorites || [];
    } catch {
      return [];
    }
  });

  const [metrics, setMetrics] = useState(() => {
    if (!currentUser) return getDefaultMetrics();
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const user = users.find(u => u.email === currentUser.email);
      return user?.metrics || getDefaultMetrics();
    } catch {
      return getDefaultMetrics();
    }
  });

  // Sync active user to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(ACTIVE_USER_KEY);
    }
  }, [currentUser]);

  // Sync favorites & metrics when user changes
  useEffect(() => {
    if (currentUser) {
      try {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
        const user = users.find(u => u.email === currentUser.email);
        setFavorites(user?.favorites || []);
        setMetrics(user?.metrics || getDefaultMetrics());
      } catch {
        setFavorites([]);
        setMetrics(getDefaultMetrics());
      }
    } else {
      setFavorites([]);
      setMetrics(getDefaultMetrics());
    }
  }, [currentUser]);

  // Helper to persist metrics into localStorage
  const saveUserMetrics = useCallback((updatedMetrics) => {
    setMetrics(updatedMetrics);
    if (!currentUser) return;
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const userIndex = users.findIndex(u => u.email === currentUser.email);
      if (userIndex !== -1) {
        users[userIndex].metrics = updatedMetrics;
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
      }
    } catch (err) {
      console.error('Failed to save metrics', err);
    }
  }, [currentUser]);

  const register = useCallback(({ name, email, password, goal = 'Build Muscle', level = 'Intermediate' }) => {
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const normalizedEmail = email.trim().toLowerCase();

      if (users.some(u => u.email === normalizedEmail)) {
        return { success: false, error: 'An account with this email already exists.' };
      }

      const defaultUserMetrics = getDefaultMetrics();

      const newUser = {
        id: 'usr_' + Date.now(),
        name: name.trim(),
        email: normalizedEmail,
        password,
        goal,
        level,
        favorites: [],
        metrics: defaultUserMetrics,
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      };

      users.push(newUser);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));

      const sessionUser = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        goal: newUser.goal,
        level: newUser.level,
        joinedDate: newUser.joinedDate
      };

      setCurrentUser(sessionUser);
      setFavorites([]);
      setMetrics(defaultUserMetrics);
      return { success: true };
    } catch {
      return { success: false, error: 'Failed to create account. Please try again.' };
    }
  }, []);

  const login = useCallback((email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const normalizedEmail = email.trim().toLowerCase();
      const user = users.find(u => u.email === normalizedEmail);

      if (!user) {
        return { success: false, error: 'No account found with this email.' };
      }

      if (user.password !== password) {
        return { success: false, error: 'Incorrect password. Please try again.' };
      }

      const sessionUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        goal: user.goal,
        level: user.level,
        joinedDate: user.joinedDate || 'Sep 2026'
      };

      setCurrentUser(sessionUser);
      setFavorites(user.favorites || []);
      setMetrics(user.metrics || getDefaultMetrics());
      return { success: true };
    } catch {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    setFavorites([]);
    setMetrics(getDefaultMetrics());
    localStorage.removeItem(ACTIVE_USER_KEY);
  }, []);

  const toggleFavorite = useCallback((exerciseName) => {
    if (!currentUser) return false;

    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const userIndex = users.findIndex(u => u.email === currentUser.email);

      if (userIndex === -1) return false;

      let userFavs = users[userIndex].favorites || [];
      const exists = userFavs.includes(exerciseName);

      if (exists) {
        userFavs = userFavs.filter(name => name !== exerciseName);
      } else {
        userFavs = [...userFavs, exerciseName];
      }

      users[userIndex].favorites = userFavs;
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      setFavorites(userFavs);
      return !exists;
    } catch {
      return false;
    }
  }, [currentUser]);

  const isFavorite = useCallback((exerciseName) => {
    return favorites.includes(exerciseName);
  }, [favorites]);

  // Dashboard Logging Actions
  const logMeal = useCallback((name, cal) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMeal = { id: 'm_' + Date.now(), name: name || 'Custom Meal', cal: Number(cal), time };
    const updated = {
      ...metrics,
      calories: {
        ...metrics.calories,
        consumed: metrics.calories.consumed + Number(cal),
        meals: [newMeal, ...metrics.calories.meals]
      }
    };
    saveUserMetrics(updated);
  }, [metrics, saveUserMetrics]);

  const logWorkout = useCallback((title, duration, calories, type = 'Strength') => {
    const newSession = {
      id: 'w_' + Date.now(),
      title: title || 'Workout Session',
      duration: Number(duration) || 45,
      calories: Number(calories) || 350,
      date: 'Just now',
      type
    };
    const updated = {
      ...metrics,
      workouts: {
        count: metrics.workouts.count + 1,
        totalMinutes: metrics.workouts.totalMinutes + (Number(duration) || 45),
        caloriesBurned: metrics.workouts.caloriesBurned + (Number(calories) || 350),
        sessions: [newSession, ...metrics.workouts.sessions]
      }
    };
    saveUserMetrics(updated);
  }, [metrics, saveUserMetrics]);

  const logWeight = useCallback((newWeight) => {
    const w = parseFloat(newWeight);
    if (!w || isNaN(w)) return;
    const historyEntry = {
      date: 'Today',
      weight: w
    };
    const updated = {
      ...metrics,
      weight: {
        ...metrics.weight,
        current: w,
        history: [...metrics.weight.history, historyEntry]
      }
    };
    saveUserMetrics(updated);
  }, [metrics, saveUserMetrics]);

  const addSteps = useCallback((delta) => {
    const additional = Number(delta) || 0;
    const newToday = Math.max(0, metrics.steps.today + additional);
    const newDist = parseFloat((newToday * 0.00075).toFixed(2));
    const updated = {
      ...metrics,
      steps: {
        ...metrics.steps,
        today: newToday,
        distanceKm: newDist
      }
    };
    saveUserMetrics(updated);
  }, [metrics, saveUserMetrics]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        favorites,
        metrics,
        register,
        login,
        logout,
        toggleFavorite,
        isFavorite,
        logMeal,
        logWorkout,
        logWeight,
        addSteps
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
