import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageHolder = styled.div`
  width: 300px;
  height: 300px;
  background: pink;
`;

function ItemPage({ item }) {
  return (
    <Container>
      <ImageHolder />
      <h1>Hello from item page</h1>
      <h1>{item.title}</h1>
    </Container>
  );
}

export default ItemPage;
