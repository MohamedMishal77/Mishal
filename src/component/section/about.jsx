import React from "react";
import { Code, Palette, Target, ShieldCheck,Globe } from "lucide-react";
import "../styles/about.css";

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: Code, description: "HTML5, CSS3, Javascript" },
    { name: "Web Development", icon: Globe, description: "React,Node.js, Responsive Design" },
    { name: "Secure Authentication", icon: ShieldCheck, description: "JWT, bcrypt, Best Practices" },
    { name: "Problem Solving", icon: Target, description: "Clean Code, Testing, Debugging" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
          <p>
            I'm Mohamed Mishal a passionate frontend/web developer who loves creating digital
            experiences that are not only visually appealing but also highly
            functional and user-friendly.
          </p>
        </div>

        <div className="about-grid">
          {/* Left side - Journey */}
          <div className="about-journey">
            <h3>My Journey</h3>
            <p>
              With a strong foundation in modern web development, I specialize in building responsive, accessible, and performant applications. My experience ranges from crafting clean, intuitive user interfaces to developing and integrating complex business logic. I am passionate about creating solutions that not only work seamlessly but also deliver meaningful value to users
            </p>
            <p>
              I'm constantly learning new technologies and staying up-to-date
              with industry best practices to deliver cutting-edge solutions
              that exceed expectations.
            </p>

            <div className="about-tech">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Express",
                "Node.js",
                "PostgreSQL",
                "RESTful APIs",
                "JWT",
                "Responsive Design",
  
                "Git",
              ].map((tech) => (
                <span key={tech} className="about-tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="skills-grid">
            {skills.map(({ name, icon: Icon, description }) => (
              <div key={name} className="skill-card">
                <div className="skill-icon">
                  <Icon size={32} />
                </div>
                <h4>{name}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;