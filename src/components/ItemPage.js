import React from "react";
import styled from "styled-components";
import ButtonTwo from "./ButtonTwo";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
`;

const ImageHolder = styled.div`
  width: 100%;
  height: 600px;
  background: pink;
  margin: 1rem;
  padding: 1rem;
  margin-left: 10rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 600px;
  margin: 1rem;
  margin-right: 10rem;
  padding: 1rem;
  color: black;
`;

const Title = styled.h2`
  font-family: Tungsten;
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
`;

const Price = styled.h3`
  margin: 0rem;
`;

const StyledP = styled.p`
  line-height: 1.5;
`;

const StyledLi = styled.li`
  line-height: 1.5;
`;

const StyledSelect = styled.select`
  font-size: 1rem;
`;

const StyledButton = styled(ButtonTwo)`
  margin: 1.5rem 0 0 0;
`;

function ItemPage({ item }) {
  return (
    <Container>
      <ImageHolder />
      <Form>
        <Title>{item.title}</Title>
        <Price>${(Math.round(item.price * 100) / 100).toFixed(2)}</Price>
        <StyledP>
          This is where a placeholder description would go for each item. Lorem
          ipsum et nova et vetera abrakadabra etcetera ipso facto yadda yadda.
        </StyledP>
        <p>Features:</p>
        <ul>
          <StyledLi>This is a placeholder feature</StyledLi>
          <StyledLi>This is also a placeholder feature</StyledLi>
          <StyledLi>You get the idea</StyledLi>
        </ul>
        <label for="style">
          <h3>Style</h3>
        </label>
        <StyledSelect name="style" id="style">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </StyledSelect>
        <label for="size">
          <h3>Size</h3>
        </label>
        <StyledSelect name="size" id="size">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </StyledSelect>

        <label for="quantity">
          <h3>Quantity</h3>
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          placeholder="1"
        />
        <StyledButton
          label="ADD TO CART"
          primaryColor="rgba(0,0,0,0.3)"
          secondaryColor="rgba(164,100,151,0.5)"
          primaryTextColor="white"
          secondaryTextColor="black"
        />
      </Form>
    </Container>
  );
}

export default ItemPage;
