import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'Responsive portfolio built with React and CSS.',
    github: 'https://github.com/WayneNithin/Portfolio'
  },
  {
    title: 'E-Commerce Website',
    desc: 'E-Commerce Website built with React,Javascript and CSS.',
    github: 'https://github.com/WayneNithin/Blue'
  },
  {
    title: 'Calculator App',
    desc: 'A simple calculator app built with React.',
    github: 'https://github.com/WayneNithin/Calculator'
  },
  {
    title: 'To-Do List',
    desc: 'A to-do list app to manage daily tasks.',
    github: 'https://github.com/WayneNithin/To-do'
  },
  {
    title:'Pet Store Website',
    desc: 'A Responsive pet store website built with HTML and CSS.',
    github: 'https://github.com/WayneNithin/Pet-Store'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div style={{ marginTop: 'auto' }}>
              <a className="btn" href={p.github} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
