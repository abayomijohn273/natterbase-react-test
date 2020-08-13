import React from "react";
import CardTitle from "./CardTitle";

// ------------------------------------------------------------
// ----MAIN CARD WRAPPER WITH THE CARD TITLE AND IT CONTENTS
// ------------------------------------------------------------

const CardWrapper = ({ title, showAction, children, height }) => {
  return (
    <div style={{ height: height || "100vh" }}>
      <CardTitle title={title} showAction={showAction} />
      {children}
    </div>
  );
};

export default CardWrapper;
