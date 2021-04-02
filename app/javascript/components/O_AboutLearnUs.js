import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH1 from './A_TypekitH1'
import A_TypekitNavigationLinkRight from './A_TypekitNavigationLinkRight'
import M_CardInfo from './M_CardInfo'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 0px;
  margin-top: 110px;
`;

const TEXT = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LINK = styled.div`
  position: absolute;
  right: 0;
`;

class O_AboutLearnUs extends React.Component {
  render () {
    return (
      <DIV>
        <TEXT>
        <A_TypekitH1 name="Узнать о нас"></A_TypekitH1>
        <LINK><A_TypekitNavigationLinkRight name="Перейти к делам"></A_TypekitNavigationLinkRight></LINK>
        </TEXT>
        <M_CardInfo name="Добрые дела — медиа-сервис, объединяющий волонтеров и волонтерские организации"></M_CardInfo>
      </DIV>
    );
  }
}

export default O_AboutLearnUs
