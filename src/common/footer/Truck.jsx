import React, { useRef, useState, useEffect } from "react";
import TruckImg from "../../assets/truck.png"; // Adjust path to your truck image - change
import SirenSound from "../../assets/polic-rolif.mp3"; // Import the audio file directly

const TruckAnimation = () => {
  // Refs for audio elements and nodes
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const bassNodeRef = useRef(null);

  // State management
  const [isPlaying, setIsPlaying] = useState(false);
  //   const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize audio and handle loading states
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Preload the audio
    audio.load();
  }, []);

  const handleTruckClick = async () => {
    if (!audioRef.current) return;
    if (error) return; // Don't proceed if there's an error

    try {
      // Initialize AudioContext on first interaction
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
        const context = audioContextRef.current;

        // Create audio nodes
        const source = context.createMediaElementSource(audioRef.current);
        const bass = context.createBiquadFilter();
        bass.type = "lowshelf";
        bass.frequency.setValueAtTime(200, context.currentTime);
        bass.gain.setValueAtTime(15, context.currentTime); // Increase bass

        // Connect nodes
        source.connect(bass);
        bass.connect(context.destination);

        sourceNodeRef.current = source;
        bassNodeRef.current = bass;
      }

      // Handle play/pause
      if (isPlaying) {
        await audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        // Resume AudioContext if suspended
        if (audioContextRef.current.state === "suspended") {
          await audioContextRef.current.resume();
        }

        audioRef.current.volume = 1.0;
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Audio error:", err);
      setError("Failed to play audio");
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative h-40 w-full overflow-hidden bg-sky-100">
      {/* Siren Sound */}
      <audio ref={audioRef} loop preload="auto">
        <source src={SirenSound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <p className="text-red-500 bg-black bg-opacity-50 px-3 py-1 rounded">
            {error}
          </p>
        </div>
      )}

      {/* Clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-1/4 h-6 w-16 rounded-full bg-white opacity-80"></div>
        <div className="absolute top-8 right-1/3 h-8 w-12 rounded-full bg-white opacity-80"></div>
        <div className="absolute top-12 left-1/4 h-6 w-20 rounded-full bg-white opacity-80"></div>
      </div>

      {/* Truck + Smoke + Siren */}
      <div className="absolute bottom-11 animate-truck-move flex items-end gap-2">
        {/* Smoke */}
        <div className="relative">
          <div className="absolute bottom-2 left-0 w-3 h-3 bg-gray-400 rounded-full opacity-50 animate-smoke1"></div>
          <div className="absolute bottom-3 left-2 w-2.5 h-2.5 bg-gray-300 rounded-full opacity-40 animate-smoke2"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-gray-300 rounded-full opacity-30 animate-smoke3"></div>
        </div>

        {/* Truck with Click + Siren Light */}
        <div className="relative" 
        // onClick={handleTruckClick}
        >
          {/* Siren Lights - make them more visible when audio is playing */}
          {/* <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
            <div
              className={`w-3 h-3 rounded-sm ${
                isPlaying ? "animate-siren-red" : "bg-gray-400"
              }`}
            ></div>
            <div
              className={`w-3 h-3 rounded-sm ${
                isPlaying ? "animate-siren-blue" : "bg-gray-400"
              }`}
            ></div>
          </div> */}
          <img
            src={TruckImg}
            alt="ROLIF INDIA Truck"
            className="h-24 w-auto relative z-10 hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Road */}
      <div className="absolute bottom-0 w-full h-12 bg-gray-700">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-300 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 h-1 w-8 bg-yellow-300 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 h-1 w-8 bg-yellow-300 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-3/4 h-1 w-8 bg-yellow-300 transform -translate-y-1/2"></div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes truck-move {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-truck-move {
          animation: truck-move 10s linear infinite;
        }

        @keyframes smoke1 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          100% {
            transform: translate(-15px, -20px) scale(1.5);
            opacity: 0;
          }
        }
        @keyframes smoke2 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          100% {
            transform: translate(-12px, -18px) scale(1.3);
            opacity: 0;
          }
        }
        @keyframes smoke3 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translate(-10px, -16px) scale(1.1);
            opacity: 0;
          }
        }

        .animate-smoke1 {
          animation: smoke1 1.5s ease-out infinite;
        }
        .animate-smoke2 {
          animation: smoke2 1.8s ease-out infinite;
        }
        .animate-smoke3 {
          animation: smoke3 2s ease-out infinite;
        }

        @keyframes siren-red {
          0%,
          49% {
            background-color: red;
            box-shadow: 0 0 5px red;
          }
          50%,
          100% {
            background-color: #800000;
            box-shadow: 0 0 2px #800000;
          }
        }

        @keyframes siren-blue {
          0%,
          49% {
            background-color: #0000ff;
            box-shadow: 0 0 2px #0000ff;
          }
          50%,
          100% {
            background-color: blue;
            box-shadow: 0 0 5px blue;
          }
        }

        .animate-siren-red {
          animation: siren-red 0.3s infinite;
        }

        .animate-siren-blue {
          animation: siren-blue 0.3s infinite;
        }
      `}</style>
    </div>
  );
};

export default TruckAnimation;
