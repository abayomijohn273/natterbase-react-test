import React from "react";
import { TabStyle } from "./TabStyle";
import { tabNavs } from "./data";

const TabNav = ({ handleTabClick, activeTab }) => {
  return (
    <TabStyle>
      {/* Display list of tab items */}
      {tabNavs.map((tab) => (
        <div
          className={`text-bold ${
            activeTab === tab.title ? "text-orange" : "text-gray"
          }`}
          key={tab.id}
          onClick={() => handleTabClick(tab.title)}
        >
          {tab.title}

          {/* Active Tab line on active */}
          {activeTab === tab.title ? <span /> : ""}
        </div>
      ))}
    </TabStyle>
  );
};

export default TabNav;
