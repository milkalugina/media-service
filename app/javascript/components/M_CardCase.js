import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_ImageCard from './A_ImageCard'
import A_TypekitCaseH from './A_TypekitCaseH'
import A_TypekitNewsText from './A_TypekitNewsText'
import A_TypekitCaseFilterS from './A_TypekitCaseFilterS'
import A_TypekitCaseTime from './A_TypekitCaseTime'
import A_IconsFavouriteS from './A_IconsFavouriteS'
import A_CardCase from './A_CardCase'

const DIV = styled.div`
  width: 300px;
  height: 417px;
  background: var(--White);
  border: 1px solid rgba(35, 51, 99, 0.2);
  border-radius: 20px;
  box-sizing: border-box;
  position: relative;

  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(35, 51, 99, 0.15));
    cursor:pointer;
  }
`;

const IMAGE = styled.div`
  margin-bottom: 20px;
`;

const NAME = styled.div`
  margin-left: 20px;
`;

const CASENAME = styled.div`
  margin-bottom: 10px;
`;

const TYPE = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 20px;
`;

const TYPETEXT = styled.div`
  width: 237px;
`;

const FILTER = styled.div`
  margin-bottom: 10px;
`;

const TIMETYPE = styled.div`
  display: flex;
`;

class M_CardCase extends React.Component {
  render () {
    return (
      <DIV>
        <IMAGE><A_ImageCard></A_ImageCard></IMAGE>
        <NAME>
          <CASENAME><A_TypekitCaseH name="Брендинг"></A_TypekitCaseH></CASENAME>
          <A_TypekitNewsText name="МосЭкоВол: Московский Экологический проект"></A_TypekitNewsText>
        </NAME>
        <TYPE>
          <TYPETEXT>
          <FILTER><A_TypekitCaseFilterS></A_TypekitCaseFilterS></FILTER>
          <TIMETYPE>
            <A_TypekitCaseTime name="Мероприятие&nbsp;&nbsp;·&nbsp;&nbsp; "></A_TypekitCaseTime>
            <A_TypekitCaseTime name="1 неделя"></A_TypekitCaseTime>
          </TIMETYPE>
          </TYPETEXT>
          <A_IconsFavouriteS></A_IconsFavouriteS>
        </TYPE>
      </DIV>
    );
  }
}

export default M_CardCase
