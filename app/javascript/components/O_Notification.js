import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitCaseH from './A_TypekitCaseH'
import M_TypekitGroupSettingsNotification from './M_TypekitGroupSettingsNotification'

const DIV = styled.div`
  width: 296px;
  padding: 20px;
  background: #FFFFFF;
  border: 1px solid rgba(35, 51, 99, 0.2);
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TEXT = styled.div`
  margin-bottom: 10px;
`;

class O_Notification extends React.Component {
  render () {
    return (
      <DIV>
        <TEXT><A_TypekitCaseH name="Уведомления"></A_TypekitCaseH></TEXT>
        <M_TypekitGroupSettingsNotification></M_TypekitGroupSettingsNotification>
        <M_TypekitGroupSettingsNotification></M_TypekitGroupSettingsNotification>
        <M_TypekitGroupSettingsNotification></M_TypekitGroupSettingsNotification>
      </DIV>
    );
  }
}

export default O_Notification
