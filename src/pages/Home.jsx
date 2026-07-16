import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [count, setCount] = useState({
    experience: 0,
    projects: 0,
    repos: 0,
    satisfaction: 0
  });

  useEffect(() => {
    // Animated counter
    const duration = 2000;
    const steps = 60;
    const increment = {
      experience: 12 / steps,
      projects: 3000 / steps,
      repos: 122 / steps,
      satisfaction: 100 / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCount(prev => ({
          experience: Math.min(prev.experience + increment.experience, 12),
          projects: Math.min(prev.projects + increment.projects, 3000),
          repos: Math.min(prev.repos + increment.repos, 122),
          satisfaction: Math.min(prev.satisfaction + increment.satisfaction, 100)
        }));
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const techStack = [
    'Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture',
    'Firebase', 'REST APIs', 'Room DB', 'Coroutines',
    'Flow', 'Hilt/Dagger', 'Retrofit', 'Material Design',
    'CI/CD', 'Git', 'Python', 'Machine Learning'
  ];

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Dev-moe-kyawaung', label: 'GitHub', color: '#333' },
    { icon: 'fas fa-user-circle', url: 'https://gravatar.com/moekyawaung2026', label: 'Gravatar', color: '#1E8CBE' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1', label: 'LinkedIn', color: '#0077B5' },
    { icon: 'fab fa-telegram', url: 'https://t.me/moekyawaung', label: 'Telegram', color: '#0088cc' },
    { icon: 'fas fa-envelope', url: 'mailto:moekyawaung@programmer.net', label: 'Email', color: '#D14836' },
    { icon: 'fas fa-phone', url: 'tel:+959889000889', label: 'Phone', color: '#25D366' }
  ];

  return (
    <div className="home-page">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/dye5qpwii/video/upload/v1779052711/Javier_Black-Dark-Ring.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in">
              <div className="hero-greeting">
                <span className="wave">👋</span>
                <span className="greeting-text">Hello, I'm</span>
              </div>
              
              <h1 className="hero-title">
                <span className="title-bracket">{'<'}</span>
                <span className="title-name">Moe Kyaw Aung</span>
                <span className="title-bracket">{'/>'}</span>
              </h1>
              
              <div className="hero-subtitle">
                <span className="typing-text">Senior Android Developer</span>
                <span className="cursor-blink">|</span>
              </div>

              <div className="hero-tagline">
                <i className="fas fa-code"></i>
                <span>Kotlin · Jetpack Compose · MVVM · Clean Architecture</span>
              </div>

              <p className="hero-description">
                Android Developer with nearly 12 years of hands-on experience building secure, 
                scalable, and user-friendly mobile applications. Strong in Kotlin and modern 
                Jetpack development (Compose, ViewModel, Room), Firebase integration, and REST 
                API consumption. I focus on clean architecture, maintainable code, and practical security.
              </p>

              <div className="hero-location">
                <i className="fas fa-map-marker-alt"></i>
                <span>Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭</span>
              </div>

              <div className="hero-buttons">
                <a href="#about" className="btn btn-primary">
                  <i className="fas fa-user"></i>
                  About Me
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <i className="fas fa-paper-plane"></i>
                  Get In Touch
                </a>
                <a 
                  href="/resume.pdf" 
                  className="btn btn-outline"
                  download
                >
                  <i className="fas fa-download"></i>
                  Download CV
                </a>
              </div>

              {/* Social Icons */}
              <div className="hero-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                    style={{ '--social-color': social.color }}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-image fade-in">
              <div className="image-wrapper">
                <img 
                  src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png" 
                  alt="Moe Kyaw Aung - Senior Android Developer"
                  className="profile-image"
                />
                <div className="image-glow"></div>
                
                {/* Progress Rings */}
                <div className="skill-ring ring-1">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" />
                    <circle cx="50" cy="50" r="45" style={{ '--progress': '90' }} />
                  </svg>
                  <span className="ring-label">Kotlin</span>
                </div>
                
                <div className="skill-ring ring-2">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" />
                    <circle cx="50" cy="50" r="45" style={{ '--progress': '85' }} />
                  </svg>
                  <span className="ring-label">Compose</span>
                </div>
                
                <div className="skill-ring ring-3">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" />
                    <circle cx="50" cy="50" r="45" style={{ '--progress': '88' }} />
                  </svg>
                  <span className="ring-label">Firebase</span>
                </div>

                <div className="skill-ring ring-4">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" />
                    <circle cx="50" cy="50" r="45" style={{ '--progress': '92' }} />
                  </svg>
                  <span className="ring-label">CI/CD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Stats Counter */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">
                {Math.floor(count.experience)}
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Years Experience</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">
                {Math.floor(count.projects)}
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Apps Developed</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">
                {Math.floor(count.repos)}
              </div>
              <div className="stat-label">GitHub Repos</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">
                {Math.floor(count.satisfaction)}
                <span className="stat-plus">%</span>
              </div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll Down</div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section section-compact">
        <div className="container">
          <h2 className="section-title">Tech Stack</h2>
          <div className="tech-cloud">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="tech-badge"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="quick-info-section section-compact" id="about">
        <div className="container">
          <div className="info-grid">
            <div className="info-card fade-in">
              <div className="info-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Development Focus</h3>
              <p>
                Native Android development with Kotlin, Jetpack Compose, and modern 
                architecture patterns (MVVM, Clean Architecture)
              </p>
            </div>

            <div className="info-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="info-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Security & Performance</h3>
              <p>
                Strong focus on secure coding practices, performance optimization, 
                and building maintainable, scalable applications
              </p>
            </div>

            <div className="info-card fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="info-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Modern Tools</h3>
              <p>
                Proficient in Firebase, REST APIs, Room DB, Coroutines, Flow, 
                Dagger/Hilt, and CI/CD pipelines
              </p>
            </div>

            <div className="info-card fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="info-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>AI & Innovation</h3>
              <p>
                Exploring AI/ML integration with TensorFlow Lite, Claude API, 
                and on-device machine learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="featured-projects-section section-compact">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent Android applications
          </p>
          
          <div className="projects-grid">
            <a 
              href="https://github.com/moekyawaung-tech/social-dashboard" 
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image">
                <img 
                  src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778795799/2024119_20_b94fen.jpg" 
                  alt="Social Dashboard"
                />
                <div className="project-overlay">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </div>
              <div className="project-info">
                <h3>Social Dashboard</h3>
                <p>Modern social media dashboard with real-time analytics</p>
                <div className="project-tags">
                  <span>Kotlin</span>
                  <span>Compose</span>
                  <span>Firebase</span>
                </div>
              </div>
            </a>

            <a 
              href="https://github.com/moekyawaung-tech/video-player" 
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image">
                <img 
                  src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778795800/2024119_18_syk2ou.jpg" 
                  alt="Video Player"
                />
                <div className="project-overlay">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </div>
              <div className="project-info">
                <h3>Video Player</h3>
                <p>Feature-rich video player with advanced controls</p>
                <div className="project-tags">
                  <span>Kotlin</span>
                  <span>ExoPlayer</span>
                  <span>Material 3</span>
                </div>
              </div>
            </a>

            <a 
              href="https://github.com/moekyawaung-tech/game-collection" 
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image">
                <img 
                  src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778795800/2024119_12_sqhcat.jpg" 
                  alt="Game Collection"
                />
                <div className="project-overlay">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </div>
              <div className="project-info">
                <h3>Game Collection</h3>
                <p>Collection of mini games built with Jetpack Compose</p>
                <div className="project-tags">
                  <span>Compose</span>
                  <span>Canvas API</span>
                  <span>Animation</span>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a href="/projects" className="btn btn-primary">
              <i className="fas fa-folder-open"></i>
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-compact">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build Something Amazing?</h2>
            <p className="cta-text">
              Let's collaborate on your next Android project. I'm available for 
              full-time positions, contract work, or consulting opportunities.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-envelope"></i>
                Contact Me
              </a>
              <a href="/certificates" className="btn btn-secondary btn-lg">
                <i className="fas fa-certificate"></i>
                View Certificates
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

