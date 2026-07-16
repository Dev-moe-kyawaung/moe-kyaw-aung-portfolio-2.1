import React, { useEffect, useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

    document.querySelectorAll('.skill-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'android',
      name: 'Android Development',
      icon: 'fab fa-android',
      color: '#3DDC84',
      skills: [
        { name: 'Kotlin', level: 95, icon: 'kotlin.svg', years: 7 },
        { name: 'Jetpack Compose', level: 90, icon: 'compose.svg', years: 3 },
        { name: 'Android SDK', level: 92, icon: 'android.svg', years: 12 },
        { name: 'Material Design', level: 88, icon: 'material.svg', years: 8 },
        { name: 'XML Layouts', level: 90, icon: 'xml.svg', years: 12 },
        { name: 'ConstraintLayout', level: 87, icon: 'layout.svg', years: 6 }
      ]
    },
    {
      id: 'architecture',
      name: 'Architecture & Patterns',
      icon: 'fas fa-project-diagram',
      color: '#FF6B6B',
      skills: [
        { name: 'MVVM', level: 93, icon: 'mvvm.svg', years: 6 },
        { name: 'Clean Architecture', level: 90, icon: 'clean.svg', years: 5 },
        { name: 'Repository Pattern', level: 88, icon: 'repo.svg', years: 6 },
        { name: 'Dependency Injection', level: 87, icon: 'di.svg', years: 5 },
        { name: 'MVI', level: 82, icon: 'mvi.svg', years: 2 },
        { name: 'Modular Architecture', level: 85, icon: 'modular.svg', years: 4 }
      ]
    },
    {
      id: 'async',
      name: 'Async & Concurrency',
      icon: 'fas fa-sync-alt',
      color: '#4ECDC4',
      skills: [
        { name: 'Kotlin Coroutines', level: 91, icon: 'coroutines.svg', years: 5 },
        { name: 'Flow', level: 89, icon: 'flow.svg', years: 4 },
        { name: 'RxJava', level: 85, icon: 'rx.svg', years: 5 },
        { name: 'LiveData', level: 90, icon: 'livedata.svg', years: 6 },
        { name: 'StateFlow', level: 88, icon: 'stateflow.svg', years: 3 },
        { name: 'Channel', level: 84, icon: 'channel.svg', years: 3 }
      ]
    },
    {
      id: 'backend',
      name: 'Backend & APIs',
      icon: 'fas fa-server',
      color: '#FFD93D',
      skills: [
        { name: 'Firebase', level: 91, icon: 'firebase.svg', years: 7 },
        { name: 'REST APIs', level: 92, icon: 'rest.svg', years: 10 },
        { name: 'Retrofit', level: 90, icon: 'retrofit.svg', years: 8 },
        { name: 'OkHttp', level: 88, icon: 'okhttp.svg', years: 7 },
        { name: 'GraphQL', level: 75, icon: 'graphql.svg', years: 2 },
        { name: 'gRPC', level: 70, icon: 'grpc.svg', years: 1 }
      ]
    },
    {
      id: 'database',
      name: 'Database & Storage',
      icon: 'fas fa-database',
      color: '#A78BFA',
      skills: [
        { name: 'Room Database', level: 89, icon: 'room.svg', years: 6 },
        { name: 'SQLite', level: 87, icon: 'sqlite.svg', years: 10 },
        { name: 'Realm', level: 78, icon: 'realm.svg', years: 3 },
        { name: 'DataStore', level: 85, icon: 'datastore.svg', years: 2 },
        { name: 'SharedPreferences', level: 92, icon: 'prefs.svg', years: 12 },
        { name: 'File Storage', level: 86, icon: 'file.svg', years: 10 }
      ]
    },
    {
      id: 'testing',
      name: 'Testing & Quality',
      icon: 'fas fa-vial',
      color: '#F97316',
      skills: [
        { name: 'JUnit', level: 82, icon: 'junit.svg', years: 8 },
        { name: 'Espresso', level: 78, icon: 'espresso.svg', years: 6 },
        { name: 'Mockito', level: 80, icon: 'mockito.svg', years: 6 },
        { name: 'UI Testing', level: 75, icon: 'uitest.svg', years: 5 },
        { name: 'Integration Testing', level: 77, icon: 'integration.svg', years: 5 },
        { name: 'Code Review', level: 90, icon: 'review.svg', years: 10 }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: 'fas fa-tools',
      color: '#10B981',
      skills: [
        { name: 'Git & GitHub', level: 93, icon: 'git.svg', years: 12 },
        { name: 'Android Studio', level: 95, icon: 'studio.svg', years: 12 },
        { name: 'Gradle', level: 88, icon: 'gradle.svg', years: 10 },
        { name: 'CI/CD', level: 85, icon: 'cicd.svg', years: 4 },
        { name: 'GitHub Actions', level: 83, icon: 'actions.svg', years: 3 },
        { name: 'Docker', level: 75, icon: 'docker.svg', years: 2 }
      ]
    },
    {
      id: 'other',
      name: 'Other Technologies',
      icon: 'fas fa-code',
      color: '#EC4899',
      skills: [
        { name: 'Python', level: 80, icon: 'python.svg', years: 5 },
        { name: 'JavaScript', level: 75, icon: 'js.svg', years: 4 },
        { name: 'React', level: 70, icon: 'react.svg', years: 2 },
        { name: 'Node.js', level: 68, icon: 'node.svg', years: 2 },
        { name: 'Machine Learning', level: 65, icon: 'ml.svg', years: 1 },
        { name: 'TensorFlow Lite', level: 62, icon: 'tf.svg', years: 1 }
      ]
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  const searchedSkills = searchTerm 
    ? skillCategories.map(cat => ({
        ...cat,
        skills: cat.skills.filter(skill => 
          skill.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(cat => cat.skills.length > 0)
    : filteredSkills;

  return (
    <div className="skills-page">
      {/* Hero Section */}
      <section className="skills-hero">
        <div className="container">
          <h1 className="page-title skill-animate">
            <span className="bracket">{'<'}</span>
            Technical Skills
            <span className="bracket">{'/>'}</span>
          </h1>
          <p className="page-subtitle skill-animate">
            Comprehensive expertise across the entire Android development ecosystem
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="skills-filter section-compact">
        <div className="container">
          <div className="filter-container skill-animate">
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <i className="fas fa-th"></i>
                All Skills
              </button>
              {skillCategories.map((cat) => (
                <button 
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <i className={cat.icon}></i>
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="search-box">
              <i className="fas fa-search"></i>
              <input 
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="skills-grid-section section">
        <div className="container">
          {searchedSkills.map((category, index) => (
            <div key={category.id} className="skill-category-block skill-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="category-header">
                <div className="category-icon" style={{ '--cat-color': category.color }}>
                  <i className={category.icon}></i>
                </div>
                <h2 className="category-name">{category.name}</h2>
                <div className="category-count">{category.skills.length} skills</div>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-card-header">
                      <div className="skill-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <div className="skill-info">
                        <h3 className="skill-title">{skill.name}</h3>
                        <p className="skill-experience">{skill.years} years</p>
                      </div>
                    </div>

                    <div className="skill-progress-container">
                      <div className="skill-progress-bar">
                        <div 
                          className="skill-progress-fill"
                          style={{ '--skill-width': `${skill.level}%`, '--skill-color': category.color }}
                        >
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="skill-level-label">
                      {skill.level >= 90 ? 'Expert' : 
                       skill.level >= 80 ? 'Advanced' :
                       skill.level >= 70 ? 'Intermediate' : 'Learning'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {searchedSkills.length === 0 && (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <p>No skills found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="skills-stats section-compact">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box skill-animate">
              <div className="stat-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>

            <div className="stat-box skill-animate" style={{ animationDelay: '0.1s' }}>
              <div className="stat-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="stat-number">8</div>
              <div className="stat-label">Skill Categories</div>
            </div>

            <div className="stat-box skill-animate" style={{ animationDelay: '0.2s' }}>
              <div className="stat-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>

            <div className="stat-box skill-animate" style={{ animationDelay: '0.3s' }}>
              <div className="stat-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="stat-number">82+</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="skills-cta section-compact">
        <div className="container">
          <div className="cta-content skill-animate">
            <h2>Want to see these skills in action?</h2>
            <p>Check out my portfolio of projects showcasing real-world implementations</p>
            <div className="cta-buttons">
              <a href="/projects" className="btn btn-primary">
                <i className="fas fa-folder-open"></i>
                View Projects
              </a>
              <a href="/certificates" className="btn btn-secondary">
                <i className="fas fa-award"></i>
                View Certificates
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

