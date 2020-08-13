import React from "react";
import styled from "styled-components";
import { theme } from "../../../constants/theme";

// ------------------------------------------------------------
// ----CARD INPUT FOR INPUT NEW TASK/TODOS ON MODULE TAB PAGE -
// ------------------------------------------------------------

const CardInputStyle = styled.textarea`
  margin-top: 1rem;
  background: ${theme.whiteColor};
  border-radius: 5px;
  display: block;
  width: 100%;
  padding: 1rem;
  border: none;
  font-size: 10px;
  font-family: Nunito Sans;
  resize: none;

  &:focus {
    outline: 0;
    border: none;
  }
`;

const CardInput = () => {
  return <CardInputStyle rows="4" placeholder="Write..."></CardInputStyle>;
};

export default CardInput;
