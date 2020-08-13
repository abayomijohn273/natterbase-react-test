import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

import Futura from "../assets/fonts/futur.ttf";
import Nunito from "../assets/fonts/NunitoSans-Regular.ttf";
import { theme } from "./theme";

// -- Default Styling or Global Styling -- //
export const Global = createGlobalStyle`
    @font-face {
        font-family: Futura;
        src: url(${Futura});
    }

    @font-face {
        font-family: Nunito Sans;
        src: url(${Nunito});
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(14)};

      @media (min-width: 768px) {
        font-size: ${px2vw(14)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(14)};
      }
    }
  body {
    font-family:  Nunito Sans;
    background-color: #E5E5E5;
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  .text-primary {
    color: ${theme.primaryColor};
  }

  .text-orange {
    color: ${theme.activeColor} !important;
  }

  .text-success {
    color: ${theme.successColor};
  }

  .text-white {
    color: ${theme.whiteColor};
  }

  .text-gray {
    color: ${theme.grayColor};
  }

  .text-bold {
    font-weight: bold;
  }

  button {
    font-family: Nunito Sans;
  }

  .bg-success {
    background: ${theme.successBg};
  }

  .bg-danger {
    background: ${theme.dangerBg};
  }

  .bg-warning {
    background: ${theme.orange};
  }

  .bg-gray {
    background: ${theme.grayColor};
  }
  .bg-primary {
    background: ${theme.primaryColor};
  }
  .bg-outline-white {
    background: ${theme.whiteColor};
  }

  .border-dark {
    border: 2px solid #03293D !important;
  }

`;

export default Global;
