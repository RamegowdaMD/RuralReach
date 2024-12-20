import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './PolicyAwareness.css';

const PolicyAwareness = () => {
  const policies = [
    {
      name: "Pradhan Mantri Kisan Samman Nidhi",
      aimedFor: "Farmers",
      link: "https://pmkisan.gov.in/",
    },
    {
      name: "Soil Health Card Scheme",
      aimedFor: "Farmers",
      link: "https://soilhealth.dac.gov.in/",
    },
    {
      name: "Agri Infrastructure Fund",
      aimedFor: "Small Businesses and Farmers",
      link: "https://www.agrifinfunds.gov.in/",
    },
    {
      name: "MUDRA Loan Scheme",
      aimedFor: "Small and Micro Enterprises",
      link: "https://www.mudra.org.in/",
    },
    {
      name: "National Agriculture Market (e-NAM)",
      aimedFor: "Farmers",
      link: "https://www.enam.gov.in/",
    },
  ];

  return (
    <div className="container my-5">
      {/* Horizontal Scrolling Text */}
      <div className="bg-primary text-white py-2 mb-4">
        <marquee>
          {policies.map((policy, index) => (
            <span key={index} className="mx-3">
              <a
                href={policy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                {policy.name}
              </a>
            </span>
          ))}
        </marquee>
      </div>

      {/* Policy Details Section */}
      <h2 className="text-center mb-4">Government Policy Awareness</h2>
      <div className="row">
        {policies.map((policy, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{policy.name}</h5>
                <p className="card-text">
                  <strong>Aimed For:</strong> {policy.aimedFor}
                </p>
                <a
                  href={policy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
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

export default PolicyAwareness;