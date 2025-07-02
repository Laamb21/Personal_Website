import React from 'react';
import './About.css';

function About() {
  const skills = {
    'Frontend': ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Express.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
    'Tools & Others': ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'AWS', 'Figma']
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Get to know me better</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>Hi, I'm Liam 👋</h2>
            <p>
              I'm a passionate full-stack developer with a love for creating beautiful, 
              functional, and user-centered digital experiences. With a background in 
              both frontend and backend development, I enjoy building applications that 
              solve real-world problems and delight users.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge through 
              blog posts and tutorials. I believe in continuous learning and staying 
              up-to-date with the latest industry trends and best practices.
            </p>
            <p>
              I'm always excited to work on new projects and collaborate with 
              like-minded developers. Whether it's building a new feature, 
              optimizing performance, or mentoring junior developers, I'm ready 
              to take on new challenges.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/my-headshot.png" alt="Liam" />
          </div>
        </div>

        <div className="skills-section">
          <h2>Skills & Technologies</h2>
          <p>Here are the technologies and tools I work with:</p>
          
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {skillList.map(skill => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h2>Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Full-Stack Developer</h3>
                <p className="timeline-company">Tech Company Inc.</p>
                <p className="timeline-date">2023 - Present</p>
                <p>
                  Building and maintaining web applications using React, Node.js, and PostgreSQL. 
                  Collaborating with cross-functional teams to deliver high-quality software solutions.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Frontend Developer</h3>
                <p className="timeline-company">Startup XYZ</p>
                <p className="timeline-date">2022 - 2023</p>
                <p>
                  Developed responsive user interfaces and implemented modern web technologies 
                  to enhance user experience and application performance.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Computer Science Degree</h3>
                <p className="timeline-company">University Name</p>
                <p className="timeline-date">2018 - 2022</p>
                <p>
                  Graduated with honors, focusing on software engineering and web development. 
                  Completed various projects including a capstone project on web application development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="interests-section">
          <h2>Interests & Hobbies</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <h3>🚀 Open Source</h3>
              <p>Contributing to open-source projects and building tools for the developer community.</p>
            </div>
            <div className="interest-item">
              <h3>📚 Learning</h3>
              <p>Always exploring new technologies and frameworks to expand my skill set.</p>
            </div>
            <div className="interest-item">
              <h3>✍️ Writing</h3>
              <p>Sharing knowledge through blog posts and technical articles.</p>
            </div>
            <div className="interest-item">
              <h3>🎯 Problem Solving</h3>
              <p>Enjoying coding challenges and algorithmic problem solving.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
