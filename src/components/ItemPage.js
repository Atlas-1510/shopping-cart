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

function ItemPage() {
  return (
    <Container>
      <ImageHolder />
    </Container>
  );
}

export default ItemPage;
