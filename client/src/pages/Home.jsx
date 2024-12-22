import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import image1 from "../assets/marketplace.jpeg";
import image2 from "../assets/loan.jpeg";
import image3 from "../assets/consultation.jpeg";
import image4 from "../assets/rentals.jpeg";
import image5 from "../assets/insights.jpeg";
import image6 from "../assets/logistics.jpeg";
import image7 from "../assets/government.jpeg";
import image8 from "../assets/edu.jpeg";
import Navbar from "./NavHome";
import Footer from '../components/footer';

// Main HomePage Component
const HomePage = () => {
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container-fluid p-0 mt-1">
        {/* Header Section */}
        <header className="bg-light text-center py-5">
          <h1 className="display-4">
          Where Producers Grow Together, Through 
Education, Employment, and Direct Sale
          </h1>
          <p className="lead">
            Connecting Producers to Customers and Opportunities
          </p>
        </header>

        {/* Features Section */}
        <section className="py-5">
        <h2 className="text-center mb-4 text-primary">Key Features</h2>

          <div className="row g-4">
            <FeatureCard
              title="Direct-to-Customer Marketplace"
              description="Sell products directly to consumers, eliminating middlemen and boosting profits."
              image={image1}
              link="/Login"
            />
            <FeatureCard
              title="Loan-Based Investment Model"
              description="Access structured loans to scale operations and acquire resources."
              image={image2}
              link="/Login"
            />
            <FeatureCard
              title="Scientific Consultation"
              description="Connect with agricultural scientists for expert advice and soil testing."
              image={image6}
              link="/Login"
            />
            <FeatureCard
              title="Machinery and Vehicle Rentals"
              description="Rent farming equipment and vehicles to reduce financial burden."
              image={image4}
              link="/Login"
            />
            <FeatureCard
              title="Market Insights and Analytics"
              description="Stay updated on market trends, demands, and pricing."
              image={image5}
              link="/Login"
            />
            <FeatureCard
              title="Logistics and Delivery Integration"
              description="Expand your market reach with seamless delivery systems."
              image={image3}
              link="/Login"
            />
            <FeatureCard
              title="Government Policy Awareness"
              description="Get information on schemes, subsidies, and policies."
              image={image7}
              link="/Login"
            />
            <FeatureCard
              title="Educational Resources"
              description="Enhance your financial literacy and learn modern agricultural techniques."
              image={image8}
              link="/Login"
            />
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
};

// Reusable FeatureCard Component
const FeatureCard = ({ title, description, image, link }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary mt-auto">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
