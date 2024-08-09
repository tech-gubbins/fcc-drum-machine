import React, { useEffect, useRef } from 'react';

const DrumPad = ({ padKey, id, sound, label, setDisplay, volume, power }) => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (!power) return;

    const audio = audioRef.current;
    if (audio) {
      // Reset audio to start and manage volume
      audio.currentTime = 0;
      audio.volume = volume;

      // Play audio and catch any errors
      audio.play().catch((error) => {
        console.error('Error playing sound:', error);
      });

      setDisplay(label); // Update the display with the sound label
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === padKey) {
        playSound();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [padKey, volume, power]);

  return (
    <div className="drum-pad bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none" id={id} onClick={playSound}>
      {padKey}
      <audio ref={audioRef} id={padKey} src={`sounds/${sound}`} className="clip" />
    </div>
  );
};

export default DrumPad;