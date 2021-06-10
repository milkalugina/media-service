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
  color: var(--KindBlue);
  background: var(--White);
  border: 1px solid #03195A;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;

  &:hover {
    background: var(--LightBlue);
    cursor: pointer;
  }
`;

const BLUEBUTTON = styled(BUTTON)`
  color: var(--White);
  background: var(--KindBlue);
  border: 1px solid #03195A;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;

  &:hover {
    background: var(--MidBlue);
  }
`;

class A_ButtonBlueJoin extends React.Component {
  render () {
    return (
      <div>
        <BLUEBUTTON>{this.props.text}</BLUEBUTTON>
        <BUTTON>{this.props.text2}</BUTTON>
      </div>
    );
  }
}

export default A_ButtonBlueJoin
