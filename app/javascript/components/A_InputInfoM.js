import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const TEXTAREA = styled.textarea`
  color:  var(--KindBlue);
  font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.1px;
  background: none;
  width: 302px;
  height: 274px;
  border: 1px solid rgba(35, 51, 99, 0.2);
  padding: 13px 29px;

  &:focus {
    outline-color: var(--MidBlue);
  }

  &::placeholder {
    color: var(--LightBlue);
  }

`;

class A_InputInfoM extends React.Component {
  render () {
    return (
      <TEXTAREA name="text" placeholder="Цели и миссия"></TEXTAREA>
    );
  }
}

export default A_InputInfoM
