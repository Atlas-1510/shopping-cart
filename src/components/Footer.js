import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: black;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

const Logo = styled.h2`
  font-family: Tungsten;
  font-size: 2rem;
  color: white;
  justify-self: start;
`;

const FooterItem = styled.li`
  cursor: pointer;
  list-style: none;
  &:hover {
    color: #ff356b;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  color: white;
  width: 50%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 2rem;
`;

const StyledAiFillGithub = styled(AiFillGithub)`
  &:hover {
    fill: #ff356b;
  }
`;

const A = styled.a`
  justify-self: end;
  align-self: center;
`;

function Footer() {
  return (
    <Container>
      <Logo>CYCLING SHOP</Logo>
      <LinkContainer>
        <StyledLink to="/about">
          <FooterItem>About</FooterItem>
        </StyledLink>
        <StyledLink to="/shop">
          <FooterItem>Shop</FooterItem>
        </StyledLink>
      </LinkContainer>
      <A href="https://github.com/Atlas-1510/shopping-cart">
        <IconContext.Provider value={{ color: "white", size: "3rem" }}>
          <StyledAiFillGithub />
        </IconContext.Provider>
      </A>
    </Container>
  );
}

export default Footer;
