import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Kritthika Shanmugam</h1>
        <p>
          456 ABC Street, Anytown USA, 67890 | (987) 654-3210 | kritthika@example.com
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle, WA | May 2025</p>
          <p>GPA: 4.0</p>

          <h3>Bachelor of Engineering in Electronics and Communication Engineering </h3>
          <p>Kongu Engineering College, Tamil Nadu, India | May 2020</p>
          <p>GPA: 8.51</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <ul>
            <li>Programming Languages:</li>
            <li>Python, C++, C, SQL, R, HTML, CSS, JavaScript</li>
            <li>Development Tools:</li>
            <li>Jupyter, Git, GitHub, MySQL, NoSQL, Anaconda, VSCode, RStudio, Power BI, Docker</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Project Experience</h2>
        <div className="experience">
          <h3>A Secure Multi-Factor Authentication System </h3>
          <p>Python, Flask, Flask-Bcrypt, SQLAlchemy, PyOTP, Docker</p>
          <ul>
            <li>Designed a Flask-based MFA system with secure password hashing, 
              30-second refreshing OTPs using PyOTP, containerized with Docker, and integrated Google Authenticator for reliable authentication, 
              utilizing Flask blueprints and SQLAlchemy for modular architecture and secure database management.</li>
          </ul>

          <h3>Drowsy Driver Detection </h3>
          <p>Python, TensorFlow, VSCode</p>
          <ul>
            <li>Incorporated a CNN for drowsiness detection, boosting accuracy by 35% 
              with data augmentation and implemented a 4-layer CNN for enhanced real-time eye closure detection.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Portfolio Website</h2>
        <div className="projects">
          <p>
            Built a personal portfolio website using React and deployed it on GitHub Pages.
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://kritthikashanmugam.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://kritthikashanmugam.com/
            </a>
          </p>

          <h2>Achievements</h2>
          <h3>
          Dean's List Honors
          </h3>
          <p>
          Selected for the Dean's List at City University of Seattle for Fall 2023-24 and Winter 2023-24, recognizing academic excellence.    
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
