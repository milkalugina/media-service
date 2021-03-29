import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitFooterH1 from './A_TypekitFooterH1'
import A_ButtonWhite from './A_ButtonWhite'

const DIV = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TEXT = styled.div`
  margin-right: 42px;
`;

class M_ButtonWriteUs extends React.Component {
  render () {
    return (
      <DIV>
        <TEXT><A_TypekitFooterH1 name="Мы будем рады познакомиться с вами"></A_TypekitFooterH1></TEXT>
        <A_ButtonWhite text="Написать нам"></A_ButtonWhite>
      </DIV>
    );
  }
}

export default M_ButtonWriteUs
