import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

const Container = styled(animated.div)`
  position: relative;
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
  text-decoration: none;
`;

const SaleIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 3px solid #ff356b;
  color: #ff356b;
  font-size: 1.2rem;
  background-color: white;
  position: absolute;
  right: -1rem;
  top: -1rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
    right: -1rem;
    top: -1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function ItemTile({ item, path }) {
  const [mouseInsideImage, toggle] = useState(false);
  const imageAnimation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: mouseInsideImage ? 0 : 1,
    },
  });

  if (item.onSale) {
    return (
      <StyledLink to={path}>
        <Container>
          <SaleIcon>Sale!</SaleIcon>
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
      </StyledLink>
    );
  }

  return (
    <StyledLink to={path}>
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
    </StyledLink>
  );
}

export default ItemTile;
