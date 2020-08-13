import React from "react";
import { MainWrapperStyle } from "./MainWrapperStyle";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import PlusBigIcon from "../../../assets/images/plusBig.svg";

// -- Main wrapper of Sidebar, Header -- //

const MainWrapper = (props) => {
  return (
    <MainWrapperStyle>
      <Sidebar />

      {/* Header Start */}
      <div className="section">
        <Header />
        {props.children}
      </div>
      {/*End Header Start */}

      {/* Render the big blue Add icon based on page */}
      {props.canAdd ? (
        <div className="addTask">
          <img src={PlusBigIcon} alt="" />
        </div>
      ) : (
        ""
      )}
      {/* End Render the big blue Add icon based on page */}

      {/* Render the successful box at bottom based on page */}
      {props.addSuccessful ? (
        <div className="addSuccessful">
          <p>Modules have been created sucessfully</p>
        </div>
      ) : (
        ""
      )}
      {/* End Render the successful box at bottom based on page */}
    </MainWrapperStyle>
  );
};

export default MainWrapper;
