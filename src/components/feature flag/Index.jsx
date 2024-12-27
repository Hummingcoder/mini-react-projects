import React, { useContext, useState } from "react";
import TicTacToe from "../tic tac toe/TicTacToe";
import ColorGen from "../colorGenerator/ColorGen";
import TreeContainer from "../treeLike/TreeContainer";
import Tab from "../tab section/Tab";
import { FeatureFlag } from "./context/Contex";

const Index = () => {
  const { loading, enabledFlags } = useContext(FeatureFlag);

  const compsToRender = [
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showColorGen",
      component: <ColorGen />,
    },
    {
      key: "showTree",
      component: <TreeContainer />,
    },
    {
      key: "showTab",
      component: <Tab />,
    },
  ];
  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>loading...</p>
      </div>
    );
  return (
    <section className="p-5 pt-12 bg-yellow-300 flex flex-col gap-4 justify-start w-full">
      <p className="text-3xl font-bold mx-auto">feature flag</p>
      {compsToRender.map((comp) => {
        return enabledFlags[comp.key] === true ? (
          <div className="rounded-2xl overflow-hidden" key={comp.key}>
            {comp.component}
          </div>
        ) : null;
      })}
    </section>
  );
};

export default Index;
