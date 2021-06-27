import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const A = styled.a`
font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 105%;
  color: var(--White);

  &:hover {
    opacity: 60%;
    cursor: pointer;
    decoration: none;
    background-color: none;
  }
`;

class A_TypekitFooterText extends React.Component {
  render () {
    return (
      <A>{this.props.name}</A>
    );
  }
}

export default A_TypekitFooterText
