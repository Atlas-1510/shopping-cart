import React from "react";
import styled from "styled-components";
import ShopCategory from "./ShopCategory";
import jerseys from "../img/categories/jerseys.jpg";
import accessories from "../img/categories/accessories.jpg";
import baselayers from "../img/categories/baselayers.jpg";
import bibs from "../img/categories/bibs.jpg";
import caps from "../img/categories/caps.jpg";
import casual from "../img/categories/casual.jpg";
import jackets from "../img/categories/jackets.jpg";
import socks from "../img/categories/socks.jpg";
import vests from "../img/categories/vests.jpg";
import warmers from "../img/categories/warmers.jpg";

const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionHeader = styled.h2`
  color: white;
  font-family: Tungsten;
  font-size: 2rem;
  margin: 2rem;
`;

const Grid = styled.div`
  width: 90%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: 250px;
  grid-gap: 1rem;
`;

const PlaceHolder = styled.div`
  background: white;
  width: 100%;
  height: 25rem;
`;

const categories = [
  {
    title: "jerseys",
    image: jerseys,
  },
  {
    title: "bibs",
    image: bibs,
  },
  {
    title: "vests",
    image: vests,
  },
  {
    title: "jackets",
    image: jackets,
  },
  {
    title: "baselayers",
    image: baselayers,
  },
  {
    title: "socks",
    image: socks,
  },
  {
    title: "warmers",
    image: warmers,
  },
  {
    title: "caps",
    image: caps,
  },
  {
    title: "accessories",
    image: accessories,
  },
  {
    title: "casual",
    image: casual,
  },
];

function Shop() {
  return (
    <Container>
      <SectionHeader>SHOP</SectionHeader>
      <Grid>
        {categories.map((category) => (
          <ShopCategory category={category} key={category.title} />
        ))}
      </Grid>
    </Container>
  );
}

export default Shop;
