import React from "react";
import styled from "styled-components";
import { useRouteMatch, Switch, Route } from "react-router";
import ShopCategoryTile from "./ShopCategoryTile";
// Tile images
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
// Jersey images
import camo1 from "../img/items/jerseys/Knights-Of-Suburbia-LS-Jersey-Green-Camo-Male-3Q-600x600.jpg";
import camo2 from "../img/items/jerseys/Knights-Of-Suburbia-LS-Jersey-Green-Camo-Female-3Q-600x600.jpg";
import race1 from "../img/items/jerseys/Knights-Of-Suburbia-Jersey-Race-2-Male-3QL-600x600.jpg";
import race2 from "../img/items/jerseys/Knights-Of-Suburbia-Jersey-Race-2-Male-F-600x600.jpg";
import never1 from "../img/items/jerseys/Knights-Of-Suburbia-Jersey-Never-Alone-Male-3QL-600x600.jpg";
import never2 from "../img/items/jerseys/Knights-Of-Suburbia-Jersey-Never-Alone-Male-F-600x600.jpg";
import yap1 from "../img/items/jerseys/Knights-Of-Suburbia-LS-Jersey-Yapa-Male-3Q-600x600.jpg";
import yap2 from "../img/items/jerseys/Knights-Of-Suburbia-LS-Jersey-Yapa-Male-R-600x600.jpg";
import sunrise1 from "../img/items/jerseys/Knights-Of-Suburbia-Jersey-Sunrise-Male-3QL-600x600.jpg";
import sunrise2 from "../img/items/jerseys/Knights-Of-Suburbia-Jersey-Sunrise-Male-F-600x600.jpg";
import club1 from "../img/items/jerseys/Knights-Of-Suburbia-Jersey-Club-Male-3QL-600x600.jpg";
import club2 from "../img/items/jerseys/Knights-Of-Suburbia-Jersey-Club-Male-F-600x600.jpg";
// Bib images
import navy1 from "../img/items/bibs/navy-bibs-1.jpg";
import navy2 from "../img/items/bibs/navy-bibs-2.jpg";
import black1 from "../img/items/bibs/black-bibs-1.jpg";
import black2 from "../img/items/bibs/black-bibs-2.jpg";
import dark1 from "../img/items/bibs/dark-knight-1.jpg";
import dark2 from "../img/items/bibs/dark-knight-2.jpg";
// Vest images
import yapa1 from "../img/items/vests/yapa1.jpg";
import yapa2 from "../img/items/vests/yapa2.jpg";
import racevest1 from "../img/items/vests/racevest1.jpg";
import racevest2 from "../img/items/vests/racevest2.jpg";
import yellow1 from "../img/items/vests/yellow1.jpg";
import yellow2 from "../img/items/vests/yellow2.jpg";
import blackvest1 from "../img/items/vests/black1.jpg";
import blackvest2 from "../img/items/vests/black2.jpg";

const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const SectionHeader = styled.h2`
  color: white;
  font-family: Tungsten;
  font-size: 4rem;
  margin: 2rem;
`;

const Grid = styled.div`
  width: 90%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: 250px;
  grid-gap: 1rem;
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

const shopItems = {
  jerseys: [
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
    {
      category: "Jerseys",
      title: "THE CLUB JERSEY",
      primaryImage: club1,
      secondaryImage: club2,
      onSale: false,
    },
  ],
  bibs: [
    {
      category: "Bibs",
      title: "THE NAVY BIBS 2.0",
      primaryImage: navy1,
      secondaryImage: navy2,
      onSale: true,
    },
    {
      category: "Bibs",
      title: "THE BLACK BIBS 2.0",
      primaryImage: black1,
      secondaryImage: black2,
      onSale: false,
    },
    {
      category: "Bibs",
      title: "DARK KNIGHT BIBS",
      primaryImage: dark1,
      secondaryImage: dark2,
      onSale: false,
    },
  ],
  vests: [
    {
      category: "Vests",
      title: "YAPAMEYEPUKA VEST",
      primaryImage: yapa1,
      secondaryImage: yapa2,
      onSale: true,
    },
    {
      category: "Vests",
      title: "THE RACE/CLUB VEST 2.0",
      primaryImage: racevest1,
      secondaryImage: racevest2,
      onSale: false,
    },
    {
      category: "Vests",
      title: "THE YELLOW AND GREY VEST",
      primaryImage: yellow1,
      secondaryImage: yellow2,
      onSale: false,
    },
    {
      category: "Vests",
      title: "THE BLACK VEST",
      primaryImage: blackvest1,
      secondaryImage: blackvest2,
      onSale: true,
    },
  ],
};

function Shop() {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Container>
          <SectionHeader>SHOP</SectionHeader>
          <Grid>
            {categories.map((category) => (
              <ShopCategoryTile
                category={category}
                key={category.title}
                path={`${url}/${category.title}`}
              />
            ))}
          </Grid>
        </Container>
      </Route>
      {categories.map((category) => (
        <Route exact path={`${path}/${category.title}`}>
          <ShopCategory
            category={category}
            items={shopItems[category.title] ? shopItems[category.title] : []}
          />
        </Route>
      ))}
    </Switch>
  );
}

export default Shop;
