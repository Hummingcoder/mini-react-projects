import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
const Star = (props) => {
  return (
    <div
      className="cursor-pointer hover:scale-110 p-2"
      onMouseOver={() => props.handleHover(props.index + 1)}
      onMouseLeave={() => props.handleLeave()}
      onClick={() => props.handleClick(props.index)}
    >
      {props.star >= props.index + 1 || props.rating - 1 >= props.index ? (
        <FaStar size={50} />
      ) : (
        <FaRegStar size={50} />
      )}
    </div>
  );
};

export default Star;
