import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Target size={40} />,
      title: 'Precision',
      description: 'Every frame is crafted with meticulous attention to detail and purpose.'
    },
    {
      icon: <Eye size={40} />,
      title: 'Vision',
      description: 'We see beyond the ordinary to create extraordinary visual narratives.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Passion',
      description: 'Our love for storytelling drives us to exceed expectations every time.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology to push creative boundaries.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About PubjaabFilms</h2>
          <p className="section-subtitle">
            We are a passionate team of filmmakers, storytellers, and creative professionals 
            dedicated to bringing your vision to life through the power of cinema.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Our Story</h3>
            <p>
              Founded with a vision to revolutionize storytelling, PubjaabFilms has grown from 
              a small creative studio to a full-service production house. We specialize in 
              creating compelling content that resonates with audiences and drives results.
            </p>
            <p>
              Our team combines years of industry experience with fresh perspectives, ensuring 
              that every project we undertake is both professionally executed and creatively 
              innovative. From concept to completion, we're committed to excellence.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-text">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-text">Projects Delivered</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder">
              <span>Behind the Scenes</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="values-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">{value.icon}</div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;