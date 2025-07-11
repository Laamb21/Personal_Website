import React from 'react';
import './About.css';

function About() {
  const skills = {
    'Frontend': ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Responsive Design'],
    'Backend': ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'PostgreSQL', 'MongoDB', 'SQLite'],
    'Automation & AI': ['OpenAI', 'Claude', 'Cursor', 'Tesseract', 'Automation Scripting', 'Web Scraping', 'Pandas', 'Numpy'],
    'DevOps & Cloud': ['Azure', 'AWS', 'Docker', 'GitHub Actions', 'Git'],
    'Tools & Workflow': ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'AWS', 'Figma'],
    'Other/Soft Skills': ['Client Communication', 'Solutions Consulting', 'Technical Sales', 'Agile', 'Scrum', 'Technical Writing']
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
              I'm a recent computer science graduate who's into building cool stuff with 
              code and making life a little easier with tech. Whether I'm working on web 
              apps, automating boring tasks, or just tinkering with the latest tools, I 
              get a kick out of learning new things and solving interesting problems no
              matter what the framework.
            </p>
            <p>
              I'm all about experimenting with side projects, bouncing ideas around with 
              friends, and picking up new skills whenever I can. I enjoy collaborating with
              others, whether that's helping out on a team project, troubleshooting a tough
              bug, or just geeking out over a new piece of technology.
            </p>
            <p>
              Fun fact: I'm a die-hard Ravens fan, and I'll talk football with anyone who'll listen.
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
                <h3>Sales Representative & Solutions Coordinator</h3>
                <p className="timeline-company">archSCAN LLC</p>
                <p className="timeline-date">July 2024 - Present</p>
                <ul className="timeline-list">
                  <li>Built a custom AI-powered solution using Microsoft Azure Document Intelligence to extract and organize data from large-format architectural documents.</li>
                  <li>Led the redesign and ongoing development of the company website to improve usability and showcase our services.</li>
                  <li>Developed automation scripts in Python to streamline workflows and speed up key business processes.</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Instructor</h3>
                <p className="timeline-company">iD Tech</p>
                <p className="timeline-date">May 2023 - August 2023</p>
                <ul className="timeline-list">
                  <li>Taught the following course to students aged 13-18:</li>
                  <ul className='timeline-list'>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Artificial Intelligence</li>
                    <li>Machine Learning</li>
                    <li>Game Design (Unreal Engine)</li>
                  </ul>
                  <li>Encouraged creative problem solving and mentored students through personal projects and challenges.</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Computer Science Degree</h3>
                <p className="timeline-company">Towson University</p>
                <p className="timeline-date">2020 - 2024</p>
                <ul className="timeline-list">
                  <li>Completed coursework in software engineering, web development, artificial intelligence, and databases, building a solid technical foundation.</li>
                  <li>Member of the Sigma Chi Fraternity - served as Scholarship Chair, Risk Manager, and Vice President.</li>
                  <li>Learned to balance a busy academic schedule with extracurriculars, growing both personally and professionally.</li>
                </ul>
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
