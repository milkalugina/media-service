import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitNewsFilter from './A_TypekitNewsFilter'
import A_TypekitNewsTime from './A_TypekitNewsTime'
import A_TypekitCaseFilterM from './A_TypekitCaseFilterM'

const DIV = styled.div`
`;

const FILTER = styled.div`
  margin-bottom: 10px;
`;

class M_TypekitGroupCaseDataM extends React.Component {
  render () {
    return (
      <DIV>
      <FILTER><A_TypekitNewsFilter></A_TypekitNewsFilter></FILTER>
      <FILTER><A_TypekitCaseFilterM></A_TypekitCaseFilterM></FILTER>
      <A_TypekitNewsTime name="2 часа назад"></A_TypekitNewsTime>
      </DIV>
    );
  }
}

export default M_TypekitGroupCaseDataM
