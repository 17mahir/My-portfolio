// App.js
import React, { useState, useEffect } from 'react';
import './components/Portfolio.css';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import CertificatesSection from './components/CertificatesSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

   useEffect(() => {
    // Apply theme class to document
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    
    // Optionally save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact', 'certificates'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;