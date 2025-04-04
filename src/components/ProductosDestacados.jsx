import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

const CATEGORIES = ['TODOS', 'BEBIDAS', 'SNACKS', 'DULCES', 'OFERTAS'];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Refresco Neón Twist',
    price: 2.99,
    category: 'BEBIDAS',
    rating: 4.8,
    image: '/api/placeholder/300/300',
    isNew: true,
  },
  {
    id: 2,
    name: 'Chips Retro Wave',
    price: 1.99,
    category: 'SNACKS',
    rating: 4.5,
    image: '/api/placeholder/300/300',
    isNew: false,
  },
  {
    id: 3,
    name: 'Chocolatina Galaxy',
    price: 2.49,
    category: 'DULCES',
    rating: 4.7,
    image: '/api/placeholder/300/300',
    isNew: true,
  },
  {
    id: 4,
    name: 'Bebida Energética Flash',
    price: 3.49,
    category: 'BEBIDAS',
    rating: 4.6,
    image: '/api/placeholder/300/300',
    isNew: false,
  },
  {
    id: 5,
    name: 'Chicles Arcade',
    price: 1.29,
    category: 'DULCES',
    rating: 4.3,
    image: '/api/placeholder/300/300',
    isNew: false,
  },
  {
    id: 6,
    name: 'Pretzels Digitales',
    price: 2.19,
    category: 'SNACKS',
    rating: 4.4,
    image: '/api/placeholder/300/300',
    isNew: false,
  },
  {
    id: 7,
    name: 'Agua Mineral Synth',
    price: 1.79,
    category: 'BEBIDAS',
    rating: 4.2,
    image: '/api/placeholder/300/300',
    isNew: true,
  },
  {
    id: 8,
    name: 'Mix Nuts CyberPunk',
    price: 3.99,
    category: 'SNACKS',
    rating: 4.9,
    image: '/api/placeholder/300/300',
    isNew: false,
  },
];

const ProductosDestacados = () => {
  const [activeCategory, setActiveCategory] = useState('TODOS');
  
  const filteredProducts = activeCategory === 'TODOS' 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              PRODUCTOS DESTACADOS
            </span>
          </h2>
          <p className="text-cyan-300 text-xl max-w-3xl mx-auto">
            Descubre nuestra selección de productos con ese toque retro que te transportará a los vibrantes años 80s
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
        </motion.div>

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-500 rounded-lg font-bold text-lg hover:bg-pink-500/10 transition-all"
          >
            VER TODOS LOS PRODUCTOS
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-xl overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            NUEVO
          </div>
        )}

        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-sm flex items-center gap-2"
          >
            <FaShoppingCart />
            AÑADIR AL CARRITO
          </motion.button>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            <FaStar />
            <span className="ml-1 text-sm text-gray-300">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-600">|</span>
          <span className="text-sm text-cyan-400">{product.category}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-white">${product.price}</p>
          <div className="h-8 w-8 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 cursor-pointer hover:bg-purple-800/50 transition-colors">
            <FaShoppingCart className="text-sm" />
          </div>
        </div>
      </div>

      {/* Efecto de borde neón */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500/50 pointer-events-none transition-colors duration-300"></div>
    </motion.div>
  );
};

export default ProductosDestacados;