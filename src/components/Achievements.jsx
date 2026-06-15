import { useScrollReveal } from '../hooks/useScrollReveal';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

function AchievementCard({ item, delay }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`achievement-card reveal${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="achievement-emoji">{item.emoji}</span>
      <h3 className="achievement-title">{item.title}</h3>
      <span className="achievement-org">{item.org}</span>
      <p className="achievement-desc">{item.desc}</p>
    </div>
  );
}

export default function Achievements() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="achievements">
      <div className="container">
        <div ref={ref} className={`reveal${isVisible ? ' visible' : ''}`}>
          <p className="section-label">// Achievements</p>
          <h2 className="section-title">Recognition</h2>
          <p className="section-subtitle">Awards, selections, and leadership roles.</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
