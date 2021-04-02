import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import O_NewsL from './O_NewsL'
import O_NewsM from './O_NewsM'
import O_NewsS from './O_NewsS'
import O_CasesCaseSwitch from './O_CasesCaseSwitch'
import O_AboutLearnUs from './O_AboutLearnUs'
import A_Lines from './A_Lines'
import A_TypekitH1 from './A_TypekitH1'
import A_TypekitNavigationLinkRight from './A_TypekitNavigationLinkRight'
import M_CardInfo from './M_CardInfo'

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

const LINK = styled.div`
  position: absolute;
  right: 0;
`;

class P_Main extends React.Component {
  render () {
    return (
      <DIV>
      <TEXT>
      <A_TypekitH1 name="Новости"></A_TypekitH1>
      <LINK><A_TypekitNavigationLinkRight name="Перейти к новостям"></A_TypekitNavigationLinkRight></LINK>
      </TEXT>
        <O_NewsL></O_NewsL>
        <HrWhite></HrWhite>
        <O_NewsM></O_NewsM>
        <HrWhiteVert></HrWhiteVert>
        <O_NewsM></O_NewsM>
        <HrWhiteVert></HrWhiteVert>
        <O_NewsM></O_NewsM>
        <HrWhite></HrWhite>
        <O_NewsS></O_NewsS>
        <HrWhiteVertS></HrWhiteVertS>
        <O_NewsS></O_NewsS>
        <HrWhiteVertS></HrWhiteVertS>
        <O_NewsS></O_NewsS>
        <HrWhiteVertS></HrWhiteVertS>
        <O_NewsS></O_NewsS>
        <TEXT>
        <A_TypekitH1 name="Дела"></A_TypekitH1>
        <LINK><A_TypekitNavigationLinkRight name="Перейти к делам"></A_TypekitNavigationLinkRight></LINK>
        </TEXT>
        <O_CasesCaseSwitch></O_CasesCaseSwitch>
        <O_AboutLearnUs></O_AboutLearnUs>
      </DIV>
    );
  }
}

export default P_Main
