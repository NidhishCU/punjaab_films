import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: ['info@pubjaabfilms.com', 'projects@pubjaabfilms.com'],
      action: 'mailto:info@pubjaabfilms.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109'],
      action: 'tel:+919876543210'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: ['123 Film Street, Creative District', 'Mumbai, Maharashtra 400001'],
      action: '#'
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 AM - 7:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      action: '#'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to bring your vision to life? Let's discuss your project and create 
            something extraordinary together.
          </p>
        </motion.div>

        <motion.div
          className="conversation-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Let's Start a Conversation</h3>
          <p>
            We're here to help bring your creative vision to life. Whether you have 
            a specific project in mind or just want to explore possibilities, we'd 
            love to hear from you.
          </p>
        </motion.div>

        <div className="contact-cards-grid">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">{info.icon}</div>
              <div className="contact-details">
                <h4>{info.title}</h4>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;