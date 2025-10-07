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
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
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
                >
                  {inspiringWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </h1>
            <p className="hero-subtitle">
              We are PubjaabFilms, a creative film production company dedicated to bringing 
              your vision to life through compelling storytelling and cinematic excellence.
            </p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn">View Our Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </motion.div>
          
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
                      alt="Punjaab Films Logo" 
                      className="hero-logo"
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
        
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;