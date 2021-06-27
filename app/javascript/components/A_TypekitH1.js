import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const H1 = styled.h1`
font-family: 'SteinbeckRegular';
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 60px;
  color: var(--KindBlue);
  letter-spacing: 0.1px;
  text-align: center;
`;

class A_TypekitH1 extends React.Component {
  render () {
    return (
        <H1>{this.props.name}</H1>
    );
  }
}

export default A_TypekitH1
