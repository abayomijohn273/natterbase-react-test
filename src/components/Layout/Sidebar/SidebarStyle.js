import styled from "styled-components";
import { theme } from "../../../constants/theme";
import px2vw from "../../../utils/px2vw";

// Sidebar styling and its subclass
export const SidebarStyle = styled.nav`
  background: ${theme.sideBarBg};
  height: 100%;

  .menu {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    height: 100%;
    width: 100%;

    & .nav-brand {
      height: 12.5%;
    }

    & .top-nav a {
      width: 29px;
      height: 29px;
      text-align: center;
      padding-top: 0.5rem;
      border-radius: 10px;

      &.active {
        background: #23b3e8;
      }
    }

    & .top-nav,
    & .mid-nav,
    & .bottom-nav {
      height: 29.16666%;
      align-self: center;
    }

    & .nav-brand,
    & .top-nav,
    & .mid-nav,
    & .bottom-nav {
      padding: 0.5rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      border-bottom: 1px solid rgba(232, 231, 234, 0.1);
    }

    & .bottom-nav {
      position: relative;
      bottom: 2rem;
      justify-content: center;
      border-bottom: none;
      transition: border 400ms ease-in-out;

      & div:hover {
        border: 1px solid ${theme.primaryColor};
      }
    }
  }

  .top-nav,
  .mid-nav,
  .bottom-nav {
    color: ${theme.whiteColor};
  }
`;
