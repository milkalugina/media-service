import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const H3 = styled.h3`
font-family:'SteinbeckRegular';
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
`;

class A_TypekitTitleS extends React.Component {
  render () {
    return (
      <H3>{this.props.name}</H3>
    );
  }
}

export default A_TypekitTitleS
