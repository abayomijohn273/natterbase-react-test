import styled from "styled-components";
import { theme } from "../../../constants/theme";

export const MainWrapperStyle = styled.main`
    background: ${theme.mainBg};
    display: grid;
    grid-template-columns: 96px auto;
    grid-template-rows: 100vh;

    .addTask {
        position: absolute;
        bottom: 80px;
        right: 2.5%;
      }

    .addSuccessful {
      {
        position: absolute;
        background: ${theme.successBg};
        width: 100%;
        height: 58px;
        bottom: 0px;
        text-align: center;
        padding-top:1.5rem;
        color: ${theme.whiteColor};
      }
    

`;
