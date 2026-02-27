import { useState } from "react";

const LightsOutOverlay = () => {
  const [started, setStarted] = useState(false);

  if (started) return null;

  return (
    <div
      onClick={() => setStarted(true)}
      className="absolute inset-0 bg-black flex items-center justify-center z-50 cursor-pointer"
    >
      <div className="flex gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 bg-red-600 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default LightsOutOverlay;