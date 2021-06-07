import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Container = styled.div`
  width: 20rem;
  height: 25rem;
  display: grid;
  grid-template-rows: 80% 10% 10%;
  grid-template-columns: auto;
  grid-template-areas: "image" "category" "title";
`;

const ImageContainer = styled.div`
  width: 100%;
  grid-area: image;
  position: relative;
`;

const ImagePrimary = styled(animated.img)`
  width: 100%;
  position: absolute;
  z-index: 1;
`;

const ImageSecondary = styled.img`
  width: 100%;
  position: absolute;
`;

const Category = styled.span`
  grid-area: category;
  justify-self: center;
  margin: 0.5rem;
  color: #1e73be;
  font-size: 1rem;
  z-index: 2;
`;

const Title = styled.span`
  grid-area: title;
  justify-self: center;
  color: "black";
  font-size: 1.5rem;
  font-family: Tungsten;
  z-index: 2;
`;

function ShopTile({ item }) {
  const [mouseInside, toggle] = useState(false);
  const animation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: mouseInside ? 0 : 1,
    },
  });
  return (
    <Container>
      <ImageContainer
        onMouseEnter={() => toggle(!mouseInside)}
        onMouseLeave={() => toggle(!mouseInside)}
      >
        <ImagePrimary
          src={item.primaryImage}
          style={{
            opacity: animation.opacity,
          }}
        />
        <ImageSecondary src={item.secondaryImage} />
      </ImageContainer>

      <Category>{item.category}</Category>
      <Title>{item.title}</Title>
    </Container>
  );
}

export default ShopTile;
