import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
   const [showMessage, setShowMessage] = useState(false);

   const handleClick = () => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
   };

   return (
      <>
         {showMessage && (
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: -16, duration: 1.35 }}
               exit={{ opacity: 0, y: 10 }}
               className="fixed bottom-28 right-10 md:bottom-32 md:right-15 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50"
            >
               Aún lo estamos implementando
            </motion.div>
         )}

         <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", delay: 2.2, duration: 1.5 }}
            className="z-50 flex justify-center items-center fixed bottom-10 right-10 md:bottom-15 md:right-15 w-14 h-14 md:w-18 md:h-18 bg-green-500 rounded-full cursor-pointer"
            onClick={handleClick}
         >
            <FaWhatsapp className="text-4xl md:text-5xl text-white" />
         </motion.div>
      </>
   )
}

export default WhatsAppButton;