import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const H3 = styled.h3`
font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.2px;
  color: var(--KindBlue);
`;

class A_TypekitSubtitle extends React.Component {
  render () {
    return (
      <H3>{this.props.name}</H3>
    );
  }
}

export default A_TypekitSubtitle
