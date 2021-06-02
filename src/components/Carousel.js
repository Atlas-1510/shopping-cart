import React, { useState } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";

//Carousel images
import Glasses from "../img/carouselImages/Carousel1.jpg";
import Forest from "../img/carouselImages/Carousel2.jpg";
import Shirt from "../img/carouselImages/Carousel3.jpg";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  ${"" /* flex-grow: 1; */}
  background: ${(props) => props.appStyles.primaryColor};
  position: relative;
`;

function Carousel(props) {
  const [carouselElements, setCarouselElements] = useState([
    {
      index: 0,
      img: { Glasses },
      visible: true,
      animationStart: true,
      bigText: "SPRING CLASSICS SALE",
      z: 3,
    },
    {
      index: 1,
      img: { Forest },
      visible: true,
      bigText: "WINTER BUNDLES",
      animationStart: false,
      z: 2,
    },
    {
      index: 2,
      img: { Shirt },
      visible: false,
      bigText: "JERSEY & VEST BUNDLES ",
      animationStart: false,
      z: 1,
    },
  ]);

  const cycleCarousel = (previous) => {
    let current = previous === carouselElements.length - 1 ? 0 : previous + 1;
    let next = current === carouselElements.length - 1 ? 0 : current + 1;
    let newCarousel = [...carouselElements];
    newCarousel.map((element) => {
      element.z = element.z + carouselElements.length;
      if (element.index === previous) {
        element.visible = false;
        element.animationStart = false;
        element.z = carouselElements[next].z - 1;
      } else if (element.index === current) {
        element.visible = true;
        element.animationStart = true;
      } else if (element.index === next) {
        element.visible = true;
        element.animationStart = false;
      } else {
        element.visible = false;
        element.animationStart = false;
      }
    });
    setCarouselElements(newCarousel);
  };
  return (
    <Container appStyles={props.appStyles}>
      {carouselElements.map((slide) => {
        return (
          <CarouselItem
            displayItem={slide}
            cycleCarousel={cycleCarousel}
            key={slide.index}
          />
        );
      })}
    </Container>
  );
}

export default Carousel;
