import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_CardCase from './M_CardCase'
import A_TypekitText from './A_TypekitText'
import M_SelectCases from './M_SelectCases'
import M_NavigationPages from './M_NavigationPages'

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100% - 120px;
  padding: 0px 60px;
  flex-wrap: wrap;
  gap: 40px;
`;

const TEXT = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
`;

class P_Cases extends React.Component {
  render () {
    return (
      <DIV>
      <TEXT>
      <A_TypekitText name="12 дел всего"></A_TypekitText>
      </TEXT>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_CardCase></M_CardCase>
      <M_NavigationPages></M_NavigationPages>
      </DIV>
    );
  }
}

export default P_Cases
