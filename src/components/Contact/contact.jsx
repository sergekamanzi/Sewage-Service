import React from 'react';
import './contact.css';
import logo from "/logo.png";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer className="contact-container">
      <div className="contact-content">
        {/* Logo and Phone Section */}
        <div className="contact-header">
          <div className="contact-logo">
            <img src={logo} alt="Prosplum Logo" />
          </div>
          <div className="contact-phone">
            <FaPhone className="contact-icon" />
            <span>Book Online or Call</span>
            <p>+120 012 668</p>
          </div>
        </div>

        {/* Columns Section */}
        <div className="contact-columns">
          {/* About Section */}
          <div className="contact-section">
            <h3>ABOUT</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit, 
              imperdiet cursus, congue leo.
            </p>
          </div>

          {/* Our Services Section */}
          <div className="contact-section">
            <h3>OUR SERVICES</h3>
            <ul>
              <li>Plumbing</li>
              <li>Commercial</li>
              <li>Real Estate</li>
              <li>Drainage</li>
              <li>Hot Water</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="contact-section">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>Help Centre</li>
              <li>Testimonials</li>
              <li>Careers</li>
              <li>Business Values</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Our Regions Section */}
          <div className="contact-section">
            <h3>OUR REGIONS</h3>
            <ul>
              <li>Alabama</li>
              <li>Alaska</li>
              <li>California</li>
              <li>Colorado</li>
              <li>Arizona</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Info and Social Media */}
      <div className="contact-info">
        <div className="info-left">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>LOCATION</span>
            <p>JL. Soekarno-Hatta</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>EMAIL</span>
            <p>prosplum@email.com</p>
          </div>
          <div className="info-item">
            <FaClock className="info-icon" />
            <span>OPEN HOURS</span>
            <p>Mon-Sun 24/7</p>
          </div>
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaPinterestP /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="contact-footer">
        <p>Copyright © 2025 Camel Motor Group LTD | Powered by BrainWave</p>
      </div>
    </footer>
  );
};

export default Contact;