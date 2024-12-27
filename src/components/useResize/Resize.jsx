import React, { useEffect } from "react";
import useResize from "./useResize";

const Resize = () => {
  const { width, height } = useResize();

  return (
    <div className="w-full h-[50vh] min-h-[200px] flex items-center justify-center flex-col gap-12 bg-slate-700 text-white">
      <div>
        <p>
          width :{" "}
          <span className="text-yellow-300 font-semibold text-xl">{width}</span>
        </p>
        <p>
          height :{" "}
          <span className="text-yellow-300 font-semibold text-xl">
            {height}
          </span>
        </p>
      </div>

      <p className="text-[10px] text-slate-500">
        resize your window to see the changes
      </p>
    </div>
  );
};

export default Resize;
