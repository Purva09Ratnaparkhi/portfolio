import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo aurora-text">Purva R.</a>
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
          <li className="nav-resume-item">
            <a
              href="https://drive.google.com/file/d/1ehzg3o0EIxLzHb-TnxlivqPHbbZHkE3i/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
