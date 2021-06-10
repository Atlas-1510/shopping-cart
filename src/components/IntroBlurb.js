import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import logo from "../img/logo-white.svg";
import ButtonTwo from "./ButtonTwo";

const Container = styled.div`
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContent = styled(animated.div)`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
`;

const Logo = styled(animated.img)`
  width: 4rem;
  margin: 2rem;
`;

const BigText = styled.h2`
  font-family: Tungsten;
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem;
  wrap: nowrap;
`;

const LittleText = styled.div`
  columns: 20rem;
  margin: 1rem;
  max-width: 59rem;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: lighter;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function IntroBlurb() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: inView ? 1 : 0,
    },
  });
  return (
    <Container ref={ref}>
      <TextContent style={{ opacity: fade.opacity }}>
        <Logo src={logo} alt="Shop logo" />
        <BigText>
          WE ROLL DEEP.
          <br></br>
          <br></br>
          WE ROLL FOR BODY. WE ROLL FOR MIND.
          <br></br>WE ROLL FOR OURSELVES. WE ROLL FOR OTHERS.
          <br></br>WE ROLL TOGETHER. WE ROLL APART.
          <br></br>BUT WHEN WE ROLL, WE KNOW
          <br></br>WE’RE NEVER ALONE.
        </BigText>
        <LittleText>
          Knights of Suburbia are a community of women and men with a passion
          for cycling—whether it be crit racing, commuting or coffee shop
          rolling. We cycle for physical and mental health, for the sense of
          community, for adventure and most importantly, for fun.
          <br></br>
          <br></br>
          But what unites us is our mission and sense of purpose: to change the
          culture around mental health by raising awareness, stopping the
          stigma, starting conversations and empowering people to develop
          wellbeing and resilience in overcoming life’s challenges.
        </LittleText>
        <StyledLink to="/about">
          <ButtonTwo
            label="ABOUT US"
            primaryColor="#ff356b"
            secondaryColor="white"
            primaryTextColor="white"
            secondaryTextColor="black"
          />
        </StyledLink>
      </TextContent>
    </Container>
  );
}

export default IntroBlurb;
