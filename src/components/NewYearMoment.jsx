import { motion } from "framer-motion";

export default function NewYearMoment() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="text-center my-16"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-pink-500">
        Happy New Year
      </h1>

      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        className="block mt-4 text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_30px_#fde047]"
      >
        2026 ✨
      </motion.span>

      <p className="mt-6 text-lg text-gray-700">
        Another year. Another chapter. With you ❤️
      </p>
    </motion.div>
  );
}
