import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Left column for copyright or social links */}

        {/* Middle column for navigation links */}
        <div className="top">
          <ul className="footer_links">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            {/* Add more links as needed */}
          </ul>
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
