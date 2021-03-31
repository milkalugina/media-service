import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_TypekitSubtitle from './A_TypekitSubtitle'
import M_CardJoinV from './M_CardJoinV'
import M_CardJoinO from './M_CardJoinO'

const DIV = styled.div`
  text-align: center;
`;

const CARDS = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 70px;
`;

const H2 = styled.div`
  margin-bottom: 30px;
`;

class O_RegistrationsVolOrOrg extends React.Component {
  render () {
    return (
      <DIV>
        <H2><A_TypekitH2 name="Создайте аккаунт — начните делать добро"></A_TypekitH2></H2>
        <A_TypekitSubtitle name="Какой аккаунт вы хотите создать?"></A_TypekitSubtitle>
        <CARDS>
          <M_CardJoinV></M_CardJoinV>
          <M_CardJoinO></M_CardJoinO>
        </CARDS>
      </DIV>
    );
  }
}

export default O_RegistrationsVolOrOrg
