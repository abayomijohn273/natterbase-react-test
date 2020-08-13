import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../constants/theme";
import OverviewBox from "../../../../Blocks/OverviewBox/OverviewBox";

const OverviewGridStyle = styled.div`
  background: ${theme.whiteColor};
  margin-top: 1rem;
  padding: 3rem 3.2rem 3rem 2.5rem;
  border-radius: 5px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 2rem 1rem;
  width: 100%;
  padding-bottom: 8.2rem;
`;

const OverviewGrid = () => {
  return (
    <OverviewGridStyle>
      <OverviewBox overviewNumber="20" overviewTitle="Total Modules" bgColor={theme.orange}/>
      <OverviewBox overviewNumber="20" overviewTitle="Improvement" bgColor={theme.deepGreen}/>
      <OverviewBox overviewNumber="14" overviewTitle={`Total Modules test`} bgColor={theme.blue}/>
      <OverviewBox overviewNumber="20" overviewTitle="Total Failed" bgColor={theme.pink}/>
      <OverviewBox overviewNumber="20" overviewTitle="Total Passed" bgColor={theme.green}/>
      <OverviewBox overviewNumber="20" overviewTitle="Total Untested" bgColor={theme.purple}/>
    </OverviewGridStyle>
  );
};

export default OverviewGrid;
