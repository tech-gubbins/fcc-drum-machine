import React, { useState } from "react";
import DrumPad from "./DrumPad";

const DrumMachine = () => {
    const [display, setDisplay] = useState("Ready");
    const [volume, setVolume] = useState(1); // Volume ranges from 0 to 1
    const [power, setPower] = useState(true);

    const pads = [
        { key: "Q", id: "pad-q", sound: "sound1.mp3", label: "Sound 1" },
        { key: "W", id: "pad-w", sound: "sound2.mp3", label: "Sound 2" },
        { key: "E", id: "pad-e", sound: "sound3.mp3", label: "Sound 3" },
        { key: "A", id: "pad-a", sound: "sound4.mp3", label: "Sound 4" },
        { key: "S", id: "pad-s", sound: "sound5.mp3", label: "Sound 5" },
        { key: "D", id: "pad-d", sound: "sound6.mp3", label: "Sound 6" },
        { key: "Z", id: "pad-z", sound: "sound7.mp3", label: "Sound 7" },
        { key: "X", id: "pad-x", sound: "sound8.mp3", label: "Sound 8" },
        { key: "C", id: "pad-c", sound: "sound9.mp3", label: "Sound 9" },
    ];

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const handlePowerToggle = () => {
        setPower(!power);
    };

    console.log("Current Display:", display); // Debug log

    return (
        <div
            id="container"
            className="drum-machine bg-gray-800 p-6 rounded-lg shadow-lg max-w-4x1 mx-auto">
            <div>
                <div class="bg-gray-900 text-white p-4 rounded-lg shadow-md">
                    <span
                        id="display"
                        class="display text-xl font-semibold">
                        {display}
                    </span>
                </div>
                <div className="controls items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-4 mb-4">
                        <label className="flex items-center text-white space-x-2">
                            <span>Volume:</span>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                disabled={!power}
                                className={`w-32 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer ${
                                    !power
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                            />
                        </label>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <label className="flex items-center text-white space-x-2">
                            <span>Power:</span>
                            <input
                                type="checkbox"
                                checked={power}
                                onChange={handlePowerToggle}
                                className="relative inline-flex items-center cursor-pointer"
                            />
                            <span className="ml-2 text-gray-300">
                                {power ? "On" : "Off"}
                            </span>
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {pads.map((pad) => (
                        <DrumPad
                            key={pad.id}
                            padKey={pad.key}
                            id={pad.id}
                            sound={pad.sound}
                            label={pad.label}
                            setDisplay={setDisplay}
                            volume={volume}
                            power={power}
                            className="bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DrumMachine;
