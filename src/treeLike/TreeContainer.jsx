import React from "react";
import TreeMain from "./TreeMain";
import data from "./data";

const TreeContainer = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-emerald-900 text-yellow-300">
      <div>
        <TreeMain data={data} />
      </div>
    </section>
  );
};

export default TreeContainer;
