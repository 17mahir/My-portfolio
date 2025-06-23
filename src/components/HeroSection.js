// components/HeroSection.js
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Full Stack Developer', 'React Developer', 'UI/UX Designer', 'Problem Solver'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/16YV-6DD56DdB3evVsqF2WY7bykKcvGQ1/view?usp=drive_link';
    window.open(resumeUrl, '_blank');
    console.log('Download resume clicked');
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Mahir Lad</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="typewriter">{text}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Graduate in Information Technology | Data & Web Dev Enthusiast | MERN Stack | Python | SQL
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToProjects}>
                View My Work
              </button>
              <button className="btn-secondary" onClick={downloadResume}>
                Download Resume
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="floating-elements">
                <div className="floating-element element-1">React</div>
                <div className="floating-element element-2">Node.js</div>
                <div className="floating-element element-3">JavaScript</div>
                <div className="floating-element element-4">CSS</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown className="bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;