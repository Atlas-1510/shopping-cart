import React, { useState } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";

//Carousel images
import Glasses from "../img/carouselImages/Carousel1.jpg";
import Forest from "../img/carouselImages/Carousel2.jpg";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  ${"" /* flex-grow: 1; */}
  background: lightgreen;
`;

const carouselElements = [
  {
    index: 0,
    img: { Glasses },
    text: "Hello World",
  },
  {
    index: 1,
    img: { Forest },
  },
];

function Carousel(props) {
  const [carouselDisplay, setCarouselDisplay] = useState(0);

  const cycleCarousel = (index) => {
    console.log("cycleCarousel activated");
    let nextElement = index + 1;
    console.log(nextElement);
    if (nextElement > carouselElements.length - 1) {
      setCarouselDisplay(0);
    } else {
      setCarouselDisplay(nextElement);
    }
    console.log(carouselDisplay);
  };
  return (
    <Container>
      <CarouselItem
        displayItem={carouselElements[carouselDisplay]}
        key={carouselDisplay}
        cycleCarousel={cycleCarousel}
      ></CarouselItem>
    </Container>
  );
}

export default Carousel;
