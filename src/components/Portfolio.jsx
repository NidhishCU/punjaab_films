import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Calendar, Award, X } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const projects = [
    {
      id: 1,
      title: 'Kudi Haryane Val Di',
      category: 'Movie',
      year: '2024',
      description: 'A Punjabi man uninterested in wrestling falls for a Haryanvi woman passionate about the sport. He strives to embrace her love for wrestling, to win her heart.',
      image: '/posters/kudi.png',
      awards: ['Best Commercial 2024', 'Creative Excellence Award'],
      duration: '2h 42m',
      youtubeLink: 'https://www.youtube.com/watch?v=vgqXQUeiCLs',
      imdbLink: 'https://www.imdb.com/title/tt29309965/?ref_=ls_t_1'
    },
    {
      id: 2,
      title: 'Annhi Dea Mazaak Ae',
      category: 'Movie',
      year: '2023',
      description: 'Raja, a blind man, falls in love with Roop. Will their love overcome all family barriers?',
      image: '/posters/annhi.png',
      awards: [''],
      duration: '2h 31m',
      youtubeLink: 'https://www.youtube.com/watch?v=_2MVfF0Tlog',
      imdbLink: 'https://www.imdb.com/title/tt27302088/?ref_=ls_t_2'
    },
    {
      id: 3,
      title: 'Sher Bagga',
      category: 'Movie',
      year: '2024',
      description: 'Follows Shera, who on a journey to find the love of his life, meets Gulab. Both get together but Gulab ends up pregnant.',
      image: '/posters/shera.png',
      awards: [''],
      duration: '2h 31m',
      youtubeLink: 'https://www.youtube.com/watch?v=wpnayOHzl6E',
      imdbLink: 'https://www.imdb.com/title/tt15444506/?ref_=ls_t_3'
    },
    {
      id: 4,
      title: 'Laung Laachi 2',
      category: 'Film',
      year: '2022',
      description: 'Set in 1947, this is a story of a set of people who have to vacate their house to move into another place.',
      image: '/posters/laung.png',
      awards: [''],
      duration: '2h 18m',
      youtubeLink: 'https://www.youtube.com/watch?v=cb4XaAQUnD8',
      imdbLink: 'https://www.imdb.com/title/tt21420596/'
    },
    {
      id: 5,
      title: 'Laal Singh Chaddha',
      category: 'Movie',
      year: '2022',
      description: 'The story of Laal Singh Chaddha, a simple man whose extraordinary journey will fill you with love, warmth and happiness.',
      image: '/posters/laal.png',
      awards: [''],
      duration: '2h 39m',
      youtubeLink: 'https://www.youtube.com/watch?v=R6savS7m0Fg',
      imdbLink: 'https://www.imdb.com/title/tt10028196/?ref_=nm_knf_t_1'
    },
    {
      id: 6,
      title: 'Bhaag Milkha Bhaag',
      category: 'documentary',
      year: '2013',
      description: 'The truth behind the ascension of Milkha Singh, who was scarred by of the India-Pakistan partition.',
      image: '/posters/milkha.png',
      awards: ['Audience Choice Award'],
      duration: '3h 6m',
      youtubeLink: 'https://www.youtube.com/watch?v=WbblCMem1ME',
      imdbLink: 'https://www.imdb.com/title/tt2356180/?ref_=nm_knf_t_2'
    },
    {
      id: 7,
      title: 'Oye Makhna',
      category: 'Movie',
      year: '2022',
      description: 'When Makhan fell in love with a girl by seeing her eyes, his uncle decides to fix up their wedding, only to later realise that it was fixed up with the wrong girl.',
      image: '/posters/makhna.png',
      awards: ['Creative Excellence'],
      duration: '2h 7m',
      youtubeLink: 'https://www.youtube.com/watch?v=AFZbuBmw-KA',
      imdbLink: 'https://www.imdb.com/title/tt20455272/?ref_=ls_i_5'
    },
    {
      id: 8,
      title: 'Shehzada',
      category: 'Movie',
      year: '2023',
      description: 'Bantu is hated by his father Valmiki since he was a toddler. Samara, his boss, shows him affection',
      image: '/posters/shehzada.png',
      awards: [''],
      duration: '2h 22m',
      youtubeLink: 'https://www.youtube.com/watch?v=vbSGPIS2_ao',
      imdbLink: 'https://www.imdb.com/title/tt13130948/?ref_=mv_close'
    },
    {
      id: 9,
      title: 'Jersey',
      category: 'Movie',
      year: '2022',
      description: 'A cricketer who quits cricket decides to revive his career at the age of 36 for his sons dream and prove his ability.',
      image: '/posters/jersey.png',
      awards: [''],
      duration: '2h 50m',
      youtubeLink: 'https://www.youtube.com/watch?v=BT0zd0kmTxM',
      imdbLink: 'https://www.imdb.com/title/tt5301942/?ref_=ls_t_7'
    },
    {
      id: 10,
      title: 'Udta Punjab',
      category: 'Film',
      year: '2016',
      description: 'A story that revolves around drug abuse in the affluent north Indian State of Punjab and how the youth there have succumbed to ',
      image: '/posters/udta.png',
      awards: [''],
      duration: '2h 28m',
      youtubeLink: 'https://www.youtube.com/watch?v=EJylz_9KYf8',
      imdbLink: 'https://www.imdb.com/title/tt4434004/?ref_=nm_knf_t_3'
    },
    {
      id: 11,
      title: 'Batla House',
      category: 'Movie',
      year: '2019',
      description: 'In 2008, a violent shootout with terror suspects leaves one police officer struggling to hunt down the fugitives and justify the police action.',
      image: '/posters/batla.png',
      awards: [''],
      duration: '2h 26m',
      youtubeLink: 'https://www.youtube.com/watch?v=dG3K6jB3iW8',
      imdbLink: 'https://www.imdb.com/title/tt8869978/?ref_=nm_knf_t_4'
    },
    {
      id: 12,
      title: 'Pill',
      category: 'Film',
      year: '2024',
      description: 'Whistle blowers expose a corrupt nexus of pharma giants, middlemen, and doctors responsible for unethical drug proliferation in India',
      image: '/posters/pill.png',
      awards: [''],
      duration: '2h 26m',
      youtubeLink: 'https://www.youtube.com/watch?v=hhe_iIzAjFY',
      imdbLink: 'https://www.imdb.com/title/tt32729607/?ref_=ls_t_10'
    },
    {
      id: 13,
      title: 'Shukrana',
      category: 'Movie',
      year: '2024',
      description: 'A close-knit family living in a rural community navigate marriage proposals and pregnancies, alongside a tragedy which',
      image: '/posters/Shukrana.png',
      awards: [''],
      duration: '1h 57m',
      youtubeLink: 'https://www.youtube.com/watch?v=YN8ZGS8y0mk&list=RDYN8ZGS8y0mk&start_radio=1',
      imdbLink: 'https://www.imdb.com/title/tt33044564/?ref_=mv_close'
    },
    {
      id: 14,
      title: 'Freedom at Midnight',
      category: 'TV Series',
      year: '2024',
      description: `Is the electrifying story of India's struggle for independence. Based on the bestselling book of the same name`,
      image: '/posters/freedom.png',
      awards: [''],
      duration: '8 eps',
      youtubeLink: 'https://www.youtube.com/watch?v=Pc3Qhwoi8-Y',
      imdbLink: 'https://www.imdb.com/title/tt28102595/?ref_=mv_close'
    },
    {
      id: 15,
      title: 'Jaspal',
      category: 'Movie',
      year: '2024',
      description: 'Two Punjabi brothers are stuck in lives they want to escape. Jaspal dreams of a woman out of his reach',
      image: '/posters/jaspal.png',
      awards: [''],
      duration: '1h 46m',
      youtubeLink: 'https://www.youtube.com/watch?v=ychFYdRLkmY',
      imdbLink: 'https://www.imdb.com/title/tt19837910/?ref_=mv_close'
    },
    {
      id: 16,
      title: 'Maa Jaye',
      category: 'Film',
      year: '2025',
      description: 'A sweeping story of partition, perseverance, and brotherhood unfolds across decades and continents.',
      image: '/posters/maajaye.png',
      awards: [''],
      duration: '1h 50m',
      youtubeLink: 'https://www.youtube.com/watch?v=TCmOE1_WRzQ',
      imdbLink: 'https://www.imdb.com/title/tt33056940/?ref_=ls_t_13'
    },
    {
      id: 17,
      title: 'Wild Wild Punjab',
      category: 'Movie',
      year: '2024',
      description: `Khanna has had a breakup. He's upset, but he has friends like Arora, Jain and Honey paa'ji who encourage him to face this breakup head-on and move on. They embark on a trip across Punjab to help Khanna find the closure he desires.`,
      image: '/posters/wildwild.png',
      awards: [''],
      duration: '1h 49m',
      youtubeLink: 'https://www.youtube.com/watch?v=CIrK-7VDkbU',
      imdbLink: 'https://www.imdb.com/title/tt31514262/?ref_=mv_close'
    },
    {
      id: 18,
      title: 'Sharmajee Ki Beti',
      category: 'Film',
      year: '2024',
      description: 'Multi-generational ensemble about the modern, middle-class female experience and the lives of urban women, all with the common surname of Sharma.',
      image: '/posters/sharmajee.png',
      awards: [''],
      duration: '1h 56m',
      youtubeLink: 'https://www.youtube.com/watch?v=KDH4DiJsPFo',
      imdbLink: 'https://www.imdb.com/title/tt9691290/?ref_=mv_close'
    },
    {
      id: 19,
      title: 'Mrs',
      category: 'Movie',
      year: '2023',
      description: `The life of a married girl who finds her identity amidst navigating her life in kitchen.`,
      image: '/posters/mrs.png',
      awards: [''],
      duration: '1h 51m',
      youtubeLink: 'https://www.youtube.com/watch?v=GuS6fqL_HfQ',
      imdbLink: 'https://www.imdb.com/title/tt27032419/?ref_=mv_close'
    },
    {
      id: 20,
      title: 'Hum Do Hamare Do',
      category: 'Film',
      year: '2021',
      description: `Hum do Hamare do's story is about a couple who 'adopt' their parents.`,
      image: '/posters/humdo.png',
      awards: [''],
      duration: '2h 8m',
      youtubeLink: 'https://www.youtube.com/watch?v=t3efdEAkMgQ',
      imdbLink: 'https://www.imdb.com/title/tt11816092/?ref_=mv_close'
    },
    {
      id: 21,
      title: 'A Flying Jatt',
      category: 'Movie',
      year: '2016',
      description: `Jatt is a reluctant superhero who fights crime and protects people. He meets his match in the evil Raka, who he must vanquish to save the day.`,
      image: '/posters/flyingjatt.png',
      awards: [''],
      duration: '2h 31m',
      youtubeLink: 'https://www.youtube.com/watch?v=1J9Z0qhKZqo',
      imdbLink: 'https://www.imdb.com/title/tt5235880/?ref_=mv_close'
    },
    {
      id: 22,
      title: 'Luv Shuv Tey Chicken Khurana',
      category: 'Film',
      year: '2012',
      description: `A fugitive frantically looks for a much-coveted chicken curry recipe with which his family can reclaim their pride and wealth.`,
      image: '/posters/luvshuv.png',
      awards: [''],
      duration: '2h 20m',
      youtubeLink: 'https://www.youtube.com/watch?v=xB9oO8bd7qM',
      imdbLink: 'https://www.imdb.com/title/tt2186933/?ref_=mv_close'
    },
    {
      id: 23,
      title: 'Blank',
      category: 'Movie',
      year: '2019',
      description: `A suicide bomber loses his memory and has a bomb attached to his heart. It is up to the police officers to prevent this bomb from taking innocent lives.`,
      image: '/posters/blank.png',
      awards: [''],
      duration: '1h 47m',
      youtubeLink: 'https://www.youtube.com/watch?v=rCwMriYK0Yw',
      imdbLink: 'https://www.imdb.com/title/tt9052936/?ref_=nm_flmg_job_3_accord_2_cdt_t_2'
    },
    {
      id: 24,
      title: 'The Great Sardaar',
      category: 'Film',
      year: '2017',
      description: `The movie is set during the 1984 riots in Punjab.`,
      image: '/posters/greate.png',
      awards: [''],
      duration: '1h 49m',
      youtubeLink: 'https://www.youtube.com/watch?v=y-5v0pJrw6k',
      imdbLink: 'https://www.imdb.com/title/tt5936484/?ref_=nm_flmg_job_3_accord_2_cdt_t_3'
    }
  ];



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



        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <div className="card-image-container">
                <img src={project.image} alt={project.title} className="card-poster" />

                <div className="card-overlay">
                  <div className="card-content">
                    <div className="card-top">
                      <span className="card-category">{project.category}</span>
                      <span className="card-year">
                        <Calendar size={14} />
                        {project.year}
                      </span>
                    </div>

                    <div className="card-bottom">
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-description">{project.description}</p>

                      <div className="card-details">
                        <span className="card-duration">Duration: {project.duration}</span>
                        {project.awards.length > 0 && (
                          <div className="card-awards">
                            <Award size={14} />
                            <span>{project.awards[0]}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="card-actions">
                    <button
                      className="action-btn"
                      onClick={() => setSelectedVideo(project)}
                      title="Watch Trailer"
                    >
                      <Play size={20} />
                    </button>
                    <button
                      className="action-btn"
                      onClick={() => window.open(project.imdbLink, '_blank')}
                      title="View on IMDB"
                    >
                      <ExternalLink size={20} />
                    </button>
                  </div>
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

      {/* YouTube Video Modal */}
      {selectedVideo && (
        <motion.div
          className="video-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="video-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={24} />
            </button>

            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo.youtubeLink)}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-info">
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;