import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const PRIMARYBUTTON = styled.button`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1px;
  color: var(--White);
  background: var(--KindBlue);
  border: 1px solid #03195A;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  width: 300px;

  &:hover {
    background: var(--MidBlue);
    cursor: pointer;
  }

  &:disabled {
    background: var(--LightBlue);
    border: none;
    cursor: not-allowed;
  }
`;

const SECONDARYBUTTON = styled(PRIMARYBUTTON)`
  color: var(--KindBlue);
  background: none;
  border: 1px solid var(--LightBlue);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;

  &:hover {
    background: var(--LightBlue);
  }
`;

class A_ButtonBlueMain extends React.Component {
  render () {
    return (
      <div>
        <PRIMARYBUTTON disabled="disabled">{this.props.text}</PRIMARYBUTTON>
        <SECONDARYBUTTON>{this.props.text}</SECONDARYBUTTON>
      </div>
    );
  }
}

export default A_ButtonBlueMain
