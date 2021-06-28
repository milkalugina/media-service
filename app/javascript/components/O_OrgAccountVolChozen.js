import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_CardVol from './M_CardVol'
import A_ButtonColor from './A_ButtonColor'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const REDBUTTON = styled.button`
font-family:'BasisGrotesquePro-Regular';
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
  width: 413px;

  &:hover {
    /* background: #FFA8A8; */
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
    /* background: var(--MidBlue); */
  }
`;

class O_OrgAccountVolChozen extends React.Component {
  render () {
    return (
      <DIV>
      <M_CardVol></M_CardVol>
      <LIGHTBUTTON>Участвует</LIGHTBUTTON>
      </DIV>
    );
  }
}

export default O_OrgAccountVolChozen
