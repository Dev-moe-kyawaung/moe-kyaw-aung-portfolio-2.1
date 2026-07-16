import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Dev-moe-kyawaung', label: 'GitHub' },
    { icon: 'fas fa-user-circle', url: 'https://gravatar.com/moekyawaung2026', label: 'Gravatar' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1', label: 'LinkedIn' },
    { icon: 'fab fa-youtube', url: 'https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG', label: 'YouTube' },
    { icon: 'fab fa-telegram', url: 'https://t.me/moekyawaung', label: 'Telegram' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/moekyawaung', label: 'Instagram' },
    { icon: 'fas fa-envelope', url: 'mailto:moekyawaung@programmer.net', label: 'Email' },
    { icon: 'fas fa-phone', url: 'tel:+959889000889', label: 'Phone' }
  ];

  const quickLinks = [
    { label: 'About Me', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certificates', path: '/certificates' },
    { label: 'GitHub Repos', path: '/github' },
    { label: 'Lovable Apps', path: '/lovable' },
    { label: 'Email Collection', path: '/emails' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="terminal-bracket">{'<'}</span>
              About Me
              <span className="terminal-bracket">{'/>'}</span>
            </h3>
            <p className="footer-text">
              Senior Android Developer with 12+ years of experience building scalable, 
              secure mobile applications using Kotlin, Jetpack Compose, and modern 
              Android architecture patterns.
            </p>
            <div className="footer-location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="terminal-bracket">{'<'}</span>
              Quick Links
              <span className="terminal-bracket">{'/>'}</span>
            </h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>
                    <i className="fas fa-angle-right"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="terminal-bracket">{'<'}</span>
              Contact Info
              <span className="terminal-bracket">{'/>'}</span>
            </h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:moekyawaung@programmer.net">moekyawaung@programmer.net</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+959889000889">+95 9 889 000 889</a>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+959666000050">+95 9 666 000 050</a>
              </li>
              <li>
                <i className="fab fa-github"></i>
                <a href="https://github.com/Dev-moe-kyawaung" target="_blank" rel="noopener noreferrer">
                  Dev-moe-kyawaung
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="terminal-bracket">{'<'}</span>
              Newsletter
              <span className="terminal-bracket">{'/>'}</span>
            </h3>
            <p className="footer-text">
              Subscribe to get updates about my latest projects and tech insights.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            {subscribed && (
              <p className="newsletter-success">
                <i className="fas fa-check-circle"></i>
                Successfully subscribed!
              </p>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h4 className="social-title">Connect with me</h4>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5276!2d99.8731!3d20.4482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI2JzUzLjUiTiA5OcKwNTInMjMuMiJF!5e0!3m2!1sen!2smm!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            <span className="terminal-bracket">{'<'}</span>
            © {new Date().getFullYear()} Moe Kyaw Aung
            <span className="terminal-bracket">{'/>'}</span>
            <span className="separator">|</span>
            Made with <i className="fas fa-heart"></i> and <i className="fas fa-code"></i>
            <span className="separator">|</span>
            <span className="burmese-text">မိုးကျော်အောင်</span>
          </p>
          <div className="footer-badges">
            <span className="badge">Kotlin</span>
            <span className="badge">Jetpack Compose</span>
            <span className="badge">Firebase</span>
            <span className="badge">Clean Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

