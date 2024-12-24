import React, { useState } from "react";

const Item = (props) => {
  return (
    <div className="border border-slate-300 rounded-lg bg-gray-100 m-2 px-3 py-2">
      <button
        className="cursor-pointer w-full text-left font-bold"
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
