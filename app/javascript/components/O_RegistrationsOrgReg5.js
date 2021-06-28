import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_IconsProgress from './A_IconsProgress'
import A_TypekitSubtitle from './A_TypekitSubtitle'
import M_InputGroupUserAttachPhotoVer from './M_InputGroupUserAttachPhotoVer'
import A_ButtonBlueMain from './A_ButtonBlueMain'
import A_TypekitNavigationLinkLeft from './A_TypekitNavigationLinkLeft'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ATTACHDIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 560px;
  padding: 40px;
  background: rgba(35, 51, 99, 0.2);
  border-radius: 10px;
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
font-family:'BasisGrotesquePro-Regular';
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

class O_RegistrationsOrgReg5 extends React.Component {
  render () {
    return (
      <DIV>
      <A_TypekitH2 name="Роли и приоритеты"></A_TypekitH2>
      <SLIDER>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2" filled />
        </svg></SVG>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2" filled />
        </svg></SVG>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2" filled />
        </svg></SVG>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2" filled/>
        </svg></SVG>
        <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#03195A" fill-opacity="0.2"/>
        </svg></SVG>
      </SLIDER>
      <SUBTITLE><A_TypekitSubtitle name="Подтвердите свою организацию документами. Эта информация видна только зарегистрированным модераторам"></A_TypekitSubtitle></SUBTITLE>
      <ATTACHDIV>
        <M_InputGroupUserAttachPhotoVer text="Документ о регистрации НКО"></M_InputGroupUserAttachPhotoVer>
        <M_InputGroupUserAttachPhotoVer text="Сведения об учредителях — копии паспортов и ИНН"></M_InputGroupUserAttachPhotoVer>
        <M_InputGroupUserAttachPhotoVer text="Учредительные документы некоммерческой организации"></M_InputGroupUserAttachPhotoVer>
      </ATTACHDIV>
      <PRIMARYBUTTON>Продолжить</PRIMARYBUTTON>
      <A_TypekitNavigationLinkLeft name="Назад"></A_TypekitNavigationLinkLeft>
      </DIV>
    );
  }
}

export default O_RegistrationsOrgReg5
