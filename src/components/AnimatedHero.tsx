import { motion } from "framer-motion";

const AnimatedHero = () => {
  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center gap-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.93158 60.664V5.12704C1.93158 4.57476 2.37929 4.12704 2.93158 4.12704H42.5864L29.8387 21.2936L42.5864 33.7569L29.8387 46.5888L42.5864 61.664H2.93158C2.37929 61.664 1.93158 61.2163 1.93158 60.664Z"
          fill="white"
          stroke="#ED6A5A"
          strokeWidth="5"
        />
        <circle cx="59.8613" cy="32.9751" r="6.51036" fill="white" />
        <circle cx="55.2066" cy="63.2066" r="3.2066" fill="white" />
        <circle cx="55.2066" cy="3.2066" r="3.2066" fill="white" />
      </svg>
      <motion.h1
        className="text-5xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Kare<span className="text-earth-orange">4</span>TheLot
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        stay tuned... this site is under construction
      </motion.h3>
    </motion.div>
  );
};

export default AnimatedHero;
