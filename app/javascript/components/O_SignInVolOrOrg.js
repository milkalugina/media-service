import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_TypekitSubtitle from './A_TypekitSubtitle'
import M_CardJoinV from './M_CardJoinV'
import M_CardJoinO from './M_CardJoinO'

const DIV = styled.div`
margin-top: 80px;
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

const A = styled.a`
text-decoration: none;
`;

class O_RegistrationsVolOrOrg extends React.Component {
  render () {
    return (
      <DIV>
        <H2><A_TypekitH2 name="Войдите в аккаунт — начните делать добро"></A_TypekitH2></H2>
        <A_TypekitSubtitle name="Кем вы являетесь?"></A_TypekitSubtitle>
        <CARDS>
          <A href="/users/sign_in"><M_CardJoinV></M_CardJoinV></A>
          <A href="/organizations/sign_in"><M_CardJoinO></M_CardJoinO></A>
        </CARDS>
      </DIV>
    );
  }
}

export default O_RegistrationsVolOrOrg
