import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ title, description, repoLink }){
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-link">
                <a href={repoLink} target="_blank">Source Code</a>
            </div>
        </div>
    )
}

export default ProjectCard;