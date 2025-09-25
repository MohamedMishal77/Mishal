import React from "react";
import { Github, Linkedin, Mail, ArrowDown, Code, Globe, Laptop,FileDown } from "lucide-react";
import "../styles/hero.css";
import Logo from "./Logo"; 

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-heading">
            
            <h1 className="hero-title">Mohamed Mishal</h1>

            <div className="hero-roles">
              <div className="hero-roles-desktop">
                <div className="role">
                  <Code size={20} />
                  <span>Frontend Developer</span>
                </div>
                <div className="role">
                  <Globe size={20} />
                  <span>Web Developer</span>
                </div>
                <div className="role laptop-only">
                  <Laptop size={20} />
                  <span>Software Developer</span>
                </div>
              </div>
              <div className="role laptop-hidden">
                <Laptop size={20} />
                <span>Software Developer</span>
              </div>
            </div>
          </div>

          <p className="hero-subtitle">
            Crafting exceptional digital experiences with modern web technologies. Specializing
            in React, Node.js, and full-stack development solutions.
          </p>

          {/* Wrapper for buttons and logo */}
          <div className="hero-actions-logo-wrapper">
            <div className="hero-actions">
              <a href="mailto:mohamedmishal077@gmail.com" className="contact-btn">
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>

              <div className="social-links">
                <a
                  href="https://drive.google.com/file/d/1yg8WKglj2xoSQN6nxSMJZaBXf8CxHVmW/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FileDown size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-mishal-m-2ab378268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin size={20} />
                </a>
               
              </div>
            </div>

            <Logo />
          </div>
        </div>
      </div>

      <button onClick={scrollToAbout} className="scroll-btn">
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;