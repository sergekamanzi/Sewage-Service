/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import './why.css';
import { FiClock, FiUsers, FiMessageSquare, FiDollarSign } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';

const Why = () => {
  const [count, setCount] = useState(0);

  // Animation variants for sliding in from left or right
  const slideVariants = (fromRight = false) => ({
    hidden: { opacity: 0, x: fromRight ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  });

  // Staggered animation for children (e.g., reasons grid, vision/mission)
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
  const reasonsRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const isBodyInView = useInView(bodyRef, { once: true, margin: '-100px' });
  const isReasonsInView = useInView(reasonsRef, { once: true, margin: '-100px' });

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
      <div className="about-header" ref={headerRef}>
        <div className="overlay">
          <motion.div
            className="content"
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1 variants={slideVariants(false)}>About Us</motion.h1>
            <motion.p variants={slideVariants(false)}>
              We are committed to delivering reliable sewage management solutions, driven by expertise and a dedication to community.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* About Body Section */}
      <div className="about-body" ref={bodyRef}>
        <motion.div
          className="experience-banner"
          initial="hidden"
          animate={isBodyInView ? "visible" : "hidden"}
          variants={slideVariants(true)}
        >
          <h2>{count}+</h2>
          <p>Year Experience</p>
        </motion.div>
        <motion.div
          className="body-content"
          initial="hidden"
          animate={isBodyInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="image-section">
            <img src="/about-body.jpg" alt="Worker collecting trash" />
          </div>
          <div className="text-section">
            <motion.h3 variants={slideVariants(true)}>About OUR SERVICE</motion.h3>
            <motion.h2 variants={slideVariants(true)}>Our Vision for Cleaner Planet</motion.h2>
            <motion.p variants={slideVariants(true)}>
              We envision a future where clean water and sustainable waste management protect every community.
              Through innovation and responsibility, we aim to reduce environmental impact and preserve natural resources.
              Our commitment drives us to create smarter, greener infrastructure for generations to come.
              Together, we build a healthier planet, one solution at a time.
            </motion.p>
            <motion.div className="vision-mission" variants={containerVariants}>
              <motion.div className="vision" variants={slideVariants(true)}>
                <div className="icon">🌍</div>
                <h4>Our Vision</h4>
                <p>We bring the right people together to challenge established thinking and drive transform in 2020</p>
                <ul>
                  <motion.li variants={slideVariants(true)}>Strong foundations for lasting progress</motion.li>
                  <motion.li variants={slideVariants(true)}>Innovation rooted in sustainability</motion.li>
                  <motion.li variants={slideVariants(true)}>Shaping tomorrow with purposeful action</motion.li>
                </ul>
              </motion.div>
              <motion.div className="mission" variants={slideVariants(true)}>
                <div className="icon">🌿</div>
                <h4>Our Mission</h4>
                <p>We bring the right people together to challenge established thinking and drive transform in 2020</p>
                <ul>
                  <motion.li variants={slideVariants(true)}>Effort fueled by pure intention</motion.li>
                  <motion.li variants={slideVariants(true)}>Commitment to community and progress</motion.li>
                  <motion.li variants={slideVariants(true)}>Leading with integrity and vision</motion.li>
                </ul>
              </motion.div>
            </motion.div>
            <motion.div className="quote" variants={slideVariants(true)}>
              <p>Wastewater is not a waste — it is a resource.</p>
              <p className="author">- United Nations Water (UN-Water)</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Reasons Section */}
      <div className="reasons-section" ref={reasonsRef}>
        <motion.div
          className="reasons-container"
          initial="hidden"
          animate={isReasonsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="reasons-header" variants={slideVariants(false)}>
            <h2>Few Reasons To Choose Us</h2>
            <p>More Than 4 Years of Combined Experience</p>
          </motion.div>
          <motion.div className="reasons-grid" variants={containerVariants}>
            <motion.div className="reason-item" variants={slideVariants(false)}>
              <div className="reason-icon">
                <FiClock />
              </div>
              <div className="reason-content">
                <h3>Always Available</h3>
                <p>Our team is ready around the clock to provide fast, reliable support whenever you need it.</p>
              </div>
            </motion.div>
            <motion.div className="reason-item" variants={slideVariants(false)}>
              <div className="reason-icon">
                <FiUsers />
              </div>
              <div className="reason-content">
                <h3>Qualified Agents</h3>
                <p>Our skilled professionals bring expertise and dedication to every project, ensuring top-quality service.</p>
              </div>
            </motion.div>
            <motion.div className="reason-item" variants={slideVariants(false)}>
              <div className="reason-icon">
                <FiMessageSquare />
              </div>
              <div className="reason-content">
                <h3>Best Offers</h3>
                <p>We deliver exceptional value with competitive solutions tailored to meet your sewage and waste management needs.</p>
              </div>
            </motion.div>
            <motion.div className="reason-item" variants={slideVariants(false)}>
              <div className="reason-icon">
                <FiDollarSign />
              </div>
              <div className="reason-content">
                <h3>Fair Prices</h3>
                <p>We believe in transparent, honest pricing without compromising on quality or service excellence.</p>
              </div>
            </motion.div>
          </motion.div>
          <div className="reasons-image">
            <img src="/truck.png" alt="Professional plumber with tools" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Why;