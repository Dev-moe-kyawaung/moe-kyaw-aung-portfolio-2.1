import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'moekyawaung@programmer.net', link: 'mailto:moekyawaung@programmer.net' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+95 9 889 000 889', link: 'tel:+959889000889' },
    { icon: 'fas fa-phone-alt', label: 'Alternative', value: '+95 9 666 000 050', link: 'tel:+959666000050' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭', link: null }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', label: 'GitHub', url: 'https://github.com/Dev-moe-kyawaung' },
    { icon: 'fas fa-user-circle', label: 'Gravatar', url: 'https://gravatar.com/moekyawaung2026' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1' },
    { icon: 'fab fa-telegram', label: 'Telegram', url: 'https://t.me/moekyawaung' },
    { icon: 'fab fa-youtube', label: 'YouTube', url: 'https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG' },
    { icon: 'fab fa-instagram', label: 'Instagram', url: 'https://instagram.com/moekyawaung' }
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">
            <span className="bracket">{'<'}</span>
            Get In Touch
            <span className="bracket">{'/>'}</span>
          </h1>
          <p className="page-subtitle">
            Let's discuss your project or opportunity
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="info-description">
                Feel free to reach out through any of these channels. I'm always open to 
                discussing new projects, creative ideas, or opportunities.
              </p>

              <div className="info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="info-details">
                      <span className="info-label">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className="info-value">{info.value}</a>
                      ) : (
                        <span className="info-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h3>Connect With Me</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Me A Message</h2>
              
              {submitted && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <i className="fas fa-tag"></i>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Discussion"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <i className="fas fa-comment"></i>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
                                    
