import React from 'react';
import Logo from '../assets/images/logo.png';
import { Menu, X, Github, Linkedin, Mail, Code, Briefcase, User, Home, Award, Sun, Moon } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen, darkMode, setDarkMode }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span><img src={Logo} alt='Logo' className='navbar-logo'></img></span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                onClick={() => handleNavClick(id)}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
            
            {/* Dark Mode Toggle - shown in mobile menu */}
            <div className="mobile-dark-mode-toggle">
              <button 
                className="dark-mode-toggle"
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <div className={`toggle-switch ${darkMode ? 'dark' : 'light'}`}>
                  <span className="toggle-icon">
                    {darkMode ? <Moon size={14} /> : <Sun size={14} />}
                  </span>
                  <span className="toggle-text">
                    {darkMode ? 'Dark' : 'Light'}
                  </span>
                </div>
              </button>
            </div>
          </div>
          
          <div className="desktop-dark-mode-toggle">
            <button 
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className={`toggle-switch ${darkMode ? 'dark' : 'light'}`}>
                <span className="toggle-icon">
                  {darkMode ? <Moon size={14} /> : <Sun size={14} />}
                </span>
              </div>
            </button>
          </div>
          
          <button className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div 
          className="nav-overlay active" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;