import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_IconsVolunteer from './A_IconsVolunteer'
import A_TypekitTitleS from './A_TypekitTitleS'
import A_TypekitSubtitle from './A_TypekitSubtitle'

const DIV = styled.div`
  width: 340px;
  height: 380px;
  border: 1px solid rgba(35, 51, 99, 0.2);
  box-sizing: border-box;
  border-radius: 20px;
  text-align: center;

  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(35, 51, 99, 0.15));
    cursor: pointer;
  }
`;

const ICON = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const TEXT = styled.div`
  margin-bottom: 20px;
`;

class M_CardJoinV extends React.Component {
  render () {
    return (
      <DIV>
        <ICON><A_IconsVolunteer></A_IconsVolunteer></ICON>
        <TEXT><A_TypekitTitleS name="Волонтер"></A_TypekitTitleS></TEXT>
        <A_TypekitSubtitle name="Я — практикующий волонтер и я ищу интересные дела"></A_TypekitSubtitle>
      </DIV>
    );
  }
}

export default M_CardJoinV
