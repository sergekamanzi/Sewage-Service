import React from 'react';
import './why.css';
import { FiClock, FiUsers, FiMessageSquare, FiDollarSign } from 'react-icons/fi';

const Why = () => {
  return (
    <div className="about-page">
      {/* About Header Section */}
      <div className="about-header">
        <div className="overlay">
          <div className="content">
            <h1>About Us</h1>
            <p>
              Molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et accumsan et iusto.
            </p>
          </div>
        </div>
      </div>

      {/* About Body Section */}
      <div className="about-body">
        <div className="experience-banner">
          <h2>4+</h2>
          <p>Year Experience</p>
        </div>
        <div className="body-content">
          <div className="image-section">
            <img src="/about-body.jpg" alt="Worker collecting trash" />
          </div>
          <div className="text-section">
            <h3>About Diligent</h3>
            <h2>Our Vision for Cleaner Planet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus cursus
              augue, eget posuere ligula suscipit ut. Vestibulum ac felis bibendum, fermentum
              erat vel, aliquam leo. Nulla dui risus, congue in nisi quis, convallis maximus neque.
            </p>
            <div className="vision-mission">
              <div className="vision">
                <div className="icon">🌍</div>
                <h4>Our Vision</h4>
                <p>We bring the right people together to challenge established thinking and drive transform in 2020</p>
                <ul>
                  <li>Fusce fermentum pretium libero</li>
                  <li>Nam at nulla vitae augue</li>
                  <li>Praesent et tincidunt massa</li>
                </ul>
              </div>
              <div className="mission">
                <div className="icon">🌿</div>
                <h4>Our Mission</h4>
                <p>We bring the right people together to challenge established thinking and drive transform in 2020</p>
                <ul>
                  <li>Sed sed purus efficitur</li>
                  <li>Sed eu enim sit amet</li>
                  <li>Praesent ipsum et</li>
                </ul>
              </div>
            </div>
            <div className="quote">
              <p>Pellentesque amet lectus consequat molestie. Nulla at nisl eleifend.</p>
              <p className="author">- Alex Thompson, CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reasons Section */}
      <div className="reasons-section">
        <div className="reasons-container">
          <div className="reasons-header">
            <h2>Few Reasons To Choose Us</h2>
            <p>More Than 50 Years of Combined Experience in Every Job</p>
          </div>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">
                <FiClock />
              </div>
              <div className="reason-content">
                <h3>Always Available</h3>
                <p>Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <FiUsers />
              </div>
              <div className="reason-content">
                <h3>Qualified Agents</h3>
                <p>Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <FiMessageSquare />
              </div>
              <div className="reason-content">
                <h3>Best Offers</h3>
                <p>Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <FiDollarSign />
              </div>
              <div className="reason-content">
                <h3>Fair Prices</h3>
                <p>Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
              </div>
            </div>
          </div>
          <div className="reasons-image">
            <img src="/about-header.jpg" alt="Professional plumber with tools" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;