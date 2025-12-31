// components/SurpriseButton.jsx
import music from "../assets/music/love.opus";
import useBackgroundMusic from "../hooks/useBackgroundMusic";

export default function SurpriseButton() {
  const { toggleMusic, isPlaying } = useBackgroundMusic(music);

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 bg-pink-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
    >
      {isPlaying ? "Aaaaapu raa babu 🔇" : "Ikkada click cheyaku 😶‍🌫️🎵"}
    </button>
  );
}
