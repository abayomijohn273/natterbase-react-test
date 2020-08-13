import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../constants/theme";
import ActionsDropdown from "../../../../Blocks/ActionsDropdown";
import ArrowdownIcon from '../../../../../assets/images/chevron-down-white.svg';

// ----ADDED TEST CASE

const AddedTestCaseGridStyle = styled.div`
  background: ${theme.whiteColor};
  margin-top: 1rem;
  border-radius: 5px;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .case-item .case-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 2.5rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;

    &.active {
      border-left: 1px solid red;
    }

    p {
      width: 66%;
      font-style: normal;
      font-size: 12px;
      line-height: 19px;
    }

    button {
      cursor: default;
      width: 8rem;
      padding: 0 1rem;
      height: 28px;
      border: 2px solid rgba(26, 12, 47, 0.1);
      box-sizing: border-box;
      border-radius: 5px;
      font-size: 12px;
      line-height: 16px;
      color: ${theme.whiteColor};

      &:focus {
        outline: 0;
      }

      img {
        position: relative;
        left: 7px;
      }
    }

    .action-container {
      display: block;
      position: absolute;
      margin-top: 18rem;
      margin-left: 15rem;
      background: ${theme.whiteColor};
      border: 0.5px solid #f2f2f2;
      box-sizing: border-box;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.08);
      padding: 0;
    }
  }

  .newCase {
    display: flex;
    justify-content: space-between;
    padding: 1.8rem 2em 0;
    flex: wrap;
    button {
      font-size: 12px;
      width: 45%;
      display: block;
      padding: 0.7rem 20px;
      border: 2px solid rgba(26, 12, 47, 0.1);
      box-sizing: border-box;
      border-radius: 5px;
    }
  }
`;

// Data displayed
const datas = [
  {
    id: 1,
    description: "Make the background image blur",
    status: "Pass",
  },
  {
    id: 2,
    description: "Apply gredient colours on the navigation",
    status: "Failed",
  },
  {
    id: 3,
    description: "Make the background image blur",
    status: "Retest",
  },
  {
    id: 4,
    description: "Apply gredient colours on the navigation",
    status: "Untest",
  },
  {
    id: 5,
    description: "Make the background image blur",
    status: "Pass",
  },
  {
    id: 6,
    description: "Make the background image blur",
    status: "Failed",
  },
  {
    id: 7,
    description: "Apply gredient colours on the navigation",
    status: "Retest",
  },
  {
    id: 8,
    description: "Make the background image blur",
    status: "Pass",
  },
];

// Cases list item
const CaseItem = () => {
  const [testCases, setTestCase] = useState(datas);
  const [active, setActive] = useState("");
  const [showAction, setShowAction] = useState("");

  // Handle button background color based on test status
  const showBgBasedOnStatus = (value) => {
    switch (value) {
      case "Pass":
        return "bg-success";
      case "Failed":
        return "bg-danger";
      case "Retest":
        return "bg-warning";
      default:
        return "bg-gray";
    }
  };

  //Handle Toggle show dropdown
  const handleCaseAction = (id) => {
    if (id) {
      setShowAction(!showAction);
    }
  };

  return (
    <div className="case-item">
      {testCases.map((data) => (
        <div
          className={`case-list ${active === data.id ? "active" : ""}`}
          key={data.id}
          onClick={() => setActive(data.id)}
        >
          <p>{data.description}</p>
          <button
            className={showBgBasedOnStatus(data.status)}
            onClick={() => handleCaseAction(data.id)}
          >
            {data.status}
            <span><img src={ArrowdownIcon} alt=''/></span>
          </button>

          {/* Toggle dropdown */}
          {showAction && active === data.id ? (
            <div className="action-container">
              <ActionsDropdown isSelected={data.status} />
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

// Test & New Test Case Button
const NewTestCase = () => {
  return (
    <div className="newCase">
      <button className="bg-primary text-white">New Test Case</button>
      <button className="bg-outline-white border-dark">Test</button>
    </div>
  );
};

// --Main component with subcomponents
const AddedTestCaseGrid = () => {
  return (
    <AddedTestCaseGridStyle>
      <CaseItem />
      <NewTestCase />
    </AddedTestCaseGridStyle>
  );
};

export default AddedTestCaseGrid;
