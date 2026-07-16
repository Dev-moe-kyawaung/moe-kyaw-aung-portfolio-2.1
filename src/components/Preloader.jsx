import React from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">moekyawaung@android</span>
              <span className="path">~</span>
              <span className="command">$ initializing portfolio...</span>
            </div>
            <div className="terminal-line">
              <span className="output">{'>'} Loading skills... <span className="loading-dots"></span></span>
            </div>
            <div className="terminal-line">
              <span className="output">{'>'} Compiling projects... <span className="loading-dots"></span></span>
            </div>
            <div className="terminal-line">
              <span className="output">{'>'} Fetching certificates... <span className="loading-dots"></span></span>
            </div>
          </div>
        </div>
        
        <div className="loader-wrapper">
          <div className="loader">
            <div className="loader-inner"></div>
          </div>
          <p className="loader-text">
            <span className="text-glow">Loading</span>
            <span className="loading-dots"></span>
          </p>
        </div>

        <div className="preloader-logo">
          <span className="logo-bracket glow">{'<'}</span>
          <span className="logo-text">MKA</span>
          <span className="logo-bracket glow">{'/>'}</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

