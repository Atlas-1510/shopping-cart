import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s;
  z-index: ${(props) => props.z};
`;

const zoomAnimation = keyframes`
0% {
    background-size: 100%;
    opacity: 1
}

90% {
  opacity: 1
}
100% {
    background-size: 105%;
    opacity: 0
}
`;

const ImageHolder = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  animation: ${(props) => props.animation} 4s linear 1 forwards;
`;

const Bigtext = styled.span``;
function CarouselItem(props) {
  const { animationStart, visible, img, index, z } = props.displayItem;
  return (
    <Container visible={visible} index={index} z={z}>
      <ImageHolder
        animation={animationStart ? zoomAnimation : "none"}
        img={Object.values(img)[0]}
        onAnimationEnd={() => {
          props.cycleCarousel(index);
        }}
      />
    </Container>
  );
}

export default CarouselItem;
