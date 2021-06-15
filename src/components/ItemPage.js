import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SubmitButton from "./SubmitButton";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ececec;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ImageHolder = styled.img`
  width: 40vw;
  height: auto;
  margin: 1rem;
  max-width: 600px;

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40vw;
  margin: 1rem;
  color: black;

  @media (max-width: 600px) {
    width: 90vw;
  }
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
  line-height: 1.5;
`;

const StyledButton = styled(SubmitButton)`
  margin: 1.5rem 0 0 0;
`;

function ItemPage({ item, setCart }) {
  const [formState, setFormState] = useState({});
  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCart((prevCart) => [
      ...prevCart,
      {
        id: uuidv4(),
        title: item.title,
        price: item.price,
        style: formState.style,
        size: formState.size,
        quantity: formState.quantity,
        image: item.primaryImage,
      },
    ]);
  };
  return (
    <Container>
      <ImageHolder src={item.primaryImage} />
      <Form onSubmit={handleSubmit}>
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
        <label htmlFor="style">
          <h3>Style</h3>
        </label>
        <StyledSelect
          name="style"
          id="style"
          required
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>
            Choose style
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </StyledSelect>
        <label htmlFor="size">
          <h3>Size</h3>
        </label>
        <StyledSelect
          name="size"
          id="size"
          required
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>
            Choose style
          </option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </StyledSelect>

        <label htmlFor="quantity">
          <h3>Quantity</h3>
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          placeholder="1"
          required
          onChange={handleChange}
        />
        <StyledButton
          primaryColor="rgba(0,0,0,0.3)"
          secondaryColor="rgba(164,100,151,0.5)"
          primaryTextColor="white"
          secondaryTextColor="black"
          value="ADD TO CART"
        ></StyledButton>
      </Form>
    </Container>
  );
}

export default ItemPage;
