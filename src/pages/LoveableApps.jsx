import React, { useState } from 'react';
import '../styles/LovableApps.css';

const LovableApps = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const lovableApps = [
    {
      id: 1,
      name: 'Happy CV Creator',
      url: 'https://happy-cv-creator.lovable.app',
      description: 'Beautiful CV/Resume creator with modern templates and export options',
      category: 'Productivity',
      featured: true
    },
    {
      id: 2,
      name: 'Moe Kyaw Aung Bio',
      url: 'https://moekyawaungmybio.lovable.app/',
      description: 'Personal bio and portfolio showcase application',
      category: 'Portfolio',
      featured: true
    },
    {
      id: 3,
      name: 'The CV Palette',
      url: 'https://the-cv-palette.lovable.app',
      description: 'Colorful and creative resume builder with customization',
      category: 'Productivity',
      featured: true
    },
    {
      id: 4,
      name: 'URL Shortener',
      url: 'https://moekyaw-url.lovable.app',
      description: 'Simple and effective URL shortening service',
      category: 'Tools',
      featured: false
    },
    {
      id: 5,
      name: 'Dev Portfolio',
      url: 'https://moekyawaung-dev.lovable.app',
      description: 'Developer portfolio with project showcase',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 6,
      name: 'Moe Kyaw Aung Hub',
      url: 'https://moe-kyaw-aung.lovable.app',
      description: 'Central hub for all projects and links',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 7,
      name: 'MKA Profile',
      url: 'https://moekyawaungmka.lovable.app',
      description: 'Professional profile and contact information',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 8,
      name: 'Moe Kyaw',
      url: 'https://moekyaw.lovable.app',
      description: 'Personal website and blog',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 9,
      name: 'M Moe Kyaw',
      url: 'https://m-moekyaw.lovable.app',
      description: 'Mobile-optimized portfolio',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 10,
      name: 'CV Beacon',
      url: 'https://cv-beacon.lovable.app/',
      description: 'Modern CV builder with AI-powered suggestions',
      category: 'Productivity',
      featured: true
    },
    {
      id: 11,
      name: 'MKA Premium',
      url: 'https://moekyawaungmkamka.lovable.app',
      description: 'Premium portfolio showcase',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 12,
      name: 'Pixel Perfect Snap',
      url: 'https://pixel-perfect-snap-39.lovable.app',
      description: 'Image optimization and editing tool',
      category: 'Tools',
      featured: false
    },
    {
      id: 13,
      name: 'Dev Moe Kyaw',
      url: 'https://devmoekyaw.lovable.app',
      description: 'Developer focused portfolio',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 14,
      name: 'Profile Persuasion Hub',
      url: 'https://profile-persuasion-hub.lovable.app',
      description: 'Professional networking and profile optimization',
      category: 'Business',
      featured: false
    },
    {
      id: 15,
      name: 'Friendly Haven',
      url: 'https://friendly-haven-io.lovable.app',
      description: 'Community and social networking platform',
      category: 'Social',
      featured: false
    },
    {
      id: 16,
      name: 'GitHub Portfolio',
      url: 'https://moekyawaung-github.lovable.app',
      description: 'GitHub projects showcase',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 17,
      name: 'Moe Kyaw GitHub',
      url: 'https://moekyawgithub.lovable.app',
      description: 'GitHub repositories viewer',
      category: 'Tools',
      featured: false
    },
    {
      id: 18,
      name: 'Joy Codify Life',
      url: 'https://joy-codify-life.lovable.app/',
      description: 'Coding journey and tutorials',
      category: 'Education',
      featured: false
    },
    {
      id: 19,
      name: 'MM Moe Kyaw',
      url: 'https://mmoekyaw.lovable.app',
      description: 'Myanmar localized portfolio',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 20,
      name: 'Color Code Chronicles',
      url: 'https://color-code-chronicles.lovable.app',
      description: 'Design and color palette generator',
      category: 'Design',
      featured: false
    },
    {
      id: 21,
      name: 'Free Portfolio',
      url: 'https://moekyawaung-free.lovable.app',
      description: 'Free portfolio template',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 22,
      name: 'App Skill Gallery',
      url: 'https://app-skill-gallery.lovable.app',
      description: 'Skills and expertise showcase',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 23,
      name: 'Spark Coach Create',
      url: 'https://spark-coach-create.lovable.app',
      description: 'Coaching and mentoring platform',
      category: 'Business',
      featured: false
    },
    {
      id: 24,
      name: 'Moe Kyaw MK',
      url: 'https://moekyaw-mk.lovable.app',
      description: 'Personal brand showcase',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 25,
      name: 'Myanmar Portfolio',
      url: 'https://moekyawaung-myanmar.lovable.app',
      description: 'Myanmar focused projects',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 26,
      name: 'Moe Kyaw Dev',
      url: 'https://moekyaw-dev.lovable.app',
      description: 'Development focused portfolio',
      category: 'Portfolio',
      featured: false
    },
    {
      id: 27,
      name: 'MM Moe',
      url: 'https://mmoe.lovable.app',
      description: 'Simplified portfolio',
      category: 'Portfolio',
      featured: false
    }
  ];

  const categories = ['All', 'Portfolio', 'Productivity', 'Tools', 'Business', 'Social', 'Education', 'Design'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredApps = lovableApps.filter(app => {
    const matchesCategory = activeCategory === 'All' || app.category === activeCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredApps = lovableApps.filter(app => app.featured);

  return (
    <div className="lovable-page">
      <section className="lovable-hero">
        <div className="container">
          <h1 className="page-title">
            <span className="bracket">{'<'}</span>
            Lovable Apps
            <span className="bracket">{'/>'}</span>
          </h1>
          <p className="page-subtitle">
            {lovableApps.length} Progressive Web Applications built with Lovable.dev
          </p>
        </div>
      </section>

      <section className="lovable-stats section-compact">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="stat-number">{lovableApps.length}</div>
              <div className="stat-label">Total Apps</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="stat-number">{featuredApps.length}</div>
              <div className="stat-label">Featured</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="stat-number">{categories.length - 1}</div>
              <div className="stat-label">Categories</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="stat-number">100%</div>
              <div className="stat-label">PWA Ready</div>
            </div>
          </div>
        </div>
      </section>

      {featuredApps.length > 0 && (
        <section className="featured-apps section">
          <div className="container">
            <h2 className="section-title">Featured Apps</h2>
            <div className="featured-grid">
              {featuredApps.map((app) => (
                <a
                  key={app.id}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-app-card"
                >
                  <div className="featured-badge">
                    <i className="fas fa-star"></i>
                    Featured
                  </div>
                  <div className="app-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                  <div className="app-category">{app.category}</div>
                  <div className="launch-btn">
                    Launch App <i className="fas fa-external-link-alt"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="apps-filter section-compact">
        <div className="container">
          <div className="filter-controls">
            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="search-input">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="apps-grid-section section">
        <div className="container">
          {filteredApps.length > 0 ? (
            <div className="apps-grid">
              {filteredApps.map((app) => (
                <a
                  key={app.id}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-card"
                >
                  <div className="app-header">
                    <div className="app-icon-small">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <span className="app-tag">{app.category}</span>
                  </div>
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                  <div className="app-footer">
                    <span className="launch-link">
                      Launch <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <p>No apps found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      <section className="lovable-cta section-compact">
        <div className="container">
          <div className="cta-box">
            <div className="cta-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h2>Built with Lovable.dev</h2>
            <p>
              All these applications are Progressive Web Apps built using Lovable.dev platform, 
              featuring offline support, fast loading, and native app-like experience.
            </p>
            <a
              href="https://lovable.dev/invite/ZVLZ2S5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <i className="fas fa-external-link-alt"></i>
              Visit Lovable.dev
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LovableApps;

