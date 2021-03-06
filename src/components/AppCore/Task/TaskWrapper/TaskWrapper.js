import React, { useState } from "react";
import MainWrapper from "../../../Layout/MainWrapper/MainWrapper";
import { TaskWrapperStyle } from "./TaskWrapperStyle";
import TaskHeader from "../TaskHeader/TaskHeader";
import Module from "../subcomponents/Module/Module";
import Test from "../subcomponents/Test/Test";

// -----------------------------------------------
// --TASK WRAPPER WITH HEADER AND CHILDREN I.E BODY
// -----------------------------------------------

const TaskWrapper = ({ canAdd, addSuccessful }) => {
  const [activeTab, setActiveTab] = useState("Modules");

  //Handle Active tab on click
  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  //   Render Page based on Active Tab
  const renderBasedOnActiveTab = (activeTab) => {
    switch (activeTab) {
      case "Module":
        return <Module />;
      case "Test":
        return <Test />;
      default:
        return <Module />;
    }
  };
  return (
    <MainWrapper
      addSuccessful={activeTab === "Modules" ? true : false}
      canAdd={activeTab === "Modules" ? true : false}
    >
      <TaskWrapperStyle>
        <div />
        <div className="content">
          <TaskHeader handleTabClick={handleTabClick} activeTab={activeTab} />

          {renderBasedOnActiveTab(activeTab)}
        </div>
        <div />
      </TaskWrapperStyle>
    </MainWrapper>
  );
};

export default TaskWrapper;
