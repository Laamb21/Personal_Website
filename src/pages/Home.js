import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create this CSS file

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Hey, I'm Liam 👋</h1>
          <h2 className="home-subtitle">Sales Representative & Solutions Coordinator | Software Developer</h2>
          <p className="home-description">
            I'm passionate about building software that people <em>want</em> to use, not just because it works, but because it feels right. 
            I enjoy taking on challenges that matter and finding creative, effective ways to solve them.
          </p>
          <div className="home-buttons">
            <Link to="/projects" className="home-btn primary">
              View My Work
            </Link>
            <Link to="/contact" className="home-btn secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="home-image">
          <img src="/images/my-headshot.png" alt="Liam" />
        </div>
      </div>
      
      <div className="home-features">
        <div className="feature">
          <span className="feature-icon">🌐</span>
          <h3>Web & Software Development</h3>
          <p>Creating responsive, scalable applications that deliver great experiences to any device.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">⚡</span>
          <h3>Automation & Efficiency</h3>
          <p>Streamlining processes with technology to save time, reduce errors, and boost productivity.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🧩</span>
          <h3>CreativeProblem Solving</h3>
          <p>Bringing a fresh perspective to challenges and building practical, innovativve solutions.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
