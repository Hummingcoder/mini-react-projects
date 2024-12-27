import React, { useLayoutEffect, useState } from "react";

const useResize = () => {
  const [size, setsize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize() {
    setsize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ...size };
};

export default useResize;
