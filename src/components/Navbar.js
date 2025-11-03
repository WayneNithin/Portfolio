import React from 'react';

export default function Navbar({ dark, setDark }) {
  return (
    <header className="navbar">
      <div className="logo">Bruce Wayne</div>
      <nav className="nav-links" aria-label="Primary">
        <a href="#intro">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
      <div>
        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
