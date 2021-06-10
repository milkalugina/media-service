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

class A_IconsFavouriteS extends React.Component {
  render () {
    return (
      <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <PATH d="M1 0.999999L20 1V24.8998L11.7607 18.2093C11.0261 17.6127 9.9739 17.6127 9.23925 18.2093L1 24.8998L1 0.999999Z" stroke="#03195A" stroke-width="2"/>
      </svg>
    );
  }
}

export default A_IconsFavouriteS
