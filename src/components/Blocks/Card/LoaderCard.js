import React from "react";
import styled from "styled-components";

// ------------------------------------------------------------
// ----LOADER CARD FOR AN EMPTY LIST ON MODULES TAB PAGE
// ------------------------------------------------------------
// Reason for using loader: This Card can be use for lazyloading
// -------------------------------------------------------------

const LoaderCardStyle = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  border-radius: 5px;
  display: block;
  width: 100%;
  height: 90%;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const LoaderCard = () => {
  return <LoaderCardStyle />;
};

export default LoaderCard;
