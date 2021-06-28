import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_ImageAvatarM from './A_ImageAvatarM'
import A_TypekitH2 from './A_TypekitH2'
import A_TypekitNewsFilter from './A_TypekitNewsFilter'
import A_TypekitText from './A_TypekitText'
import A_ButtonBlueMain from './A_ButtonBlueMain'
import A_ButtonColor from './A_ButtonColor'
import A_TypekitNumbNow from './A_TypekitNumbNow'

const DIV = styled.div`
  box-sizing: border-box;
  width: 1093px;
  display: flex;
  gap: 40px;
`;

const ORG = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const ABOUT = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 680px;
`;

const BUTTONS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: right;
  margin-top: 8px;
`;

const SECONDARYBUTTON = styled.button`
font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
  background: var(--White);
  border: 1px solid var(--LightBlue);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  height: 42px;
  width: 242px;

  &:hover {
    background: var(--LightBlue);
    cursor: pointer;
  }

  &:disabled {
    background: var(--LightBlue);
    border: none;
    cursor: not-allowed;
  }
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
  width: 240px;

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

class O_OrgAccountProfile extends React.Component {
  render () {
    return (
      <DIV>
        <A_ImageAvatarM></A_ImageAvatarM>
        <ABOUT>
          <ORG>
          <A_TypekitH2 name="МосЭкоВол"></A_TypekitH2>
          <A_TypekitNewsFilter></A_TypekitNewsFilter>
          </ORG>
          <A_TypekitText name="МосЭкоВол: Московский Экологический проект"></A_TypekitText>
          <A_TypekitText name="Россия, г. Москва"></A_TypekitText>
          <A_TypekitText name="mosecovol@gmail.com"></A_TypekitText>
          <A_TypekitText name="+74959626084"></A_TypekitText>
          <A_TypekitText name="Волонтерский опыт: более 5 лет"></A_TypekitText>
          <A_TypekitText name="Волонтерим на пользу планете"></A_TypekitText>
          <A_TypekitText name="instagram.com/mosecovol"></A_TypekitText>
        </ABOUT>
        <BUTTONS>
          <GREENBUTTON>Проверенная организация</GREENBUTTON>
          <A_TypekitNumbNow name="4 новости"></A_TypekitNumbNow>
          <A_TypekitNumbNow name="10 дел"></A_TypekitNumbNow>
          <SECONDARYBUTTON>Настройки профиля</SECONDARYBUTTON>
          <SECONDARYBUTTON>Удалить аккаунт</SECONDARYBUTTON>
          <SECONDARYBUTTON>Выйти</SECONDARYBUTTON>
        </BUTTONS>
      </DIV>
    );
  }
}

export default O_OrgAccountProfile
