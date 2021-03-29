import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_ImageAvatarS from './A_ImageAvatarS'
import A_TypekitCaseH from './A_TypekitCaseH'

const DIV = styled.div`
  width: 413px;
  height: 88px;
  display: flex;
  background: var(--White);
  border: 1px solid rgba(35, 51, 99, 0.2);
  box-sizing: border-box;
  border-radius: 20px;
  align-items: center;
  padding-left: 20px;
`;

const IMAGE = styled.div`
  margin-right: 10px;
`;

class M_CardVol extends React.Component {
  render () {
    return (
      <DIV>
        <IMAGE><A_ImageAvatarS></A_ImageAvatarS></IMAGE>
        <A_TypekitCaseH name="Алексей Миронов"></A_TypekitCaseH>
      </DIV>
    );
  }
}

export default M_CardVol
