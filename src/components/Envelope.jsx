// components/Envelope.jsx
export default function Envelope({ onOpen }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-red-100">
      <div
        onClick={onOpen}
        className="w-40 h-28 bg-red-400 rounded-md relative cursor-pointer hover:scale-105 transition"
      >
        <div className="absolute inset-0 flex justify-center items-center text-white text-xl">
          💌
        </div>
      </div>
      <p className="mt-4 text-red-600">Click to open</p>
    </div>
  );
}
