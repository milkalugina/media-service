import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const A = styled.a`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.3px;
  color: var(--MidBlue);
  margin-right: 8px;

  &:hover {
    color: var(--KindBlue);
    cursor: pointer;
    decoration: none;
    background-color: none;
  }
`;

const DIV = styled.div`
  display: flex;
  align-items: center;
`;

class A_TypekitNavigationLinkRight extends React.Component {
  render () {
    return (
      <DIV>
        <A>{this.props.name}</A>
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L8 7.5L1 14" stroke="#233363" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </DIV>
    );
  }
}

export default A_TypekitNavigationLinkRight
