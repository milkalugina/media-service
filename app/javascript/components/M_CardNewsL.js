import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_ImageM from './A_ImageM'
import A_TypekitH2 from './A_TypekitH2'

const DIV = styled.div`
  box-sizing: border-box;
  width: 1247px;
  height: 538px;
  display: flex;
`;

const IMAGE = styled.div`
  margin-right: 40px;
`;

class M_CardNewsL extends React.Component {
  render () {
    return (
      <DIV>
        <IMAGE><A_ImageM></A_ImageM></IMAGE>
        <A_TypekitH2 name="В Москве пройдет одиннадцатый Международный благотворительный фестиваль «Белая трость»"></A_TypekitH2>
      </DIV>
    );
  }
}

export default M_CardNewsL
