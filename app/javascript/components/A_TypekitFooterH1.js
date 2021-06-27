import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const P = styled.p`
font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 105%;
  color: var(--White);
`;

class A_TypekitFooterH1 extends React.Component {
  render () {
    return (
      <P>{this.props.name}</P>
    );
  }
}

export default A_TypekitFooterH1
