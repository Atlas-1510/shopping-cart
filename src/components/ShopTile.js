import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Container = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0);
  transition: box-shadow 0.3s;
  margin: 2rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  }
`;

const ImageContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const ImagePrimary = styled(animated.img)`
  width: 100%;
  position: absolute;
  z-index: 1;
`;

const ImageSecondary = styled.img`
  width: 100%;
`;

const Category = styled.span`
  justify-self: center;
  margin: 0.5rem;
  color: #1e73be;
  font-size: 1rem;
  text-align: center;
`;

const Title = styled.span`
  justify-self: center;
  color: "black";
  font-size: 1.5rem;
  font-family: Tungsten;
  text-align: center;
`;

function ShopTile({ item }) {
  const [mouseInsideImage, toggle] = useState(false);
  const imageAnimation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: mouseInsideImage ? 0 : 1,
    },
  });
  return (
    <Container>
      <ImageContainer
        onMouseEnter={() => toggle(!mouseInsideImage)}
        onMouseLeave={() => toggle(!mouseInsideImage)}
      >
        <ImagePrimary
          src={item.primaryImage}
          style={{
            opacity: imageAnimation.opacity,
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
