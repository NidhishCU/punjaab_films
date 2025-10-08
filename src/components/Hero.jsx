import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Award, Users, Camera } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const inspiringWords = [
    'Inspire',
    'Motivate', 
    'Captivate',
    'Transform',
    'Empower',
    'Enchant',
    'Amaze',
    'Elevate',
    'Fascinate',
    'Illuminate'
  ];

  const stats = [
    { icon: <Camera size={24} />, number: '100+', label: 'Projects Completed' },
    { icon: <Award size={24} />, number: '10+', label: 'Awards Won' },
    { icon: <Users size={24} />, number: '200+', label: 'Happy Clients' },
    { icon: <Play size={24} />, number: '10+', label: 'Years Experience' }
  ];

  // Typing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % inspiringWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Logo animation cycle
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 500);
    }, 5000);

    return () => clearInterval(logoInterval);
  }, []);

  return (
    <section id="home" className="hero" role="banner" aria-label="Hero section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.header
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Crafting Stories That
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  className="highlight typing-word"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  aria-live="polite"
                >
                  {inspiringWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </h1>
            <p className="hero-subtitle">
              We are <strong>PubjaabFilms</strong>, a creative film production company dedicated to bringing 
              your vision to life through compelling storytelling and cinematic excellence in <em>Punjab and beyond</em>.
            </p>
            <nav className="hero-buttons" role="navigation" aria-label="Main actions">
              <a href="#portfolio" className="btn" aria-label="View our portfolio of work">View Our Work</a>
              <a href="#contact" className="btn btn-outline" aria-label="Contact us for inquiries">Get In Touch</a>
            </nav>
          </motion.header>
          
          <motion.div
            className="hero-video"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="logo-container">
              <AnimatePresence mode="wait">
                {isVisible && (
                  <motion.div
                    key="logo"
                    className="animated-logo"
                    initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotateY: 0,
                      filter: [
                        'brightness(1) drop-shadow(0 0 0px #ff6b35)',
                        'brightness(1.2) drop-shadow(0 0 20px #ff6b35)',
                        'brightness(1.5) drop-shadow(0 0 40px #ff6b35)',
                        'brightness(2) drop-shadow(0 0 60px #ff6b35)',
                        'brightness(1) drop-shadow(0 0 0px #ff6b35)'
                      ]
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.3,
                      filter: 'brightness(3) drop-shadow(0 0 100px #ff6b35)',
                      transition: { duration: 0.5 }
                    }}
                    transition={{ 
                      duration: 1.5,
                      filter: { duration: 2, repeat: 1, repeatType: "reverse" }
                    }}
                  >
                    <img 
                      src="/images/logo.png" 
                      alt="PubjaabFilms - Professional Film Production Company Logo" 
                      className="hero-logo"
                      width="200"
                      height="200"
                      loading="eager"
                    />
                    <div className="fire-particles">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="fire-particle"
                          animate={{
                            y: [-20, -60],
                            opacity: [1, 0],
                            scale: [1, 0.5]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        
        <motion.aside
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          role="complementary"
          aria-label="Company statistics"
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item" itemScope itemType="https://schema.org/Statistic">
              <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
              <div className="stat-number" itemProp="value">{stat.number}</div>
              <div className="stat-label" itemProp="name">{stat.label}</div>
            </div>
          ))}
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;