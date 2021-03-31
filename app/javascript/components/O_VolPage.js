import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_ImageAvatarM from './A_ImageAvatarM'
import A_TypekitH2 from './A_TypekitH2'
import A_TypekitNewsFilter from './A_TypekitNewsFilter'
import A_TypekitText from './A_TypekitText'
import A_ButtonBlueMain from './A_ButtonBlueMain'

const DIV = styled.div`
  box-sizing: border-box;
  width: 1320px;
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
  width: 830px;
`;

const BUTTONS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: right;
  margin-top: 8px;
`;

const SECONDARYBUTTON = styled.button`
  font-family: Basis Grotesque Pro;
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

class O_VolPage extends React.Component {
  render () {
    return (
      <DIV>
        <A_ImageAvatarM></A_ImageAvatarM>
        <ABOUT>
          <ORG>
          <A_TypekitH2 name="Лиля Ахметова"></A_TypekitH2>
          <A_TypekitNewsFilter></A_TypekitNewsFilter>
          </ORG>
          <A_TypekitText name="Россия, г. Москва"></A_TypekitText>
          <A_TypekitText name="lilyakhmetovamail@gmail.com"></A_TypekitText>
          <A_TypekitText name="+74959626084"></A_TypekitText>
          <A_TypekitText name="Волонтерский опыт: более 2 лет"></A_TypekitText>
          <A_TypekitText name="Образование: высшее неоконченное, НИУ ВШЭ"></A_TypekitText>
          <A_TypekitText name="Интересы: приюты для животных"></A_TypekitText>
          <A_TypekitText name="instagram.com/lily.akhmetova"></A_TypekitText>
        </ABOUT>
        <BUTTONS>
          <SECONDARYBUTTON>Настройки профиля</SECONDARYBUTTON>
          <SECONDARYBUTTON>Удалить аккаунт</SECONDARYBUTTON>
          <SECONDARYBUTTON>Выйти</SECONDARYBUTTON>
        </BUTTONS>
      </DIV>
    );
  }
}

export default O_VolPage
