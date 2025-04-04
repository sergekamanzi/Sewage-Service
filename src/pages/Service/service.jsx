import React from 'react';
import './service.css';
// Import from react-icons for the circular progress indicators
import { FaWrench, FaBuilding, FaSearchLocation, FaWater, FaUserTie, FaTag } from 'react-icons/fa';

const Service = () => {
  return (
    <div className="service-container">
      {/* Service Header Section */}
      <section className="service-header">
        <div className="service-header-overlay">
          <div className="service-header-content">
            <h1>Services</h1>
            <p>Molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.</p>
          </div>
        </div>
      </section>

      {/* Service Body Section */}
      <section className="service-body">
        <div className="service-body-container">
          {/* Service Intro */}
          <div className="service-intro">
            <div className="service-intro-left">
              <h3>What We Can Do</h3>
              <h2>Popular Services</h2>
            </div>
            <div className="service-intro-right">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium</p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="service-cards">
            {/* Plumbing Service Card */}
            <div className="service-card">
              <div className="service-card-image">
                <img src="/service1.jpg" alt="Plumbing Services" />
              </div>
              <div className="service-card-title">
                <h3>Plumbing</h3>
              </div>
              <div className="service-card-description">
                <p>Vivamus ac ultrices diam, vitae accumsan tellus. Integer sollicitudin vulputate lacus, congue vulputate nisl eleifend in.</p>
              </div>
              <div className="service-card-action">
                <a href="/services/plumbing" className="read-more-btn">Read More</a>
              </div>
            </div>

            {/* Drain & Sewer Service Card */}
            <div className="service-card">
              <div className="service-card-image">
                <img src="/service2.jpg" alt="Drain & Sewer Services" />
              </div>
              <div className="service-card-title">
                <h3>Drain & Sewer</h3>
              </div>
              <div className="service-card-description">
                <p>Vivamus ac ultrices diam, vitae accumsan tellus. Integer sollicitudin vulputate lacus, congue vulputate nisl eleifend in.</p>
              </div>
              <div className="service-card-action">
                <a href="/services/drain-sewer" className="read-more-btn">Read More</a>
              </div>
            </div>

            {/* Tankless Water Heaters Service Card */}
            <div className="service-card">
              <div className="service-card-image">
                <img src="/service3.jpg" alt="Tankless Water Heaters" />
              </div>
              <div className="service-card-title">
                <h3>Tankless Water Heaters</h3>
              </div>
              <div className="service-card-description">
                <p>Vivamus ac ultrices diam, vitae accumsan tellus. Integer sollicitudin vulputate lacus, congue vulputate nisl eleifend in.</p>
              </div>
              <div className="service-card-action">
                <a href="/services/tankless-water-heaters" className="read-more-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Level Section */}
      <section className="expertise-section">
        <div className="expertise-container">
          <h2>Our Experties Level</h2>
          
          <div className="expertise-metrics">
            {/* Outdoor Plumbing */}
            <div className="expertise-item">
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-90" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">90%</div>
              </div>
              <h3>Outdoors<br />Plumbing</h3>
            </div>
            
            {/* Commercial Plumbing */}
            <div className="expertise-item">
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-90" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">90%</div>
              </div>
              <h3>Commercial<br />Plumbing</h3>
            </div>
            
            {/* Leak Detection */}
            <div className="expertise-item">
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-95" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">95%</div>
              </div>
              <h3>Leak<br />Detection</h3>
            </div>
            
            {/* Water Damage */}
            <div className="expertise-item">
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-66" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">66%</div>
              </div>
              <h3>Water<br />Damage</h3>
            </div>
            
            {/* Qualified Agents */}
            <div className="expertise-item">
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-85" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">85%</div>
              </div>
              <h3>Qualified<br />Agents</h3>
            </div>
            
            {/* Fair Prices */}
            <div className="expertise-item">
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-86" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">86%</div>
              </div>
              <h3>Fair<br />Prices</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
    </div>
  );
};

export default Service;