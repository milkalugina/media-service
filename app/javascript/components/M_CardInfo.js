import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_ImageBanner from './A_ImageBanner'

const CARD = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 1320px;
  height: 313px;
  text-align: center;
`;

const H2 = styled.h2`
  font-family: Steinbeck;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 120%;
  letter-spacing: 0.1px;
  color: var(--White);
  width: 1000px;
`;

const DIV = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/images/pic-1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  width: 1320px;
  height: 320px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(/images/pic-1.jpg);
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

class M_CardInfo extends React.Component {
  render () {
    return (
      <CARD>
        <DIV>
          <H2>Добрые дела — медиа-сервис, объединяющий волонтеров и волонтерские организации</H2>
        </DIV>
      </CARD>
    );
  }
}

export default M_CardInfo
