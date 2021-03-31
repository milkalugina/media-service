import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_ImageS from './A_ImageS'
import A_TypekitNewsM from './A_TypekitNewsM'

const DIV = styled.div`
  box-sizing: border-box;
  width: 413px;
  height: 440px;
  display: flex;
  flex-direction: column;
`;

const IMAGE = styled.div`
  margin-bottom: 20px;
`;

class M_CardNewsM extends React.Component {
  render () {
    return (
      <DIV>
        <IMAGE><A_ImageS></A_ImageS></IMAGE>
        <A_TypekitNewsM name="Делаем добро вместе: Фонд продовольствия «Русь» ищет добровольцев"></A_TypekitNewsM>
      </DIV>
    );
  }
}

export default M_CardNewsM
