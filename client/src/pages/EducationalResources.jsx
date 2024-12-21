import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavForAll from '../components/NavForAll';


const EducationalResources = () => {
  const resources = [
    {
      title: "Financial Literacy for Farmers",
      description:
        "A comprehensive guide to understanding loans, savings, and investment opportunities for farmers.",
      category: "Financial Literacy",
      link: "https://www.example.com/financial-literacy",
    },
    {
      title: "Modern Irrigation Techniques",
      description:
        "Learn about drip and sprinkler irrigation methods to save water and improve crop yield.",
      category: "Agricultural Techniques",
      link: "https://www.example.com/modern-irrigation",
    },
    {
      title: "Soil Health Management",
      description:
        "A tutorial on maintaining soil fertility using organic and sustainable methods.",
      category: "Agricultural Techniques",
      link: "https://www.example.com/soil-health",
    },
    {
      title: "Crop Insurance Explained",
      description:
        "Understand how crop insurance works and how it can protect your financial future.",
      category: "Financial Literacy",
      link: "https://www.example.com/crop-insurance",
    },
    {
      title: "Organic Farming Practices",
      description:
        "Discover the benefits and techniques of organic farming for sustainable agriculture.",
      category: "Agricultural Techniques",
      link: "https://www.example.com/organic-farming",
    },
  ];

  return (
    <>
    <NavForAll/>
    <div className="container my-5">
      {/* Horizontal Scrolling Text */}
      <div className="bg-info text-white py-2 mb-4">
        <marquee>
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
        </marquee>
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
    </>
  );
};

export default EducationalResources;