import { motion } from "framer-motion";

export default function NameMerge({ onDone }) {
  return (
    <div className="relative flex flex-col items-center justify-center py-24">
      {/* Individual Names */}
      <div className="flex items-center text-5xl md:text-6xl font-bold">
        <motion.span
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-pink-500"
        >
          SNEHI
        </motion.span>

        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-2 text-yellow-400 drop-shadow-[0_0_20px_#fde047]"
        >
          THA
        </motion.span>

        <motion.span
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-pink-500"
        >
          RUN
        </motion.span>
      </div>

      {/* Merge Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-12 text-6xl font-extrabold tracking-wide"
        onAnimationComplete={onDone}
      >
        <span className="text-pink-500">SNEHI</span>
        <span className="text-yellow-400 drop-shadow-[0_0_25px_#fde047]">
          THA
        </span>
        <span className="text-pink-500">RUN</span>
      </motion.div>
    </div>
  );
}
