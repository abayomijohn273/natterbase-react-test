import React from 'react'
import CardList from '../../../../Blocks/Card/CardList';

const ModuleGrid = () => {
    // Sample Modules List
  const renderModulesList = () => {
    const moduleLists = Array.from({ length: 5 }, (_, index) => index);

    return moduleLists.map((moduleList) => <CardList key={moduleList} />);
  };
    return (
        <>
            {renderModulesList()}
        </>
    )
}

export default ModuleGrid
