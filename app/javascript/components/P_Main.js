import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import O_NewsM from './O_NewsM'
import O_NewsS from './O_NewsS'
import O_CasesCaseSwitch from './O_CasesCaseSwitch'
import O_AboutLearnUs from './O_AboutLearnUs'
import A_Lines from './A_Lines'
import A_TypekitH1 from './A_TypekitH1'
import A_TypekitNavigationLinkRight from './A_TypekitNavigationLinkRight'
import M_CardInfoJoin from './M_CardInfoJoin'
import A_ImageInst from './A_ImageInst'
import A_ImageInstVert from './A_ImageInstVert'
import S_SubscribeCard from './S_SubscribeCard'

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100% - 120px;
  padding: 0px 60px;
  flex-wrap: wrap;
`;

const HrWhite = styled.div`
  width: 1320px;
  border-bottom: 0.5px solid rgba(35, 51, 99, 0.2);
  margin-top: 40px;
  margin-bottom: 40px;
`;

const HrWhiteVert = styled.div`
  height: 498px;
  border-right: 0.5px solid rgba(35, 51, 99, 0.2);
`;

const HrWhiteVertS = styled(HrWhiteVert)`
  height: 246px;
`;

const TEXT = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 1320px;
  margin-bottom: 60px;
  margin-top: 60px;
`;

const LINK = styled.a`
  position: absolute;
  right: 0;
  text-decoration: none;
`;

const IMG = styled.img`
  position: absolute;
  z-index: -1;

  &:nth-child(1) {
    left: -10vw;
    top: 10vh;
  }

  &:nth-child(2) {
    right: -2vw;
    top: 15vh;
  }

  &:nth-child(3) {
    right: -5vw;
    top: 70vh;
  }



`;

class P_Main extends React.Component {
  render () {
    return (
      <DIV>
      <IMG src="/images/ob1.svg"></IMG>
      <IMG src="/images/ob2.svg"></IMG>
      <IMG src="/images/ob3.svg"></IMG>
        <O_AboutLearnUs></O_AboutLearnUs>
        <M_CardInfoJoin name="Присоединиться и делать добрые дела вместе — стать волонтером или организатором"></M_CardInfoJoin>
        <TEXT>
        <A_TypekitH1 name="Мы в инстаграм"></A_TypekitH1>
        </TEXT>
        <A_ImageInst name="/images/inst1.png"></A_ImageInst>
        <A_ImageInst name="/images/inst2.png"></A_ImageInst>
        <A_ImageInst name="/images/inst3.png"></A_ImageInst>
        <A_ImageInst name="/images/inst4.png"></A_ImageInst>
      </DIV>
    );
  }
}

export default P_Main
