import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: black;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h2`
  font-family: Tungsten;
  font-size: 2rem;
  color: white;
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
  width: 20rem;
  align-items: baseline;
  justify-content: space-around;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
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
        <FooterItem>Contact</FooterItem>
      </LinkContainer>
      <a href="https://github.com/Atlas-1510/shopping-cart">
        <IconContext.Provider value={{ color: "white", size: "3rem" }}>
          <AiFillGithub />
        </IconContext.Provider>
      </a>
    </Container>
  );
}

export default Footer;
