import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Film, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Film Production', href: '#services' },
      { name: 'Commercial Videos', href: '#services' },
      { name: 'Post-Production', href: '#services' },
      { name: 'Audio Production', href: '#services' }
    ],
    importantLinks: [
      { name: 'About Us', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact Us', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/punjaabfilms', name: 'Instagram' },
    { icon: <Film size={20} />, href: 'https://www.imdb.com/list/ls527299733?ref_=ext_shr_other', name: 'IMDB' },
    { icon: <MessageCircle size={20} />, href: 'https://api.whatsapp.com/send/?phone=917508654928&text=Hi&type=phone_number&app_absent=0', name: 'WhatsApp' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <img src="/images/logo.png" alt="PunjaabFilms" className="logo-image" />
              <span>PunjaabFilms</span>
            </div>
            <p className="footer-description">
              Creating compelling stories through the art of cinema. We bring your vision
              to life with professional film production services and creative excellence.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>info@pubjaabfilms.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 9878311210</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Mohali, Punjab</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Important Links</h4>
              <ul>
                {footerLinks.importantLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="footer-gallery"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Our Gallery</h4>
            <p>Glimpses from our recent projects and behind-the-scenes moments.</p>
            <div className="gallery-grid">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => window.location.href = '#gallery'}
                >
                  <img
                    src={`/gallery/img${item}.jpeg`}
                    alt={`Gallery image ${item}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Follow Us</h4>
            <p>Stay connected for the latest updates and behind-the-scenes content.</p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} PubjaabFilms. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;