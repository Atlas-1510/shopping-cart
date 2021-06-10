import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
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
`;

function ShopCategory(props) {
  const { title, image } = props.category;
  return (
    <Container>
      <ImageHolder>
        <Image src={image} />
      </ImageHolder>
    </Container>
  );
}

export default ShopCategory;
