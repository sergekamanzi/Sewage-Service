/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef as useReactRef } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { FaTruckFast } from 'react-icons/fa6'; // Explicitly from fa6
import { FaTrashAlt, FaRecycle, FaShieldAlt, FaCogs, FaHeadset, FaLeaf, FaLightbulb, FaUserTie, FaThumbsUp, FaTruck, FaPlay, FaPause } from 'react-icons/fa';
import { MdCleanHands, MdDeleteSweep } from 'react-icons/md';
import { motion, useInView } from 'framer-motion';

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The Home component renders the home page of the website.
 *
 * @component
 * @returns {React.ReactElement} The home page component.
 */
/*******  e5707249-474e-4b86-a63d-5c0b8184e388  *******/const Home = () => {
  const [stats, setStats] = useState({
    yearsExperience: 0,
    happyCustomers: 0,
    projectsDone: 0,
    collectionVehicles: 0,
  });
  
  const [isPlaying, setIsPlaying] = useState(true);
  const serviceVideoRef = useReactRef(null);

  const navigate = useNavigate();

  // Animation variants for sliding in from left or right
  const slideVariants = (fromRight = false) => ({
    hidden: { opacity: 0, x: fromRight ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  });

  // Staggered animation for children (e.g., cards)
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
  const heroRef = useReactRef(null);
  const featuresRef = useReactRef(null);
  const manageRef = useReactRef(null);
  const reviewsRef = useReactRef(null);
  const constructionRef = useReactRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-100px' });
  const isManageInView = useInView(manageRef, { once: true, margin: '-100px' });
  const isReviewsInView = useInView(reviewsRef, { once: true, margin: '-100px' });
  const isConstructionInView = useInView(constructionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const animateNumbers = () => {
      const targets = {
        yearsExperience: 4,
        happyCustomers: 9000,
        projectsDone: 120,
        collectionVehicles: 2,
      };
      
      const duration = 2000;
      const steps = 60;
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

    if (isReviewsInView) {
      animateNumbers();
    }
  }, [isReviewsInView]);

  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    });
  }, []);

  const togglePlayPause = () => {
    if (serviceVideoRef.current) {
      if (isPlaying) {
        serviceVideoRef.current.pause();
      } else {
        serviceVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          variants={slideVariants(false)}
        >
          <motion.h2 variants={slideVariants(false)}>We Are Diligent</motion.h2>
          <motion.h1 variants={slideVariants(false)}>Innovative Solutions for a Cleaner Planet</motion.h1>
          <motion.p variants={slideVariants(false)}>
            Treating sewage before it is released into the environment
            Ensuring clean water for communities is our priority
          </motion.p>
          <motion.button
            className="hero-button"
            onClick={() => navigate('/booking')}
            variants={slideVariants(false)}
          >
            Book an appointment
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={featuresRef}>
        <motion.div
          className="hero-features-wrapper"
          initial="hidden"
          animate={isFeaturesInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="hero-features">
            <motion.div className="feature-card" variants={slideVariants(true)}>
              <FaTruckFast className="feature-icon" />
              <h3>Emptying, Transportation</h3>
              <p>the process of collecting, transporting, and disposing of waste from designated collection.</p>
            </motion.div>
            <motion.div className="feature-card" variants={slideVariants(true)}>
              <MdCleanHands className="feature-icon" />
              <h3>Odor neutralizer</h3>
              <p>substance designed to eliminate unpleasant smells by chemically neutralizing odor.</p>
            </motion.div>
            <motion.div className="feature-card" variants={slideVariants(true)}>
              <MdDeleteSweep className="feature-icon" />
              <h3>Manual emptying</h3>
              <p>removing waste materials by hand from containers, tanks, or other holding units.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Manage Section */}
      <section className="manage-section" ref={manageRef}>
        <motion.div
          className="manage-content"
          initial="hidden"
          animate={isManageInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 variants={slideVariants(false)}>Smart Solutions for Waste and Recycling</motion.h1>
          <motion.p variants={slideVariants(false)}>
            We offer advanced waste and recycling solutions that enhance efficiency, reduce environmental impact, and support sustainable communities.
          </motion.p>
          <motion.div className="manage-features" variants={containerVariants}>
            <motion.div className="manage-card" variants={slideVariants(false)}>
              <FaCogs className="manage-icon" />
              <h3>Operations Management</h3>
              <p>We ensure the seamless operation of sewage systems, maintaining efficiency and minimizing service disruptions across all areas.</p>
            </motion.div>
            <motion.div className="manage-card" variants={slideVariants(false)}>
              <FaHeadset className="manage-icon" />
              <h3>Customer Service</h3>
              <p>Our dedicated team is ready to assist with inquiries, service requests, and support to guarantee a smooth and reliable experience.</p>
            </motion.div>
            <motion.div className="manage-card" variants={slideVariants(false)}>
              <FaLeaf className="manage-icon" />
              <h3>Environmental Compliance</h3>
              <p>We strictly adhere to environmental regulations, working to protect water resources and promote public health and safety.</p>
            </motion.div>
            <motion.div className="manage-card" variants={slideVariants(false)}>
              <FaLightbulb className="manage-icon" />
              <h3>Sustainability and Innovation</h3>
              <p>We invest in sustainable technologies and innovative practices to create a cleaner, greener future for our communities.</p>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="manage-image">
          <img
            src="/manage.jpg"
            alt="People recycling"
            className="manage-image-content"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section" ref={reviewsRef}>
        <motion.div
          className="reviews-stats"
          initial="hidden"
          animate={isReviewsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="stat-card" variants={slideVariants(true)}>
            <FaUserTie className="stat-icon" />
            <h2>{stats.yearsExperience}+</h2>
            <p>Years Experience</p>
          </motion.div>
          <motion.div className="stat-card" variants={slideVariants(true)}>
            <FaThumbsUp className="stat-icon" />
            <h2>{(stats.happyCustomers / 1000).toFixed(1)}K</h2>
            <p>Happy Customers</p>
          </motion.div>
          <motion.div className="stat-card" variants={slideVariants(true)}>
            <FaTrashAlt className="stat-icon" />
            <h2>{stats.projectsDone}</h2>
            <p>Projects Done</p>
          </motion.div>
          <motion.div className="stat-card" variants={slideVariants(true)}>
            <FaTruck className="stat-icon" />
            <h2>{stats.collectionVehicles}</h2>
            <p>Collection Vehicles</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Construction Services Section */}
      <section className="construction-section" ref={constructionRef}>
        <motion.div
          className="construction-content"
          initial="hidden"
          animate={isConstructionInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span className="subtitle" variants={slideVariants(false)}>SEWAGE AGENCY</motion.span>
          <motion.h1 variants={slideVariants(false)}>VISIT OUR SEWAGE WEBSITE</motion.h1>
          <motion.p variants={slideVariants(false)}>
            We collaborate with trusted partners to deliver added value for every project, connecting both public and private sectors seamlessly.
          </motion.p>
          <motion.div className="service-item" variants={slideVariants(false)}>
            <FaLeaf className="service-icon" />
            <h3>Sustainable Solutions</h3>
          </motion.div>
        </motion.div>
        <div className="construction-video">
          <video
            ref={serviceVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="service-video"
          >
            <source src="/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-play-button" onClick={togglePlayPause}>
            {isPlaying ? <FaPause className="play-icon" /> : <FaPlay className="play-icon" />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;