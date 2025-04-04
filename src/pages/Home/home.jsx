import React, { useEffect, useState } from 'react';
import './home.css';
import { FaTrashAlt, FaRecycle, FaShieldAlt, FaCogs, FaHeadset, FaLeaf, FaLightbulb, FaUserTie, FaThumbsUp, FaTruck } from 'react-icons/fa';

const Home = () => {
  const [stats, setStats] = useState({
    yearsExperience: 0,
    happyCustomers: 0,
    projectsDone: 0,
    collectionVehicles: 0,
  });

  useEffect(() => {
    const animateNumbers = () => {
      const targets = {
        yearsExperience: 4,
        happyCustomers: 9000,
        projectsDone: 120,
        collectionVehicles: 2,
      };
      
      const duration = 2000; // 2 seconds animation
      const steps = 60; // 60 frames
      const increment = {
        yearsExperience: targets.yearsExperience / steps,
        happyCustomers: targets.happyCustomers / steps,
        projectsDone: targets.projectsDone / steps,
        collectionVehicles: targets.collectionVehicles / steps,
      };

      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        setStats({
          yearsExperience: Math.min(Math.round(currentStep * increment.yearsExperience), targets.yearsExperience),
          happyCustomers: Math.min(Math.round(currentStep * increment.happyCustomers), targets.happyCustomers),
          projectsDone: Math.min(Math.round(currentStep * increment.projectsDone), targets.projectsDone),
          collectionVehicles: Math.min(Math.round(currentStep * increment.collectionVehicles), targets.collectionVehicles),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    };

    animateNumbers();
  }, []);

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

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="reviews-stats">
          <div className="stat-card">
            <FaUserTie className="stat-icon" />
            <h2>{stats.yearsExperience}+</h2>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <FaThumbsUp className="stat-icon" />
            <h2>{(stats.happyCustomers / 1000).toFixed(1)}K</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card">
            <FaTrashAlt className="stat-icon" />
            <h2>{stats.projectsDone}</h2>
            <p>Projects Done</p>
          </div>
          <div className="stat-card">
            <FaTruck className="stat-icon" />
            <h2>{stats.collectionVehicles}</h2>
            <p>Collection Vehicles</p>
          </div>
        </div>
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