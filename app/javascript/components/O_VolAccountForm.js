import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitTitleS from './A_TypekitTitleS'
import M_InputGroupUserDataHor from './M_InputGroupUserDataHor'
import A_ButtonBlueMain from './A_ButtonBlueMain'
import A_TypekitFilter from './A_TypekitFilter'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TITLE = styled.div`
  margin-bottom: 20px;
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
  margin-left: 227px;

  &:hover {
    background: var(--LightBlue);
  }
`;

const DIVINPUT = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
`;

const INPUTFIELD = styled.div`
  position: absolute;
  left: 229px;
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
  width: 360px;
  border: 1px solid rgba(35, 51, 99, 0.2);
  padding: 13px 29px;

  &:focus {
    outline-color: var(--MidBlue);
  }

  &::placeholder {
    color: var(--LightBlue);
  }
`;

class O_VolAccountForm extends React.Component {
  render () {
    return (
      <DIV>
      <TITLE><A_TypekitTitleS name="Подробная информация"></A_TypekitTitleS></TITLE>
      <DIVINPUT>
        <A_TypekitFilter name="Волонтерский опыт"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" " value=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Образование"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" " value=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Интересы"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" " value=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Вконтакте"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="link" placeholder=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Facebook"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="link" placeholder=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Instagram"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="link" placeholder=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Тип занятости"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Место работы"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Должность"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <SECONDARYBUTTON>Изменить</SECONDARYBUTTON>
      </DIV>
    );
  }
}

export default O_VolAccountForm
