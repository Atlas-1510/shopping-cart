import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";

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

const Link = styled.a`
  cursor: pointer;
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

function Footer() {
  return (
    <Container>
      <Logo>CYCLING SHOP</Logo>
      <LinkContainer>
        <Link>About</Link>
        <Link>Shop</Link>
        <Link>Contact</Link>
      </LinkContainer>
      <Link href="https://github.com/Atlas-1510/shopping-cart">
        <IconContext.Provider value={{ color: "white", size: "3rem" }}>
          <AiFillGithub />
        </IconContext.Provider>
      </Link>
    </Container>
  );
}

export default Footer;
