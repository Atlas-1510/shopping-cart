import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const StyledHeader = styled.header`
  background: ${(props) => props.appStyles.primaryColor};
  color: ${(props) => props.appStyles.fontSecondaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 3rem;
  color: ${(props) => props.appStyles.fontSecondaryColor};
  font-family: Tungsten;
  font-weight: 600;
`;

const NavBar = styled.nav`
  justify-self: end;
  font-family: Helvetica;
  font-weight: 600;
  margin-right: 2rem;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0rem 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const ExpandIconStyles = {
  marginLeft: "0.2rem",
  position: "relative",
  transform: "translate(0px, -1px)",
};

const ShoppingCartIconStyles = {
  position: "relative",
  transform: "translate(0px, -1px)",
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 1rem;
`;

function Header(props) {
  return (
    <StyledHeader appStyles={props.appStyles}>
      <StyledLink to="/">
        <Logo appStyles={props.appStyles}>CYCLING SHOP</Logo>
      </StyledLink>
      <NavBar>
        <List>
          <StyledLink to="/about">
            <NavItem>ABOUT</NavItem>
          </StyledLink>
          <StyledLink to="/shop">
            <NavItem>
              SHOP
              <IconContext.Provider value={{ size: "1.5rem" }}>
                <MdExpandMore style={ExpandIconStyles} />
              </IconContext.Provider>
            </NavItem>
          </StyledLink>
          <NavItem>
            <IconContext.Provider value={{ size: "1.1rem" }}>
              <FaShoppingCart style={ShoppingCartIconStyles} />
            </IconContext.Provider>
          </NavItem>
        </List>
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
