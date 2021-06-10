import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
// import Carousel from "./components/Carousel";
// import IntroBlurb from "./components/IntroBlurb";
// import ShopPreview from "./components/ShopPreview";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Shop from "./components/Shop";

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
      <BrowserRouter>
        <Header appStyles={appStyles} />
        <Route path="/">
          <Home appStyles={appStyles} />
        </Route>

        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
