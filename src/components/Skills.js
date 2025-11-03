import React from 'react';

const skills = [
  'HTML5','CSS3','JavaScript (ES6+)','React.js',
  'Responsive Design','Git & GitHub'
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2>Technical Skills</h2>
      <ul className="skills-list">
        {skills.map(s => (
          <li key={s} className="skill-chip">{s}</li>
        ))}
      </ul>
    </section>
  );
}
