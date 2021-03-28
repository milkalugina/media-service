import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitNewsFilter from './A_TypekitNewsFilter'
import A_TypekitNewsTime from './A_TypekitNewsTime'

const DIV = styled.div`
`;

const FILTER = styled.div`
  margin-bottom: 10px;
`;

class M_TypekitGroupNewsData extends React.Component {
  render () {
    return (
      <DIV>
      <FILTER><A_TypekitNewsFilter></A_TypekitNewsFilter></FILTER>
      <A_TypekitNewsTime name="2 часа назад"></A_TypekitNewsTime>
      </DIV>
    );
  }
}

export default M_TypekitGroupNewsData
