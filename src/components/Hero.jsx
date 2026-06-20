import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            {/* <div className="hero-badge hero-stagger" style={{ animationDelay: '0.2s' }}>
              <span className="hero-badge-dot" />
              AI Engineer &amp; Data Science
            </div> */}
            <h1 className="hero-name hero-stagger" style={{ animationDelay: '0.4s' }}>
              <span className="aurora-text">Purva</span> Ratnaparkhi
            </h1>
            <p className="hero-title hero-stagger" style={{ animationDelay: '0.6s' }}>
              AI & Data Science student at VIT Pune, building intelligent systems with GenAI, Machine Learning, and Automation. Always learning, building, and exploring what's next in AI.
            </p>
            {/* <p className="hero-desc hero-stagger" style={{ animationDelay: '0.8s' }}>
              AI &amp; Data Science student at VIT Pune — crafting RAG pipelines, agentic systems,
              and production-grade ML solutions. 2× published researcher. Hackathon winner.
            </p> */}
            <div className="hero-ctas hero-stagger" style={{ animationDelay: '1.0s' }}>
              <a href="#projects" className="btn btn-primary">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <div className="photo-ring">
                <div className="photo-ring-inner">
                  <img
                    src="./purva.jpg"
                    alt="Purva Ratnaparkhi"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300/0a0f1e/7B61FF?text=PR';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
