import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

const USERS_KEY = 'fitforge_users';
const ACTIVE_USER_KEY = 'fitforge_active_user';

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

  // Sync active user to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(ACTIVE_USER_KEY);
    }
  }, [currentUser]);

  // Sync favorites when user changes
  useEffect(() => {
    if (currentUser) {
      try {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
        const user = users.find(u => u.email === currentUser.email);
        setFavorites(user?.favorites || []);
      } catch {
        setFavorites([]);
      }
    } else {
      setFavorites([]);
    }
  }, [currentUser]);

  const register = useCallback(({ name, email, password, goal = 'Build Muscle', level = 'Intermediate' }) => {
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const normalizedEmail = email.trim().toLowerCase();

      if (users.some(u => u.email === normalizedEmail)) {
        return { success: false, error: 'An account with this email already exists.' };
      }

      const newUser = {
        id: 'usr_' + Date.now(),
        name: name.trim(),
        email: normalizedEmail,
        password, // Client-side demo auth
        goal,
        level,
        favorites: [],
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      };

      users.push(newUser);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));

      // Auto login
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
      return { success: true };
    } catch (err) {
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
      return { success: true };
    } catch (err) {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    setFavorites([]);
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

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        favorites,
        register,
        login,
        logout,
        toggleFavorite,
        isFavorite
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
