import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const PATH = styled.path`
  fill: ${props => props.filled ? "var(--KindBlue)" : "none"};
  stroke-width: 2;

  &:hover {
    fill: var(--MidBlue);
    cursor: pointer;
  }
`;

class A_IconsFavouriteM extends React.Component {
  render () {
    return (
      <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <PATH d="M1 1L29 1L29 33.021L16.1864 23.5794C15.4809 23.0596 14.5191 23.0596 13.8136 23.5794L0.999999 33.021L1 1Z" stroke="#03195A" stroke-width="2"/>
      </svg>
    );
  }
}

export default A_IconsFavouriteM
