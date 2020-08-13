import React from "react";
import { SidebarStyle } from "./SidebarStyle";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import ArrowRight from "../../../assets/images/arrowRight.svg";
import { mainNav } from "./data";
import Avatar from "../../Blocks/Avatar";

// -- Sidebar Logo -- //
const SidebarLogo = () => {
  return (
    <div className="nav-brand">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
};

// -- Sidebar Top Navigation i.e Home, etc -- //
const TopSidebarNav = ({ location }) => {
  return (
    <div className="top-nav">
      {/* display data and set active based on site location */}

      {mainNav.map((nav) => (
        <Link
          className={
            location.pathname === `/${nav.title.toLowerCase()}` ? "active" : ""
          }
          key={nav.id}
          to=""
          to={`/${nav.title.toLowerCase()}`}
        >
          <img src={nav.icon} alt={nav.title} />
        </Link>
      ))}
    </div>
  );
};

// -- Sidebar Middle Navigation i.e User Avatar with two letters-- //
const MiddleSidebarNav = () => {
  return (
    <div className="mid-nav">
      <Link to="">
        <Avatar tag="pn" />
      </Link>
      <Link to="">
        <Avatar tag="ji" bgColor="#4DBD98" />
      </Link>
      <Link to="">
        <Avatar tag="lg" bgColor="#3D43A2" />
      </Link>
      <Link to="">
        <Avatar tag="aw" bgColor="#F15832" />
      </Link>
      <Link to="">
        <Avatar tag="aw" bgColor="#004F71" />
      </Link>
    </div>
  );
};

// Sidebar buttom button i.e the big
// button expected to perform some operations
const BottomSidebarNav = () => {
  return (
    <div className="bottom-nav">
      <Link to="">
        <Avatar
          tag={<img src={ArrowRight} alt="" />}
          bgColor="rgba(232, 231, 234, .2)"
          width="40px"
          height="40px"
        />
      </Link>
    </div>
  );
};

// -- Main wrapper of subcomponents -- //
const Sidebar = (props) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <SidebarStyle>
      <div className="menu">
        <SidebarLogo />

        <TopSidebarNav location={location} />

        <MiddleSidebarNav />

        <BottomSidebarNav />
      </div>
    </SidebarStyle>
  );
};

export default Sidebar;
