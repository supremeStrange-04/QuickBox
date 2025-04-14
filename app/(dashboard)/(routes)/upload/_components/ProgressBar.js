import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="bg-gray-400 w-full h-4 mt-3 rounded-full">
      <div
        style={{ width: `${progress}%` }}
        className="p-0.5 bg-blue-400 h-4 text-[10px] rounded-full"
      >
        {" "}
        {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  );
}

export default ProgressBar;
