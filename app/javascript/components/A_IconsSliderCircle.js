import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const CIRCLE = styled.circle`
  fill: ${props => props.filled ? "var(--KindBlue)" : "none"};
`;

class A_IconsSliderCircle extends React.Component {
  render () {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CIRCLE cx="8" cy="8" r="7.5" stroke="#233363"/>
      </svg>
    );
  }
}

export default A_IconsSliderCircle
