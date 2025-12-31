// components/Landing.jsx
export default function Landing({ onStart }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-200 to-red-300 text-center">
      <h1 className="text-4xl md:text-6xl font-love text-white mb-6">
        Hey Love ❤️
      </h1>
      <p className="text-white mb-8 text-lg">
        I made something special for you
      </p>
      <button
        onClick={onStart}
        className="bg-white text-pink-500 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        Start the Journey ✨
      </button>
    </div>
  );
}
