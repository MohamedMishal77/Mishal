import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="footer-title">Mohamed Mishal</h3>
            <p className="footer-description">
              Frontend & Software Developer crafting exceptional digital experiences with modern web technologies.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/MohamedMishal77"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-mishal-m-2ab378268/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mohamedmishal077@gmail.com"
                className="social-icon"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul>
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="footer-link"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-services">
            <h4 className="footer-subtitle">Services</h4>
            <ul>
              <li>Frontend Development</li>
              <li>Web Development</li>
              <li>Software Development</li>
              <li>Full-Stack Solutions</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            <span>&copy; {currentYear} Mohamed Mishal. Crafted with</span>
            <Heart size={16} className="heart-icon" />
            <span>and modern web technologies.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
