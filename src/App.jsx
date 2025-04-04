import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductosDestacados from './components/ProductosDestacados';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './App.css'

function App() {
  useEffect(() => {
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
  
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);
  
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, []);

  return(
    <Router>
      <div className="full-height bg-black text-white min-h-screen">
        {/* <Navbar /> */}
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
          </motion.div>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
