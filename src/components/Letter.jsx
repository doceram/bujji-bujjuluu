import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

export default function Letter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed inset-0 flex justify-center items-center z-50"
    >
      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Letter */}
      <div className="relative bg-gray-50 p-10 rounded-xl shadow-2xl max-w-lg text-center z-10">
        <h2 className="text-3xl text-pink-500 mb-4">My World ❤️</h2>
        <p className="text-gray-700 leading-relaxed">
          Loving you is the easiest thing I’ve ever done. You are my peace, my
          happiness, my forever. No matter where life takes us, my heart will
          always choose you.
        </p>
        <p className="mt-6 font-semibold text-pink-500">Forever Yours 💕</p>
      </div>
    </motion.div>
  );
}
