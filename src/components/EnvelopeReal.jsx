import { motion } from "framer-motion";

export default function EnvelopeReal({ onOpen }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className="relative w-[360px] h-[240px] cursor-pointer"
        onClick={onOpen}
      >
        {/*Adding text on front side*/}
        <div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
            <p className="text-white font-semibold text-lg tracking-wide">
              Happy New Year
            </p>
            <p className="mt-2 text-white text-xl font-bold">My Love ❤️</p>
          </div>
        </div>

        <div className="absolute inset-0 bg-[#f6f1e7] rounded-md shadow-2xl" />

        {/* Envelope text (printed on paper) */}
        <div className="border border-amber-300 absolute inset-0 flex flex-col items-center justify-start pt-10 text-center z-20 pointer-events-none">
          <p className="text-[#b08968] font-semibold text-lg tracking-wide">
            Happy New Year
          </p>
          <p className="mt-2 text-[#b08968] text-xl font-bold">My Love ❤️</p>
        </div>

        {/* Left flap */}
        <div className="absolute inset-0 bg-[#f6f1e7] clip-left z-20" />

        {/* Right flap */}
        <div className="absolute inset-0 bg-[#f6f1e7] clip-right z-20" />

        {/* Bottom flap */}
        <div className="absolute inset-0 bg-[#f6f1e7] clip-bottom z-20" />

        {/* Top flap (animated) */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: -180 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute inset-0 bg-[#f6f1e7] clip-top z-30"
        />

        {/* Heart Seal */}
        <div className="absolute inset-0 flex items-center justify-center z-40">
          <div className="relative w-12 h-12 -rotate-45 bg-red-500 shadow-lg bottom-2">
            {/* Left circle */}
            <div className="absolute -top-6 left-0 w-12 h-12 bg-red-500 rounded-full" />
            {/* Right circle */}
            <div className="absolute left-6 top-0 w-12 h-12 bg-red-500 rounded-full" />
          </div>
        </div>

        {/* Hint */}
        <div className="absolute -bottom-10 w-full text-center text-white text-sm">
          Click to open 💌
        </div>
      </div>
    </div>
  );
}
