import React from "react";
import styled from "styled-components";
import { theme } from "../../../constants/theme";
import PlusIcon from "../../../assets/images/plusIcon.svg";

// ------------------------------------------------------------
// ----ADD BUTTON ON THE TOP OF EACH CARD ON MODULE TAB PAGE
// ------------------------------------------------------------

const ButtonBlockStyle = styled.button`
  margin-top: 1rem;
  background: ${theme.whiteColor};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: 0;
  border: none;
  display: block;
  width: 100%;
  height: 30px;
`;
const ButtonBlock = () => {
  return (
    <ButtonBlockStyle>
      <img src={PlusIcon} alt="" />
    </ButtonBlockStyle>
  );
};

export default ButtonBlock;
