import React, { useEffect, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

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

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: '2013',
      title: 'Started Android Development Journey',
      description: 'Began learning Android development with Java and XML layouts. Built first mobile application.',
      icon: 'fas fa-play-circle'
    },
    {
      year: '2015',
      title: 'First Professional Project',
      description: 'Delivered first commercial Android application. Gained experience in REST APIs and SQLite.',
      icon: 'fas fa-briefcase'
    },
    {
      year: '2017',
      title: 'Transitioned to Kotlin',
      description: 'Adopted Kotlin as primary language. Started implementing MVVM architecture pattern.',
      icon: 'fas fa-code'
    },
    {
      year: '2019',
      title: 'Architecture Expertise',
      description: 'Mastered Clean Architecture, Dependency Injection with Dagger, and Coroutines for async operations.',
      icon: 'fas fa-layer-group'
    },
    {
      year: '2021',
      title: 'Jetpack Compose Era',
      description: 'Embraced Jetpack Compose for modern UI development. Built multiple projects with declarative UI.',
      icon: 'fas fa-paint-brush'
    },
    {
      year: '2023',
      title: 'Senior Developer & Mentor',
      description: 'Leading Android development teams. Mentoring junior developers and establishing best practices.',
      icon: 'fas fa-graduation-cap'
    },
    {
      year: '2025',
      title: 'AI/ML Integration',
      description: 'Exploring AI/ML integration in Android apps. Building intelligent features with TensorFlow Lite.',
      icon: 'fas fa-brain'
    }
  ];

  const skills = {
    'Android Development': [
      { name: 'Kotlin', level: 95 },
      { name: 'Jetpack Compose', level: 90 },
      { name: 'Android SDK', level: 92 },
      { name: 'Material Design', level: 88 }
    ],
    'Architecture & Patterns': [
      { name: 'MVVM', level: 93 },
      { name: 'Clean Architecture', level: 90 },
      { name: 'Repository Pattern', level: 88 },
      { name: 'Dependency Injection', level: 87 }
    ],
    'Backend & APIs': [
      { name: 'Firebase', level: 91 },
      { name: 'REST APIs', level: 92 },
      { name: 'Retrofit', level: 90 },
      { name: 'GraphQL', level: 75 }
    ],
    'Database': [
      { name: 'Room Database', level: 89 },
      { name: 'SQLite', level: 87 },
      { name: 'Realm', level: 78 },
      { name: 'DataStore', level: 85 }
    ],
    'Tools & Others': [
      { name: 'Git & GitHub', level: 93 },
      { name: 'CI/CD', level: 85 },
      { name: 'Unit Testing', level: 82 },
      { name: 'Performance Optimization', level: 88 }
    ]
  };

  const languages = [
    { name: 'Burmese (မြန်မာ)', flag: '🇲🇲', level: 'Native' },
    { name: 'English', flag: '🌐', level: 'Professional' },
    { name: 'Thai', flag: '🇹🇭', level: 'Conversational' }
  ];

  const certifications = [
    'Google Developers Launchpad',
    'Android Developer Nanodegree',
    'Kotlin for Android Developers',
    'Firebase Certified Developer',
    'AWS Cloud Practitioner',
    'Cybersecurity Fundamentals'
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content animate-on-scroll">
            <h1 className="page-title">
              <span className="bracket">{'<'}</span>
              About Me
              <span className="bracket">{'/>'}</span>
            </h1>
            <p className="page-subtitle">
              Senior Android Developer | 12+ Years Experience | Clean Architecture Advocate
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-intro section-compact">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image animate-on-scroll">
              <div className="image-container">
                <img 
                  src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778747388/image-1_1_khsx9s.png" 
                  alt="Moe Kyaw Aung"
                />
                <div className="image-overlay"></div>
              </div>
            </div>

            <div className="intro-content animate-on-scroll">
              <h2 className="section-heading">
                <i className="fas fa-user-circle"></i>
                Who I Am
              </h2>
              <p className="intro-text">
                Hello! I'm <strong className="highlight">Moe Kyaw Aung</strong>, a passionate 
                Senior Android Developer based between Tachileik, Myanmar and Bangkok, Thailand. 
                With nearly 12 years of hands-on experience, I specialize in building secure, 
                scalable, and user-friendly mobile applications.
              </p>
              <p className="intro-text">
                My journey in mobile development began in 2013, and I've witnessed the evolution 
                of Android from Java & XML to Kotlin & Jetpack Compose. I'm deeply committed to 
                clean code, modern architecture patterns, and continuous learning.
              </p>
              <p className="intro-text">
                Beyond coding, I'm exploring AI/ML integration in mobile apps, contributing to 
                open-source projects, and mentoring aspiring developers. I believe in building 
                applications that not only work well but also provide exceptional user experiences.
              </p>

              <div className="quick-facts">
                <div className="fact-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span><strong>12+</strong> Years Experience</span>
                </div>
                <div className="fact-item">
                  <i className="fas fa-project-diagram"></i>
                  <span><strong>3000+</strong> Apps Developed</span>
                </div>
                <div className="fact-item">
                  <i className="fas fa-certificate"></i>
                  <span><strong>82+</strong> Certifications</span>
                </div>
                <div className="fact-item">
                  <i className="fas fa-code-branch"></i>
                  <span><strong>122</strong> GitHub Repos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Career Timeline</h2>
          <p className="section-subtitle animate-on-scroll">
            My professional journey from beginner to senior developer
          </p>

          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item animate-on-scroll ${index % 2 === 0 ? 'left' : 'right'}`}
                onClick={() => setActiveTimeline(index)}
              >
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Technical Skills</h2>
          <p className="section-subtitle animate-on-scroll">
            Comprehensive expertise across the Android development stack
          </p>

          <div className="skills-container">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="skill-category animate-on-scroll">
                <h3 className="category-title">
                  <i className="fas fa-chevron-right"></i>
                  {category}
                </h3>
                <div className="skill-list">
                  {skillList.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ '--skill-level': `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="languages-section section-compact">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Languages</h2>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-card animate-on-scroll">
                <div className="lang-flag">{lang.flag}</div>
                <h3 className="lang-name">{lang.name}</h3>
                <p className="lang-level">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section section-compact">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Key Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-badge animate-on-scroll">
                <i className="fas fa-certificate"></i>
                <span>{cert}</span>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a href="/certificates" className="btn btn-primary">
              <i className="fas fa-award"></i>
              View All 82+ Certificates
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section section">
        <div className="container">
          <div className="philosophy-content animate-on-scroll">
            <div className="philosophy-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <h2 className="philosophy-title">Development Philosophy</h2>
            <blockquote className="philosophy-quote">
              Code with culture. Build with purpose. Every line of code should serve a clear 
              purpose and contribute to a larger vision. I believe in writing code that is not 
              only functional but also maintainable, scalable, and elegant.
            </blockquote>
            <div className="philosophy-principles">
              <div className="principle">
                <i className="fas fa-check-circle"></i>
                <span>Clean Code & Architecture</span>
              </div>
              <div className="principle">
                <i className="fas fa-check-circle"></i>
                <span>User-Centric Design</span>
              </div>
              <div className="principle">
                <i className="fas fa-check-circle"></i>
                <span>Continuous Learning</span>
              </div>
              <div className="principle">
                <i className="fas fa-check-circle"></i>
                <span>Security First Approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section-compact">
        <div className="container">
          <div className="cta-box animate-on-scroll">
            <h2>Let's Work Together</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Contact Me
              </a>
              <a href="/projects" className="btn btn-secondary">
                <i className="fas fa-folder-open"></i>
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

