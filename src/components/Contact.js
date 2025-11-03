import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <div className="contact-list">
        <div>Email: <a href="mailto:nitinr032@gmail.com">
          nitinr032@gmail.com
        </a></div>
        <div>LinkedIn: <a href="www.linkedin.com/in/nithin-ramaiyan-a28870148" target="_blank" rel="noreferrer">
          linkedin.com/in/nithin-ramaiyan
        </a></div>
        <div>
          Phone:{" "}
          <a href="tel:+91 9871054778">
            +91 9871054778
          </a>
        </div>
      </div>
    </section>
  );
}
