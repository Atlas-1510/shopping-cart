import React from "react";
import styled from "styled-components";
import ButtonTwo from "./ButtonTwo";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: rgb(252, 252, 252);
`;

const CartHolder = styled.div`
  width: 80%;
  max-width: 1000px;
`;

const SectionHeader = styled.h2`
  color: black;
  font-family: Tungsten;
  font-size: 4rem;
  margin: 2rem;
`;

function Cart({ cart, removeCartItem }) {
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
      <CartHolder>
        {cart.map((item) => (
          <Item item={item} removeCartItem={removeCartItem} />
        ))}
      </CartHolder>
      <h2>Total: ${total}</h2>
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

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(235, 235, 235);
  width: 100%;
`;

const Image = styled.img`
  height: 75px;
  margin: 1rem;
`;

const ImageHolder = styled.div`
  border-bottom: 1px solid rgb(235, 235, 235);
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Product = styled.h3`
  color: #ff356b;
  font-weight: bold;
  margin-left: 2rem;
`;

function Item({ item, removeCartItem }) {
  return (
    <ItemContainer>
      <ImageHolder>
        <Image src={item.image} />
      </ImageHolder>
      <ItemDetail>
        <h3>Product:</h3>
        <Product>
          {item.title} - {item.style}, {item.size}
        </Product>
      </ItemDetail>
      <ItemDetail>
        <h3>Price</h3>
        <h3>${item.price}</h3>
      </ItemDetail>
      <ItemDetail>
        <h3>Quantity</h3>
        <h3>{item.quantity}</h3>
      </ItemDetail>
      <ItemDetail>
        <h3>Subtotal</h3>
        <h3>${item.price * item.quantity}</h3>
      </ItemDetail>

      <ButtonTwo
        label="REMOVE"
        primaryColor="#ff356b"
        secondaryColor="black"
        primaryTextColor="black"
        secondaryTextColor="white"
        onClick={() => removeCartItem(item.id)}
      />
    </ItemContainer>
  );
}

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 15% 35% 10% 15% 15% 10%;
//   grid-auto-rows: 75px;
//   width: 90%;
//   justify-items: center;
//   align-items: center;

//   @media (max-width: 700px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//   }
// `;

// const Product = styled.div`
//   color: #ff356b;
//   display: flex;
//   align-items: center;
//   font-weight: bold;
// `;

// const ItemDetail = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: bold;
// `;

// const ImageHolder = styled.img`
//   width: 75px;
//   height: auto;
// `;

// function ItemGenerator({ item, removeCartItem }) {
//   console.log(item);
//   return (
//     <>
//       <ImageHolder src={item.image}></ImageHolder>
//       <Product>
//         {item.title} - {item.style}, {item.size}
//       </Product>
//       <ItemDetail>${item.price}</ItemDetail>
//       <ItemDetail>{item.quantity}</ItemDetail>
//       <ItemDetail>${item.price * item.quantity}</ItemDetail>
//       <button onClick={() => removeCartItem(item.id)}>Remove</button>
//     </>
//   );
// }

// const Total = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// function Cart({ cart, removeCartItem }) {
//   console.log(cart);
//   let total = 0;
//   if (cart.length > 0) {
//     total = cart.reduce(
//       (accumulator, item) => accumulator + item.price * item.quantity,
//       0
//     );
//   }
//   return (
//     <Container>
//       <SectionHeader>CART</SectionHeader>
//       <Grid>
//         <h3></h3>
//         <h3>Product</h3>
//         <h3>Price</h3>
//         <h3>Quantity</h3>
//         <h3>Subtotal</h3>
//         <h3></h3>
//         {cart.map((item) => (
//           <ItemGenerator
//             item={item}
//             key={item.title}
//             removeCartItem={removeCartItem}
//           />
//         ))}
//       </Grid>
//       <Total>
//         <h2>Total: ${total}</h2>
//       </Total>
//       <ButtonTwo
//         label="BUY NOW"
//         primaryColor="#ff356b"
//         secondaryColor="black"
//         primaryTextColor="black"
//         secondaryTextColor="white"
//         onClick={() => {}}
//       />
//     </Container>
//   );
// }

// export default Cart;
