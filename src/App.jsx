import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Gallery from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEO, { SEOProvider } from './components/SEO';
import Analytics, { GoogleAnalytics, StructuredData } from './components/Analytics';
import './App.css';

function App() {
  return (
    <SEOProvider>
      <Router>
        <div className="App">
          <SEO />
          <GoogleAnalytics measurementId="GA_MEASUREMENT_ID" />
          <StructuredData />
          <Analytics />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                role="main"
              >
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Gallery />
                <Contact />
              </motion.main>
            } />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </SEOProvider>
  );
}

export default App;