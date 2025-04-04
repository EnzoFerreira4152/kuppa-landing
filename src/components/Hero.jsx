// Hero.jsx
import { motion } from 'framer-motion';
import { FaShoppingCart, FaArrowDown } from 'react-icons/fa';
import { FcAlarmClock } from "react-icons/fc";
import NeonLoader from './NeonLoader';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Línea de neón */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Fondos de neón */}
      {/* <div className="absolute inset-0">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 355}} transition={{ ease: "easeInOut", duration: 2 }}>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl opacity-20"></div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 800}} transition={{ ease: "easeInOut", duration: 2 }}>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500 blur-3xl opacity-20"></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 900 }} animate={{ opacity: 1, y: 620}} transition={{ ease: "easeInOut", duration: 2.5 }}>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-pink-500 blur-3xl opacity-20"></div>
        </motion.div>
      </div> */}

      {/* Fondos de neón */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 255 }}
          animate={{ opacity: [0.25, 1, 0.25], y: [255, 355, 255] }}
          transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}
        >
          <div className="absolute top-1/4 left-2/6 w-64 h-64 rounded-full bg-purple-600 blur-3xl opacity-25" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: [0.25, 1, 0.25], y: [800, 825, 800] }}
          transition={{ ease: "easeInOut", duration: 7, repeat: Infinity }}
        >
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500 blur-3xl opacity-25" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 620 }}
          animate={{ opacity: [0.2, 1, 0.2], y: [620, 655, 620] }}
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}
        >
          <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-pink-500 blur-3xl opacity-25" />
        </motion.div>
      </div>

      {/* Contenido principal */}
      <div className="relative container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="text-center flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="font-monoton-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              KUPPA
            </span>
          </h1>
          
          <motion.div className="font-oswald-300 text-md md:text-2xl text-cyan-300 mb-12 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <p className="mb-6">Donde los sabores de siempre se encuentran con lo retro</p>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row gap-6 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
            <motion.div initial={{opacity: 0.1}} animate={{opacity: [0.1, 0.15, 0.2, 0.25, 0.3, 1, 0, 1, 1, 1, 1, 1, 1, 1], ease: "easeIn"}} transition={{duration: 0.9, repeatDelay: 3, delay: 1.5, repeat: Infinity}}>
              <div className="max-md:w-45 shadow-[0_0_12px_#e879f9] p-2 rounded-lg">
                <p className="font-oswald-300 text-xl md:text-3xl text-cyan-300" style={{ textShadow: "0 0 12px #4DFFF9" }}>
                  PROXIMAMENTE
                </p>
              </div>
            </motion.div>
            {/* <motion.button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-lg flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FaShoppingCart className="text-xl" />
              EXPLORAR PRODUCTOS
            </motion.button>
            
            <motion.button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400/10 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              SOBRE NOSOTROS
            </motion.button> */}
          </motion.div>
        </motion.div>
        
        <motion.div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white cursor-pointer" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          {/* <FaArrowDown className="text-2xl text-cyan-400" /> */}
        </motion.div>
      </div>

      {/* Línea de neón */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
};

export default Hero;