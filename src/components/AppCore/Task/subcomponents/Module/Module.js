import React from "react";
import { ModuleStyle } from "./ModuleStyle";
import CardWrapper from "../../../../Blocks/Card/CardWrapper";
import ButtonBlock from "../../../../Blocks/Button/ButtonBlock";
import CardList from "../../../../Blocks/Card/CardList";
import CardInput from "../../../../Blocks/Card/CardInput";
import LoaderCard from "../../../../Blocks/Card/LoaderCard";

const Column = ({ title, children }) => {
  return (
    <CardWrapper title={title}>
      <ButtonBlock />
      {children}
    </CardWrapper>
  );
};
const Module = () => {
  return (
    <ModuleStyle>
      <div className="content">
        <Column title="Backlog">
          <CardInput />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
        </Column>
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
      </div>
    </ModuleStyle>
  );
};

export default Module;
