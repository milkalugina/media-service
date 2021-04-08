import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH4 from './A_TypekitH4'
import { Link } from 'react-router-dom';

const DIV = styled.div`
  display: flex;
`;

const ITEM = styled.div`
  margin-right: 32px;
`;

const A = styled.a`
  text-decoration: none;
`;

class M_MenuItemNavigation extends React.Component {
  render () {
    return (
      <DIV>
        <A href="/events"><ITEM><A_TypekitH4 name="Дела"></A_TypekitH4></ITEM></A>
        <A href="/posts"><ITEM><A_TypekitH4 name="Новости"  href="/posts"></A_TypekitH4></ITEM></A>
        <A href="/about"><A_TypekitH4 name="О нас"  href="/about"></A_TypekitH4></A>
      </DIV>
    );
  }
}

export default M_MenuItemNavigation
