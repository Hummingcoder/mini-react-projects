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
import ModalContainer from "./components/modal/ModalContainer";
import ProfileContainer from "./components/github profile/ProfileContainer";

const App = () => {
  return (
    <main>
      <ProfileContainer />
      {/* <Scroll />
      <ImageSlider />
      <QR />
      <Tab />
      <LoadMore />
      <ColorGen />
      <StarContainer />
      <ModalContainer />
      <Accordian />
      <TreeContainer /> */}
    </main>
  );
};

export default App;
