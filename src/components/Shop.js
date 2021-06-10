import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionHeader = styled.h2`
  color: white;
  font-family: Tungsten;
  font-size: 2rem;
  margin: 2rem;
`;

const Grid = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;

const PlaceHolder = styled.div`
  background: white;
  width: 100%;
  height: 25rem;
`;

function Shop() {
  return (
    <Container>
      <SectionHeader>SHOP</SectionHeader>
      <Grid>
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
        <PlaceHolder />
      </Grid>
    </Container>
  );
}

export default Shop;
