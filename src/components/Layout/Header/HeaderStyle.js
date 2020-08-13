import styled from "styled-components";
import { theme } from "../../../constants/theme";

// Styling for header and it's subclass

export const HeaderStyle = styled.header`
  background: ${theme.headerBg};
  height: 86px;
  display: grid;
  grid-template-columns: 7% 26% 25% 17% 25%;

  .grid-item {
    align-self: center;
    display: flex;
    align-items: center;
  }
  .grid-item:first-child {
    justify-content: center;
  }

  .title-section {
    .title {
      margin-left: 0.7rem;
      line-height: 13px;
      font-family: Futura;
      font-size: 18px;
    }

    i {
      position: relative;
      top: 5px;
      margin-left: 0.5rem;
    }
  }

  .search-section {
    &::before {
      content: "";
      width: 2px;
      height: 30px;
      background: ${theme.defaultColor};
      opacity: 0.1;
      margin-right: 0.5rem;
    }

    input,
    input:focus {
      margin-left: 1rem;
      background: transparent;
      border: none;
      outline: 0;
      color: rgba(45, 45, 45, 0.3);
    }
  }

  .status-section {
    width: 100%;
    justify-content: space-evenly;

    .success-tag {
      display: flex;
      align-items: center;
      height: 21px;
      font-size: 10px;
      color: ${theme.whiteColor};
      background: ${theme.successBg};
      border-radius: 5px;
      padding: 0.4rem 0.8rem;

      .line {
        margin: auto 0.5rem;
        position: relative;
        width: 1px;
        height: 10px;
        opacity: 0.15;
        background: #fcfcfc;
      }

      p {
        margin-top: 0.1rem;
      }
    }
  }

  .profile-section {
    justify-content: space-start;

    .profile-detail {
      display: flex;
      margin-right: 1.5rem;

      & > div {
        margin-left: 1rem;

        small {
          color: ${theme.primaryColor};
        }
      }
    }
  }
`;
