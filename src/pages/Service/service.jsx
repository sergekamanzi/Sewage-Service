/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './service.css';
import { FaWrench, FaBuilding, FaSearchLocation, FaWater, FaUserTie, FaTag } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const Service = () => {
  // Animation variants for sliding in from left or right
  const slideVariants = (fromRight = false) => ({
    hidden: { opacity: 0, x: fromRight ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  });

  // Staggered animation for children (e.g., service cards, expertise metrics)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Refs for each section to detect when they are in view
  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const expertiseRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const isBodyInView = useInView(bodyRef, { once: true, margin: '-100px' });
  const isExpertiseInView = useInView(expertiseRef, { once: true, margin: '-100px' });

  return (
    <div className="service-container">
      {/* Service Header Section */}
      <section className="service-header" ref={headerRef}>
        <div className="service-header-overlay">
          <motion.div
            className="service-header-content"
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1 variants={slideVariants(false)}>Services</motion.h1>
            <motion.p variants={slideVariants(false)}>
              wide range of expert sewage management solutions, tailored to meet the unique needs of every project. Our focus is on efficiency, sustainability, and environmental responsibility.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Body Section */}
      <section className="service-body" ref={bodyRef}>
        <motion.div
          className="service-body-container"
          initial="hidden"
          animate={isBodyInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Service Intro */}
          <motion.div className="service-intro" variants={containerVariants}>
            <motion.div className="service-intro-left" variants={slideVariants(true)}>
              <h3>What We Can Do</h3>
              <h2>Popular Services</h2>
            </motion.div>
            <motion.div className="service-intro-right" variants={slideVariants(true)}>
              <p>
                We provide comprehensive sewage treatment solutions, ensuring efficient waste management, environmental protection, and sustainable practices. Our services are designed to address every need with professionalism and reliability.
              </p>
            </motion.div>
          </motion.div>

          {/* Service Cards */}
          <motion.div className="service-cards" variants={containerVariants}>
            {/* Plumbing Service Card */}
            <motion.div className="service-card" variants={slideVariants(true)}>
              <div className="service-card-image">
                <img src="/service1.jpg" alt="Plumbing Services" />
              </div>
              <div className="service-card-title">
                <h3>Emptying, Transportation</h3>
              </div>
              <div className="service-card-description">
                <p>
                  the process of collecting, transporting, and disposing of waste from designated collection points to a disposal or treatment facility. This service is essential in managing waste from septic tanks, portable toilets, industrial tanks, and dumping sites.
                </p>
              </div>
              <div className="service-card-action">
                <a href="/services" className="read-more-btn">Read More</a>
              </div>
            </motion.div>

            {/* Drain & Sewer Service Card */}
            <motion.div className="service-card" variants={slideVariants(true)}>
              <div className="service-card-image">
                <img src="/service2.jpg" alt="Drain & Sewer Services" />
              </div>
              <div className="service-card-title">
                <h3>Odor neutralizer</h3>
              </div>
              <div className="service-card-description">
                <p>
                  substance designed to eliminate or control unpleasant smells by chemically neutralizing odor molecules rather than simply masking them. Unlike air fresheners, which cover up odors with fragrance, odor neutralizers actively interact with the compounds causing the smell.
                </p>
              </div>
              <div className="service-card-action">
                <a href="/services" className="read-more-btn">Read More</a>
              </div>
            </motion.div>

            {/* Tankless Water Heaters Service Card */}
            <motion.div className="service-card" variants={slideVariants(true)}>
              <div className="service-card-image">
                <img src="/service3.jpg" alt="Tankless Water Heaters" />
              </div>
              <div className="service-card-title">
                <h3>Manual emptying</h3>
              </div>
              <div className="service-card-description">
                <p>
                  the process of physically removing waste or unwanted materials by hand from containers, tanks, or other holding units. This method is commonly used in environments where mechanical systems may be impractical or unnecessary.
                </p>
              </div>
              <div className="service-card-action">
                <a href="/services" className="read-more-btn">Read More</a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Expertise Level Section */}
      <section className="expertise-section" ref={expertiseRef}>
        <motion.div
          className="expertise-container"
          initial="hidden"
          animate={isExpertiseInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={slideVariants(false)}>Our Expertise Level</motion.h2>
          <motion.div className="expertise-metrics" variants={containerVariants}>
            {/* Outdoor Plumbing */}
            <motion.div className="expertise-item" variants={slideVariants(false)}>
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-90" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">90%</div>
              </div>
              <h3>Sewage<br />Treatment</h3>
            </motion.div>

            {/* Commercial Plumbing */}
            <motion.div className="expertise-item" variants={slideVariants(false)}>
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-90" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">90%</div>
              </div>
              <h3>Drainage<br />Systems</h3>
            </motion.div>

            {/* Leak Detection */}
            <motion.div className="expertise-item" variants={slideVariants(false)}>
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-95" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">95%</div>
              </div>
              <h3>Pipe Repair &<br />Maintenance</h3>
            </motion.div>

            {/* Water Damage */}
            <motion.div className="expertise-item" variants={slideVariants(false)}>
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-66" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">66%</div>
              </div>
              <h3>Wastewater<br />Management</h3>
            </motion.div>

            {/* Qualified Agents */}
            <motion.div className="expertise-item" variants={slideVariants(false)}>
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-85" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">85%</div>
              </div>
              <h3>Qualified<br />Agents</h3>
            </motion.div>

            {/* Fair Prices */}
            <motion.div className="expertise-item" variants={slideVariants(false)}>
              <div className="expertise-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="40"></circle>
                  <circle className="progress-fill progress-86" cx="50" cy="50" r="40"></circle>
                </svg>
                <div className="percentage">86%</div>
              </div>
              <h3>Affordable<br />Solutions</h3>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Service;