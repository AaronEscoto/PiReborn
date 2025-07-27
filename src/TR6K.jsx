import React, { useEffect, useRef } from 'react';
import phoenixBg from '../assets/tr6k_phoenix.jpg';
import dreadAudio from '../assets/ominous_dread_guitar.ogg';

export default function TR6K() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.loop = true;
      audio.play().catch(err => {
        console.warn('Autoplay blocked:', err);
      });
    }
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#22333B]">
      <audio ref={audioRef} src={dreadAudio} />
      <img
        src={phoenixBg}
        alt="TR6K Phoenix"
        className="absolute top-0 left-0 w-full h-full object-contain z-0 pointer-events-none"
      />
      <div className="absolute bottom-8 w-full text-center text-white/90 font-mono text-xl sm:text-2xl drop-shadow-lg z-10">
      </div>
    </div>
  );
}
