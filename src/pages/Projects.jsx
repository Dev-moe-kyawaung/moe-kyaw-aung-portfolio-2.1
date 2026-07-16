import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.project-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Social Dashboard',
      category: 'mobile',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795799/2024119_20_b94fen.jpg',
      description: 'Modern social media dashboard with real-time analytics, user engagement tracking, and comprehensive reporting features.',
      fullDescription: 'A comprehensive social media management dashboard built with Kotlin and Jetpack Compose. Features include real-time analytics, multi-platform integration, scheduled posting, and advanced reporting with beautiful data visualizations.',
      tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Material 3', 'Coroutines'],
      github: 'https://github.com/moekyawaung-tech/social-dashboard',
      live: '#',
      featured: true,
      stars: 45,
      forks: 12
    },
    {
      id: 2,
      title: 'Video Player',
      category: 'mobile',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795800/2024119_18_syk2ou.jpg',
      description: 'Feature-rich video player with advanced controls, subtitle support, and multiple playback options.',
      fullDescription: 'Professional video player application with ExoPlayer integration. Supports multiple video formats, subtitles, playback speed control, picture-in-picture mode, and background playback. Built with clean architecture and MVVM pattern.',
      tech: ['Kotlin', 'ExoPlayer', 'MVVM', 'Material Design', 'Room'],
      github: 'https://github.com/moekyawaung-tech/video-player',
      live: '#',
      featured: true,
      stars: 38,
      forks: 9
    },
    {
      id: 3,
      title: 'Game Collection',
      category: 'mobile',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795800/2024119_12_sqhcat.jpg',
      description: 'Collection of mini games built with Jetpack Compose featuring smooth animations and custom canvas drawings.',
      fullDescription: 'A collection of classic and modern mini games built entirely with Jetpack Compose. Demonstrates advanced canvas drawing, gesture handling, animation, and game state management. Includes Snake, Tetris, Pong, and more.',
      tech: ['Compose', 'Canvas API', 'Animation', 'State Management'],
      github: 'https://github.com/moekyawaung-tech/game-collection',
      live: '#',
      featured: true,
      stars: 52,
      forks: 18
    },
    {
      id: 4,
      title: 'PWA App',
      category: 'web',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp',
      description: 'Progressive Web Application with offline support and native app-like experience.',
      fullDescription: 'Modern PWA built with React and service workers. Features offline functionality, push notifications, installable experience, and responsive design. Optimized for performance with lazy loading and code splitting.',
      tech: ['React', 'Service Workers', 'PWA', 'IndexedDB', 'Web APIs'],
      github: 'https://github.com/moekyawaung-tech/pwa-app',
      live: 'https://moekyawaung-tech.github.io/pwa-app',
      featured: false,
      stars: 28,
      forks: 7
    },
    {
      id: 5,
      title: 'Job Portal App',
      category: 'mobile',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763532/MKA_11_jbijtv.webp',
      description: 'Complete job portal with job listings, applications, and employer management system.',
      fullDescription: 'Full-featured job portal application connecting job seekers with employers. Includes job search with filters, application tracking, resume management, employer dashboard, and real-time notifications. Built with Firebase backend.',
      tech: ['Kotlin', 'Firebase', 'MVVM', 'Retrofit', 'Material 3'],
      github: 'https://github.com/moekyawaung-tech/Job-Portal-App',
      live: '#',
      featured: false,
      stars: 34,
      forks: 11
    },
    {
      id: 6,
      title: 'POS Ultimate Pro Max',
      category: 'business',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763532/MKA_13_i4bao3.webp',
      description: 'Advanced Point of Sale system with inventory management, sales analytics, and multi-user support.',
      fullDescription: 'Enterprise-grade POS system with comprehensive inventory management, sales tracking, customer management, employee management, and detailed analytics. Supports multiple payment methods, receipt printing, and offline mode.',
      tech: ['Kotlin', 'Room', 'Clean Architecture', 'Hilt', 'MPAndroidChart'],
      github: 'https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max',
      live: '#',
      featured: true,
      stars: 67,
      forks: 23
    },
    {
      id: 7,
      title: 'Thailand Travel',
      category: 'mobile',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763536/preview_ls5ptn.webp',
      description: 'Travel guide app for Thailand with location services, recommendations, and booking integration.',
      fullDescription: 'Comprehensive travel guide for Thailand featuring popular destinations, local attractions, hotel bookings, restaurant recommendations, and navigation. Includes offline maps, travel tips, and language translation.',
      tech: ['Kotlin', 'Google Maps', 'Firebase', 'Retrofit', 'Glide'],
      github: 'https://github.com/moekyawaung-tech/thailand-travel',
      live: '#',
      featured: false,
      stars: 29,
      forks: 8
    },
    {
      id: 8,
      title: 'Casino App',
      category: 'mobile',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795801/MKA_22_felevo.webp',
      description: 'Casino gaming application with multiple card games and virtual currency system.',
      fullDescription: 'Entertainment casino app featuring popular card games like Poker, Blackjack, and Slots. Includes virtual currency system, leaderboards, achievements, and social features. Built with smooth animations and engaging UX.',
      tech: ['Kotlin', 'Compose', 'Animation', 'Room', 'Firebase Auth'],
      github: 'https://github.com/moekyawaung-tech/casino-app',
      live: '#',
      featured: false,
      stars: 31,
      forks: 10
    },
    {
      id: 9,
      title: 'Snake Game App',
      category: 'mobile',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1779031816/Content_65_oayzj3.jpg',
      description: 'Classic Snake game with modern UI, leaderboards, and customizable themes.',
      fullDescription: 'Modern take on the classic Snake game built with Jetpack Compose. Features include multiple difficulty levels, power-ups, custom themes, global leaderboard, and smooth touch controls. Perfect example of game development with Compose.',
      tech: ['Compose', 'Canvas', 'Game Logic', 'Animation', 'State Flow'],
      github: 'https://github.com/moekyawaung-tech/Snake-Game-App',
      live: '#',
      featured: false,
      stars: 42,
      forks: 15
    },
    {
      id: 10,
      title: 'Weather App',
      category: 'mobile',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795822/preview_dzhqvv.webp',
      description: 'Beautiful weather application with forecasts, radar maps, and weather alerts.',
      fullDescription: 'Elegant weather app providing current conditions, hourly and daily forecasts, radar maps, severe weather alerts, and location-based weather updates. Features beautiful animations and intuitive design.',
      tech: ['Kotlin', 'Weather API', 'Retrofit', 'Compose', 'Location'],
      github: 'https://github.com/moekyawaung-tech/Weather-app',
      live: '#',
      featured: false,
      stars: 36,
      forks: 12
    },
    {
      id: 11,
      title: 'Daily Planner App',
      category: 'productivity',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795800/2024119_12_sqhcat.jpg',
      description: 'Comprehensive daily planner with task management, reminders, and productivity tracking.',
      fullDescription: 'All-in-one daily planner helping users organize tasks, set goals, track habits, and manage time effectively. Includes calendar view, reminder notifications, productivity analytics, and sync across devices.',
      tech: ['Kotlin', 'Room', 'WorkManager', 'Notifications', 'Material 3'],
      github: 'https://github.com/moekyawaung-tech/Daily-planner-app',
      live: '#',
      featured: false,
      stars: 41,
      forks: 14
    },
    {
      id: 12,
      title: 'Lens Lite',
      category: 'mobile',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png',
      description: 'Lightweight photo editing app with filters, adjustments, and social sharing.',
      fullDescription: 'Compact yet powerful photo editor with essential editing tools, professional filters, batch processing, and direct social media sharing. Optimized for low-end devices with minimal storage footprint.',
      tech: ['Kotlin', 'CameraX', 'Image Processing', 'ML Kit', 'Share API'],
      github: 'https://github.com/moekyawaung-tech/Lens-lite',
      live: '#',
      featured: false,
      stars: 27,
      forks: 9
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-th' },
    { id: 'mobile', name: 'Mobile Apps', icon: 'fas fa-mobile-alt' },
    { id: 'web', name: 'Web Apps', icon: 'fas fa-globe' },
    { id: 'business', name: 'Business', icon: 'fas fa-briefcase' },
    { id: 'productivity', name: 'Productivity', icon: 'fas fa-tasks' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const searchedProjects = searchTerm
    ? filteredProjects.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : filteredProjects;

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <h1 className="page-title project-animate">
            <span className="bracket">{'<'}</span>
            My Projects
            <span className="bracket">{'/>'}</span>
          </h1>
          <p className="page-subtitle project-animate">
            A showcase of my Android development work and web applications
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="project-stats section-compact">
        <div className="container">
          <div className="stats-row">
            <div className="stat-item project-animate">
              <div className="stat-icon">
                <i className="fas fa-folder-open"></i>
              </div>
              <div className="stat-number">{projects.length}</div>
              <div className="stat-label">Total Projects</div>
            </div>

            <div className="stat-item project-animate" style={{ animationDelay: '0.1s' }}>
              <div className="stat-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="stat-number">{projects.reduce((sum, p) => sum + p.stars, 0)}</div>
              <div className="stat-label">GitHub Stars</div>
            </div>

            <div className="stat-item project-animate" style={{ animationDelay: '0.2s' }}>
              <div className="stat-icon">
                <i className="fas fa-code-branch"></i>
              </div>
              <div className="stat-number">{projects.reduce((sum, p) => sum + p.forks, 0)}</div>
              <div className="stat-label">Total Forks</div>
            </div>

            <div className="stat-item project-animate" style={{ animationDelay: '0.3s' }}>
              <div className="stat-icon">
                <i className="fas fa-fire"></i>
              </div>
              <div className="stat-number">{featuredProjects.length}</div>
              <div className="stat-label">Featured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="projects-filter section-compact">
        <div className="container">
          <div className="filter-wrapper project-animate">
            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-btn ${activeFilter === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  <i className={cat.icon}></i>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            <div className="project-search">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {activeFilter === 'all' && !searchTerm && (
        <section className="featured-section section">
          <div className="container">
            <h2 className="section-title project-animate">Featured Projects</h2>
                        <div className="featured-grid">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="featured-project-card project-animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="featured-image-wrapper">
                    <img src={project.image} alt={project.title} />
                    <div className="featured-overlay">
                      <i className="fas fa-expand-alt"></i>
                    </div>
                    <div className="featured-badge">
                      <i className="fas fa-star"></i>
                      Featured
                    </div>
                  </div>

                  <div className="featured-content">
                    <div className="featured-header">
                      <h3>{project.title}</h3>
                      <div className="project-meta">
                        <span className="meta-item">
                          <i className="fas fa-star"></i>
                          {project.stars}
                        </span>
                        <span className="meta-item">
                          <i className="fas fa-code-branch"></i>
                          {project.forks}
                        </span>
                      </div>
                    </div>

                    <p className="featured-description">{project.description}</p>

                    <div className="tech-stack">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fab fa-github"></i>
                        GitHub
                      </a>
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fas fa-external-link-alt"></i>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="all-projects-section section">
        <div className="container">
          <h2 className="section-title project-animate">
            {activeFilter === 'all' ? 'All Projects' : categories.find(c => c.id === activeFilter)?.name}
          </h2>

          {searchedProjects.length > 0 ? (
            <div className="projects-grid">
              {searchedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card project-animate"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="overlay-content">
                        <i className="fas fa-eye"></i>
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <div className="project-stats">
                        <span><i className="fas fa-star"></i> {project.stars}</span>
                        <span><i className="fas fa-code-branch"></i> {project.forks}</span>
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tech-badge more">+{project.tech.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <i className="fas fa-folder-open"></i>
              <p>No projects found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modal-body">
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                {selectedProject.featured && (
                  <span className="featured-tag">
                    <i className="fas fa-star"></i>
                    Featured
                  </span>
                )}
              </div>

              <div className="modal-meta">
                <span className="meta-item">
                  <i className="fas fa-star"></i>
                  {selectedProject.stars} stars
                </span>
                <span className="meta-item">
                  <i className="fas fa-code-branch"></i>
                  {selectedProject.forks} forks
                </span>
                <span className="meta-item">
                  <i className="fas fa-tag"></i>
                  {selectedProject.category}
                </span>
              </div>

              <div className="modal-description">
                <h3>About this project</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>

              <div className="modal-tech">
                <h3>Technologies Used</h3>
                <div className="tech-list">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fab fa-github"></i>
                  View on GitHub
                </a>
                {selectedProject.live !== '#' && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GitHub CTA */}
      <section className="github-cta section-compact">
        <div className="container">
          <div className="cta-content project-animate">
            <div className="cta-icon">
              <i className="fab fa-github"></i>
            </div>
            <h2>Want to see more?</h2>
            <p>Check out my GitHub profile for 122+ repositories and contributions</p>
            <a
              href="https://github.com/Dev-moe-kyawaung"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <i className="fab fa-github"></i>
              Visit My GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

