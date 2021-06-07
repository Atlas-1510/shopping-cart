import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Button = styled(animated.button)`
  background: #ff356b;
  border: none;
  padding: 0.5rem 1rem;
  margin: 1rem;
  font-size: 1rem;
`;

function ButtonTwo({ label }) {
  const [mouseInside, toggle] = useState(false);
  const spring = useSpring({
    from: {
      bgColor: "#ff356b",
      textColor: "white",
    },
    to: {
      bgColor: mouseInside ? "white" : "#ff356b",
      textColor: mouseInside ? "black" : "white",
    },
  });
  return (
    <Button
      onMouseEnter={() => toggle(!mouseInside)}
      onMouseLeave={() => toggle(!mouseInside)}
      style={{
        background: spring.bgColor,
        color: spring.textColor,
      }}
    >
      {label}
    </Button>
  );
}

export default ButtonTwo;
