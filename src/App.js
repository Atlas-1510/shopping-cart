import React from "react";
// import styled from "styled-components";
import Header from "./components/Header";

const appStyles = {
  primaryColor: "rgb(252, 252, 252)",
  fontSecondaryColor: "rgb(51, 51, 51)",
};

function App() {
  return (
    <div>
      <Header appStyles={appStyles} />
    </div>
  );
}

export default App;
