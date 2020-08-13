import React from "react";
import { ModuleStyle } from "./ModuleStyle";
import CardWrapper from "../../../../Blocks/Card/CardWrapper";
import ButtonBlock from "../../../../Blocks/Button/ButtonBlock";
import CardList from "../../../../Blocks/Card/CardList";
import CardInput from "../../../../Blocks/Card/CardInput";
import LoaderCard from "../../../../Blocks/Card/LoaderCard";

// Column component
const Column = ({ title, children }) => {
  return (
    <CardWrapper title={title}>
      <ButtonBlock />
      {children}
    </CardWrapper>
  );
};

// Backlog Column
const BacklogColumn = () => {
  return (
    <Column title="Backlog">
      <CardInput />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
    </Column>
  );
};

const Module = () => {
  return (
    <ModuleStyle>
      <div className="content">
        <BacklogColumn />

        {/* Components with loader card */}
        <Column title="Todo">
          <LoaderCard />
        </Column>
        <Column title="In progress">
          <LoaderCard />
        </Column>
        <Column title="In Review">
          <LoaderCard />
        </Column>
        <Column title="Done">
          <LoaderCard />
        </Column>
        {/* End Components with loader card */}
      </div>
    </ModuleStyle>
  );
};

export default Module;
