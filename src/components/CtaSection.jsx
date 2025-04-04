import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fondos de neón */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/50 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                VIVI RETRO
              </span>
            </h2>
            
            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
              Suscríbete a nuestro newsletter y obtén un <span className="text-cyan-400 font-bold">10% de descuento</span> en tu primera compra. Además, recibe notificaciones sobre nuevos productos y ofertas exclusivas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
              
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-lg flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30">
                SUSCRIBIRSE
                <FaArrowRight />
              </motion.button>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              Al suscribirte, aceptas recibir correos electrónicos de marketing de Kuppa Store. Puedes darte de baja en cualquier momento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;