import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitTitleS from './A_TypekitTitleS'
import M_InputGroupUserDataHor from './M_InputGroupUserDataHor'
import A_ButtonBlueMain from './A_ButtonBlueMain'
import A_TypekitFilter from './A_TypekitFilter'
import M_InputGroupUserAttachPhotoHor from './M_InputGroupUserAttachPhotoHor'
import M_SelectHobbies from './M_SelectHobbies'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const DIVHOBBIES = styled.div`
  margin-left: 66px;
`;

const TITLE = styled.div`
`;

const BUTTONS = styled.div`
  margin-left: 229px;
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;

const DESCRIPTION = styled.div`
  width: 413px;
  margin-bottom: 10px;
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

const DIVTEXTAREA = styled.div`
  display: flex;
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

const TEXTAREA = styled.textarea`
  color:  var(--KindBlue);
  font-family: Basis Grotesque Pro;
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
  margin-left: 168px;

  &:focus {
    outline-color: var(--MidBlue);
  }

  &::placeholder {
    color: var(--LightBlue);
  }

`;

class O_OrgAccountEditNews extends React.Component {
  render () {
    return (
      <DIV>
      <TITLE><A_TypekitTitleS name="Новость"></A_TypekitTitleS></TITLE>
      <DESCRIPTION>  <A_TypekitFilter name="Заполните форму новости внимательно и аккуратно. После размещения новости модератор проверит все данные и после проверки опубликует ее."></A_TypekitFilter></DESCRIPTION>
      <DIVINPUT>
        <A_TypekitFilter name="Заголовок"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVTEXTAREA>
        <A_TypekitFilter name="Сфера волонтерства"></A_TypekitFilter>
        <DIVHOBBIES><M_SelectHobbies></M_SelectHobbies></DIVHOBBIES>
      </DIVTEXTAREA>
      <DIVTEXTAREA>
        <A_TypekitFilter name="Контент"></A_TypekitFilter>
        <TEXTAREA name="text" placeholder=" "></TEXTAREA>
      </DIVTEXTAREA>
      <M_InputGroupUserAttachPhotoHor></M_InputGroupUserAttachPhotoHor>
      <BUTTONS>
      <SECONDARYBUTTON>Разместить</SECONDARYBUTTON>
      <SECONDARYBUTTON>Удалить</SECONDARYBUTTON>
      </BUTTONS>
      </DIV>
    );
  }
}

export default O_OrgAccountEditNews
