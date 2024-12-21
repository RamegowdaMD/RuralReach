import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer bg-light text-dark py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">About Us</h5>
            <p>
              Empowering producers through innovative e-commerce solutions,
              bridging the gap between them and global opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/marketplace" className="text-dark text-decoration-none">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="/loans" className="text-dark text-decoration-none">
                  Loans
                </a>
              </li>
              <li>
                <a href="/consultation" className="text-dark text-decoration-none">
                  Consultation
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@RuralReach.com</p>
            <p>Phone: 7483907232</p>
            <p>Address: MSRIT Post, M S Ramaiah Nagar, MSR Nagar, Bengaluru, Karnataka 560054</p>
          </div>
        </div>

        <hr />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="mb-1">
            &copy; 2024 Empowering Producers. All rights reserved.
          </p>
          <p>
            Designed and Hosted by{" "}
            <a
              href="https://www.instagram.com/ramegowdadayananda?igsh=MWZtcGZheGEyNm1idw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-decoration-underline"
            >
              VARA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
