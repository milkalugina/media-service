import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_Toggle from './A_Toggle'
import A_TypekitSettingsM from './A_TypekitSettingsM'
import A_TypekitFilter from './A_TypekitFilter'

const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 472px;
`;

const TEXT = styled.div`
  margin-bottom: 10px;
`;

const TEXTDIV = styled.div`
`;

class M_TypekitGroupNotifications extends React.Component {
  render () {
    return (
      <DIV>
        <TEXTDIV>
          <TEXT><A_TypekitSettingsM name={this.props.text}></A_TypekitSettingsM></TEXT>
          <A_TypekitFilter name={this.props.text2}></A_TypekitFilter>
        </TEXTDIV>
        <A_Toggle></A_Toggle>
      </DIV>
    );
  }
}

export default M_TypekitGroupNotifications
