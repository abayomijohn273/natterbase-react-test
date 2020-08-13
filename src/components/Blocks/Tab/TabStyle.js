import styled from "styled-components";
import { theme } from "../../../constants/theme";

export const TabStyle = styled.div`
  display: grid;
  grid-template-columns: 15% 15% 15% 15% 15% auto;
  gap: 1rem;

  & > div {
    width: 70px;
    padding: 0 1rem 0 0;
    color: ${theme.grayColor};
    text-align: center;
    cursor: pointer;
    margin: auto;

    & span {
      display: block;
      position: relative;
      bottom: -15px;
      height: 2px;
      width: 100%;
      text-align: center;
      margin: auto;
      background: red;
    }
  }
`;
