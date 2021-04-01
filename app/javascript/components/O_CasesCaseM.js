import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_TypekitText from './A_TypekitText'
import A_ImageNews from './A_ImageNews'
import A_IconsFavouriteM from './A_IconsFavouriteM'
import M_CardOrg from './M_CardOrg'
import M_TypekitGroupCaseDataM from './M_TypekitGroupCaseDataM'
import A_ButtonBlueMain from './A_ButtonBlueMain'

const DIV = styled.div`
  width: 1094px;
`;

const CASE = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const TEXT = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 640px;
`;

const MAIN = styled.div`
  display: flex;
  gap: 40px;
`;

const APPLICATION = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  &:hover {
    background: var(--MidBlue);
    cursor: pointer;
  }

  &:disabled {
    background: var(--LightBlue);
    border: none;
    cursor: not-allowed;
  }
`;


class O_CasesCaseM extends React.Component {
  render () {
    return (
      <DIV>
        <CASE>
        <TEXT>
          <A_TypekitH2 name="Брендинг"></A_TypekitH2>
          <A_TypekitText name="Наш проект основывается на централизованном сборе перерабатываемых и не перерабатываемых отходов, а именно пластиковых крышек и батареек."></A_TypekitText>
        </TEXT>
        <A_IconsFavouriteM></A_IconsFavouriteM>
        </CASE>
        <MAIN>
          <A_ImageNews></A_ImageNews>
          <APPLICATION>
            <M_CardOrg></M_CardOrg>
            <M_TypekitGroupCaseDataM></M_TypekitGroupCaseDataM>
            <PRIMARYBUTTON>Подать заявку</PRIMARYBUTTON>
          </APPLICATION>
        </MAIN>
      </DIV>
    );
  }
}

export default O_CasesCaseM
