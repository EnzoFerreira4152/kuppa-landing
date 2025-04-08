import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import KuppaMascot from './KuppaMascot';

const Footer = () => {
  return (
    <footer className="bg-gray-950 relative overflow-hidden">
      {/* Efectos de neón */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-purple-600 blur-3xl opacity-10"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-pink-500 blur-3xl opacity-10"></div>
      </div>
      
      {/* Contenido del footer */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo y descripción */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="mb-6">
              <h3 className="text-3xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                  KUPPA <span className='text-lg italic text-cyan-300'>24HS</span>
                </span>
              </h3>
            </motion.div>
            <p className="text-gray-400 mb-6">
              Tu tienda de bebidas y comestibles con ese toque retro que te transportará a una vibrante época.
            </p>
            <div className="flex justify-center space-x-4">
              <SocialIcon icon={<FaFacebook />} color="bg-blue-600" />
              <SocialIcon icon={<FaInstagram />} color="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700" />
              <SocialIcon icon={<FaTwitter />} color="bg-blue-400" />
            </div>
          </div>

          <KuppaMascot />

          {/* Enlaces rápidos */}
          {/* <div>
            <h4 className="text-white text-xl font-bold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <FooterLink to="/">Inicio</FooterLink>
              <FooterLink to="/productos">Productos</FooterLink>
              <FooterLink to="/ofertas">Ofertas especiales</FooterLink>
              <FooterLink to="/nosotros">Sobre nosotros</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </ul>
          </div> */}

          {/* Ayuda */}
          {/* <div>
            <h4 className="text-white text-xl font-bold mb-6">Ayuda</h4>
            <ul className="space-y-3">
              <FooterLink to="/envios">Envíos y entregas</FooterLink>
              <FooterLink to="/devoluciones">Devoluciones</FooterLink>
              <FooterLink to="/faq">Preguntas frecuentes</FooterLink>
              <FooterLink to="/privacidad">Política de privacidad</FooterLink>
              <FooterLink to="/terminos">Términos y condiciones</FooterLink>
            </ul>
          </div> */}

          {/* Contacto */}
          <div>
            <h4 className="text-white text-xl font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="text-cyan-400 mt-1">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-gray-400">San Fernando 299, Resistencia, Chaco</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="text-cyan-400">
                  <FaPhoneAlt />
                </div>
                <span className="text-gray-400">{"De momento escribinos a nuestro mail ;)"} {/* +54 9 (362) 549-0418 */}</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="text-cyan-400">
                  <FaEnvelope />
                </div>
                <span className="text-gray-400">info@kuppa.com.ar</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-sm hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/20">
                CONTACTAR AHORA
              </motion.button>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 KUPPA STORE. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacidad" className="text-gray-500 text-sm hover:text-cyan-400 transition-colors">
                Privacidad
              </Link>
              <Link to="/terminos" className="text-gray-500 text-sm hover:text-cyan-400 transition-colors">
                Términos
              </Link>
              <Link to="/cookies" className="text-gray-500 text-sm hover:text-cyan-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Línea de neón */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

const SocialIcon = ({ icon, color, hoverColor = "hover:opacity-80" }) => {
  return (
    <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`w-10 h-10 rounded-sm ${color} ${hoverColor} flex items-center justify-center text-white transition-all`}>
      {icon}
    </motion.a>
  );
};

const FooterLink = ({ to, children }) => {
  return (
    <li>
      <Link to={to} className="text-gray-400 hover:text-cyan-400 transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer;