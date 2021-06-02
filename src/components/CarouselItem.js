import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const zoomAnimation = keyframes`
0% {
    background-size: 100%;
}
100% {
    background-size: 105%;
}
`;

const ImageHolder = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-position: center center;
  width: 100%;
  height: 100%;
  animation: ${zoomAnimation} 4s linear 1 forwards;
`;

function CarouselItem(props) {
  return (
    <Container>
      <ImageHolder
        src={Object.values(props.displayItem.img)[0]}
        onAnimationEnd={() => {
          props.cycleCarousel(props.displayItem.index);
        }}
      />
    </Container>
  );
}

export default CarouselItem;
