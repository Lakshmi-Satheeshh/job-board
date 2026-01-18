import React from "react";
import "./Footer.css";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <img src={assets.logo} alt="Hikvision Logo" />
        </div>

        {/* Footer Columns */}
        <div className="footer-columns">

          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li>Company Profile</li>
              <li>Investor Relations</li>
              <li>Cybersecurity</li>
              <li>Compliance</li>
              <li>Sustainability</li>
              <li>Focused on Quality</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Newsroom</h4>
            <ul>
              <li>Blog</li>
              <li>Latest News</li>
              <li>Success Stories</li>
              <li>HikSnap</li>
              <li>Video Library</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Partner</h4>
            <ul>
              <li>Hik-Partner Pro</li>
              <li>Find a Distributor</li>
              <li>Find a Technology Partner</li>
              <li>Technology Partner Portal</li>
              <li>Embedded Open Platform</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>Hikvision eLearning</li>
              <li>Where to Buy</li>
              <li>Discontinued Products</li>
              <li>Event List</li>
              <li>Hikvision Live</li>
              <li>Sitemap</li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;