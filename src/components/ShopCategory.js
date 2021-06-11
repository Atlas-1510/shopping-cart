import React from "react";
import styled from "styled-components";
import ItemTile from "./ItemTile";

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
  return (
    <Container>
      <Grid>
        {items.map((item) => (
          <ItemTile item={item} key={item.title} />
        ))}
      </Grid>
    </Container>
  );
}

export default ShopCategory;

// <div>
//   {items.map((item) => (
//     <div>{item.title}</div>
//   ))}
// </div>;
