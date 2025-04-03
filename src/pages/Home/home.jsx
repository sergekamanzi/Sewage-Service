import React from 'react';
import './home.css';
import { FaTrashAlt, FaRecycle, FaShieldAlt, FaCogs, FaHeadset, FaLeaf, FaLightbulb } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted>
          <source src="hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>We Are Diligent</h2>
          <h1>Innovative Solutions for a Cleaner Planet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt faucibus
            velit eget condimentum. Curabitur pharetra, urna ut rutrum, congue.
          </p>
          <button className="hero-button">Make a Request</button>
        </div>
        <div className="hero-features-wrapper">
          <div className="hero-features">
            <div className="feature-card">
              <FaTrashAlt className="feature-icon" />
              <h3>Reliable Collection</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus, luctus nec.</p>
            </div>
            <div className="feature-card">
              <FaRecycle className="feature-icon" />
              <h3>Extensive Recycling</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus, luctus nec.</p>
            </div>
            <div className="feature-card">
              <FaShieldAlt className="feature-icon" />
              <h3>Safe Disposal</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus, luctus nec.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manage Section */}
      <section className="manage-section">
        <div className="manage-content">
          <h1>Smart Solutions for Waste and Recycling</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt faucibus velit eget condimentum. Curabitur pharetra, urna ut rutrum, congue.
          </p>
          <div className="manage-features">
            <div className="manage-card">
              <FaCogs className="manage-icon" />
              <h3>Operations Management</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <div className="manage-card">
              <FaHeadset className="manage-icon" />
              <h3>Customer Service</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <div className="manage-card">
              <FaLeaf className="manage-icon" />
              <h3>Environmental Compliance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <div className="manage-card">
              <FaLightbulb className="manage-icon" />
              <h3>Sustainability and Innovation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
        </div>
        <div className="manage-image">
          <img
            src="/manage.jpg" 
            alt="People recycling"
            className="manage-image-content"
          />
        </div>
      </section>

      {/* Placeholder for Section 3 */}
      <section className="section-placeholder">
        <h2>Section 3</h2>
        <p>Placeholder for the third section.</p>
      </section>

      {/* Placeholder for Section 4 */}
      <section className="section-placeholder">
        <h2>Section 4</h2>
        <p>Placeholder for the fourth section.</p>
      </section>
    </div>
  );
};

export default Home;