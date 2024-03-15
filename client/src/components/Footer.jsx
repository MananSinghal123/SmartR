import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="left">
            <h3>Contact Us</h3>
            <ul className="footer_links">
              <li>+91 8475638392</li>
              <li>+91 8475638392</li>
              <li>company@gmail.com</li>
              {/* Add more contacts as needed */}
            </ul>
          </div>
          <div className="right">
            <h3>Social Media</h3>
            <ul className="footer_links">
              <li>
                <FaFacebook size={30} />
              </li>
              <li>
                <FaInstagram size={30} />
              </li>
              <li>
                <FaLinkedin size={30} />
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
        <div className="bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} SmartR</p>
          {/* Add social links here if needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
