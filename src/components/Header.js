import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import useWindowDimensions from "./useWindowDimensions";
import { slide as Menu } from "react-burger-menu";

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

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 1rem;

  &:hover {
    color: #ff356b;
  }
`;

const StyledFaShoppingCart = styled(FaShoppingCart)`
  &:hover {
    fill: #ff356b;
  }
`;

const StyledMenu = styled(Menu)`
  z-index: 10;
`;

const hamburgerStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "1.7rem",
    top: "1.7rem",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    top: "0",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

function Header(props) {
  const { width } = useWindowDimensions();
  if (width < 600) {
    return (
      <StyledHeader appStyles={props.appStyles}>
        <StyledLink to="/">
          <Logo appStyles={props.appStyles}>CYCLING SHOP</Logo>
        </StyledLink>
        <StyledMenu styles={hamburgerStyles} right>
          <StyledLink
            to="/about"
            activeStyle={{
              color: "#ff356b",
            }}
          >
            <NavItem>ABOUT</NavItem>
          </StyledLink>
          <StyledLink
            to="/shop"
            activeStyle={{
              color: "#ff356b",
            }}
          >
            <NavItem>
              SHOP
              <IconContext.Provider value={{ size: "1.5rem" }}>
                <MdExpandMore style={ExpandIconStyles} />
              </IconContext.Provider>
            </NavItem>
          </StyledLink>
          <StyledLink
            to="/cart"
            activeStyle={{
              color: "#ff356b",
            }}
          >
            <NavItem>
              <IconContext.Provider value={{ size: "1.1rem" }}>
                <StyledFaShoppingCart style={ShoppingCartIconStyles} />
              </IconContext.Provider>
            </NavItem>
          </StyledLink>
        </StyledMenu>
      </StyledHeader>
    );
  } else {
    return (
      <StyledHeader appStyles={props.appStyles}>
        <StyledLink to="/">
          <Logo appStyles={props.appStyles}>CYCLING SHOP</Logo>
        </StyledLink>
        <NavBar />
      </StyledHeader>
    );
  }
}

export default Header;

const StyledNavBar = styled.nav`
  justify-self: end;
  font-family: Helvetica;
  font-weight: 600;
  margin-right: 2rem;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 601px) {
    display: none;
  }
`;

function NavBar() {
  return (
    <StyledNavBar>
      <List>
        <StyledLink
          to="/about"
          activeStyle={{
            color: "#ff356b",
          }}
        >
          <NavItem>ABOUT</NavItem>
        </StyledLink>
        <StyledLink
          to="/shop"
          activeStyle={{
            color: "#ff356b",
          }}
        >
          <NavItem>
            SHOP
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <MdExpandMore style={ExpandIconStyles} />
            </IconContext.Provider>
          </NavItem>
        </StyledLink>
        <StyledLink
          to="/cart"
          activeStyle={{
            color: "#ff356b",
          }}
        >
          <NavItem>
            <IconContext.Provider value={{ size: "1.1rem" }}>
              <StyledFaShoppingCart style={ShoppingCartIconStyles} />
            </IconContext.Provider>
          </NavItem>
        </StyledLink>
      </List>
    </StyledNavBar>
  );
}
