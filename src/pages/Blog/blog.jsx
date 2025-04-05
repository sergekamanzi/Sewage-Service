import React from 'react';
import './blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/blog1.jpg',
      date: 'March 25, 2024',
      title: 'Eco-Friendly Practices for a Greener Future',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus cursus augue, eget posuere ligula suscipit ut. Vestibulum ac felis bibendum, fermentum erat vel, aliquam...',
    },
    {
      id: 2,
      image: '/blog2.jpeg',
      date: 'March 25, 2024',
      title: 'The Benefits of Commercial Recycling Programs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus cursus augue, eget posuere ligula suscipit ut. Vestibulum ac felis bibendum, fermentum erat vel, aliquam...',
    },
    {
      id: 3,
      image: '/blog3.jfif',
      date: 'March 25, 2024',
      title: 'Innovative Waste Management Solutions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus cursus augue, eget posuere ligula suscipit ut. Vestibulum ac felis bibendum, fermentum erat vel, aliquam...',
    }
  ];

  return (
    <div className="blog-container">
      {/* Blog Header Section */}
      <section className="blog-header-section">
        <div className="header-overlay">
          <div className="header-content">
            <h1>Blog</h1>
            <div className="breadcrumbs">
              <a href="/">Home</a>
              <span className="separator">-</span>
              <span className="current-page">Blog</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Body Section */}
      <section className="blog-body-section">
        <div className="featured-post">
          <div className="featured-post-header">
            <span className="category">Blog & News</span>
            <h2>Exploring Trends in Sewage Transportation</h2>
            <p className="featured-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus cursus augue, eget posuere ligula suscipit ut. Vestibulum ac felis bibendum, fermentum erat vel, aliquam leo. Nullam id scelerisque elit.
            </p>
          </div>
          
          <div className="blog-posts-container">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-post-card">
                <div className="post-image-container">
                  <img src={post.image} alt={post.title} className="post-image" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <div className="author">
                      <img src="/path-to-deka-logo.jpg" alt="Deka" className="author-logo" />
                      <span>deka</span>
                    </div>
                    <div className="post-date">
                      <img src="/path-to-calendar-icon.jpg" alt="Calendar" className="calendar-icon" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Last Section (Promotional Banner) */}
      <section className="last-section">
        <div className="last-section-content">
          <h2>The Right Gears Make Best Journey</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
          <a href="#" className="shop-now-btn">
            Donate Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="arrow-icon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;