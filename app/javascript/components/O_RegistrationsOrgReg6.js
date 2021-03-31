import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_TypekitSubtitle from './A_TypekitSubtitle'
import A_ButtonBlueMain from './A_ButtonBlueMain'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

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
  border: 1px solid #233363;
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
  margin-bottom: 30px;

  &:hover {
    background: var(--LightBlue);
  }
`;

const SUBTITLE = styled.div`
  width: 550px;
  margin-bottom: 20px;
`;

const H2 = styled.div`
  width: 805px;
  margin-bottom: 20px;
`;
class O_RegistrationsOrgReg6 extends React.Component {
  render () {
    return (
      <DIV>
        <H2><A_TypekitH2 name="Спасибо за регистрацию!"></A_TypekitH2><A_TypekitH2 name="Начнем делать добрые дела вместе ❤️ "></A_TypekitH2></H2>
        <SUBTITLE><A_TypekitSubtitle name="Разместите свое первое доброе дело и выберите волонтеров для участия. Сделать это можно в личном кабинете"></A_TypekitSubtitle></SUBTITLE>
        <PRIMARYBUTTON>Начать добрые дела</PRIMARYBUTTON>
      </DIV>
    );
  }
}

export default O_RegistrationsOrgReg6
