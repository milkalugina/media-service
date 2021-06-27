import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const P = styled.p`
font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: var(--White);
  opacity: 60%;
`;

class A_TypekitFooterEmail extends React.Component {
  render () {
    return (
      <P>{this.props.name}</P>
    );
  }
}

export default A_TypekitFooterEmail
