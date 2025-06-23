import React from 'react';
import './Portfolio.css';
// Experience Section Component
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'B.Tech in Information Technology',
      company: 'Charusat University',
      period: '2020 - 2024 (7.77 CGPA)',
      description: 'Studied multiple computer science core subjects such as operating systems, object oriented programming(OOPS), data analysis and algorithms(DSA), database management system(DBMS), software engineering, cloud computing, machine learning, computer networks etc.'
    },
    {
      title: 'Web Developer Intern (Backend)',
      company: 'Raven Technolabs',
      period: 'May 2022 -July 2022',
      description: 'Developed backend logic using Node.js and Express.js. Managed MongoDB database and optimized queries. Contributed to server-side integration and API development. '
    },
    {
      title: 'Web Developer Intern (Frontend)',
      company: 'Frapper Design Studio',
      period: 'April 2023 -June 2023',
      description: 'Designed UI/UX using Figma and developed dynamic interfaces in React.js. Enhanced responsiveness and performance of web applications. '
    },
    {
      title: 'Application Developer Intern',
      company: 'Synergy',
      period: 'Jan 2024 -May 2024',
      description: 'Built a cross-platform sales order application with .NET MAUI. Integrated backend database and optimized user workflows. '
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="timeline-period">{exp.period}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection