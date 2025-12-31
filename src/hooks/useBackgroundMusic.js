import { useRef, useState } from "react";

export default function useBackgroundMusic(audioSrc) {
  const audioRef = useRef(new Audio(audioSrc));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    audio.volume = 0.2; // low romantic volume
    audio.loop = true;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return { toggleMusic, isPlaying };
}
