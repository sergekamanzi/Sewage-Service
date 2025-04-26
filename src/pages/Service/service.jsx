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
            <p>wide range of expert sewage management solutions, tailored to meet the unique needs of every project. Our focus is on efficiency, sustainability, and environmental responsibility.</p>
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
              <p>We provide comprehensive sewage treatment solutions,
                 ensuring efficient waste management, environmental protection, 
                 and sustainable practices. Our services are designed to address
                  every need with professionalism and reliability.</p>
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
                <h3>Emptying, Transportation</h3>
              </div>
              <div className="service-card-description">
                <p>the process of collecting, transporting,
                      and disposing of waste from designated
                      collection points to a disposal or treatment
                      facility. This service is essential in managing 
                      waste from septic tanks, portable toilets, 
                      industrial tanks, and dumping sites.</p>
              </div>
              <div className="service-card-action">
                <a href="/services" className="read-more-btn">Read More</a>
              </div>
            </div>

            {/* Drain & Sewer Service Card */}
            <div className="service-card">
              <div className="service-card-image">
                <img src="/service2.jpg" alt="Drain & Sewer Services" />
              </div>
              <div className="service-card-title">
                <h3>Odor neutralizer</h3>
              </div>
              <div className="service-card-description">
                <p>substance designed to eliminate or control unpleasant
                      smells by chemically neutralizing odor molecules rather than
                      simply masking them. Unlike air fresheners, which cover up odors 
                      with fragrance, odor neutralizers actively interact with the
                      compounds causing the smell.</p>
              </div>
              <div className="service-card-action">
                <a href="/services" className="read-more-btn">Read More</a>
              </div>
            </div>

            {/* Tankless Water Heaters Service Card */}
            <div className="service-card">
              <div className="service-card-image">
                <img src="/service3.jpg" alt="Tankless Water Heaters" />
              </div>
              <div className="service-card-title">
                <h3>Manual emptying</h3>
              </div>
              <div className="service-card-description">
                <p>the process of physically removing waste or unwanted materials
                      by hand from containers, tanks, or other holding units. This
                      method is commonly used in environments where mechanical systems
                      may be impractical or unnecessary.</p>
              </div>
              <div className="service-card-action">
                <a href="/services" className="read-more-btn">Read More</a>
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
              <h3>Sewage<br />Treatment</h3>
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
              <h3>Drainage<br />Systems</h3>
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
              <h3>Pipe Repair &<br />Maintenance</h3>
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
              <h3>Wastewater<br />Management</h3>
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
              <h3>Affordable<br />Solutions</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
    </div>
  );
};

export default Service;