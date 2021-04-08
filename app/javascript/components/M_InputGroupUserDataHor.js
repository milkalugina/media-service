import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitFilter from './A_TypekitFilter'
import A_InputInfoEmptyS from './A_InputInfoEmptyS'
import A_ButtonBlueMain from './A_ButtonBlueMain'

const DIV = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const INPUT = styled.div`
  position: absolute;
  left: 229px;
`;

class M_InputGroupUserDataHor extends React.Component {
  render () {
    return (
      <DIV>
        <A_TypekitFilter name="Фамилия"></A_TypekitFilter>
        <INPUT><A_InputInfoEmptyS></A_InputInfoEmptyS></INPUT>
      </DIV>
    );
  }
}

export default M_InputGroupUserDataHor
