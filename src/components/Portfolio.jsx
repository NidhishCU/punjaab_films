import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Calendar, Award } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'documentary', label: 'Documentary' },
    { id: 'music-video', label: 'Music Video' },
    { id: 'short-film', label: 'Short Film' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Brand Revolution',
      category: 'commercial',
      year: '2024',
      description: 'A compelling brand story that transformed how customers connect with the product.',
      image: 'commercial-1',
      awards: ['Best Commercial 2024', 'Creative Excellence Award'],
      duration: '2:30'
    },
    {
      id: 2,
      title: 'Voices of Change',
      category: 'documentary',
      year: '2023',
      description: 'An inspiring documentary following social entrepreneurs making a difference.',
      image: 'documentary-1',
      awards: ['Documentary Film Festival Winner'],
      duration: '45:00'
    },
    {
      id: 3,
      title: 'Rhythm of the Heart',
      category: 'music-video',
      year: '2024',
      description: 'A visually stunning music video that captures the essence of modern romance.',
      image: 'music-1',
      awards: ['Best Music Video Direction'],
      duration: '3:45'
    },
    {
      id: 4,
      title: 'The Last Letter',
      category: 'short-film',
      year: '2023',
      description: 'A touching short film about connection across generations.',
      image: 'short-1',
      awards: ['Short Film Festival Selection'],
      duration: '12:00'
    },
    {
      id: 5,
      title: 'Tech Innovation',
      category: 'commercial',
      year: '2024',
      description: 'Showcasing cutting-edge technology through cinematic storytelling.',
      image: 'commercial-2',
      awards: ['Innovation in Advertising'],
      duration: '1:45'
    },
    {
      id: 6,
      title: 'Urban Stories',
      category: 'documentary',
      year: '2024',
      description: 'Exploring the hidden stories within our urban landscapes.',
      image: 'documentary-2',
      awards: ['Audience Choice Award'],
      duration: '38:20'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our diverse collection of award-winning films, commercials, 
            and creative projects that showcase our storytelling expertise.
          </p>
        </motion.div>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <div className="portfolio-image">
                <div className={`image-placeholder ${project.image}`}>
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <button className="action-btn">
                        <Play size={24} />
                      </button>
                      <button className="action-btn">
                        <ExternalLink size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-content">
                <div className="portfolio-meta">
                  <span className="portfolio-category">{project.category.replace('-', ' ')}</span>
                  <span className="portfolio-year">
                    <Calendar size={14} />
                    {project.year}
                  </span>
                </div>
                
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                
                <div className="portfolio-details">
                  <span className="duration">Duration: {project.duration}</span>
                  {project.awards.length > 0 && (
                    <div className="awards">
                      <Award size={14} />
                      <span>{project.awards[0]}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Like What You See?</h3>
          <p>Let's create something amazing together. Get in touch to discuss your next project.</p>
          <a href="#contact" className="btn">Start Your Project</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;