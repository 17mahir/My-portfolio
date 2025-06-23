import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import './Portfolio.css'

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Google Cloud Computing Foundations: Networking and Security in Google Cloud",
      provider: "Google Cloud Skills Boost",
      category: "Cloud Computing"
    },
    {
      title: "Data Manipulation with pandas",
      provider: "DataCamp",
      category: "Data Science"
    },
    {
      title: "Data Visualization in Power BI",
      provider: "DataCamp", 
      category: "Business Intelligence"
    },
    {
      title: "Exploratory Data Analysis in Power BI",
      provider: "DataCamp",
      category: "Business Intelligence"
    },
    {
      title: "Exploratory Data Analysis in Python",
      provider: "DataCamp",
      category: "Data Science"
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      provider: "Google",
      category: "Data Analytics"
    },
    {
      title: "AWS Academy Cloud Developing",
      provider: "AWS",
      category: "Cloud Computing"
    }
  ];

  const stats = [
    { number: "7+", label: "Certificates" },
    { number: "4", label: "Platforms" },
    { number: "5", label: "Specializations" }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        {/* Stats */}
        <div className="certificates-stats">
          {stats.map((stat, index) => (
            <div key={index} className="cert-stat">
              <span className="cert-stat-number">{stat.number}</span>
              <span className="cert-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-icon">
                <Award size={24} />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <div className="certificate-provider">
                  <CheckCircle size={16} />
                  {cert.provider}
                </div>
                <span className="certificate-badge">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 export default CertificatesSection;