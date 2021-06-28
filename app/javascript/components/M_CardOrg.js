import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_ImageAvatarS from './A_ImageAvatarS'
import A_TypekitCaseH from './A_TypekitCaseH'
import A_TypekitNumbNow from './A_TypekitNumbNow'
import A_TypekitNumbAll from './A_TypekitNumbAll'
import A_ButtonBlueMain from './A_ButtonBlueMain'

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
  margin-top: -10px;

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

const DIV = styled.div`
  width: 413px;
  display: flex;
  background: var(--White);
  border: 1px solid rgba(35, 51, 99, 0.2);
  box-sizing: border-box;
  border-radius: 20px;
  padding: 20px;
  flex-direction: column;

  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(35, 51, 99, 0.15));
    cursor: pointer;
  }
`;

const IMAGE = styled.div`
  margin-right: 10px;
`;

const ORG = styled.div`
  display: flex;
  align-items: center;
`;

const TEXT = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 373px;
  margin-bottom: 20px;
`;

const NUMBER = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 58px;
`;

const NUMBERNOW = styled.div`
  margin-bottom: 10px;
`;

class M_CardOrg extends React.Component {
  render () {
    return (
      <DIV>
        <TEXT>
          <ORG>
            <IMAGE><A_ImageAvatarS></A_ImageAvatarS></IMAGE>
            <A_TypekitCaseH name="МосЭкоВол"></A_TypekitCaseH>
          </ORG>
          <SECONDARYBUTTON>Подписаться</SECONDARYBUTTON>
        </TEXT>
        <NUMBER>
          <NUMBERNOW><A_TypekitNumbNow name="2 дела сейчас"></A_TypekitNumbNow></NUMBERNOW>
          <A_TypekitNumbAll name="5 дел всего"></A_TypekitNumbAll>
        </NUMBER>
      </DIV>
    );
  }
}

export default M_CardOrg
