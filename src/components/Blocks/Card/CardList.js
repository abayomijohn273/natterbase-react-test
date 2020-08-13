import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

// ------------------------------------------------------------
// ----CARD LIST THAT HOUSE THE CARD ITEM----------------------
// ------------------------------------------------------------
// ----USED MOSTLY WHEN DISPLAYING ITERABLE BOXES  ------------

const CardListStyle = styled.div`
  margin-top: 1rem;
`;

const CardList = () => {
  return (
    <CardListStyle>
      <CardItem />
    </CardListStyle>
  );
};

export default CardList;
