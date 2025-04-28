/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './blog.css';
import { motion, useInView } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/blog1.jpg',
      date: 'March 25, 2024',
      title: 'Eco-Friendly Practices for a Greener Future',
      description: 'Discover sustainable sewage management practices that reduce environmental impact, promote water conservation, and enhance community health.',
    },
    {
      id: 2,
      image: '/blog2.jpeg',
      date: 'March 25, 2024',
      title: 'The Benefits of Commercial Recycling Programs',
      description: 'the advantages of advanced sewage treatment solutions, focusing on sustainability, improved public health, and environmental protection.',
    },
    {
      id: 3,
      image: '/blog3.jfif',
      date: 'March 25, 2024',
      title: 'Innovative Waste Management Solutions',
      description: 'cutting-edge solutions in waste management that promote sustainability and enhance operational efficiency.',
    },
  ];

  // Animation variants for sliding in from left or right
  const slideVariants = (fromRight = false) => ({
    hidden: { opacity: 0, x: fromRight ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  });

  // Staggered animation for children (e.g., blog post cards)
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
  const lastSectionRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const isBodyInView = useInView(bodyRef, { once: true, margin: '-100px' });
  const isLastSectionInView = useInView(lastSectionRef, { once: true, margin: '-100px' });

  return (
    <div className="blog-container">
      {/* Blog Header Section */}
      <section className="blog-header-section" ref={headerRef}>
        <div className="header-overlay">
          <motion.div
            className="header-content"
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1 variants={slideVariants(false)}>Blog</motion.h1>
            <motion.div className="breadcrumbs" variants={slideVariants(false)}>
              <a href="/">Home</a>
              <span className="separator">-</span>
              <span className="current-page">Blog</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Body Section */}
      <section className="blog-body-section" ref={bodyRef}>
        <motion.div
          className="featured-post"
          initial="hidden"
          animate={isBodyInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="featured-post-header" variants={containerVariants}>
            <motion.span className="category" variants={slideVariants(true)}>Blog & News</motion.span>
            <motion.h2 variants={slideVariants(true)}>Exploring Trends in Sewage Transportation</motion.h2>
            <motion.p className="featured-description" variants={slideVariants(true)}>
              Stay updated with the latest trends and advancements in sewage transportation, ensuring better efficiency, sustainability, and innovation in waste management systems. Our blog covers key insights, challenges, and emerging technologies in the industry.
            </motion.p>
          </motion.div>

          <motion.div className="blog-posts-container" variants={containerVariants}>
            {blogPosts.map(post => (
              <motion.div key={post.id} className="blog-post-card" variants={slideVariants(true)}>
                <div className="post-image-container">
                  <img src={post.image} alt={post.title} className="post-image" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <motion.div className="author" variants={slideVariants(true)}>
                      <img src="/path-to-deka-logo.jpg" alt="Deka" className="author-logo" />
                      <span>deka</span>
                    </motion.div>
                    <motion.div className="post-date" variants={slideVariants(true)}>
                      <img src="/path-to-calendar-icon.jpg" alt="Calendar" className="calendar-icon" />
                      <span>{post.date}</span>
                    </motion.div>
                  </div>
                  <motion.h3 className="post-title" variants={slideVariants(true)}>{post.title}</motion.h3>
                  <motion.p className="post-description" variants={slideVariants(true)}>{post.description}</motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Last Section (Promotional Banner) */}
      <section className="last-section" ref={lastSectionRef}>
        <motion.div
          className="last-section-content"
          initial="hidden"
          animate={isLastSectionInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={slideVariants(false)}>The Right Resources Drive a Cleaner Future</motion.h2>
          <motion.p variants={slideVariants(false)}>
            Your support enables us to implement sustainable sewage management solutions, improve infrastructure, and protect the environment. Together, we can create a cleaner, healthier planet for future generations.
          </motion.p>
          <motion.a href="#" className="shop-now-btn" variants={slideVariants(false)}>
            Donate Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="arrow-icon"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;