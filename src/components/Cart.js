import React from "react";
import styled from "styled-components";
import ButtonTwo from "./ButtonTwo";

const SectionHeader = styled.h2`
  color: black;
  font-family: Tungsten;
  font-size: 4rem;
  margin: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 15% 35% 10% 15% 15% 10%;
  grid-auto-rows: 75px;
  width: 90%;
  justify-items: center;
  align-items: center;
`;

const Product = styled.div`
  color: #ff356b;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const ItemDetail = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const ImageHolder = styled.img`
  width: 75px;
  height: auto;
`;

function ItemGenerator({ item, removeCartItem }) {
  console.log(item);
  return (
    <>
      <ImageHolder src={item.image}></ImageHolder>
      <Product>
        {item.title} - {item.style}, {item.size}
      </Product>
      <ItemDetail>${item.price}</ItemDetail>
      <ItemDetail>{item.quantity}</ItemDetail>
      <ItemDetail>${item.price * item.quantity}</ItemDetail>
      <button onClick={() => removeCartItem(item.id)}>Remove</button>
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

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Cart({ cart, removeCartItem }) {
  console.log(cart);
  let total = 0;
  if (cart.length > 0) {
    total = cart.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
  }
  return (
    <Container>
      <SectionHeader>CART</SectionHeader>
      <Grid>
        <h3></h3>
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Subtotal</h3>
        <h3></h3>
        {cart.map((item) => (
          <ItemGenerator
            item={item}
            key={item.title}
            removeCartItem={removeCartItem}
          />
        ))}
      </Grid>
      <Total>
        <h2>Total: ${total}</h2>
      </Total>
      <ButtonTwo
        label="BUY NOW"
        primaryColor="#ff356b"
        secondaryColor="black"
        primaryTextColor="black"
        secondaryTextColor="white"
        onClick={() => {}}
      />
    </Container>
  );
}

export default Cart;
