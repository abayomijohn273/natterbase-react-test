import React from "react";
import styled from "styled-components";
import MoreIcon from "../../../assets/images/more.svg";

// ------------------------------------------------------------
// ------ CARD TITLE ------------------------------------------
// ------------------------------------------------------------

const CardTitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    line-height: 19px;
  }
`;
const CardTitle = ({ title, showAction = true }) => {
  return (
    <CardTitleStyle>
      <p className="text-bold">{title || ""}</p>
      
      {/* check if action icon is needed */}
      {showAction ? <img src={MoreIcon} alt="" width="15rem" /> : ""}
    </CardTitleStyle>
  );
};

export default CardTitle;
