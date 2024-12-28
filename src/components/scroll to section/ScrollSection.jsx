import React, { useRef } from "react";

const ScrollSection = () => {
  const compref = useRef([]);
  const compData = [
    {
      title: "first section",
      color: "bg-red-500",
    },
    {
      title: "second section",
      color: "bg-green-500",
    },
    {
      title: "third section",
      color: "bg-blue-500",
    },
  ];

  function scrollTo(i) {
    const pos = compref.current[i].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section className="w-full min-h-screen p-8 bg-yellow-500 flex flex-col gap-7">
      <div className="flex  flex-wrap items-center justify-center gap-2 my-20">
        {compData.map((comp, i) => (
          <button
            key={comp.title}
            onClick={() => scrollTo(i)}
            className="px-3 py-1 border rounded-md border-black bg-white"
          >
            got to {comp.title}
          </button>
        ))}
      </div>
      {compData.map((comp, i) => (
        <div
          key={comp.title}
          ref={(e) => (compref.current[i] = e)}
          className={`min-h-screen w-full rounded-lg flex items-center justify-center ${comp.color} `}
        >
          <p className="text-xl font-semibold">{comp.title}</p>
        </div>
      ))}
    </section>
  );
};

export default ScrollSection;
