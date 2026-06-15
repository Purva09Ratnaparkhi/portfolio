import { useScrollReveal } from '../hooks/useScrollReveal';
import { publications } from '../data/portfolioData';
import './Publications.css';

function PublicationCard({ item, delay }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`publication-card reveal${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="publication-header">
        <span className="publication-icon">📄</span>
        <span className="publication-journal">{item.journal}</span>
      </div>
      <h3 className="publication-title">{item.title}</h3>
      <p className="publication-desc">{item.desc}</p>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="publication-link-btn"
        >
          Read Publication
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default function Publications() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="publications">
      <div className="container">
        <div ref={ref} className={`reveal${isVisible ? ' visible' : ''}`}>
          <p className="section-label">// Publications</p>
          <h2 className="section-title">Research &amp; Writing</h2>
          <p className="section-subtitle">
            Scientific papers and chapters published in peer-reviewed journals and conferences.
          </p>
        </div>
        <div className="publications-grid">
          {publications.map((item, i) => (
            <PublicationCard key={item.title} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
