import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create this CSS file

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Hey, I'm Liam 👋</h1>
          <h2 className="home-subtitle">Software Developer</h2>
          <p className="home-description">
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about building applications that solve real-world problems 
            and delight users.
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
          <span className="feature-icon">💻</span>
          <h3>Web Development</h3>
          <p>Building responsive and modern web applications</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🎨</span>
          <h3>UI/UX Design</h3>
          <p>Creating intuitive and beautiful user experiences</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🚀</span>
          <h3>Problem Solving</h3>
          <p>Finding elegant solutions to complex challenges</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
