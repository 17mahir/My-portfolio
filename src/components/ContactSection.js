import React, { useState } from 'react';
import {  Github, Linkedin, Mail } from 'lucide-react';
import { Alert } from "@material-tailwind/react";
import './Portfolio.css';

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here

    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/mldnlkqa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      
      setStatus("Message sent!");
      setFormData({ name: '', email: '', message: '' });
    } else {
      
      setStatus("Failed to send message.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-links">
              <a href="mailto:mahirlad1723@gmail.com" className="contact-link">
                <Mail size={20} />
                <span>mahirlad1723@gmail.com</span>
              </a>
              <a href="https://github.com/17mahir" className="contact-link">
                <Github size={20} />
                <span>github.com/17mahir</span>
              </a>
              <a href="https://www.linkedin.com/in/mahir-lad-n1810/" className="contact-link">
                <Linkedin size={20} />
                <span>linkedin.com/in/mahirlad</span>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button onClick={handleSubmit} className="btn-primary">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;