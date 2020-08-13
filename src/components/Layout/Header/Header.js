import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import MenuIcon from "../../../assets/images/menu.svg";
import FCMBLogo from "../../../assets/images/fcmb.svg";
import MoreIcon from "../../../assets/images/more.svg";
import SearchIcon from "../../../assets/images/search.svg";
import AlarmIcon from "../../../assets/images/alarm.svg";
import GuardIcon from "../../../assets/images/guard.svg";
import StatusIcon from "../../../assets/images/status.svg";
import Profile from "../../../assets/images/profile.png";
import ChevDown from "../../../assets/images/chevron-down.svg";

// --Menu Icon -- //
const Menu = () => {
  return (
    <div className="grid-item">
      <img src={MenuIcon} alt="menu" />
    </div>
  );
};

// -- Header name with action icon -- //
const HeaderNameWithAction = () => {
  return (
    <div className="grid-item title-section">
      <img src={FCMBLogo} alt="fcmb" />
      <p className="title">FCMB: Mobile Banking</p>
      <i>
        <img src={MoreIcon} alt="" />
      </i>
    </div>
  );
};

// -- Header Search Box -- //
const Search = () => {
  return (
    <div className="grid-item search-section">
      <img src={SearchIcon} alt="" />
      <input type="search" placeholder="Search" />
    </div>
  );
};

// -- User Stat or Tag
const HeaderStat = () => {
  return (
    <div className="grid-item status-section">
      <img src={AlarmIcon} alt="" />
      <div className="success-tag">
        <img src={GuardIcon} alt="" />
        <div className="line" />
        <p>OWNER</p>
      </div>
      <img src={StatusIcon} alt="" />
    </div>
  );
};

// -- Includes User Avatar, name, email and dropdwon icon -- //
const UserWithDropdownAction = () => {
  return (
    <div className="grid-item profile-section">
      <div className="profile-detail">
        <img src={Profile} alt="" />
        <div className="">
          <p>Chioma Davis</p>
          <small>Chioma@natterbase</small>
        </div>
      </div>
      <div className="">
        <img src={ChevDown} alt="" />
      </div>
    </div>
  );
};

// --Main Wrapper of subcomponents -- //
const Header = () => {
  return (
    <HeaderStyle>
      <Menu />
      <HeaderNameWithAction />
      <Search />
      <HeaderStat />
      <UserWithDropdownAction />
    </HeaderStyle>
  );
};

export default Header;
