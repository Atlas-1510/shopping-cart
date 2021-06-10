import React from "react";
import Carousel from "./Carousel";
import IntroBlurb from "./IntroBlurb";
import ShopPreview from "./ShopPreview";

function Home({ appStyles }) {
  return (
    <>
      <Carousel appStyles={appStyles} />
      <IntroBlurb />
      <ShopPreview />
    </>
  );
}

export default Home;
