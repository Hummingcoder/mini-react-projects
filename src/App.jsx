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
import SearchComp from "./components/search complete/SearchComp";
import TicTacToe from "./components/tic tac toe/TicTacToe";
import Index from "./components/feature flag/Index";
import FeatureFlagProvider from "./components/feature flag/context/Contex";
import Test from "./components/useFetch/Test";
import ClickOut from "./components/useClickOutside/ClickOut";
import Resize from "./components/useResize/Resize";
import ScrollTB from "./components/scroll to top or bottom/ScrollTB";

const App = () => {
  return (
    <main>
      <Scroll />
      <ScrollTB />
      <ProfileContainer />
      <ImageSlider />
      <QR />
      <TicTacToe />
      <Tab />
      <LoadMore />
      <ColorGen />
      <StarContainer />
      <SearchComp />
      <ModalContainer />
      <Accordian />
      <TreeContainer />
      <FeatureFlagProvider>
        <Index />
      </FeatureFlagProvider>
      <Test />
      <ClickOut />
      <Resize />
    </main>
  );
};

export default App;
