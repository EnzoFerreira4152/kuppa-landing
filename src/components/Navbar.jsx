// Navbar.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1200 ease-out delay-150 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md shadow-purple-500/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logoo */}
          <Link to="/" className="flex items-center">
            <motion.div className="text-2xl font-extrabold" whileHover={{ scale: 1.05 }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                KUPPA STORE
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white cursor-pointer">
                <FaShoppingCart className="text-xl" />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} className="p-2 rounded-full border-2 border-cyan-400 text-cyan-400 cursor-pointer">
                <FaUser className="text-xl" />
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-black/95 border-t border-purple-500/30">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLinks setIsMobileMenuOpen={setIsMobileMenuOpen} />
              
              <div className="flex items-center justify-center space-x-6 p-2">
                <motion.div whileTap={{ scale: 0.9 }} className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <FaShoppingCart className="text-xl" />
                </motion.div>
                
                <motion.div whileTap={{ scale: 0.9 }} className="p-2 rounded-full border-2 border-cyan-400 text-cyan-400">
                  <FaUser className="text-xl" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Línea de neón inferior */}
      <div className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </motion.nav>
  );
};

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">INICIO</NavLink>
      <NavLink to="/productos">PRODUCTOS</NavLink>
      <NavLink to="/ofertas">OFERTAS</NavLink>
      <NavLink to="/contacto">CONTACTO</NavLink>
    </>
  );
};

const MobileNavLinks = ({ setIsMobileMenuOpen }) => {
  return (
    <>
      <MobileNavLink to="/" setIsMobileMenuOpen={setIsMobileMenuOpen}>INICIO</MobileNavLink>
      <MobileNavLink to="/productos" setIsMobileMenuOpen={setIsMobileMenuOpen}>PRODUCTOS</MobileNavLink>
      <MobileNavLink to="/ofertas" setIsMobileMenuOpen={setIsMobileMenuOpen}>OFERTAS</MobileNavLink>
      <MobileNavLink to="/contacto" setIsMobileMenuOpen={setIsMobileMenuOpen}>CONTACTO</MobileNavLink>
    </>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <motion.span className="text-white font-medium text-lg hover:text-cyan-400 transition-colors" whileHover={{ scale: 1.05 }}>
        {children}
      </motion.span>
    </Link>
  );
};

const MobileNavLink = ({ to, children, setIsMobileMenuOpen }) => {
  return (
    <Link to={to} onClick={() => setIsMobileMenuOpen(false)}>
      <motion.div className="py-3 text-center text-white text-xl border-b border-purple-500/30" whileTap={{ scale: 0.95 }}>
        {children}
      </motion.div>
    </Link>
  );
};

export default Navbar;