import React from "react";
import Accordian from "./components/accordian/Accordian";
import ColorGen from "./components/colorGenerator/ColorGen";
import StarContainer from "./components/starRating/StarContainer";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMore from "./components/loadMore/LoadMore";
import TreeContainer from "./components/treeLike/TreeContainer";
import QR from "./components/QR code generator/QR";
import Scroll from "./components/scroll indicator/Scroll";
import Tab from "./components/tab section/Tab";

const App = () => {
  return (
    <main>
      <Scroll />
      <ImageSlider />
      <QR />
      <Tab />
      <LoadMore />
      <ColorGen />
      <StarContainer />
      <Accordian />
      <TreeContainer />
    </main>
  );
};

export default App;
