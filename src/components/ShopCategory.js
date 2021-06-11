import React from "react";
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router";
import ItemTile from "./ItemTile";
import ItemPage from "./ItemPage";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

function ShopCategory({ category, items }) {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Container>
          <Grid>
            {items.map((item) => (
              <ItemTile
                item={item}
                key={item.title}
                path={`${url}/${item.title.toLowerCase().replace(/\s+/g, "")}`}
              />
            ))}
          </Grid>
        </Container>
      </Route>
      {items.map((item) => (
        <Route
          exact
          path={`${path}/${item.title.toLowerCase().replace(/\s+/g, "")}`}
        >
          <ItemPage item={item} />
        </Route>
      ))}
    </Switch>
  );
}

export default ShopCategory;
