import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {

  const handleContactClick = (type) => {
    if (type === 'email') {
      window.location.href = 'mailto:info@punjaabfilms.com?subject=Inquiry&body=Hi, I would like to get in touch with you.';
    } else if (type === 'phone') {
      window.open('https://wa.me/917508654928?text=Hi', '_blank');
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: ['info@punjaabfilms.com'],
      action: () => handleContactClick('email'),
      clickable: true
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['+91 7508654928', '+91 9878311210'],
      action: () => handleContactClick('phone'),
      clickable: true
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: ['GKP TOWER , PUNJAB FILMS  D 108-E 7', 'phase industrial area Mohali 160055'],
      action: null,
      clickable: false
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 AM - 7:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      action: null,
      clickable: false
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
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="contact-cards-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={`contact-card ${info.clickable ? 'clickable' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={info.clickable ? info.action : undefined}
                  style={{ cursor: info.clickable ? 'pointer' : 'default' }}
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
          </motion.div>

          <motion.div
            className="contact-map-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.3841145443402!2d76.70100874960282!3d30.714300403912052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef287e079a6d%3A0xbf987e6bf741c58!2sGKP%20Towers%20Mohali!5e0!3m2!1sen!2sin!4v1759849181264!5m2!1sen!2sin"
                width="100%"
                height="550"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PunjaabFilms Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;