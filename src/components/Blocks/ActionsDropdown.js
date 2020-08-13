import React from "react";
import SearchIcon from "../../assets/images/magnify.svg";
import DropdownIcon from "../../assets/images/dropdown.svg";
import styled from "styled-components";
import Checkmark from "../../assets/images/checkmark.svg";

//-------------------------------------------------------------------------
// ---ACTION DROPDOWN CONTROLLING TEST CASE ITEM BUTTON IN TEST TAB SECTION
// ------------------------------------------------------------------------

// --The dropdown style
const ActionsDropdownStyle = styled.div`
  display: block;
  position: relative;
  margin-top: 1rem;
  width: 163px;

  .dropdown-search {
    height: 29px;
    background: rgba(26, 12, 47, 0.06);
    border-radius: 5px;
    width: 87%;
    display: flex;
    justify-content: space-around;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;

    img {
      width: 10%;
    }

    input {
      width: 80%;
      background: transparent;
      outline: 0;
      border: none;
      color: rgba(3, 41, 61, 0.3);
      font-size: 10px;
      padding-left: 1rem;
    }
  }

  .select {
    margin-top: 0.5rem;
    .option {
      display: flex;
      justify-content: space-between;
      align-item: center;
      padding: 0.8rem 1rem 0.8rem 1rem;
      transition: background 200ms ease-in-out;

      &:last-child {
        border-top: 1px solid rgba(169, 165, 175, 0.2);
      }

      &:hover,
      &.active {
        background: rgba(232, 231, 234, 0.3);
      }
    }
  }
`;

// Single row of dropdown option
// NOTE: Checkmark with display if it matched the current value on the button
const Option = ({ title, isSelected }) => {
  return (
    <div className={`option ${isSelected === title ? "active" : ""}`}>
      <p>{title}</p>
      {isSelected === title ? <img src={Checkmark} alt="" /> : ""}
    </div>
  );
};

// List view of the dropdown options
const SelectOptions = ({ isSelected }) => {
  const data = ["Pass", "Failed", "Retest", "Untest"];
  return data.map((d) => (
    <React.Fragment key={d}>
      <Option title={d} isSelect={false} isSelected={isSelected} />
    </React.Fragment>
  ));
};

// Main wrapper with subcomponents
const ActionsDropdown = ({ isSelected }) => {
  return (
    <ActionsDropdownStyle className="dropdown-wrapper">
      <div className="dropdown-search">
        <img src={SearchIcon} alt="" width="10rem" />
        <input type="text" placeholder="Search name" />
        <img src={DropdownIcon} alt="" width="10rem" />
      </div>
      <div className="select">
        <SelectOptions isSelected={isSelected} />
      </div>
    </ActionsDropdownStyle>
  );
};

export default ActionsDropdown;
