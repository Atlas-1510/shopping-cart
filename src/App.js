import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import IntroBlurb from "./components/IntroBlurb";
import ShopPreview from "./components/ShopPreview";
import Footer from "./components/Footer";

const appStyles = {
  primaryColor: "rgb(252, 252, 252)",
  fontSecondaryColor: "rgb(51, 51, 51)",
};

const AppContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Header appStyles={appStyles} />
      <Carousel appStyles={appStyles} />
      <IntroBlurb />
      <ShopPreview />
      <Footer />
    </AppContainer>
  );
}

export default App;
