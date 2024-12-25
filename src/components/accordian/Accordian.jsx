import React, { useState } from "react";
import Item from "./Item";

const Accordian = () => {
  const [data, setData] = useState([
    {
      id: 1,
      ques: "this is question number one ?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero deserunt et molestias inventore quidem delectus, sequi quis animi! Nisi consequuntur impedit quidem iste officia sunt unde commodi deleniti! Nobis!",
    },
    {
      id: 2,
      ques: "this is question number two ?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero deserunt et molestias inventore quidem delectus, sequi quis animi! Nisi consequuntur impedit quidem iste officia sunt unde commodi deleniti! Nobis!",
    },
    {
      id: 3,
      ques: "this is question number three ?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero deserunt et molestias inventore quidem delectus, sequi quis animi! Nisi consequuntur impedit quidem iste officia sunt unde commodi deleniti! Nobis!",
    },
    {
      id: 4,
      ques: "this is question number four ?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero deserunt et molestias inventore quidem delectus, sequi quis animi! Nisi consequuntur impedit quidem iste officia sunt unde commodi deleniti! Nobis!",
    },
  ]);
  const [currentShowing, setCurrentShowing] = useState(1);

  return (
    <section className="w-full h-screen bg-violet-600 flex items-center justify-center">
      <div className="max-w-[400px] w-full mx-auto">
        {data.map((item) => (
          <Item
            key={item.id}
            {...item}
            setCurrentShowing={setCurrentShowing}
            currentShowing={currentShowing}
          />
        ))}
      </div>
    </section>
  );
};

export default Accordian;
