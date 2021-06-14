import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}
  align-items: center;
  width: 90%;
`;

const SectionHeader = styled.h2`
  color: black;
  font-family: Tungsten;
  font-size: 4rem;
  margin: 2rem;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 1fr;
  width: 100%;
`;

const Red = styled.div`
  width: 100vw;
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Item() {
  return;
}

function Cart() {
  return (
    <Red>
      <SectionHeader>CART</SectionHeader>
    </Red>
    // <Container>
    //   <SectionHeader>CART</SectionHeader>
    //   <ItemGrid>
    //     <h3>Camo Long Sleeve Jersey - Men, XL</h3>
    //     <h3>$160.00</h3>
    //     <h3>1</h3>
    //     <h3>$160.00</h3>
    //   </ItemGrid>
    // </Container>
  );
}

export default Cart;
