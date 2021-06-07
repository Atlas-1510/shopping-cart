import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
`;

const ImageContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  position: relative;
`;

const ImagePrimary = styled(animated.img)`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
`;

const ImageSecondary = styled.img`
  min-width: 100%;
  min-height: 100%;
  posotion: absolute;
  opacity: 1;
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
    </Container>
  );
}

export default ShopTile;
