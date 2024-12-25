import React, { useEffect, useState } from "react";

const Scroll = () => {
  const [scrolled, setscrolled] = useState(0);

  const handleScroll = () => {
    const pageH = document.documentElement.scrollHeight;
    const screenH = document.documentElement.clientHeight;
    const top = document.documentElement.scrollTop;
    const getPercentage = (top / (pageH - screenH)) * 100;
    setscrolled(getPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="fixed top-0 w-full  z-50 p-6">
      <div className=" shadow-md w-full h-[12px] p-1 bg-white flex items-center justify-center rounded-full">
        <div
          className={`bg-emerald-300 h-full rounded-full`}
          style={{
            width: `${scrolled}%`,
            transition: "0.1s linear",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Scroll;
