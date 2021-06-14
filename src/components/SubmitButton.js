import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

// Note, used an li not a button element to comply with use of react-router-dom link

const Button = styled(animated.input)`
  background: ${(props) => props.primaryColor};
  border: none;
  padding: 0.5rem 1rem;
  margin: 1rem;
  font-size: 1.2rem;
  font-family: Tungsten;
  list-style: none;
  z-index: 10;
  cursor: pointer;
  value: "ADD TO CART";
`;

function SubmitButton({
  value,
  primaryColor,
  secondaryColor,
  primaryTextColor,
  secondaryTextColor,
  className,
  onClick,
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
      onClick={onClick ? () => onClick() : null}
      onMouseEnter={() => toggle(!mouseInside)}
      onMouseLeave={() => toggle(!mouseInside)}
      style={{
        background: spring.bgColor,
        color: spring.textColor,
      }}
      className={className}
      value={value}
      type="submit"
    ></Button>
  );
}

export default SubmitButton;
