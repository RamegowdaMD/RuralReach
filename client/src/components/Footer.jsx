import React from "react";
import "../css/Footer.css";
import { useTheme } from "../pages/ThemeContext";

function Footer() {
  const { isDarkMode } = useTheme(); // Access the theme context

  return (
    <footer
      className={`footer py-5 ${isDarkMode ? "bg-dark text-white" : "bg-white text-dark"}`}
    >
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">About Us</h5>
            <p className={`fw ${isDarkMode ? "text-white" : "text-dark"}`}>
              Empowering producers through innovative e-commerce solutions,
              bridging the gap between them and global opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/marketplace"
                  className={`${
                    isDarkMode ? "text-white" : "text-dark"
                  } text-decoration-none`}
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="/loans"
                  className={`${
                    isDarkMode ? "text-white" : "text-dark"
                  } text-decoration-none`}
                >
                  Loans
                </a>
              </li>
              <li>
                <a
                  href="/consultation"
                  className={`${
                    isDarkMode ? "text-white" : "text-dark"
                  } text-decoration-none`}
                >
                  Consultation
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`${
                    isDarkMode ? "text-white" : "text-dark"
                  } text-decoration-none`}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className={"fw-bold"}>Contact Us</h5>
            <p className={`fw ${isDarkMode ? "text-white" : "text-dark"}`}>Email: support@empoweringproducers.com</p>
            <p className={`fw ${isDarkMode ? "text-white" : "text-dark"}`}>Phone: +1 (555) 123-4567</p>
            <p className={`fw ${isDarkMode ? "text-white" : "text-dark"}`}>Address: 123 Innovation Street, City, Country</p>
          </div>
        </div>

        <hr className={isDarkMode ? "bg-white" : "bg-dark"} />

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
              className={`${
                isDarkMode ? "text-primary" : "text-primary"
              } text-decoration-underline`}
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
