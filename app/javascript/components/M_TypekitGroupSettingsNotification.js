import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_IconsAvatar from './A_IconsAvatar'
import A_TypekitNotificationsText from './A_TypekitNotificationsText'
import A_TypekitNotificationsTextDate from './A_TypekitNotificationsTextDate'

const DIV = styled.div`
  display: flex;
  align-items: center;
`;

const TEXTDIV = styled.div`
  margin-left: 10px;
`;

const TEXT= styled.div`
  margin-bottom: 5px;
`;

class M_TypekitGroupSettingsNotification extends React.Component {
  render () {
    return (
      <DIV>
        <A_IconsAvatar></A_IconsAvatar>
        <TEXTDIV>
          <TEXT>
            <A_TypekitNotificationsText name="МосЭкоВол опубликовало дело"></A_TypekitNotificationsText>
          </TEXT>
          <A_TypekitNotificationsTextDate name="3 часа назад"></A_TypekitNotificationsTextDate>
        </TEXTDIV>
      </DIV>
    );
  }
}

export default M_TypekitGroupSettingsNotification
