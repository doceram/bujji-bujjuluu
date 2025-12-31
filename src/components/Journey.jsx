import { useEffect } from "react";

import pic1 from "../assets/photos/pic1.jpg";
import pic2 from "../assets/photos/pic2.jpg";
import pic3 from "../assets/photos/pic3.jpg";
import pic4 from "../assets/photos/pic4.jpg";

const photos = [
  { src: pic1, rotate: "-rotate-6", top: "top-16", left: "left-10" },
  { src: pic2, rotate: "rotate-6", top: "top-32", right: "right-12" },
  { src: pic3, rotate: "-rotate-3", bottom: "bottom-24", left: "left-20" },
  { src: pic4, rotate: "rotate-3", bottom: "bottom-16", right: "right-24" },
  { src: pic1, rotate: "-rotate-6", top: "top-16", left: "left-40" },
  { src: pic2, rotate: "rotate-6", top: "top-32", right: "right-12" },
  { src: pic3, rotate: "-rotate-3", bottom: "bottom-24", left: "left-20" },
  { src: pic4, rotate: "rotate-3", bottom: "bottom-16", right: "right-24" },
];

export default function Journey({ onFinish }) {
  return (
    <div className="relative min-h-screen bg-pink-50 overflow-hidden flex flex-col justify-center items-center px-6">
      {/* Hanging Photos */}
      {photos.map((photo, index) => (
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
          <div className="h-2 w-10 bg-gray-300 mx-auto mt-1 rounded">
            <span>Hello</span>
          </div>
        </div>
      ))}

      {/* Center Text */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md z-10">
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          Our Journey ❤️
        </h2>
        <p className="text-gray-700">
          Every moment with you is a memory I want to hold onto forever. These
          pictures are not just photos — they’re pieces of my heart.
        </p>

        <button
          onClick={onFinish}
          className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
        >
          One Last Surprise 💌
        </button>
      </div>
    </div>
  );
}
