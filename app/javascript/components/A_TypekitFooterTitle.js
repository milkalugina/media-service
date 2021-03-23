import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const P = styled.p`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 105%;
  color: var(--White);
  opacity: 60%;
`;

class A_TypekitFooterTitle extends React.Component {
  render () {
    return (
      <P>{this.props.name}</P>
    );
  }
}

export default A_TypekitFooterTitle
