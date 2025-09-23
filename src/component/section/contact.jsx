import React from "react";
import { Mail, MessageCircle, ArrowRight, Github, Linkedin } from "lucide-react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <p>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="contact-card-wrapper">
          <div className="contact-card">
            <div className="contact-icon">
              <MessageCircle size={32} />
            </div>

            <div className="contact-info">
              <h3>Ready to Start a Project?</h3>
              <p>
                I'm currently available for freelance work and exciting opportunities.
                Let's discuss how we can bring your vision to life.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:mohamedmishal077@gmail.com?subject=Project Inquiry&body=Hi Mohamed,%0D%0A%0D%0AI'd like to discuss a potential project with you.%0D%0A%0D%0AThanks!"
                className="contact-email"
              >
                <Mail size={20} />
                <span>Send Email</span>
                <ArrowRight size={16} className="arrow-icon" />
              </a>

              <div className="social-links">
                <a
                  href="https://github.com/MohamedMishal77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Github size={20} />
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

            <div className="contact-meta">
              <div className="meta-item">
                <h4>Response Time</h4>
                <p>Within 24 hours</p>
              </div>
              <div className="meta-item">
                <h4>Availability</h4>
                <p>Open for projects</p>
              </div>
              <div className="meta-item">
                <h4>Location</h4>
                <p>Remote worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
