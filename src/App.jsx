import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductosDestacados from './components/ProductosDestacados';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './App.css'


function App() {
  return(
    <Router>
      <div className="bg-black text-white min-h-screen">
        {/* <Navbar /> */}
        <AnimatePresence>

          <WhatsAppButton />
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 2}}>
            <Hero />
            <Footer />
          </motion.div>

        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
