import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  background: Container;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeader = styled.h2`
  color: black;
  font-family: Tungsten;
  font-size: 4rem;
  margin: 2rem;
`;

const LittleText = styled.div`
  margin: 1rem;
  max-width: 59rem;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: lighter;
`;

function About() {
  return (
    <Container>
      <SectionHeader>ABOUT</SectionHeader>
      <LittleText>
        Welcome! This is a mock up of a cycling shop page I created as part of
        The Odin Project. The site you are viewing is based on the real-life
        Knights of Suburbia page, which you can check out{" "}
        <a href="https://knightsofsuburbia.com/">here</a>. Go buy their stuff,
        it's great! To view the source code for this project, checkout my Github
        profile by clicking the icon on the bottom right.
      </LittleText>
    </Container>
  );
}

export default About;
