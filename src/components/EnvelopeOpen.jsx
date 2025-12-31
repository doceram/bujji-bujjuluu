import { motion } from "framer-motion";

export default function EnvelopeOpen({ onOpen }) {
  return (
    <div className="h-screen flex justify-center items-center bg-black/60 fixed inset-0 z-50">
      <div className="relative w-72 h-48 cursor-pointer" onClick={onOpen}>
        {/* Envelope Body */}
        <div className="absolute inset-0 bg-pink-400 rounded-md z-10"></div>

        {/* Envelope Flap */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: -180 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            transformOrigin: "top",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          }}
          className="absolute top-0 left-0 w-full h-[65%] bg-yellow-500 z-20"
        />

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center z-30 text-white font-semibold">
          Open Me 💌
        </div>
      </div>
    </div>
  );
}
