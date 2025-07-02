import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading projects from JSON file
    const loadProjects = async () => {
      try {
        const response = await fetch('/src/data/projects.json');
        const data = await response.json();
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading projects:', error);
        // Fallback to hardcoded data if fetch fails
        const fallbackData = [
          {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
            technologies: ["React", "Node.js", "Express", "PostgreSQL", "Stripe", "JWT"],
            image: "/images/project-ecommerce.jpg",
            githubLink: "https://github.com/yourusername/ecommerce-platform",
            liveLink: "https://ecommerce-demo.vercel.app",
            category: "Full-Stack"
          },
          {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
            technologies: ["React", "Firebase", "Material-UI", "React DnD", "Context API"],
            image: "/images/project-taskapp.jpg",
            githubLink: "https://github.com/yourusername/task-management-app",
            liveLink: "https://task-app-demo.netlify.app",
            category: "Frontend"
          },
          {
            id: 3,
            title: "Weather Dashboard",
            description: "A weather application that displays current weather conditions and forecasts for any location. Features include location search, weather maps, and historical data visualization.",
            technologies: ["React", "OpenWeather API", "Chart.js", "CSS Grid", "Geolocation API"],
            image: "/images/project-weather.jpg",
            githubLink: "https://github.com/yourusername/weather-dashboard",
            liveLink: "https://weather-dashboard-demo.vercel.app",
            category: "Frontend"
          }
        ];
        setProjects(fallbackData);
        setFilteredProjects(fallbackData);
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const categories = ['All', 'Frontend', 'Backend', 'Full-Stack'];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  if (loading) {
    return (
      <div className="projects-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.</p>
      </div>

      <div className="projects-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="no-projects">
            <h3>No projects found</h3>
            <p>No projects match the selected category. Try selecting a different filter.</p>
          </div>
        )}
      </div>

      <div className="projects-cta">
        <h2>Interested in working together?</h2>
        <p>I'm always open to discussing new opportunities and exciting projects.</p>
        <a href="/contact" className="cta-button">
          Get In Touch
        </a>
      </div>
    </div>
  );
}

export default Projects;
