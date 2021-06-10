import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import M_CheckboxAgreement from './M_CheckboxAgreement'
import A_IconsEye from './A_IconsEye'
import M_SelectRegestration from './M_SelectRegestration'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CIRCLE = styled.circle`
  fill: var(--LightBlue);
  fill: ${props => props.filled ? "var(--KindBlue)" : "var(--LightBlue)"};
`;

const SLIDER = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const SVG = styled.div`
  margin-right: 20px;
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

const ICON = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const ICONDIV = styled.div`
  position: relative;
`;

const CHECK = styled.div`
  margin-top: 30px;
  width: 361px;
  height: 48px;
`;

const CHECK2 = styled.div`
  margin-top: 10px;
  width: 361px;
  height: 48px;
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
  width: 360px;
  margin-top: 30px;

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

class O_RegistrationsOrgReg1 extends React.Component {
  render () {
    return (
      <DIV>
        <A_TypekitH2 name="Регистрация главного лица"></A_TypekitH2>
        <SLIDER>
          <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2"/>
          </svg></SVG>
          <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2"/>
          </svg></SVG>
          <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2"/>
          </svg></SVG>
          <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2"/>
          </svg></SVG>
          <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2"/>
          </svg></SVG>
        </SLIDER>
        <INPUT name="name" placeholder="Имя"></INPUT>
        <INPUT name="name" placeholder="Фамилия"></INPUT>
        <INPUT name="name" placeholder="Отчество"></INPUT>
        <INPUT name="email" placeholder="E-mail организации"></INPUT>
        <INPUT name="phone" placeholder="Номер телефона для связи"></INPUT>
        <ICONDIV>
          <INPUT name="password" placeholder="Пароль"></INPUT>
          <ICON><A_IconsEye></A_IconsEye></ICON>
        </ICONDIV>
        <ICONDIV>
          <INPUT name="password" placeholder="Повторить пароль"></INPUT>
          <ICON><A_IconsEye></A_IconsEye></ICON>
        </ICONDIV>
        <INPUT name="name" placeholder="Страна"></INPUT>
        <INPUT name="name" placeholder="Город"></INPUT>
        <CHECK><M_CheckboxAgreement name="Соглашаюсь на обработку моих персональных данных и с правилами пользования сайтом *"></M_CheckboxAgreement></CHECK>
        <CHECK2><M_CheckboxAgreement name="Соглашаюсь получать рассылку с информацией о самых интересных событиях"></M_CheckboxAgreement></CHECK2>
        <PRIMARYBUTTON disabled="disabled">Продолжить</PRIMARYBUTTON>
      </DIV>
    );
  }
}

export default O_RegistrationsOrgReg1
