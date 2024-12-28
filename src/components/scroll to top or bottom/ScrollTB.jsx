import React, { useEffect, useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const ScrollTB = () => {
  const [showTop, setShowTop] = useState(false);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight - window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    function triggerOnScroll() {
      const screenH = window.innerHeight;
      const currScroll = window.scrollY;
      console.log(showTop);

      if (currScroll > screenH) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    }

    window.addEventListener("scroll", triggerOnScroll);

    return () => window.removeEventListener("scroll", triggerOnScroll);
  }, []);

  return (
    <div className="fixed bottom-12 right-7 z-[9999]  ">
      {showTop ? (
        <button
          className="bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center border border-black"
          onClick={handleToTop}
        >
          <BsArrowUp size={30} />
        </button>
      ) : (
        <button
          className="bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center border border-black"
          onClick={handleToBottom}
        >
          <BsArrowDown size={30} />
        </button>
      )}
    </div>
  );
};

export default ScrollTB;
