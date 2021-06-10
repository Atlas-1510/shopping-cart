import React from "react";
import styled from "styled-components";

import ButtonTwo from "./ButtonTwo";

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageHolder = styled.div`
  min-width: 300px;
  min-height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  transition: all ease 300ms;

  ${Container}:hover & {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const CategoryTitle = styled.h2`
  font-family: Tungsten;
  font-size: 3rem;
  color: white;
  z-index: 10;
`;

function ShopCategory(props) {
  const { title, image } = props.category;
  return (
    <Container>
      <ImageHolder>
        <Image src={image} />
      </ImageHolder>
      <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
      <ButtonTwo
        label={`SHOP ${title.toUpperCase()}`}
        primaryColor="#ff356b"
        secondaryColor="white"
        primaryTextColor="white"
        secondaryTextColor="black"
      />
    </Container>
  );
}

export default ShopCategory;
