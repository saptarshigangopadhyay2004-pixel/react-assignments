export default function Skills() {
  const skillsList = [
    'React.js',
    'JavaScript (ES6+)',
    'HTML5 & Modern CSS',
    'Component Architecture',
    'Git & GitHub',
    'Vite Build Tool',
    'REST APIs'
  ];

  return (
    <section id="skills" className="portfolio-section animate-card">
      <h2>Technical Skills</h2>
      <div className="skills-badge-list">
        {skillsList.map((skill, index) => (
          <span key={index} className="skill-chip">{skill}</span>
        ))}
      </div>
    </section>
  );
}