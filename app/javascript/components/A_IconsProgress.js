import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const CIRCLE = styled.circle`
  fill: var(--LightBlue);
  fill: ${props => props.filled ? "var(--KindBlue)" : "var(--LightBlue)"};
`;

class A_IconsProgress extends React.Component {
  render () {
    return (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#233363" fill-opacity="0.2"/>
      </svg>
    );
  }
}

export default A_IconsProgress
