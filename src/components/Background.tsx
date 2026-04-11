const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
      {/* Dot Pattern */}
      <div className="absolute inset-0 h-full w-full opacity-20 overflow-hidden">
        <svg
          className="absolute w-[calc(100%+40px)] h-[calc(100%+40px)] -top-[20px] -left-[20px] animate-slowPan"
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
              {/* Primary 5px star */}
              <path
                d="M2.5 0C2.5 1.2 3.8 2.5 5 2.5C3.8 2.5 2.5 3.8 2.5 5C2.5 3.8 1.2 2.5 0 2.5C1.2 2.5 2.5 1.2 2.5 0Z"
                fill="currentColor"
                opacity="0.8"
              />
              {/* Secondary faint 3px scatter star */}
              <path
                d="M12 10C12 10.8 12.8 11.5 13.5 11.5C12.8 11.5 12 12.2 12 13C12 12.2 11.2 11.5 10.5 11.5C11.2 11.5 12 10.8 12 10Z"
                fill="currentColor"
                opacity="0.4"
              />
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
