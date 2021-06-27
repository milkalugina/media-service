import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const A = styled.a`
font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.3px;
  color: var(--MidBlue);

  &:hover {
    color: var(--KindBlue);
    cursor: pointer;
    decoration: none;
    background-color: none;
  }
`;

class A_TypekitNavigation extends React.Component {
  render () {
    return (
      <A>{this.props.name}</A>
    );
  }
}

export default A_TypekitNavigation
