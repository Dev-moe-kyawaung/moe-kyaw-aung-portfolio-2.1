import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import GitHubRepos from './pages/GitHubRepos';
import LovableApps from './pages/LovableApps';
import EmailCollection from './pages/EmailCollection';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
    
 import Certificates from "./pages/Certificates";
      ^
  import GitHubRepos from "./pages/GitHubRepos";   
    import LovableApps from "./pages/LovableApps"
    // Simulate loading time
    setTimeout(() => setLoading(false), 2500);
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="app-container">
        <CustomCursor />
        <ScrollToTop />
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/github" element={<GitHubRepos />} />
          <Route path="/lovable" element={<LovableApps />} />
          <Route path="/emails" element={<EmailCollection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
