import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavForAll from '../components/NavForAll';
import '../css/EducationalResources.css';

const EducationalResources = () => {
  const resources = [
    {
      title: "Financial Literacy for Farmers",
      description:
        "A comprehensive guide to understanding loans, savings, and investment opportunities for farmers.",
      category: "Financial Literacy",
      link: "https://www.farmers.gov/data", // Reliable government resource
    },
    {
      title: "Modern Irrigation Techniques",
      description:
        "Learn about drip and sprinkler irrigation methods to save water and improve crop yield.",
      category: "Agricultural Techniques",
      link: "https://www.irrigation.org", // A trusted site for irrigation techniques
    },
    {
      title: "Soil Health Management",
      description:
        "A tutorial on maintaining soil fertility using organic and sustainable methods.",
      category: "Agricultural Techniques",
      link: "https://www.nrcs.usda.gov", // NRCS, government website for soil health
    },
    {
      title: "Crop Insurance Explained",
      description:
        "Understand how crop insurance works and how it can protect your financial future.",
      category: "Financial Literacy",
      link: "https://www.rma.usda.gov", // USDA Risk Management Agency, trusted resource for crop insurance
    },
    {
      title: "Organic Farming Practices",
      description:
        "Discover the benefits and techniques of organic farming for sustainable agriculture.",
      category: "Agricultural Techniques",
      link: "https://www.organic.org", // Organic Trade Association, a trusted source for organic farming information
    },
  ];

  return (
    <div
      className="educational-wrapper"
      style={{
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '20px', // Optional padding for better spacing
      }}
    >
      <NavForAll />
      
      {/* Horizontal Scrolling Text with CSS Animation */}
      <div
        className="bg-info text-white py-2 mb-4"
        style={{ marginTop: '60px', width: '100%', padding: '0' }} // Adds space for the navbar
      >
        <div className="scrolling-text">
          {resources.map((resource, index) => (
            <span key={index} className="mx-3">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                {resource.title}
              </a>
            </span>
          ))}
        </div>
      </div>

      {/* Educational Resources Section */}
      <h2 className="text-center mb-4">Educational Resources</h2>
      <div className="row">
        {resources.map((resource, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">{resource.title}</h5>
                <p className="card-text">
                  <strong>Category:</strong> {resource.category}
                </p>
                <p className="card-text">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;

