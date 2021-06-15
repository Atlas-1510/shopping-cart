import React from "react";
import styled from "styled-components";

const SectionHeader = styled.h2`
  color: black;
  font-family: Tungsten;
  font-size: 4rem;
  margin: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 35% 15% 25% 25%;
  grid-auto-rows: 50px;
  width: 90%;
`;

const Blue = styled.div`
  background: blue;
`;

const Yellow = styled.div`
  background: yellow;
`;

const Green = styled.div`
  background: green;
`;

const Pink = styled.div`
  background: pink;
`;

function ItemGenerator({ item }) {
  console.log(item);
  return (
    <>
      <Blue>
        {item.title} - {item.style}, {item.size}
      </Blue>
      <Yellow>{item.price}</Yellow>
      <Green>{item.quantity}</Green>
      <Pink>{item.price * item.quantity}</Pink>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  background: Container;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Cart({ cart }) {
  console.log(cart);
  return (
    <Container>
      <SectionHeader>CART</SectionHeader>
      <Grid>
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Subtotal</h3>
        {cart.map((item) => (
          <ItemGenerator item={item} key={item.title} />
        ))}
      </Grid>
    </Container>
  );
}

export default Cart;
