import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const StyledButton = styled(animated.button)`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 1rem 1rem;
  width: 11rem;
  background: rgba(255, 255, 255, 0);
  color: white;
  border: 2px solid white;
  z-index: 10;
`;

function Button({ label }) {
  const [mouseInside, toggle] = useState(false);
  const { bgOpacity, color } = useSpring({
    from: { bgOpacity: 0, color: "white" },
    to: {
      bgOpacity: mouseInside ? 1 : 0,
      color: mouseInside ? "black" : "white",
    },
  });

  return (
    <StyledButton
      onMouseEnter={() => toggle(!mouseInside)}
      onMouseLeave={() => toggle(!mouseInside)}
      style={{
        background: bgOpacity.to((v) => `rgba(255, 255, 255, ${v})`),
        color: color,
      }}
    >
      {label}
    </StyledButton>
  );
}

export default Button;
