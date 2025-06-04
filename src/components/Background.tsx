const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
      {/* Dot Pattern */}
      <div className="absolute inset-0 h-full w-full opacity-20">
        <svg
          className="w-full h-full animate-slowPan"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#dotPattern)"
            className="text-gray-300 dark:text-gray-600"
          />
        </svg>
      </div>

      {/* Animated Gradient Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob z-0 top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 z-0 bottom-[-100px] right-[-100px]" />
    </div>
  );
};

export default GlobalBackground;
