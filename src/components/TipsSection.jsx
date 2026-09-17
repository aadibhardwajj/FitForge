import styles from './TipsSection.module.css';

const tips = [
  { icon: '💧', title: 'Stay Hydrated', desc: 'Drink at least 500ml of water before your workout and sip every 15–20 minutes during training to maintain peak performance.' },
  { icon: '🔥', title: 'Warm Up Properly', desc: 'Spend 5–10 minutes warming up with dynamic stretches and light cardio to prepare your muscles and reduce injury risk.' },
  { icon: '😴', title: 'Prioritize Recovery', desc: 'Muscles grow during rest. Aim for 7–9 hours of sleep and allow 48 hours between working the same muscle group.' },
  { icon: '🥗', title: 'Fuel Your Body', desc: 'Consume protein-rich foods within 30 minutes post-workout to kickstart muscle repair and growth.' },
  { icon: '📈', title: 'Progressive Overload', desc: 'Gradually increase weight, reps, or sets each week to continuously challenge your muscles and break plateaus.' },
  { icon: '🧠', title: 'Mind-Muscle Connection', desc: 'Focus on squeezing the target muscle throughout each rep. Intentional contractions lead to better gains.' },
];

export default function TipsSection() {
  return (
    <section className={styles.section} id="tips">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Expert Advice</span>
          <h2 className={styles.title}>Pro <span className="gradient-text">Training Tips</span></h2>
        </div>
        <div className={styles.grid}>
          {tips.map((t, i) => (
            <div className={styles.card} key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className={styles.icon}>{t.icon}</div>
              <h3 className={styles.cardTitle}>{t.title}</h3>
              <p className={styles.cardDesc}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
