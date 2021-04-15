import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitTitleS from './A_TypekitTitleS'
import M_InputGroupUserDataHor from './M_InputGroupUserDataHor'
import A_ButtonBlueMain from './A_ButtonBlueMain'
import A_TypekitFilter from './A_TypekitFilter'
import M_InputGroupUserAttachPhotoHor from './M_InputGroupUserAttachPhotoHor'
import M_SelectHobbies from './M_SelectHobbies'
import M_SelectSkills from './M_SelectSkills'
import M_SelectTypes from './M_SelectTypes'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DIVHOBBIES = styled.div`
  margin-left: 66px;
`;

const DIVSKILLS = styled.div`
  margin-left: 172px;
`;

const DIVTYPES = styled.div`
  margin-left: 162px;
`;

const DIV1 = styled.div`
  margin-left: 92px;
`;

const DIV2 = styled.div`
  margin-left: 76px;
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
  margin-left: 98px;

  &:focus {
    outline-color: var(--MidBlue);
  }

  &::placeholder {
    color: var(--LightBlue);
  }

`;

class O_OrgAccountEditCase extends React.Component {
  render () {
    return (
      <DIV>
      <TITLE><A_TypekitTitleS name="Доброе дело"></A_TypekitTitleS></TITLE>
      <DESCRIPTION>  <A_TypekitFilter name="Заполните форму доброго дела внимательно и аккуратно. После размещения дела модератор проверит все данные и после проверки опубликует его."></A_TypekitFilter></DESCRIPTION>
      <DIVINPUT>
        <A_TypekitFilter name="Название"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVTEXTAREA>
        <A_TypekitFilter name="Сфера волонтерства"></A_TypekitFilter>
        <DIVHOBBIES><M_SelectHobbies></M_SelectHobbies></DIVHOBBIES>
      </DIVTEXTAREA>
      <DIVTEXTAREA>
        <A_TypekitFilter name="Навыки"></A_TypekitFilter>
        <DIVSKILLS><M_SelectSkills></M_SelectSkills></DIVSKILLS>
      </DIVTEXTAREA>
      <DIVTEXTAREA>
        <A_TypekitFilter name="Тип дела"></A_TypekitFilter>
        <DIVTYPES><M_SelectTypes></M_SelectTypes></DIVTYPES>
      </DIVTEXTAREA>
      <DIVINPUT>
        <A_TypekitFilter name="Длительность"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVINPUT>
        <A_TypekitFilter name="Краткое описание"></A_TypekitFilter>
        <INPUTFIELD><INPUT name="text" placeholder=" "></INPUT></INPUTFIELD>
      </DIVINPUT>
      <DIVTEXTAREA>
        <A_TypekitFilter name="Детали"></A_TypekitFilter>
        <DIV2><TEXTAREA name="text" placeholder=" "></TEXTAREA></DIV2>
      </DIVTEXTAREA>
      <DIVTEXTAREA>
        <A_TypekitFilter name="План"></A_TypekitFilter>
        <DIV1><TEXTAREA name="text" placeholder=" "></TEXTAREA></DIV1>
      </DIVTEXTAREA>
      <DIVTEXTAREA>
        <A_TypekitFilter name="Об организаторе"></A_TypekitFilter>
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

export default O_OrgAccountEditCase
