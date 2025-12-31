import { useEffect } from "react";
import { motion } from "framer-motion";

import pic1 from "../assets/photos/pic1.png";
import pic2 from "../assets/photos/pic2.jpg";
import pic3 from "../assets/photos/pic3.jpg";
import pic4 from "../assets/photos/pic4.png";
import pic5 from "../assets/photos/pic5.jpg";
import pic6 from "../assets/photos/pic6.jpg";
import pic7 from "../assets/photos/pic7.jpg";
import pic8 from "../assets/photos/pic8.jpg";
import pic9 from "../assets/photos/pic9.jpg";
import pic10 from "../assets/photos/pic10.webp";
import pic11 from "../assets/photos/pic11.jpg";
import pic12 from "../assets/photos/pic12.jpg";
import pic13 from "../assets/photos/pic13.jpg";
import pic14 from "../assets/photos/pic14.jpg";

// const photos = [
//   { src: pic1, rotate: "-rotate-6", top: "top-16", left: "left-10" },
//   { src: pic2, rotate: "rotate-6", top: "top-40", right: "right-28" },
//   { src: pic3, rotate: "-rotate-3", bottom: "bottom-24", left: "left-20" },
//   { src: pic4, rotate: "rotate-3", bottom: "bottom-16", right: "right-24" },
//   { src: pic5, rotate: "-rotate-6", top: "top-16", left: "left-40" },
//   { src: pic6, rotate: "rotate-6", top: "top-40", right: "right-12" },
//   { src: pic7, rotate: "-rotate-3", bottom: "bottom-24", left: "left-20" },
//   { src: pic8, rotate: "rotate-3", bottom: "bottom-16", right: "right-24" },
//   { src: pic9, rotate: "-rotate-6", top: "top-20", left: "left-32" },
//   { src: pic10, rotate: "rotate-6", top: "top-40", right: "right-16" },
//   { src: pic11, rotate: "-rotate-3", bottom: "bottom-20", left: "left-24" },
//   { src: pic12, rotate: "rotate-3", bottom: "bottom-12", right: "right-20" },
//   { src: pic13, rotate: "-rotate-6", top: "top-24", left: "left-16" },
//   { src: pic14, rotate: "rotate-6", top: "top-36", right: "right-20" },
// ];

const photos = [
  { src: pic1, rotate: "-rotate-6" },
  { src: pic2, rotate: "rotate-6" },
  { src: pic3, rotate: "-rotate-3" },
  { src: pic4, rotate: "rotate-3" },
  { src: pic5, rotate: "-rotate-6" },
  { src: pic6, rotate: "rotate-6" },
  { src: pic7, rotate: "-rotate-3" },
  { src: pic8, rotate: "rotate-3" },
  { src: pic9, rotate: "-rotate-6" },
  { src: pic10, rotate: "rotate-6" },
  { src: pic11, rotate: "-rotate-3" },
  { src: pic12, rotate: "rotate-3" },
  { src: pic13, rotate: "-rotate-6" },
  { src: pic14, rotate: "rotate-6" },
];

function NameMerge() {
  return (
    <div className="z-10 flex flex-col items-center justify-center mb-16 mt-10">
      {/* Names coming together */}
      <div className="flex items-center text-5xl md:text-6xl font-bold">
        <motion.span
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-blue-500"
        >
          SNEHI
        </motion.span>

        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-2 text-orange-400 drop-shadow-[0_0_25px_#fde047]"
        >
          THA
        </motion.span>

        <motion.span
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-blue-500"
        >
          RUN
        </motion.span>
      </div>

      {/* Final merged name
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-10 text-6xl font-extrabold tracking-wide"
      >
        <span className="text-pink-500">SNEHI</span>
        <span className="text-yellow-400 drop-shadow-[0_0_30px_#fde047]">
          THA
        </span>
        <span className="text-pink-500">RUN</span>
      </motion.div> */}
    </div>
  );
}

function NewYearMoment() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="z-10 text-center mb-12"
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
        Another year, another chapter — with you ❤️
      </p>
    </motion.div>
  );
}

export default function Journey({ onFinish }) {
  return (
    <div className="relative min-h-screen bg-pink-50 overflow-hidden flex flex-col justify-center items-center px-6">
      {/* Hanging Photos */}
      {/* {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute ${photo.top || ""} ${photo.bottom || ""} ${
            photo.left || ""
          } ${photo.right || ""} ${photo.rotate} bg-white p-2 shadow-xl`}
        >
          <img
            src={photo.src}
            alt="us"
            className="w-32 h-40 object-cover rounded-sm"
          />
          <div className="h-2 w-10 bg-gray-300 mx-auto mt-1 rounded"></div>
        </div>
      ))} */}

      {/* LEFT PHOTOS */}
      <div className="absolute left-0 top-0 h-full w-1/4 hidden lg:block">
        {photos
          .filter((_, i) => i % 2 === 0)
          .map((photo, index) => (
            <div
              key={index}
              className={`absolute ${photo.rotate} bg-white p-2 shadow-xl`}
              style={{
                top: `${index * 140 + 80}px`,
                left: "40px",
              }}
            >
              <img
                src={photo.src}
                alt="us"
                className="w-32 h-40 object-cover rounded-sm"
              />
              <div className="h-2 w-10 bg-gray-300 mx-auto mt-1 rounded" />
            </div>
          ))}
      </div>

      {/* RIGHT PHOTOS */}
      <div className="absolute right-0 top-0 h-full w-1/4 hidden lg:block">
        {photos
          .filter((_, i) => i % 2 !== 0)
          .map((photo, index) => (
            <div
              key={index}
              className={`absolute ${photo.rotate} bg-white p-2 shadow-xl`}
              style={{
                top: `${index * 140 + 80}px`,
                right: "40px",
              }}
            >
              <img
                src={photo.src}
                alt="us"
                className="w-32 h-40 object-cover rounded-sm"
              />
              <div className="h-2 w-10 bg-gray-300 mx-auto mt-1 rounded" />
            </div>
          ))}
      </div>

      {/* New Year Moment */}
      <NewYearMoment />

      {/* Center Text */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md z-10">
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          Our Journey Together ❤️
        </h2>
        <p className="text-gray-700">
          Manam first time kalisinappati nunchi ippati varaku netho unna moments
          anni chaaaalaa ante chaaalaaa special bujjii. Ippudu gurthu
          cheskuntunte anipisthundhi manam entha fast ga close ainam ani.
          Because <strong>we're meant to be TOGETHER</strong>, we make each
          other better. And I cant wait to spend my whoooole life with YOU and
          make every day special. This year was veryy special to me, manam
          tirigina prathi place, every moment once in a lifetime memory ra malli
          radhu,it will be more in future :) This New Year, and for the rest of
          my life I CHOOSE YOUUU{" "}
          <strong>I LOOOVEEEE YOUUUUU CHOOOO MUCH BUJJUULUUUUU 🫶</strong>
        </p>

        <button
          onClick={onFinish}
          className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
        >
          One Last Surprise 💌
        </button>
      </div>
      {/* Name Merge Animation */}
      <NameMerge />
    </div>
  );
}
