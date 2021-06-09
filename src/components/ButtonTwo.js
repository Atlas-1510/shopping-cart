import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Button = styled(animated.button)`
  background: ${(props) => props.primaryColor};
  border: none;
  padding: 0.5rem 1rem;
  margin: 1rem;
  font-size: 1.2rem;
  font-family: Tungsten;
  cursor: pointer;
`;

function ButtonTwo({
  label,
  primaryColor,
  secondaryColor,
  primaryTextColor,
  secondaryTextColor,
}) {
  const [mouseInside, toggle] = useState(false);
  const spring = useSpring({
    from: {
      bgColor: primaryColor,
      textColor: primaryTextColor,
    },
    to: {
      bgColor: mouseInside ? secondaryColor : primaryColor,
      textColor: mouseInside ? secondaryTextColor : primaryTextColor,
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
