import React, { useState } from "react";
import TreeMain from "./TreeMain";

const TreeItem = ({ data = [] }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <li>
      <p className="text-2xl mb-1">
        {data.label}{" "}
        {data.children && data.children.length > 0 && (
          <span
            className="inline-block text-xl pr-2 pl-1 cursor-pointer"
            onClick={() => setShowChildren((prev) => !prev)}
          >
            {showChildren ? "-" : "+"}
          </span>
        )}
      </p>
      {data && data.children && data.children.length && showChildren ? (
        <TreeMain data={data.children} />
      ) : null}
    </li>
  );
};

export default TreeItem;
