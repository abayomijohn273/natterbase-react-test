import React, { useState } from "react";
import { TaskHeaderStyle } from "./TaskHeaderStyle";
import Switch from "../../../Blocks/Switch";
import Clock from "../../../../assets/images/clock.svg";
import Calendar from "../../../../assets/images/calendar.svg";
import TabNav from "../../../Blocks/Tab/TabNav";

// ---------------------------------------
// ----TASK HEADER WITH TABS AND DATE/TIME
// ---------------------------------------

const TaskHeader = ({ handleTabClick, activeTab }) => {
  // Toggle switch
  const [isActive, setIsActive] = useState(true);

  // Handle switch toggle
  const handleSwitch = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <TaskHeaderStyle>
      <div className="">
        <TabNav handleTabClick={handleTabClick} activeTab={activeTab} />
      </div>
      <div className="all-task">
        {/* Render screen based on active tab */}
        {activeTab === "Test" ? (
          ""
        ) : (
          <>
            <p className="text-primary text-bold">All Task</p>
            <Switch active={isActive} handleSwitch={handleSwitch} />
            <p
              className={`${isActive ? "text-orange" : "text-gray"} text-bold`}
            >
              All Modules
            </p>
          </>
        )}
      </div>

      {/* Render screen based on active tab */}
      <div className="timeline">
        <img src={activeTab === "Test" ? Calendar : Clock} alt="" />
        <p className="text-success text-bold">
          Project Deadline : {activeTab === "Test" ? "10-june-2020" : "6 weeks"}
        </p>
      </div>
    </TaskHeaderStyle>
  );
};

export default TaskHeader;
