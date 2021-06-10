import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_IconsProgress from './A_IconsProgress'
import A_TypekitSubtitle from './A_TypekitSubtitle'
import A_ButtonBlueMain from './A_ButtonBlueMain'
import A_InputInfoEmptyS from './A_InputInfoEmptyS'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

const SUBTITLE = styled.div`
  width: 500px;
  margin-bottom: 30px;
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
  margin-top: 20px;

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

const SECONDARYBUTTON = styled(PRIMARYBUTTON)`
  color: var(--KindBlue);
  background: none;
  border: 1px solid var(--LightBlue);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 0px;

  &:hover {
    background: var(--LightBlue);
  }
`;

class O_RegistrationsVolAdd1 extends React.Component {
  render () {
    return (
      <DIV>
      <A_TypekitH2 name="Введите самые важные данные"></A_TypekitH2>
      <SLIDER>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2" />
        </svg></SVG>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2" />
        </svg></SVG>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2" />
        </svg></SVG>
      </SLIDER>
      <SUBTITLE><A_TypekitSubtitle name="Заполнив данные, вы сможете полноценно пользоваться «Добрыми делами»"></A_TypekitSubtitle></SUBTITLE>
      <INPUT name="name" placeholder="Имя"></INPUT>
      <INPUT name="name" placeholder="Фамилия"></INPUT>
      <INPUT name="email" placeholder="E-mail"></INPUT>
      <INPUT name="name" placeholder="Страна"></INPUT>
      <INPUT name="name" placeholder="Город"></INPUT>
      <PRIMARYBUTTON>Продолжить</PRIMARYBUTTON>
      <SECONDARYBUTTON>Заполнить данные позже</SECONDARYBUTTON>
      </DIV>
    );
  }
}

export default O_RegistrationsVolAdd1
