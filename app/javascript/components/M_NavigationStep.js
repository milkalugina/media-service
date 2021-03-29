import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_IconsProgress from './A_IconsProgress'

const CIRCLE = styled.circle`
  fill: var(--LightBlue);
  fill: ${props => props.filled ? "var(--KindBlue)" : "var(--LightBlue)"};
`;

const SLIDER = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SVG = styled.div`
  margin-right: 20px;
`;

const DIV = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class M_NavigationStep extends React.Component {
  render () {
    return (
      <DIV>
        <A_TypekitH2 name="Введите номер телефона и придумайте пароль"></A_TypekitH2>
        <SLIDER>
          <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#233363" fill-opacity="0.2" />
          </svg></SVG>
          <SVG><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE cx="10.5" cy="10.5" r="10.5" fill="#233363" fill-opacity="0.2"/>
          </svg></SVG>
        </SLIDER>
      </DIV>
    );
  }
}

export default M_NavigationStep
