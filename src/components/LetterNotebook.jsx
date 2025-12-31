import { motion } from "framer-motion";

export default function LetterNotebook() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="absolute inset-0 flex items-center justify-center z-50 pointer-events-auto"
    >
      <div className="relative max-w-[520px] w-full bg-[#fffdf7] border-[10px] border-white rounded-xl shadow-2xl overflow-hidden rotate-[-1deg]">
        {/* Margin line */}
        <div className="absolute top-0 left-14 h-full w-px bg-pink-300 opacity-70" />

        {/* Page */}
        <div
          className="font-[Tangerine] text-[28px] leading-[1.6rem] text-[#6b4e4e]
                     bg-[linear-gradient(#fffdf7_1.5rem,#f1dede_1.6rem)]
                     bg-[size:100%_1.6rem]
                     px-6 pt-8 pb-6 pl-20"
        >
          <p className="mb-6 text-[32px] font-bold text-pink-500">
            Hi Bujjiii ❤️
          </p>

          <p className="mb-6">Ela unnav?</p>

          <p className="mb-6">
            Every time I think about us, my heart feels calm and full. Being
            with you made me understand what love really means.
          </p>

          <p className="mb-6">
            No matter how busy life gets, you are always my safest place.
          </p>

          <p className="mt-8 text-right text-pink-500 font-bold text-[30px]">
            Love you forever 💕
            <br />— Yours
          </p>
        </div>
      </div>
    </motion.div>
  );
}
