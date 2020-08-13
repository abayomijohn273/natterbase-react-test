import React from "react";
import styled from "styled-components";
import { theme } from "../../constants/theme";

// ---------------------------------------------------------
// -----AVATAR i.e Round Box with a text or shape in between
// ---------------------------------------------------------

// Avatar style
// NOTE: Some styling are rendered based on the props

const AvatarStyle = styled.div`
  background: ${(props) => props.bgColor || theme.primaryColor};
  border-radius: ${(props) => props.borderRadius || "50px"};
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};

  .tag {
    width: ${(props) => props.width || "24px"};
    height: ${(props) => props.height || "24px"};
    border-radius: ${(props) => props.borderRadius || "50px"};
    color: ${(props) => props.color || theme.whiteColor};
    text-transform: uppercase;
    font-size: ${(props) => props.fontSize || ".8rem"};
    text-align: center;
    position: relative;
    padding-top: ${(props) =>
      props.fontSize === "5px"
        ? ".4rem"
        : props.width === "40px"
        ? "1.2rem"
        : ".6rem"};

    @media screen and (min-width: 1400px){
      padding-top: ${(props) =>
        props.fontSize === "5px"
          ? ".1rem"
          : props.width === "40px"
          ? ".9rem"
          : ".3rem"};
    }
  }
`;

const Avatar = ({
  bgColor,
  borderRadius,
  width,
  height,
  tag,
  color,
  fontSize,
  children,
}) => {
  return (
    <AvatarStyle
      bgColor={bgColor}
      borderRadius={borderRadius}
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
    >
      {tag ? <p className="tag">{tag}</p> : ""}
      {children}
    </AvatarStyle>
  );
};

export default Avatar;
