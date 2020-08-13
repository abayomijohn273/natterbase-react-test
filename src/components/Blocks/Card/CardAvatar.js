import React from "react";
import styled from "styled-components";
import Img1 from "../../../assets/images/img1.jpg";
import Img2 from "../../../assets/images/img2.jpg";
import Img3 from "../../../assets/images/img3.jpg";
import Img4 from "../../../assets/images/img4.jpg";
import Avatar from "../Avatar";
import { theme } from "../../../constants/theme";

// ----------------------------------------------
// ----USER ASSIGNED/INVOLVED AVATAR IMAGE
// ----------------------------------------------

// Default image to populate
const avatarImg = [
  {
    id: 1,
    img: `${Img1}`,
  },
  {
    id: 2,
    img: `${Img2}`,
  },
  {
    id: 3,
    img: `${Img3}`,
  },
  {
    id: 4,
    img: `${Img4}`,
  },
];

const CardAvatarStyle = styled.div`
  display: flex;
  flex-direction: row;

  div,
  img {
    margin-left: -4px;
    border-radius: 50px;
  }
`;

// Main Component with subcomponent
const CardAvatar = () => {
  return (
    <CardAvatarStyle>
      {avatarImg.map((avatar) => (
        <div key={avatar.id}>
          <img src={avatar.img} alt="" />
        </div>
      ))}

      {/* special avatar to show other users i.e the count */}
      <Avatar
        tag="+4"
        bgColor="rgba(232, 231, 234, 0.4)"
        color={theme.gray2Color}
        fontSize="5px"
        width="15px"
        height="15px"
      />
    </CardAvatarStyle>
  );
};

export default CardAvatar;
