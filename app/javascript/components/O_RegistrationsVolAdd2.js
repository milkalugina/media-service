import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_IconsProgress from './A_IconsProgress'
import A_TypekitSubtitle from './A_TypekitSubtitle'
import M_SelectHobbies from './M_SelectHobbies'
import A_ButtonBlueMain from './A_ButtonBlueMain'
import A_TypekitNavigationLinkLeft from './A_TypekitNavigationLinkLeft'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  border: 1px solid #233363;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  width: 360px;
  margin-top: 20px;
  margin-bottom: 30px;

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

class O_RegistrationsVolAdd2 extends React.Component {
  render () {
    return (
      <DIV>
      <A_TypekitH2 name="Интересы в волонтерстве"></A_TypekitH2>
      <SLIDER>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#233363" fill-opacity="0.2" filled />
        </svg></SVG>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#233363" fill-opacity="0.2" />
        </svg></SVG>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#233363" fill-opacity="0.2"/>
        </svg></SVG>
      </SLIDER>
      <SUBTITLE><A_TypekitSubtitle name="Выберите хотя бы один вид волонтерства, который вам интересен 👇"></A_TypekitSubtitle></SUBTITLE>
      <M_SelectHobbies></M_SelectHobbies>
      <PRIMARYBUTTON>Продолжить</PRIMARYBUTTON>
      <A_TypekitNavigationLinkLeft name="Назад"></A_TypekitNavigationLinkLeft>
      </DIV>
    );
  }
}

export default O_RegistrationsVolAdd2
