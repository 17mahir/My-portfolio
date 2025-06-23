import { Github, Linkedin, Mail, MapPin, Phone, Heart } from 'lucide-react';
import './Portfolio.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Data Analysis', 
    'Cloud Solutions',
    'UI/UX Design',
    'Consulting'
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>Mahir Lad</h3>
          <p className="footer-about">
            Passionate developer and data enthusiast creating innovative solutions 
            with modern technologies. Always learning, always building.
          </p>
          <div className="footer-social">
            <a href="https://github.com/17mahir" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mahir-lad-n1810/" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:mahirlad1723@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>



        {/* Contact Info */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <div className="footer-contact-info">
            <p>
              <MapPin size={16} />
              Navsari, Gujarat, India
            </p>
            <p>
              <Mail size={16} />
              mahirlad1723@gmail.com
            </p>
            <p>
              <Phone size={16} />
              +91 93280 99058
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <span>© {currentYear} Made with</span>
            <Heart size={16} fill="red" />
            <span>by Mahir Lad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;