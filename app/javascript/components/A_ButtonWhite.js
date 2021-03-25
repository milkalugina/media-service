import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const BUTTON = styled.button`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1px;
  color: var(--White);
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  background: none;

  &:hover {
    background: rgba(247, 247, 249, 0.2);
    cursor: pointer;
  }
`;

class A_ButtonWhite extends React.Component {
  render () {
    return (
      <BUTTON>{this.props.text}</BUTTON>
    );
  }
}

export default A_ButtonWhite
