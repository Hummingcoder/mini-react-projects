import React, { useState } from "react";
import foodData from "./data";

const Tab = () => {
  const [currentTab, setcurrentTab] = useState("all");
  const [allTabs, setAllTabs] = useState(() => getTabs());
  const [data, setData] = useState(foodData);

  const handleTabChange = (type) => {
    let newFoods;

    if (type === "all") {
      newFoods = foodData;
    } else {
      newFoods = foodData.filter((item) => item.type === type);
    }
    setcurrentTab(type);
    setData(newFoods);
  };

  function getTabs() {
    let tabs = ["all"];

    foodData.forEach((item) => {
      if (!tabs.includes(item.type)) {
        tabs.push(item.type);
      }
    });

    return tabs;
  }

  return (
    <section className="w-full min-h-screen bg-rose-800 py-6 px-2 ">
      <div className="flex items-center justify-center w-full h-[100px] gap-1 ">
        {allTabs.map((item) => (
          <button
            className={`${
              currentTab === item
                ? "bg-yellow-200 font-bold"
                : "bg-slate-100 font-semibold "
            } rounded-md px-3 py-1 capitalize`}
            onClick={() => handleTabChange(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap w-full max-w-[670px] mx-auto  items-center justify-center gap-4 p-2">
        {data.map((item) => {
          return (
            <div
              className="rounded-md p-4 w-full max-w-[300px] bg-white shadow-md"
              key={item.id}
            >
              <h3 className="font-semibold font-serif text-2xl mb-3">
                {item.name}
              </h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tab;
