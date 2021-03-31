import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_TypekitSubtitle from './A_TypekitSubtitle'
import A_InputInfoEmptyS from './A_InputInfoEmptyS'
import A_ButtonBlueMain from './A_ButtonBlueMain'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const INPUT = styled.input`
  color:  var(--KindBlue);
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.1px;
  background: none;
  width: 302px;
  border: 1px solid rgba(35, 51, 99, 0.2);
  padding: 13px 29px;

  &:focus {
    outline-color: var(--MidBlue);
  }

  &::placeholder {
    color: var(--LightBlue);
  }
`;

const SUBTITLE = styled.div`
  width: 500px;
  margin-bottom: 30px;
  margin-top: 20px;
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
  width: 360px;
  margin-top: 20px;
  margin-bottom: 10px;

  &:hover {
    background: var(--MidBlue);
    cursor: pointer;
  }

  &:disabled {
    background: var(--LightBlue);
    color: var(--KindBlue);
    border: none;
    cursor: not-allowed;
  }
`;

class O_AccountLogin extends React.Component {
  render () {
    return (
      <DIV>
      <A_TypekitH2 name="Добро пожаловать!"></A_TypekitH2>
      <SUBTITLE><A_TypekitSubtitle name="Войдите в свой аккаунт"></A_TypekitSubtitle></SUBTITLE>
      <INPUT name="phone" placeholder="Номер телефона"></INPUT>
      <INPUT name="password" placeholder="Пароль"></INPUT>
      <PRIMARYBUTTON>Зайти</PRIMARYBUTTON>
      <SUBTITLE><A_TypekitSubtitle name="Забыли пароль?"></A_TypekitSubtitle></SUBTITLE>
      </DIV>
    );
  }
}

export default O_AccountLogin
