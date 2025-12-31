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
        <h3 className="text-xl font-semibold mb-6">
          To My Bangaaaram bujjuluuu,
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Ekkadi nunchi modhalu pettalo ardham kavatledhu, nuv ante school
          nunche istam raa appudu ninnu chusthe bayam, asalu matladali anna kuda
          oka fear undedhi, nuv antav asalu gurthunnana naku ani but ne face
          chudaganey nen thala dinchukoni vellevadini asalu eye contact kuda
          cheyalenu adhi nuvu kulfi daggara kanipinchinappudu kuda chusav. Aa
          roju mana first call appudu neku ardham ayyi untadhi nen ela react
          ayyano same chinnappudu kuda alane undedhi. Naku mana rumour gurinchi
          school loney telusu bujjii but vere vallatho kuda na peru tag chesi
          andhariki link chesevallu mana vallu, kani vere girls ni chala mandiki
          link chesaru but needhi mathram only tharun tharun anii, asalu evaru
          chesaro emo. Vallaki appude telusu anukunta 🙈😪 that ur{" "}
          <strong>MINE</strong>
          {"  "}
          ani. Inka chaaalaaa seppali ra but ee page saripodhu, manam Feb lo
          kalustham kadha appudu septha nuv ante naku entha istamooo Inka paata
          kuda paadtha. I can't live without you SNEHITHA garuuuuu.
        </p>
        <p className="mt-6 font-semibold text-pink-500">
          Always & Forever Yours Tha🏃 Bujjii 💕
        </p>
      </div>
    </motion.div>
  );
}
