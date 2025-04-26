import React, { useEffect, useState } from 'react';
import './why.css';
import { FiClock, FiUsers, FiMessageSquare, FiDollarSign } from 'react-icons/fi';

const Why = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 4;
    const duration = 1000;
    const stepTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="about-page">
      {/* About Header Section */}
      <div className="about-header">
        <div className="overlay">
          <div className="content">
            <h1>About Us</h1>
            <p>
            We are committed to delivering reliable sewage management solutions, driven by expertise and a dedication to community.
            </p>
          </div>
        </div>
      </div>

      {/* About Body Section */}
      <div className="about-body">
        <div className="experience-banner">
          <h2>{count}+</h2>
          <p>Year Experience</p>
        </div>
        <div className="body-content">
          <div className="image-section">
            <img src="/about-body.jpg" alt="Worker collecting trash" />
          </div>
          <div className="text-section">
            <h3>About OUR SERVICE</h3>
            <h2>Our Vision for Cleaner Planet</h2>
            <p>
            We envision a future where clean water and sustainable waste management protect every community.
            Through innovation and responsibility, we aim to reduce environmental impact and preserve natural resources.
            Our commitment drives us to create smarter, greener infrastructure for generations to come.
            Together, we build a healthier planet, one solution at a time.
            </p>
            <div className="vision-mission">
              <div className="vision">
                <div className="icon">🌍</div>
                <h4>Our Vision</h4>
                <p>We bring the right people together to challenge established thinking and drive transform in 2020</p>
                <ul>
                  <li>Strong foundations for lasting progress</li>
                  <li>Innovation rooted in sustainability</li>
                  <li>Shaping tomorrow with purposeful action</li>
                </ul>
              </div>
              <div className="mission">
                <div className="icon">🌿</div>
                <h4>Our Mission</h4>
                <p>We bring the right people together to challenge established thinking and drive transform in 2020</p>
                <ul>
                  <li>Effort fueled by pure intention</li>
                  <li>Commitment to community and progress</li>
                  <li>Leading with integrity and vision</li>
                </ul>
              </div>
            </div>
            <div className="quote">
              <p> Wastewater is not a waste — it is a resource.</p>
              <p className="author">- United Nations Water (UN-Water)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reasons Section */}
      <div className="reasons-section">
        <div className="reasons-container">
          <div className="reasons-header">
            <h2>Few Reasons To Choose Us</h2>
            <p>More Than 4 Years of Combined Experience</p>
          </div>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">
                <FiClock />
              </div>
              <div className="reason-content">
                <h3>Always Available</h3>
                <p>Our team is ready around the clock to provide fast, reliable support whenever you need it.</p>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <FiUsers />
              </div>
              <div className="reason-content">
                <h3>Qualified Agents</h3>
                <p>Our skilled professionals bring expertise and dedication to every project, ensuring top-quality service.</p>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <FiMessageSquare />
              </div>
              <div className="reason-content">
                <h3>Best Offers</h3>
                <p>We deliver exceptional value with competitive solutions tailored to meet your sewage and waste management needs.</p>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <FiDollarSign />
              </div>
              <div className="reason-content">
                <h3>Fair Prices</h3>
                <p>We believe in transparent, honest pricing without compromising on quality or service excellence.</p>
              </div>
            </div>
          </div>
          <div className="reasons-image">
            <img src="/truck.png" alt="Professional plumber with tools" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
