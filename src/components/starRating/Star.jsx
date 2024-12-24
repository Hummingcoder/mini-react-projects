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
        <FaStar className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
      ) : (
        <FaRegStar className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
      )}
    </div>
  );
};

export default Star;
