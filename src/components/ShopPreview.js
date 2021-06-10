import React from "react";
import styled from "styled-components";
import ShopTile from "./ShopTile";
import ButtonTwo from "./ButtonTwo";
import camo1 from "../img/shop/Knights-Of-Suburbia-LS-Jersey-Green-Camo-Male-3Q-600x600.jpg";
import camo2 from "../img/shop/Knights-Of-Suburbia-LS-Jersey-Green-Camo-Female-3Q-600x600.jpg";
import race1 from "../img/shop/Knights-Of-Suburbia-Jersey-Race-2-Male-3QL-600x600.jpg";
import race2 from "../img/shop/Knights-Of-Suburbia-Jersey-Race-2-Male-F-600x600.jpg";
import never1 from "../img/shop/Knights-Of-Suburbia-Jersey-Never-Alone-Male-3QL-600x600.jpg";
import never2 from "../img/shop/Knights-Of-Suburbia-Jersey-Never-Alone-Male-F-600x600.jpg";
import yap1 from "../img/shop/Knights-Of-Suburbia-LS-Jersey-Yapa-Male-3Q-600x600.jpg";
import yap2 from "../img/shop/Knights-Of-Suburbia-LS-Jersey-Yapa-Male-R-600x600.jpg";
import sunrise1 from "../img/shop/Knights-Of-Suburbia-Jersey-Sunrise-Male-3QL-600x600.jpg";
import sunrise2 from "../img/shop/Knights-Of-Suburbia-Jersey-Sunrise-Male-F-600x600.jpg";

const shopItems = [
  {
    category: "Jerseys",
    title: "CAMO LONG SLEEVE JERSEY",
    primaryImage: camo1,
    secondaryImage: camo2,
    onSale: true,
  },
  {
    category: "Jerseys",
    title: "THE RACE JERSEY 2.0",
    primaryImage: race1,
    secondaryImage: race2,
    onSale: false,
  },
  {
    category: "Jerseys",
    title: "NEVER ALONE JERSEY",
    primaryImage: never1,
    secondaryImage: never2,
    onSale: true,
  },
  {
    category: "Jerseys",
    title: "YAPAMEYEPUKA LONG SLEEVE JERSEY",
    primaryImage: yap1,
    secondaryImage: yap2,
    onSale: false,
  },
  {
    category: "Jerseys",
    title: "SUNRISE JERSEY",
    primaryImage: sunrise1,
    secondaryImage: sunrise2,
    onSale: false,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
`;

const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  @media (min-width: 751px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, minmax(150px, 450px));
  }
`;

const Title = styled.h2`
  font-family: Tungsten;
  color: #ff356b;
  font-size: 3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.span`
  font-size: 1.3rem;
  line-height: 1.5;
  font-weight: lighter;
`;

const Link = styled.a`
  text-decoration: none;
  color: #ff356b;
  &:visited {
    color: #ff356b;
  }
`;

function ShopPreview() {
  return (
    <Container>
      <Title>SHOP GEAR</Title>
      <SubTitle>
        $10 from every jersey sale goes to support the work of the{" "}
        <Link href="https://www.lovemeloveyou.org.au/">
          Love Me Love You Foundation
        </Link>
        .
      </SubTitle>
      <Grid>
        {shopItems.map((item) => (
          <ShopTile item={item} />
        ))}
      </Grid>
      <ButtonTwo
        label="SHOP GEAR"
        primaryColor="black"
        secondaryColor="#ff356b"
        primaryTextColor="white"
        secondaryTextColor="black"
      ></ButtonTwo>
    </Container>
  );
}

export default ShopPreview;
