import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitFooterTitle from './A_TypekitFooterTitle'

const DIV = styled.div`
  display: flex;
`;

const BLOCK = styled.div`
  width: 340px;
`;

const BLOCK2 = styled.div`
  width: 227px;
`;

class O_AboutFooterInfo extends React.Component {
  render () {
    return (
      <DIV>
        <BLOCK><A_TypekitFooterTitle name="© 2020 Добрые дела"></A_TypekitFooterTitle></BLOCK>
        <BLOCK><A_TypekitFooterTitle name="конфиденциальность"></A_TypekitFooterTitle></BLOCK>
        <BLOCK2><A_TypekitFooterTitle name="правила"></A_TypekitFooterTitle></BLOCK2>
        <A_TypekitFooterTitle name="дизайн — Лиля Ахметова и Мила Калугина"></A_TypekitFooterTitle>
      </DIV>
    );
  }
}

export default O_AboutFooterInfo
