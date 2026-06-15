import { useScrollReveal } from '../hooks/useScrollReveal';
import { timeline } from '../data/portfolioData';
import './Journey.css';

function TimelineItem({ item, index, delay }) {
  const [ref, isVisible] = useScrollReveal();
  const badgeClass = `timeline-badge timeline-badge--${item.type}`;
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`timeline-item timeline-item--${isLeft ? 'left' : 'right'} reveal${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="timeline-dot" />
      <div className="timeline-card">
        <span className={badgeClass}>{item.badge}</span>
        <p className="timeline-date">{item.date}</p>
        <h3 className="timeline-role">{item.role}</h3>
        <p className="timeline-org">{item.org}</p>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default function Journey() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="journey">
      <div className="container">
        <div ref={ref} className={`reveal${isVisible ? ' visible' : ''}`}>
          <p className="section-label">// Journey</p>
          <h2 className="section-title">Where I&apos;ve Been</h2>
          <p className="section-subtitle">A vertical timeline of education, experience, and key projects.</p>
        </div>
        <div className="timeline-container">
          <div className="timeline-line" />
          <div className="timeline-items">
            {timeline.map((item, i) => (
              <TimelineItem key={item.role + item.date} item={item} index={i} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
