import React, { useState } from 'react';
import '../styles/EmailCollection.css';

const EmailCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(null);

  const emails = [
    { id: 1, email: 'moekyawaung@programmer.net', category: 'Primary', featured: true },
    { id: 2, email: 'moekyawaung@collector.org', category: 'Business' },
    { id: 3, email: 'moekyawaung@technologist.com', category: 'Tech' },
    { id: 4, email: 'moekyawaung@techie.com', category: 'Tech' },
    { id: 5, email: 'moekyawaung@graphic-designer.com', category: 'Design' },
    { id: 6, email: 'moekyawaung@cybergal.com', category: 'Security' },
    { id: 7, email: 'moekyawaung@webname.com', category: 'Web' },
    { id: 8, email: 'moekyawaung@hackermail.com', category: 'Security' },
    { id: 9, email: 'moekyawaung@graduate.org', category: 'Education' },
    { id: 10, email: 'moekyawaung@engineer.com', category: 'Professional' },
    { id: 11, email: 'moekyawaung@asia.com', category: 'Regional' },
    { id: 12, email: 'moekyawaung@technologist.com', category: 'Tech' },
    { id: 13, email: 'moekyawaung@contractor.net', category: 'Business' },
    { id: 14, email: 'moekyawaung@linuxmail.org', category: 'Tech' },
    { id: 15, email: 'moekyawaung@usa.com', category: 'Regional' },
    { id: 16, email: 'moekyawaung@europe.com', category: 'Regional' },
    { id: 17, email: 'moekyawaung@mail.com', category: 'General' },
    { id: 18, email: 'moekyawaung@iname.com', category: 'Personal' },
    { id: 19, email: 'moekyawaung@socialogist.com', category: 'Social' },
    { id: 20, email: 'moekyawaung@secretary.net', category: 'Business' },
    { id: 21, email: 'moekyawaung@publicist.com', category: 'Business' }
  ];

  const categories = ['All', ...new Set(emails.map(e => e.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEmails = emails.filter(email => {
    const matchesCategory = activeCategory === 'All' || email.category === activeCategory;
    const matchesSearch = email.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         email.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const primaryEmail = emails.find(e => e.featured);

  return (
    <div className="email-page">
      <section className="email-hero">
        <div className="container">
          <h1 className="page-title">
            <span className="bracket">{'<'}</span>
            Email Collection
            <span className="bracket">{'/>'}</span>
          </h1>
          <p className="page-subtitle">
            {emails.length} professional email addresses across multiple domains
          </p>
        </div>
      </section>

      <section className="email-stats section-compact">
        <div className="container">
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="stat-number">{emails.length}</div>
              <div className="stat-label">Email Addresses</div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="stat-number">{categories.length - 1}</div>
              <div className="stat-label">Categories</div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Verified</div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available</div>
            </div>
          </div>
        </div>
      </section>

      {primaryEmail && (
        <section className="primary-email section-compact">
          <div className="container">
            <div className="primary-card">
              <div className="primary-badge">
                <i className="fas fa-star"></i>
                Primary Contact
              </div>
              <div className="primary-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h2>Primary Email Address</h2>
              <div className="primary-email-display">
                <span className="email-text">{primaryEmail.email}</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(primaryEmail.email)}
                >
                  <i className={`fas ${copiedEmail === primaryEmail.email ? 'fa-check' : 'fa-copy'}`}></i>
                  {copiedEmail === primaryEmail.email ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="primary-description">
                This is my primary email address for all professional communications, 
                project inquiries, and business opportunities.
              </p>
              <a href={`mailto:${primaryEmail.email}`} className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                Send Email
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="email-filter section-compact">
        <div className="container">
          <div className="filter-wrapper">
            <div className="category-buttons">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search emails..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="emails-grid-section section">
        <div className="container">
          {filteredEmails.length > 0 ? (
            <div className="emails-grid">
              {filteredEmails.map((email) => (
                <div key={email.id} className="email-card">
                  {email.featured && (
                    <div className="featured-tag">
                      <i className="fas fa-star"></i>
                    </div>
                  )}
                  <div className="email-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="email-address">{email.email}</div>
                  <div className="email-category">
                    <i className="fas fa-tag"></i>
                    {email.category}
                  </div>
                  <div className="email-actions">
                    <button
                      className="action-btn copy"
                      onClick={() => copyToClipboard(email.email)}
                    >
                      <i className={`fas ${copiedEmail === email.email ? 'fa-check' : 'fa-copy'}`}></i>
                      {copiedEmail === email.email ? 'Copied' : 'Copy'}
                    </button>
                    <a
                      href={`mailto:${email.email}`}
                      className="action-btn send"
                    >
                      <i className="fas fa-paper-plane"></i>
                      Send
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <p>No email addresses found</p>
            </div>
          )}
        </div>
      </section>

      <section className="email-cta section-compact">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <h2>Ready to Get In Touch?</h2>
            <p>
              Choose any email address from my collection or use the primary contact for 
              general inquiries. I typically respond within 24 hours.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                <i className="fas fa-comment"></i>
                Contact Form
              </a>
              <a href={`mailto:${primaryEmail.email}`} className="btn btn-secondary">
                <i className="fas fa-envelope"></i>
                Send Direct Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailCollection;

