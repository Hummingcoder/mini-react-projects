import React, { useState } from "react";
import Star from "./Star";

const StarContainer = () => {
  const [star, setStar] = useState(0);
  const [rating, setRating] = useState(0);
  const [starLength, setStarLength] = useState(5);

  const handleHover = (i) => {
    setStar(i);
  };
  const handleLeave = (i) => {
    setStar(0);
  };
  const handleClick = (i) => {
    setRating(i + 1);
  };

  return (
    <section className="h-screen w-full flex items-center justify-center bg-[#4a3f63] ">
      <div className="max-w-[330px] w-fit h-[80px] flex items-center justify-center bg-yellow-500 p-3 rounded-lg m-2 shadow-md">
        {Array(starLength)
          .fill()
          .map((i, index) => (
            <Star
              handleHover={handleHover}
              handleClick={handleClick}
              handleLeave={handleLeave}
              key={index}
              index={index}
              star={star}
              rating={rating}
            />
          ))}
      </div>
    </section>
  );
};

export default StarContainer;
