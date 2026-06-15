import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillCategories, DEVICON_BASE } from '../data/portfolioData';
import './Skills.css';

function SkillIcon({ skill }) {
  if (skill.devicon) {
    return <img src={`${DEVICON_BASE}${skill.devicon}`} alt={skill.name} loading="lazy" />;
  }
  return <span className="skill-mono">{skill.mono}</span>;
}

export default function Skills() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const activeCategory = skillCategories.find(c => c.id === activeTab);
  const displaySkill = hoveredSkill || activeCategory.skills[0];

  return (
    <section id="skills">
      <div className="container">
        <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}>
          <p className="section-label">// Skills</p>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Languages, frameworks, and tools I work with daily.</p>
        </div>

        <div ref={contentRef} className={`skills-section reveal${contentVisible ? ' visible' : ''}`}>
          {/* Tab bar */}
          <div className="skills-tabs">
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                className={`skills-tab${activeTab === cat.id ? ' active' : ''}`}
                onClick={() => {
                  setActiveTab(cat.id);
                  setHoveredSkill(null);
                }}
              >
                <span className="skills-tab-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Content: grid + detail panel */}
          <div className="skills-content">
            <div className="skills-grid">
              {activeCategory.skills.map(skill => (
                <div
                  key={skill.name}
                  className={`skill-tile${displaySkill?.name === skill.name ? ' selected' : ''}`}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onClick={() => setHoveredSkill(skill)}
                >
                  <div className="skill-tile-icon">
                    <SkillIcon skill={skill} />
                  </div>
                  <span className="skill-tile-name">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="skill-detail" key={displaySkill?.name}>
              <div className="skill-detail-icon-wrap">
                <div className="skill-detail-icon">
                  <SkillIcon skill={displaySkill} />
                </div>
                <span className="skill-detail-category">{activeCategory.label.toUpperCase()}</span>
              </div>
              <h3 className="skill-detail-name">{displaySkill?.name}</h3>
              <p className="skill-detail-label">
                <span className="skill-detail-label-icon">📋</span>
                USAGE &amp; EXPERIENCE
              </p>
              <p className="skill-detail-desc">{displaySkill?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
