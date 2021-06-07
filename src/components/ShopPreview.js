import React from "react";
import styled from "styled-components";
import ShopTile from "./ShopTile";
import camo1 from "../img/shop/Knights-Of-Suburbia-LS-Jersey-Green-Camo-Male-3Q-600x600.jpg";
import camo2 from "../img/shop/Knights-Of-Suburbia-LS-Jersey-Green-Camo-Female-3Q-600x600.jpg";
import race1 from "../img/shop/Knights-Of-Suburbia-Jersey-Race-2-Male-3QL-600x600.jpg";
import race2 from "../img/shop/Knights-Of-Suburbia-Jersey-Race-2-Male-F-600x600.jpg";

const shopItems = [
  {
    category: "Jerseys",
    title: "CAMO LONG SLEEVE JERSEY",
    primaryImage: camo1,
    secondaryImage: camo2,
  },
  {
    category: "Jerseys",
    title: "THE RACE JERSEY 2.0",
    primaryImage: race1,
    secondaryImage: race2,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ShopPreview() {
  return (
    <Container>
      <ShopTile item={shopItems[0]} />
    </Container>
  );
}

export default ShopPreview;
