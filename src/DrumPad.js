import React, { useEffect, useRef } from "react";

// React Component for individual drum pads
const DrumPad = ({ padKey, id, sound, label, setDisplay, volume, power }) => {
    const audioRef = useRef(null);

    const playSound = () => {
        // Check if power switch is 'off', return early if set to 'off'
        if (!power) return;

        const audio = audioRef.current;
        if (audio) {
            // Reset audio to start and manage volume
            audio.currentTime = 0;
            audio.volume = volume;

            // Play audio and catch any errors
            audio.play().catch((error) => {
                console.error("Error playing sound:", error);
            });

            // Update the display with the sound label
            setDisplay(label); 
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key.toUpperCase() === padKey) {
                playSound();
            }
        };

        // Handle event listeners
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [padKey, volume, power]);

    return (
        <div
            className="drum-pad bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none flex items-center justify-center cursor-pointer"
            id={id}
            onClick={playSound}
            aria-label={`Play sound for ${padKey}`}
            role="button"
            tabIndex="0"
        >
            <span className="text-lg font-bold">{padKey}</span>
            <audio
                ref={audioRef}
                id={padKey}
                src={`sounds/${sound}`}
                className="clip"
            />
        </div>
    );
};

export default DrumPad;
