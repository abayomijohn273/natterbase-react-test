import React from "react";
import CardList from "../../../../Blocks/Card/CardList";

// ----------------------------------------------------------------------
// --GENERATE LIST OF ITEMS TO DISPLAY ON MODULE SECTION ON TEST TAB PAGE
// ----------------------------------------------------------------------
const ModuleGrid = () => {
  // Sample Modules List
  const renderModulesList = () => {
    const moduleLists = Array.from({ length: 5 }, (_, index) => index);

    return moduleLists.map((moduleList) => <CardList key={moduleList} />);
  };
  return <>{renderModulesList()}</>;
};

export default ModuleGrid;
