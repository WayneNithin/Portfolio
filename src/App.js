import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Appreciate you for Checking</p>
      </footer>
    </div>
  );
}
