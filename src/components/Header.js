import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { HiShoppingCart } from "react-icons/hi";
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
  margin: 1rem;
  color: ${(props) => props.appStyles.fontSecondaryColor};
  font-family: Tungsten;
  font-weight: 600;
`;

const NavBar = styled.nav`
  justify-self: end;
  font-family: Helvetica;
  font-weight: 600;
  margin: 0.5rem 1rem;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0rem 1rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const ExpandIconStyles = {
  marginLeft: "0.2rem",
  position: "relative",
  transform: "translate(0px, -1px)",
};

function Header(props) {
  return (
    <StyledHeader appStyles={props.appStyles}>
      <Logo appStyles={props.appStyles}>CYCLING SHOP</Logo>
      <NavBar>
        <List>
          <NavItem>ABOUT</NavItem>
          <NavItem>
            SHOP
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <MdExpandMore style={ExpandIconStyles} />
            </IconContext.Provider>
          </NavItem>
          <NavItem>
            <HiShoppingCart />
          </NavItem>
        </List>
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
