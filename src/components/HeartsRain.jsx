export default function HeartsRain() {
  const hearts = Array.from({ length: 200 });

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {hearts.map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-500 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${Math.random() * 24 + 12}px`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
