import React from 'react';
import './Home.css'; // Make sure to create this CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Hey, I'm Liam</h1>
      <img src="/images/my-headshot.png" alt="My Headshot" className="center-image"/>
      <p>This is the home page.</p>
    </div>
  );
}

export default Home;
