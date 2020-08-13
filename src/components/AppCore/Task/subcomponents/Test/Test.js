import React from "react";
import { TestStyle } from "./TestStyle";
import CardWrapper from "../../../../Blocks/Card/CardWrapper";
import OverviewGrid from "./OverviewGrid";
import CardList from "../../../../Blocks/Card/CardList";
import ModuleGrid from "./ModuleGrid";
import AcceptedTestCaseGrid from "./AcceptedTestCaseGrid";

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

const Test = () => {
  return (
    <TestStyle>
      <div className="content">
        <Column title="Modules" showAction={true} height='70vh'>
          <ModuleGrid />
        </Column>
        <Column title="Added Test case" height='70vh'>
          <AcceptedTestCaseGrid />
        </Column>
        <Column title="Quick Overview" height='70vh'>
          <OverviewGrid />
        </Column>
      </div>
    </TestStyle>
  );
};

export default Test;
