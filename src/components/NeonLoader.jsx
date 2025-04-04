import { motion } from "framer-motion";

export default function NeonLoader() {
  return (
    <motion.div
      className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500  shadow-[0_0_12px_#e879f9] animate-pulse"
      animate={{
        scale: [0.95, 1.1, 0.95],
        rotate: "360deg",
        boxShadow: [
          "0 0 6px #e879f9, 0 0 12px #9333ea",
          "0 0 8px #c084fc, 0 0 18px #60a5fa",
          "0 0 6px #e879f9, 0 0 12px #9333ea"
        ]
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }}
    />
  );
}