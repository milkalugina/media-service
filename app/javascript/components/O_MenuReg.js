import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_IconsLogo from './A_IconsLogo'
import M_MenuItemNavigation from './M_MenuItemNavigation'
import M_MenuItemAccount from './M_MenuItemAccount'

const DIV = styled.div`
  display: flex;
  width: 100% - 60px;
  height: 88px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 60px;
  background: #FFFFFF;
  border: 1px solid rgba(35, 51, 99, 0.2);
  position: relative;
`;

const CENTER = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


class O_MenuReg extends React.Component {
  render () {
    return (
      <DIV>
        <A_IconsLogo></A_IconsLogo>
        <CENTER><M_MenuItemNavigation></M_MenuItemNavigation></CENTER>
        <M_MenuItemAccount></M_MenuItemAccount>
      </DIV>
    );
  }
}

export default O_MenuReg
