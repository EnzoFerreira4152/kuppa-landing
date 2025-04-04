import { motion } from 'framer-motion';
import { FaTruck, FaCreditCard, FaRegClock, FaGift } from 'react-icons/fa';

const Features = () => {
  const features = [
    /* {
      icon: <FaTruck />,
      title: 'Envío Rápido',
      description: 'Recibe tus productos en menos de 24 horas en tu domicilio.'
    }, */
    {
      icon: <FaCreditCard />,
      title: 'Pagos Seguros',
      description: 'Múltiples métodos de pago con la mayor seguridad del mercado.'
    },
    {
      icon: <FaRegClock />,
      title: 'Abierto 24/7',
      description: 'Nuestra tienda online está disponible a cualquier hora.'
    },
    {
      icon: <FaGift />,
      title: 'Programa de Puntos',
      description: 'Acumula puntos en cada compra y canjéalos por productos exclusivos.'
    }
  ];

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Fondos con efecto neón */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500 blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              POR QUÉ ELEGIRNOS
            </span>
          </h2>
          <p className="text-cyan-300 text-xl max-w-3xl mx-auto">
            En Kuppa Store nos distinguimos por ofrecer un servicio único con ese toque retro que tanto te gusta
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-xl p-8 text-center group hover:bg-gray-800 transition-colors relative overflow-hidden"
    >
      {/* Icono */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl mx-auto mb-6"
      >
        {icon}
      </motion.div>

      {/* Título */}
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>

      {/* Descripción */}
      <p className="text-gray-400">{description}</p>

      {/* Efecto de borde con neón */}
      <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-purple-500/30 pointer-events-none transition-colors duration-300"></div>
    </motion.div>
  );
};

export default Features;