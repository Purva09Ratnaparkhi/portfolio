import { navLinks } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <p className="footer-logo aurora-text">Purva R.</p>
            <p className="footer-tagline">AI Engineer &amp; Data Science</p>
          </div>
          <ul className="footer-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <p className="footer-copy">&copy; 2026 Purva Ratnaparkhi</p>
        </div>
      </div>
    </footer>
  );
}
