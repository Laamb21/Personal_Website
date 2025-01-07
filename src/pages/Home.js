import React from 'react';
import './Home.css'; // Make sure to create this CSS file

function Home() {
  return (
    <div className="home-container">
      <div className="sidebar">
        <button className="nav-button" onClick={() => window.location.href = '/about'}>About</button>
        <button className="nav-button" onClick={() => window.location.href = '/projects'}>Projects</button>
        <button className="nav-button" onClick={() => window.location.href = '/contact'}>Contact</button>
      </div>
      <div className="main-content">
        <h1 className="home-title">Hey, I'm Liam</h1>
        <img src="/images/my-headshot.png" alt="My Headshot" className="center-image"/>
        <p className="home-text">This is the home page.</p>
      </div>
    </div>
  );
}

export default Home;
