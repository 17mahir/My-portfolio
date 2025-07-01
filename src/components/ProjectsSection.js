import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Portfolio.css';
import agrowaste from '../assets/images/agrowaste.png';
import erc20 from '../assets/images/erc20.png';
import shopping from '../assets/images/shopping.jpg';
import student from '../assets/images/student.jpg';
import warehouse from '../assets/images/warehouse.png';
import weather from '../assets/images/weather.png';
import porfolio from '../assets/images/portfolio.png';


const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Agri Waste Marketplace',
      description: 'A MERN stack web app that connects farmers and companies for trading crop residues and renting agricultural tools.',
      image: agrowaste,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/17mahir/agri-waste-marketplace',
      demo: '#'
    },
    {
      id: 2,
      title: 'ERC-20 Crypto Token',
      description: 'A smart contract implementation of a custom ERC-20 token deployed on the Ethereum blockchain.',
      image: erc20,
      technologies: ['Solidity','Ethereum','Remix','ERC-20'],
      github: 'https://github.com/17mahir/cryptotoken-erc20',
      demo: '#'
    },
    {
      id: 3,
      title: 'My Portfolio',
      description: 'To present my technical background, professional projects, and development experience to potential employers or clients in a polished and accessible way.',
      image: porfolio,
      technologies: ['React', 'CSS'],
      github: 'https://github.com/17mahir/My-portfolio',
      demo: 'https://mahirlad.vercel.app/'
    },
    {
      id: 4,
      title: 'Shopping Site UI',
      description: 'Frontend design of an e-commerce website using Bootstrap and custom CSS, featuring product listings and a cart layout.',
      image: shopping,
      technologies: ['React.js','CSS','Bootstrap','JavaScript'],
      github: 'https://github.com/17mahir/shopping-site-ui',
      demo: '#'
    },
     {
      id: 5,
      title: 'Student Management System',
      description: 'A full-stack student record management app using Spring Boot, React.js, and MySQL with CRUD functionality.',
      image: student,
      technologies: ['React.js','Spring Boot','Java','MySQL'],
      github: 'https://github.com/17mahir/springboot-react-studentapp',
      demo: '#'
    },
     {
      id: 6,
      title: 'Warehouse Management System',
      description: 'Inventory management app built using EJS, Node.js, Express, and MongoDB to handle CRUD operations for warehouse items.',
      image: warehouse,
      technologies: ['E.js','Node.js','Express.js','MongoDB'],
      github: 'https://github.com/17mahir/warehouse-mgmt-system',
      demo: '#'
    },
    {
      id: 7,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that provides current weather data and forecasts with beautiful data visualizations.',
      image: weather,
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS'],
      github: 'https://github.com/17mahir/weather-app-react',
      demo: '#'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt="Project Thumbnail" ></img>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="project-link">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
