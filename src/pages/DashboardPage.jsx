import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './DashboardPage.module.css';

export default function DashboardPage({ onExploreMuscles, onViewFavorites }) {
  const { currentUser, metrics, logMeal, logWorkout, logWeight, addSteps } = useAuth();

  // Active Logging Modal: null | 'meal' | 'workout' | 'weight' | 'steps'
  const [activeModal, setActiveModal] = useState(null);

  // Form states
  const [mealName, setMealName] = useState('');
  const [mealCal, setMealCal] = useState('');
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [workoutDuration, setWorkoutDuration] = useState('45');
  const [workoutCal, setWorkoutCal] = useState('350');
  const [workoutType, setWorkoutType] = useState('Strength');
  const [newWeightInput, setNewWeightInput] = useState('');
  const [customStepsInput, setCustomStepsInput] = useState('');

  if (!currentUser) return null;

  const calConsumed = metrics.calories.consumed;
  const calTarget = metrics.calories.target;
  const calPercent = Math.min(100, Math.round((calConsumed / calTarget) * 100));
  const calRemaining = Math.max(0, calTarget - calConsumed);

  const stepsToday = metrics.steps.today;
  const stepsTarget = metrics.steps.target;
  const stepsPercent = Math.min(100, Math.round((stepsToday / stepsTarget) * 100));

  const weightCurrent = metrics.weight.current;
  const weightStart = metrics.weight.start;
  const weightTarget = metrics.weight.target;
  const weightDiff = (weightCurrent - weightStart).toFixed(1);

  const handleMealSubmit = (e) => {
    e.preventDefault();
    if (!mealCal) return;
    logMeal(mealName || 'Logged Meal', mealCal);
    setMealName('');
    setMealCal('');
    setActiveModal(null);
  };

  const handleWorkoutSubmit = (e) => {
    e.preventDefault();
    logWorkout(workoutTitle || 'Workout Session', workoutDuration, workoutCal, workoutType);
    setWorkoutTitle('');
    setActiveModal(null);
  };

  const handleWeightSubmit = (e) => {
    e.preventDefault();
    if (!newWeightInput) return;
    logWeight(newWeightInput);
    setNewWeightInput('');
    setActiveModal(null);
  };

  const handleStepsSubmit = (e) => {
    e.preventDefault();
    if (!customStepsInput) return;
    addSteps(customStepsInput);
    setCustomStepsInput('');
    setActiveModal(null);
  };

  return (
    <section className={styles.dashboard}>
      <div className={styles.container}>
        {/* Hero Greeting */}
        <div className={styles.greetingCard}>
          <div className={styles.greetingMain}>
            <div className={styles.avatarCircle}>
              {currentUser.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2)}
            </div>
            <div>
              <div className={styles.badgeRow}>
                <span className={styles.streakBadge}>🔥 5 Day Streak</span>
                <span className={styles.goalBadge}>🎯 {currentUser.goal}</span>
                <span className={styles.levelBadge}>⚡ {currentUser.level}</span>
              </div>
              <h1 className={styles.welcomeTitle}>
                Welcome back, <span className="gradient-text">{currentUser.name}</span>!
              </h1>
              <p className={styles.welcomeSubtitle}>
                Here is your fitness performance breakdown and daily training activity.
              </p>
            </div>
          </div>

          <div className={styles.quickNav}>
            <button className={styles.navActionBtn} onClick={onExploreMuscles}>
              <span>💪 Start Workout</span>
            </button>
            <button className={styles.navActionGhost} onClick={onViewFavorites}>
              <span>❤️ Saved Exercises</span>
            </button>
          </div>
        </div>

        {/* 4 Main Metric Cards */}
        <div className={styles.metricsGrid}>
          {/* 1. Calorie Intake */}
          <div className={styles.metricCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap} style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#fb923c' }}>
                🥗
              </div>
              <div>
                <h3 className={styles.cardTitle}>Calorie Intake</h3>
                <span className={styles.cardSub}>Daily Energy Target</span>
              </div>
              <button
                className={styles.logBtn}
                onClick={() => setActiveModal('meal')}
                title="Add Meal"
              >
                + Log Food
              </button>
            </div>

            <div className={styles.valueRow}>
              <div className={styles.mainVal}>
                {calConsumed.toLocaleString()} <span className={styles.unit}>kcal</span>
              </div>
              <div className={styles.targetVal}>
                / {calTarget.toLocaleString()} kcal ({calPercent}%)
              </div>
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${calPercent}%`,
                  background: 'linear-gradient(90deg, #f97316, #fbbf24)'
                }}
              />
            </div>

            <div className={styles.statBreakdown}>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Remaining</span>
                <span className={styles.miniStatVal}>{calRemaining.toLocaleString()} kcal</span>
              </div>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Meals Logged</span>
                <span className={styles.miniStatVal}>{metrics.calories.meals.length}</span>
              </div>
            </div>

            <div className={styles.recentList}>
              <h4 className={styles.recentTitle}>Today's Meals</h4>
              {metrics.calories.meals.slice(0, 3).map((m) => (
                <div key={m.id} className={styles.recentItem}>
                  <span className={styles.recentItemName}>{m.name}</span>
                  <span className={styles.recentItemVal}>+{m.cal} kcal</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Workouts Completed */}
          <div className={styles.metricCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap} style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
                🏋️‍♂️
              </div>
              <div>
                <h3 className={styles.cardTitle}>Workout Activity</h3>
                <span className={styles.cardSub}>Training & Intensity</span>
              </div>
              <button
                className={styles.logBtn}
                onClick={() => setActiveModal('workout')}
                title="Log Workout"
              >
                + Log Session
              </button>
            </div>

            <div className={styles.valueRow}>
              <div className={styles.mainVal}>
                {metrics.workouts.count} <span className={styles.unit}>sessions</span>
              </div>
              <div className={styles.targetVal}>
                {metrics.workouts.totalMinutes} mins total
              </div>
            </div>

            <div className={styles.statBreakdown} style={{ marginTop: '1rem' }}>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Active Time</span>
                <span className={styles.miniStatVal}>{metrics.workouts.totalMinutes} mins</span>
              </div>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Burned</span>
                <span className={styles.miniStatVal}>{metrics.workouts.caloriesBurned} kcal</span>
              </div>
            </div>

            <div className={styles.recentList}>
              <h4 className={styles.recentTitle}>Recent Sessions</h4>
              {metrics.workouts.sessions.slice(0, 3).map((w) => (
                <div key={w.id} className={styles.recentItem}>
                  <div>
                    <div className={styles.recentItemName}>{w.title}</div>
                    <div className={styles.recentItemDate}>{w.date} · {w.duration}m</div>
                  </div>
                  <span className={styles.recentItemVal} style={{ color: '#60a5fa' }}>
                    🔥 {w.calories} kcal
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Bodyweight Tracker */}
          <div className={styles.metricCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap} style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                ⚖️
              </div>
              <div>
                <h3 className={styles.cardTitle}>Bodyweight</h3>
                <span className={styles.cardSub}>Progress & History</span>
              </div>
              <button
                className={styles.logBtn}
                onClick={() => setActiveModal('weight')}
                title="Update Weight"
              >
                + Log Weight
              </button>
            </div>

            <div className={styles.valueRow}>
              <div className={styles.mainVal}>
                {weightCurrent} <span className={styles.unit}>{metrics.weight.unit}</span>
              </div>
              <div className={styles.targetVal}>
                Goal: {weightTarget} {metrics.weight.unit}
              </div>
            </div>

            <div className={styles.statBreakdown} style={{ marginTop: '1rem' }}>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Starting</span>
                <span className={styles.miniStatVal}>{weightStart} {metrics.weight.unit}</span>
              </div>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Total Change</span>
                <span
                  className={styles.miniStatVal}
                  style={{ color: Number(weightDiff) <= 0 ? '#34d399' : '#f87171' }}
                >
                  {Number(weightDiff) > 0 ? `+${weightDiff}` : `${weightDiff}`} {metrics.weight.unit}
                </span>
              </div>
            </div>

            <div className={styles.recentList}>
              <h4 className={styles.recentTitle}>Weight Timeline</h4>
              {metrics.weight.history.slice(-3).reverse().map((h, i) => (
                <div key={i} className={styles.recentItem}>
                  <span className={styles.recentItemName}>{h.date}</span>
                  <span className={styles.recentItemVal} style={{ color: '#34d399' }}>
                    {h.weight} {metrics.weight.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Daily Steps */}
          <div className={styles.metricCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap} style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                👟
              </div>
              <div>
                <h3 className={styles.cardTitle}>Daily Steps</h3>
                <span className={styles.cardSub}>Movement & Distance</span>
              </div>
              <button
                className={styles.logBtn}
                onClick={() => setActiveModal('steps')}
                title="Add Steps"
              >
                + Add Steps
              </button>
            </div>

            <div className={styles.valueRow}>
              <div className={styles.mainVal}>
                {stepsToday.toLocaleString()} <span className={styles.unit}>steps</span>
              </div>
              <div className={styles.targetVal}>
                / {stepsTarget.toLocaleString()} ({stepsPercent}%)
              </div>
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${stepsPercent}%`,
                  background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)'
                }}
              />
            </div>

            <div className={styles.statBreakdown}>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Distance</span>
                <span className={styles.miniStatVal}>{metrics.steps.distanceKm} km</span>
              </div>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Calories Approx</span>
                <span className={styles.miniStatVal}>{Math.round(stepsToday * 0.04)} kcal</span>
              </div>
            </div>

            <div className={styles.quickSteps}>
              <span className={styles.quickStepsLabel}>Quick Add:</span>
              <button className={styles.stepChip} onClick={() => addSteps(500)}>+500</button>
              <button className={styles.stepChip} onClick={() => addSteps(1000)}>+1,000</button>
              <button className={styles.stepChip} onClick={() => addSteps(2500)}>+2,500</button>
            </div>
          </div>
        </div>
      </div>

      {/* Logging Modals */}
      {activeModal && (
        <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setActiveModal(null)}>✕</button>

            {activeModal === 'meal' && (
              <form onSubmit={handleMealSubmit} className={styles.modalForm}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalIcon}>🥗</span>
                  <h3>Log Food / Meal</h3>
                </div>
                <div className={styles.formField}>
                  <label>Meal / Food Item Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Protein Shake & Banana"
                    value={mealName}
                    onChange={(e) => setMealName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label>Calories (kcal)</label>
                  <input
                    type="number"
                    placeholder="e.g. 450"
                    value={mealCal}
                    onChange={(e) => setMealCal(e.target.value)}
                    required
                    min="1"
                  />
                </div>
                <button type="submit" className={styles.modalSubmit}>
                  Add Calorie Entry
                </button>
              </form>
            )}

            {activeModal === 'workout' && (
              <form onSubmit={handleWorkoutSubmit} className={styles.modalForm}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalIcon}>🏋️‍♂️</span>
                  <h3>Log Workout Session</h3>
                </div>
                <div className={styles.formField}>
                  <label>Workout Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Chest & Triceps Blast"
                    value={workoutTitle}
                    onChange={(e) => setWorkoutTitle(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label>Duration (Minutes)</label>
                    <input
                      type="number"
                      placeholder="45"
                      value={workoutDuration}
                      onChange={(e) => setWorkoutDuration(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <label>Calories Burned</label>
                    <input
                      type="number"
                      placeholder="350"
                      value={workoutCal}
                      onChange={(e) => setWorkoutCal(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formField}>
                  <label>Training Type</label>
                  <select value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
                    <option value="Strength">Strength / Weights</option>
                    <option value="Cardio">Cardio / HIIT</option>
                    <option value="Calisthenics">Calisthenics</option>
                    <option value="Crossfit">CrossFit / Functional</option>
                  </select>
                </div>
                <button type="submit" className={styles.modalSubmit}>
                  Save Workout Session
                </button>
              </form>
            )}

            {activeModal === 'weight' && (
              <form onSubmit={handleWeightSubmit} className={styles.modalForm}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalIcon}>⚖️</span>
                  <h3>Update Bodyweight</h3>
                </div>
                <div className={styles.formField}>
                  <label>Current Weight ({metrics.weight.unit})</label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder={`e.g. ${metrics.weight.current}`}
                    value={newWeightInput}
                    onChange={(e) => setNewWeightInput(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className={styles.modalSubmit}>
                  Update Weight
                </button>
              </form>
            )}

            {activeModal === 'steps' && (
              <form onSubmit={handleStepsSubmit} className={styles.modalForm}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalIcon}>👟</span>
                  <h3>Add Steps</h3>
                </div>
                <div className={styles.formField}>
                  <label>Additional Steps</label>
                  <input
                    type="number"
                    placeholder="e.g. 1500"
                    value={customStepsInput}
                    onChange={(e) => setCustomStepsInput(e.target.value)}
                    required
                    min="1"
                  />
                </div>
                <button type="submit" className={styles.modalSubmit}>
                  Add Steps
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
