import React, { useState } from "react";

const Item = (props) => {
  return (
    <div className="border bg-gray-200 m-2">
      <button
        className="cursor-pointer font-bold"
        onClick={() => props.setCurrentShowing(props.id)}
      >
        {props.ques}
      </button>
      <p
        className={`overflow-hidden w-full h-0 ${
          props.currentShowing === props.id ? "h-fit" : "h-0"
        }`}
      >
        {props.ans}
      </p>
    </div>
  );
};

export default Item;
