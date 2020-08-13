import React from "react";
import styled from "styled-components";
import { theme } from "../../../constants/theme";
import MoreIcon from "../../../assets/images/more.svg";
import TimeIcon from "../../../assets/images/clocklight.svg";
import CardAvatar from "./CardAvatar";

// ---------------------------------------------------------------
// ----------CARD ITEM I.E A SINGLE ITEM/BOX ---------------------
// ---------------------------------------------------------------
// Containes the task text, users invovled, date/time, action icon
// ---------------------------------------------------------------

const CardItemStyle = styled.div`
  background: ${theme.whiteColor};
  border-radius: 5px;
  display: block;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;

  .top {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: start;
    p {
      font-size: 10px;
      line-height: 145.1%;
      width: 80%;
      color: ${theme.defaultColor};
    }
  }

  .bottom {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .time-stat {
      display: flex;
      align-items: center;

      p {
        margin-left: 3px;
        font-size: 10px;
        color: ${theme.grayColor};
      }
    }
  }
`;

// Time status component
const TimeStat = () => {
  return (
    <div className="time-stat">
      <img src={TimeIcon} alt="" />
      <p>Due Aug 8</p>
    </div>
  );
};

// Main wrapper with subcomponents
const CardItem = () => {
  return (
    <CardItemStyle>
      <div className="top">
        <p>Apply gredient colours on the dashboard sidenav</p>
        <img src={MoreIcon} alt="" width="15rem" />
      </div>
      <div className="bottom">
        {/* Time */}
        <TimeStat />

        {/* Users Invovled/Assigned */}
        <CardAvatar />
      </div>
    </CardItemStyle>
  );
};

export default CardItem;
