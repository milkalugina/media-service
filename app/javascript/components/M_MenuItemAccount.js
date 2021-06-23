import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_IconsNotifications from './A_IconsNotifications'
import A_IconsAvatar from './A_IconsAvatar'

const DIV = styled.div`
  display: flex;
  align-items: center;
`;

const ITEM = styled.div`
  margin-right: 70px;
`;

const A = styled.a`
  text-decoration: none;
`;

class M_MenuItemAccount extends React.Component {
  render () {
    return (
      <DIV>
        <ITEM><A_IconsNotifications></A_IconsNotifications></ITEM>
      </DIV>
    );
  }
}

export default M_MenuItemAccount
