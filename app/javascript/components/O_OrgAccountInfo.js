import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitTitleS from './A_TypekitTitleS'
import A_ImageAvatarM from './A_ImageAvatarM'
import A_ButtonBlueMain from './A_ButtonBlueMain'
import A_TypekitFilter from './A_TypekitFilter'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 980px;
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
  width: 242px;

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
  margin-left: 22px;
  margin-bottom: 10px;
  margin-right: 90px;

  &:hover {
    background: var(--LightBlue);
  }
`;

const SECONDARYBUTTON2 = styled(SECONDARYBUTTON)`
  margin-left: 227px;
  width: 300px;
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

const IMAGEDIV = styled.div`
  display: flex;
  align-items: center;
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

class O_OrgAccountInfo extends React.Component {
  render () {
    return (
      <DIV>
      <TITLE><A_TypekitTitleS name="Редактирование профиля организации"></A_TypekitTitleS></TITLE>
      <IMAGEDIV>
      <A_ImageAvatarM></A_ImageAvatarM>
      <div><SECONDARYBUTTON>Загрузить новое фото</SECONDARYBUTTON>
      <SECONDARYBUTTON>Удалить фото</SECONDARYBUTTON></div>
      <A_TypekitFilter name="Ваш аватар — одна из определяющих частей вашего профиля. Используйте логотип или фотографию. Это поможет волонтерам составить впечатление о вас."></A_TypekitFilter>
      </IMAGEDIV>
      <DIVINPUT>
        <A_TypekitFilter name="Имя организации"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" " value=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="E-mail"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="email" placeholder=" " value=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Пароль"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="password" placeholder=" " value=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Телефон"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="phone" placeholder=" " value=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Страна"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" " value=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Город"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" " value=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <SECONDARYBUTTON2>Изменить</SECONDARYBUTTON2>
      </DIV>
    );
  }
}

export default O_OrgAccountInfo
