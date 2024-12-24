import React from "react";
import TreeItem from "./TreeItem";

const TreeMain = ({ data = [] }) => {
  console.log(data);
  return (
    <ul className="ml-8">
      {data.map((item) => (
        <TreeItem key={item.label} data={item} />
      ))}
    </ul>
  );
};

export default TreeMain;
