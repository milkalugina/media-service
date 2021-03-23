import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const P = styled.p`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: var(--KindBlue);
`;

class A_TypekitCaseTime extends React.Component {
  render () {
    return (
      <P>{this.props.name}</P>
    );
  }
}

export default A_TypekitCaseTime
