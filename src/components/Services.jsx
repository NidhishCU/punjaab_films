import { motion } from 'framer-motion';
import { Video, Camera, Edit, Mic, Palette, Globe } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Video size={50} />,
      title: 'Film Production',
      description: 'Complete film production services from pre-production to post-production, including feature films, documentaries, and short films.',
      features: ['Script Development', 'Casting', 'Location Scouting', 'Full Crew Management']
    },
    {
      icon: <Camera size={50} />,
      title: 'Commercial Videos',
      description: 'High-impact commercial videos that drive engagement and conversions for your brand or business.',
      features: ['Brand Videos', 'Product Launches', 'TV Commercials', 'Social Media Content']
    },
    {
      icon: <Edit size={50} />,
      title: 'Post-Production',
      description: 'Professional editing, color grading, and visual effects to bring your footage to life.',
      features: ['Video Editing', 'Color Correction', 'Visual Effects', 'Motion Graphics']
    },
    {
      icon: <Mic size={50} />,
      title: 'Audio Production',
      description: 'Complete audio solutions including recording, mixing, and sound design for all your projects.',
      features: ['Sound Recording', 'Audio Mixing', 'Voice Over', 'Music Composition']
    },
    {
      icon: <Palette size={50} />,
      title: 'Creative Direction',
      description: 'Strategic creative direction to ensure your project aligns with your vision and goals.',
      features: ['Concept Development', 'Storyboarding', 'Art Direction', 'Brand Strategy']
    },
    {
      icon: <Globe size={50} />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to maximize the reach and impact of your content.',
      features: ['Social Media Strategy', 'Content Distribution', 'SEO Optimization', 'Analytics & Reporting']
    }
  ];

  return (
    <section id="services" className="services section" role="main" aria-labelledby="services-title">
      <div className="container">
        <motion.header
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="services-title" className="section-title">Our Professional Film Production Services</h2>
          <p className="section-subtitle">
            From concept to completion, we offer comprehensive film production services 
            tailored to bring your creative vision to life with <strong>10+ years of experience</strong> in the industry.
          </p>
        </motion.header>

        <div className="services-grid" role="list" aria-label="Our services">
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3 className="service-title" itemProp="name">{service.title}</h3>
              <p className="service-description" itemProp="description">{service.description}</p>
              <ul className="service-features" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} itemProp="itemOffered">{feature}</li>
                ))}
              </ul>
              <button 
                className="service-btn"
                onClick={() => window.location.href = 'mailto:info@pubjaabfilms.com?subject=Inquiry about ' + service.title + '&body=Hi, I would like to learn more about your ' + service.title + ' services.'}
                aria-label={`Learn more about ${service.title} services`}
              >
                Learn More
              </button>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss how we can bring your vision to life with our comprehensive production services.</p>
          <a href="#contact" className="btn">Get Started Today</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;