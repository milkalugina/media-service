import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import O_NewsL from './O_NewsL'
import O_NewsM from './O_NewsM'
import O_NewsS from './O_NewsS'
import A_Lines from './A_Lines'
import A_ButtonBlueJoin from './A_ButtonBlueJoin'

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100% - 120px;
  padding: 0px 60px;
  flex-wrap: wrap;
  margin-top: 60px;
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

const WRAPPER = styled.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const BUTTON = styled.button`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
  background: var(--White);
  border: 1px solid #03195A;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  &:hover {
    background: var(--LightBlue);
    cursor: pointer;
  }
`;

class P_News extends React.Component {
  render () {
    return (
      <DIV>
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
        <WRAPPER><BUTTON>Читать дальше</BUTTON></WRAPPER>
      </DIV>
    );
  }
}

export default P_News
