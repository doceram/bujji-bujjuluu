import { motion } from "framer-motion";

const hearts = Array.from({ length: 120 });

export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {hearts.map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-300 opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 14}px`,
          }}
          initial={{ y: "110vh" }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          💖
        </motion.span>
      ))}
    </div>
  );
}
