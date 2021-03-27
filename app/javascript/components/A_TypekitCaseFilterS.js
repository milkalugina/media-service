import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const P = styled.p`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  color: var(--KindBlue);
  text-align: center;
  background-color: var(--LightBlue);
  padding: 0px 14px;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
`;

class A_TypekitCaseFilterS extends React.Component {
  render () {
    return (
      <P>искусство и культура</P>
    );
  }
}

export default A_TypekitCaseFilterS
