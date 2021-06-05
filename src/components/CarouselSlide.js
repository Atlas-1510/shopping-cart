import React from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";

const SlideContainer = styled(animated.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const ImageContainer = styled(animated.img)`
  width: 100%;
  position: absolute;
`;

const BigText = styled.span`
  font-family: Tungsten;
  font-weight: 600;
  color: white;
  font-size: 4rem;
  z-index: 10;
  text-align: center;

  @media only screen and (min-width: 900px) {
    font-size: 8rem;
  }
`;

const LittleText = styled.span`
  font-family: Helvetica;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  z-index: 10;
  text-align: center;

  @media only screen and (min-width: 900px) {
    font-size: 1.5;
  }
`;

const useZoomSpring = (duration) => {
  return useSpring({
    from: { number: 1.0 },
    to: { number: 1.1 },
    config: { duration: duration },
  });
};

const CarouselSlide = ({ style, slide, duration }) => {
  const zoom = useZoomSpring(duration);
  return (
    <SlideContainer style={style}>
      <ImageContainer
        src={slide.src}
        style={{
          ...style,
          scale: zoom.number.to((n) => n),
        }}
      />
      <BigText>{slide.bigText}</BigText>
      <LittleText>{slide.littleText}</LittleText>
    </SlideContainer>
  );
};

export default CarouselSlide;
