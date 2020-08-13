import React from "react";
import styled from "styled-components";
import { theme } from "../../constants/theme";

// --------------------------------
// ---- SWITCH TOGGLER CONTROL ---
// --------------------------------

// --Switch style --- //
const SwitchStyle = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 22px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${theme.activeColor};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${theme.activeColor};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const Switch = ({ active, handleSwitch }) => {
  return (
    <SwitchStyle>
      <label className="switch">
        {/* Toggle the switch to true or false */}
        <input
          checked={active ? true : false}
          id="isActive"
          name="isActive"
          onChange={handleSwitch}
          type="checkbox"
          value={active}
        />
        <span className="slider round" />
      </label>
    </SwitchStyle>
  );
};

export default Switch;
