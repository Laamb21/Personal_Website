import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const handleImageError = (e) => {
    // Fallback to a placeholder image if the project image fails to load
    e.target.src = 'https://via.placeholder.com/400x250/667eea/ffffff?text=Project+Image';
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          onError={handleImageError}
        />
        <div className="project-overlay">
          <div className="project-links">
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link live-link"
              >
                <span>🌐</span> Live Demo
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <span>📁</span> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-category">{project.category}</span>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;