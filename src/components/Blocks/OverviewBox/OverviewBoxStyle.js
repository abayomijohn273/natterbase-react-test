import styled from "styled-components";
import { theme } from "../../../constants/theme";

export const OverviewBoxStyle = styled.div`
  background: ${(props) => props.bgColor || "#f15832"};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    .cart-tag {
      width: 34px;
      height: 34px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      padding: 0.8rem;
    }

    .cart-number {
      font-size: 24px;
      line-height: 150%;
      font-weight: 800;
      color: ${theme.whiteColor};
    }
  }
`;
