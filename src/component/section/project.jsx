import React from "react";
import { ExternalLink, Github } from "lucide-react";
import "../styles/projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "LinkHive",
      description:
        "A modern link-in-bio platform similar to Linktree, allowing users to create personalized landing pages with multiple links and social media integration.",
      image:
        "LinkHive.png",
      technologies: ["React", "Node.js", "Express", "CSS3","JWT","bcrypt","RESTful APIs","PostgreSQL"],
      liveUrl: "https://mylinkhive.netlify.app/",
      githubUrl: "https://github.com/MohamedMishal77/LinkHive",
    },
    {
      id: 2,
      title: "WorkshopHub",
      description:
        "A comprehensive platform for discovering and hosting online workshops, featuring user registration, workshop management, and interactive learning tools.",
      image:"WorkshopHub.png",
      technologies: ["React", "Node.js", "Express", "CSS3","JWT","bcrypt","RESTful APIs","PostgreSQL"],
      liveUrl: "https://theworkshophub.netlify.app/",
      githubUrl: "https://github.com/MohamedMishal77/WorkshopHub",
    },
    {
      id: 3,
      title: "LuxRev",
      description:
        "An elegant car rental website landing page featuring luxury vehicle showcases, booking functionality, and responsive design for premium user experience.",
      image:
        "Luxrev.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js","Responsive Design"],
      liveUrl: "https://luxrev.netlify.app/",
      githubUrl: "https://github.com/MohamedMishal77/LuxRev",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>
            Here are some of my recent projects that showcase my skills and passion for
            creating exceptional web experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay"></div>
              </div>

              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveUrl} className="project-link live" target="_blank"
  rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubUrl} className="project-link code" target="_blank"
  rel="noopener noreferrer">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
