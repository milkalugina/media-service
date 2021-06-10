import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";


const SVG = styled.svg`
  transform: ${props => props.right ? "rotate(180deg)" : "none"};

  &:hover {
    cursor: pointer;
  }
`;

class A_IconsArrowsLrRight extends React.Component {
  render () {
    return (
      <SVG width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" right>
      <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="#03195A"/>
      <path d="M32 12L18 25L32 38" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </SVG>
    );
  }
}

export default A_IconsArrowsLrRight
