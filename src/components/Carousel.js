import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from "@react-spring/web";
import styled from "styled-components";
import CarouselSlide from "./CarouselSlide";
import Image1 from "../img/carouselImages/Carousel1.jpg";
import Image2 from "../img/carouselImages/Carousel2.jpg";
import Image3 from "../img/carouselImages/Carousel3.jpg";

const duration = 8000;

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

const slideInformation = [
  {
    id: 0,
    src: Image1,
    bigText: "SPRING CLASSICS SALE",
    littleText: "30% off Spring Classics Jerseys.",
  },
  {
    id: 1,
    src: Image2,
    bigText: "WINTER BUNDLES",
    littleText: "Stay warm, stay strong with the Winter Bundles.",
  },
  {
    id: 2,
    src: Image3,
    bigText: "JERSEY & VEST BUNDLES",
    littleText:
      "As the weather gets cooler, bundle up with a vest and jersey combo.",
  },
];

const NavButtonContainerStyled = styled(animated.div)`
  display: flex;
  padding: 0rem 0.5rem;
  z-index: 15;
  position: absolute;
  bottom: 1rem;
  border-radius: 1rem;
`;

function NavButtonContainer(props) {
  const [mouseInside, toggle] = useState(false);
  const { bgOpacity } = useSpring({
    from: { bgOpacity: 0 },
    to: {
      bgOpacity: mouseInside ? 0.5 : 0,
    },
  });
  return (
    <NavButtonContainerStyled
      onMouseEnter={() => toggle(!mouseInside)}
      onMouseLeave={() => toggle(!mouseInside)}
      style={{
        background: bgOpacity.to((v) => `rgba(255, 255, 255, ${v})`),
      }}
    >
      {props.children}
    </NavButtonContainerStyled>
  );
}

const NavButton = styled.span`
  margin: 0.5rem;
  border: none;
  outline: none;
  background: ${(props) => (props.currentSlide ? "white" : "black")};
  opacity: 0.5;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  cursor: pointer;
`;

export default function App() {
  const [index, set] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      set((index) => (index + 1) % slideInformation.length);
    }, duration - 500);
    return () => clearTimeout(t);
  }, [index]);
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
        <NavButtonContainer>
          {slideInformation.map((slide) => {
            return (
              <NavButton
                key={slide.id}
                onClick={() => set(slide.id)}
                currentSlide={slide.id === index ? true : false}
              ></NavButton>
            );
          })}
        </NavButtonContainer>
      </Carousel>
    </CarouselContainer>
  );
}
