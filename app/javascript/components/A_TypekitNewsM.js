import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const H4 = styled.h4`
  font-family: Steinbeck;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
`;

class A_TypekitNewsM extends React.Component {
  render () {
    return (
      <H4>{this.props.name}</H4>
    );
  }
}

export default A_TypekitNewsM
