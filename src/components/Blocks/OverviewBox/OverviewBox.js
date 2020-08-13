import React from "react";
import { OverviewBoxStyle } from "./OverviewBoxStyle";
import CartIcon from "../../../assets/images/cart.svg";

// ---------------------------------------------------------------------------
//  GRID-LIKE OVERVIEWBOX DISPLAYED ON QUICK OVERVIEW SECTION ON TEST TAB VIEW
// ---------------------------------------------------------------------------

const OverviewBox = ({ overviewNumber, overviewTitle, bgColor }) => {
  return (
    <OverviewBoxStyle bgColor={bgColor}>
      <div className="container">
        <div className="cart-tag">
          <img src={CartIcon} alt="" />
        </div>
        <div className="">
          <p className="cart-number">{overviewNumber || ""}</p>
        </div>
      </div>
      <div className="container">
        <p className=" text-white">{overviewTitle || ""}</p>
      </div>
    </OverviewBoxStyle>
  );
};

export default OverviewBox;
