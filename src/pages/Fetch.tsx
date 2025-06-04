import { useEffect, useState } from "react";
import { fetchData } from "../data/userData";

const loadingDots = [".", "..", "...", "...."];

const Neofetch = () => {
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState(0);
  const [showFetch, setShowFetch] = useState(false);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev + 1) % loadingDots.length);
    }, 300);

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      clearInterval(dotInterval);
    }, 2000);

    const showDataTimeout = setTimeout(() => {
      setShowFetch(true);
    }, 2300);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(loadingTimeout);
      clearTimeout(showDataTimeout);
    };
  }, []);

  return (
    <div className="h-dvh w-full flex justify-center px-4 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-center text-foreground">
      <div className="w-full max-w-3xl">
        <div className="text-lg sm:text-xl mb-4 text-center font-mono animate-pulse">
          {loading ? `> neofetch${loadingDots[dots]}` : `> neofetch`}
        </div>

        {showFetch && (
          <div className="flex flex-col gap-2 backdrop-blur-md rounded-xl p-4 sm:p-8 border border-gray-400 dark:border-gray-600 font-mono text-sm sm:text-base">
            {fetchData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-1 border-b border-gray-300 dark:border-gray-600 last:border-none"
              >
                <span className="font-semibold text-sm sm:text-base">
                  {item.label}:
                </span>
                <span className="text-right text-green-500">{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Neofetch;
