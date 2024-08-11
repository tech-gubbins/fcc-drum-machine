import React, { useState } from "react";
import DrumPad from "./DrumPad";

// React component for the whole drum machine
const DrumMachine = () => {
    const [display, setDisplay] = useState("Ready"); // Initialize display with 'Ready', before any pads are hit
    const [volume, setVolume] = useState(1); // Volume ranges from 0 to 1, init to full volume
    const [power, setPower] = useState(true); // Power is boolean, init to 'true'

    // Set props for each pad, and connect sounds/labels/ids
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

    // Allow user to control volume
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    // Allow user to enable/disable power
    const handlePowerToggle = () => {
        setPower(!power);
    };

    return (
        // Main React container
        <div
            id="container"
            className="drum-machine bg-gray-500 p-6 rounded-lg shadow-lg max-w-4x1 mx-auto my-6">
            <div>
                {/* Display container */}
                <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                    {/* Display element */}
                    <span
                        id="display"
                        class="display text-xl font-semibold">
                        {display}
                    </span>
                </div>
                {/* Controls container */}
                <div className="controls items-center space-x-4 m-4 px-16">
                    <label className="flex items-center text-white space-x-2">
                        <label id="volume" className="inline-flex items-center w-3/4">
                            {/* Volume control label */}
                            <span className="m-4">Volume:</span>
                            {/* Volume control element */}
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                disabled={!power}
                                className={`w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer ${
                                    !power
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                            />
                        </label>
                        <label className="flex items-center cursor-pointer w-1/4">
                            {/* Power control label */}
                            <span className="m-2">Power:</span>
                            {/* Power control element */}
                            <input
                                type="checkbox"
                                checked={power}
                                onChange={handlePowerToggle}
                                className="sr-only peer"
                            />
                            {/* Tailwind toggle */}
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            {/* Power control status */}
                            <span class="ms-2 text-sm font-medium text-white">
                                {power ? "On" : "Off"}
                            </span>
                        </label>
                    </label>
                </div>
                {/* Pad elements container */}
                <div className="grid grid-cols-3 gap-4">
                    {/* Collection of pad elements */}
                    {pads.map((pad) => (
                        // Single pad element
                        <DrumPad
                            key={pad.id}
                            padKey={pad.key}
                            id={pad.id}
                            sound={pad.sound}
                            label={pad.label}
                            setDisplay={setDisplay}
                            volume={volume}
                            power={power}
                            className="text-white p-4 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DrumMachine;
