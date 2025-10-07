import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import './Team.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: '/gallery/img1.jpeg',
      alt: 'Gallery Image 1'
    },
    {
      id: 2,
      src: '/gallery/img2.jpeg',
      alt: 'Gallery Image 2'
    },
    {
      id: 3,
      src: '/gallery/img3.jpeg',
      alt: 'Gallery Image 3'
    },
    {
      id: 4,
      src: '/gallery/img4.jpeg',
      alt: 'Gallery Image 4'
    },
    {
      id: 5,
      src: '/gallery/img5.jpeg',
      alt: 'Gallery Image 5'
    },
    {
      id: 6,
      src: '/gallery/img6.jpeg',
      alt: 'Gallery Image 6'
    },
    {
      id: 7,
      src: '/gallery/img7.jpeg',
      alt: 'Gallery Image 7'
    },
    {
      id: 8,
      src: '/gallery/img8.jpeg',
      alt: 'Gallery Image 8'
    },
    {
      id: 9,
      src: '/gallery/img9.jpeg',
      alt: 'Gallery Image 9'
    },
    {
      id: 10,
      src: '/gallery/img10.jpeg',
      alt: 'Gallery Image 10'
    },
    {
      id: 11,
      src: '/gallery/img11.jpeg',
      alt: 'Gallery Image 11'
    },
    {
      id: 12,
      src: '/gallery/img12.jpeg',
      alt: 'Gallery Image 12'
    }
  ];

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Take a glimpse behind the scenes and explore our creative process through
            these moments captured during our film productions.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="gallery-image">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-img"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="gallery-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Want to See More?</h3>
          <p>Explore our complete portfolio and discover the stories behind our productions.</p>
          <div className="cta-buttons">
            <a href="#portfolio" className="btn">View Portfolio</a>
            <a href="#contact" className="btn btn-outline">Work With Us</a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="gallery-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="gallery-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <div className="modal-image-container">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="modal-img"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;