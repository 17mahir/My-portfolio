// components/AboutSection.js
import React from 'react';

const AboutSection = () => {
  const skills = [
    { name: 'React.js, Tailwind, CSS', level: 95 },
    { name: 'Node.js, Express.js, prisma', level: 85 },
    { name: 'JavaScript, Java, Python', level: 60 },
    { name: 'Github, VS code, Postman', level: 80 },
    { name: 'MongoDB, MySQL, PosgresSQL', level: 55 },
    { name: 'Windows, Linux', level: 70 }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Proactive and solution-oriented Full Stack Developer with hands-on experience in both frontend and backend
              development. Proficient in React, Node.js, PHP, and databases like MySQL and MongoDB. Known for writing
              clean, efficient code and contributing to real-world projects through internships and academic work.
              Passionate about building scalable web applications and solving complex technical challenges in a
              collaborative team setting.
            </p>
            <p>
              I specialize in modern JavaScript frameworks, particularly React.js, and enjoy 
              building scalable applications that provide excellent user experiences. When I'm 
              not coding, you can find me exploring new technologies or contributing to open-source projects.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>6.5</h3>
                <p>IELTS Score</p>
              </div>
              <div className="stat">
                <h3>7.77</h3>
                <p>B.tech (CGPA)</p>
              </div>
              <div className="stat">
                <h3>7+</h3>
                <p>Certification</p>
              </div>
            </div>
          </div>
          <div className="skills-container">
            <h3>Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill">
                <div className="skill-header">
                  <span>{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;