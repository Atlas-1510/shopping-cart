import React, { useState, useEffect } from "react";
import { useTransition } from "@react-spring/web";
import styled from "styled-components";
import CarouselSlide from "./CarouselSlide";
import Image1 from "../img/carouselImages/Carousel1.jpg";
import Image2 from "../img/carouselImages/Carousel2.jpg";
import Image3 from "../img/carouselImages/Carousel3.jpg";

const CarouselContainer = styled.div`
  height: 100%;
  display: flex;
  display-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightyellow;
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  position: relative;
`;

const duration = 8000;

const slideInformation = [
  {
    src: Image1,
    bigText: "SPRING CLASSICS SALE",
    littleText: "30% off Spring Classics Jerseys.",
  },
  {
    src: Image2,
    bigText: "WINTER BUNDLES",
    littleText: "Stay warm, stay strong with the Winter Bundles.",
  },
  {
    src: Image3,
    bigText: "JERSEY & VEST BUNDLES",
    littleText:
      "As the weather gets cooler, bundle up with a vest and jersey combo.",
  },
];

export default function App() {
  const [index, set] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      set((state) => (state + 1) % slideInformation.length);
    }, duration - 500);
    return () => clearTimeout(t);
  }, []);
  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <CarouselContainer>
      <Carousel>
        {transitions((style, i) => {
          return (
            <CarouselSlide
              style={style}
              slide={slideInformation[i]}
              duration={duration}
            />
          );
        })}
      </Carousel>
    </CarouselContainer>
  );
}
