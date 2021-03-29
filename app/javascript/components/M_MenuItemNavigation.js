import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH4 from './A_TypekitH4'

const DIV = styled.div`
  display: flex;
`;

const ITEM = styled.div`
  margin-right: 32px;
`;

class M_MenuItemNavigation extends React.Component {
  render () {
    return (
      <DIV>
        <ITEM><A_TypekitH4 name="Дела"></A_TypekitH4></ITEM>
        <ITEM><A_TypekitH4 name="Новости"></A_TypekitH4></ITEM>
        <A_TypekitH4 name="О нас"></A_TypekitH4>
      </DIV>
    );
  }
}

export default M_MenuItemNavigation
