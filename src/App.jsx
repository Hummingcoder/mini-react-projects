import React from "react";
import Accordian from "./components/accordian/Accordian";
import ColorGen from "./components/colorGenerator/ColorGen";
import StarContainer from "./components/starRating/StarContainer";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMore from "./components/loadMore/LoadMore";
import TreeContainer from "./treeLike/TreeContainer";

const App = () => {
  return (
    <main>
      <Accordian />
      <ColorGen />
      <StarContainer />
      <ImageSlider />
      <LoadMore />
      <TreeContainer />
    </main>
  );
};

export default App;
