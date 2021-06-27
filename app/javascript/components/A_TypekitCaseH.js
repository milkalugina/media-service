import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const H3 = styled.h3`
font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
  color: var(--KindBlue);
`;

class A_TypekitCaseH extends React.Component {
  render () {
    return (
      <H3>{this.props.name}</H3>
    );
  }
}

export default A_TypekitCaseH
