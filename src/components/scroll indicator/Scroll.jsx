import React, { useEffect } from "react";

const Scroll = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return <div>Scroll</div>;
};

export default Scroll;
