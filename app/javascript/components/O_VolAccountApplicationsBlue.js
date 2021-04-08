import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_CardCase from './M_CardCase'
import A_ButtonColor from './A_ButtonColor'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const REDBUTTON = styled.button`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
  background: var(--LightRed);
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  width: 300px;

  &:hover {
    background: #FFA8A8;
  }
`;

const GREENBUTTON = styled(REDBUTTON)`
  background: var(--LightGreen);

  &:hover {
    background: #BCFFB7;
  }
`;

const LIGHTBUTTON = styled(REDBUTTON)`
  background: var(--LightBlue);

  &:hover {
    background: var(--MidBlue);
  }
`;

class O_VolAccountApplicationsBlue extends React.Component {
  render () {
    return (
      <DIV>
      <LIGHTBUTTON>На рассмотрении организатором</LIGHTBUTTON>
      <M_CardCase></M_CardCase>
      </DIV>
    );
  }
}

export default O_VolAccountApplicationsBlue
