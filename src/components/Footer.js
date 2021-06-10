import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  padding: 0 1rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Logo = styled.h2`
  font-family: Tungsten;
  font-size: 2rem;
  color: white;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 20rem;
  align-items: baseline;
  justify-content: space-around;
  color: white;
`;
const MediaContainer = styled.div``;

function Footer() {
  return (
    <Container>
      <Logo>CYCLING SHOP</Logo>
      <LinkContainer>
        <span>About</span>
        <span>Shop</span>
        <span>Contact</span>
      </LinkContainer>
      <MediaContainer></MediaContainer>
    </Container>
  );
}

export default Footer;
