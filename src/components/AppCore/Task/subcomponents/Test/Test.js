import React from "react";
import { TestStyle } from "./TestStyle";
import CardWrapper from "../../../../Blocks/Card/CardWrapper";
import OverviewGrid from "./OverviewGrid";
import ModuleGrid from "./ModuleGrid";
import AddedTestCaseGrid from "./AddedTestCaseGrid";

// ----------------------------------------------
// ----MAIN TEST PAGE---------------------------
// ----------------------------------------------

// -- Each Column wrapper Component
const Column = ({ title, children, showAction, height }) => {
  return (
    <CardWrapper
      pageTitle="test"
      title={title}
      showAction={showAction || false}
      height={height}
    >
      {children}
    </CardWrapper>
  );
};

// Main Component with subcomponents
const Test = () => {
  return (
    <TestStyle>
      <div className="content">
        <Column title="Modules" showAction={true} height="70vh">
          <ModuleGrid />
        </Column>
        <Column title="Added Test case" height="70vh">
          <AddedTestCaseGrid />
        </Column>
        <Column title="Quick Overview" height="70vh">
          <OverviewGrid />
        </Column>
      </div>
    </TestStyle>
  );
};

export default Test;
