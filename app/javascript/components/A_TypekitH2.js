import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const H2 = styled.h2`
font-family: 'SteinbeckRegular';
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 120%;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
`;

class A_TypekitH2 extends React.Component {
  render () {
    return (
      <H2>{this.props.name}</H2>
    );
  }
}

export default A_TypekitH2
