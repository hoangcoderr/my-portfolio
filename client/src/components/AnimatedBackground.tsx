import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-white dark:bg-gray-800">
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/20 rounded-full filter blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full filter blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-400/20 rounded-full filter blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          scale: [0.8, 1.4, 0.8],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
          ease: "easeInOut",
        }}
      />
      <svg width="100%" height="100%" className="opacity-[0.03] dark:opacity-[0.06]">
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path 
            d="M 40 0 L 0 0 0 40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
