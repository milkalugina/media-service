import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_IconsShareFacebook from './A_IconsShareFacebook'
import A_IconsShareVk from './A_IconsShareVk'
import A_IconsShareOdnoklassniki from './A_IconsShareOdnoklassniki'
import A_IconsShareTelegram from './A_IconsShareTelegram'
import A_IconsShareTwitter from './A_IconsShareTwitter'

const DIV = styled.div`
  display: flex;
`;

const ICON = styled.div`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

class M_NavigationShare extends React.Component {
  render () {
    return (
      <DIV>
        <ICON><A_IconsShareFacebook></A_IconsShareFacebook></ICON>
        <ICON><A_IconsShareVk></A_IconsShareVk></ICON>
        <ICON><A_IconsShareOdnoklassniki></A_IconsShareOdnoklassniki></ICON>
        <ICON><A_IconsShareTelegram></A_IconsShareTelegram></ICON>
        <ICON><A_IconsShareTwitter></A_IconsShareTwitter></ICON>
      </DIV>
    );
  }
}

export default M_NavigationShare
