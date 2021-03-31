import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitFooterTitle from './A_TypekitFooterTitle'
import A_TypekitFooterText from './A_TypekitFooterText'

const DIV = styled.div`
  margin-bottom: 20px;
  width: 340px;
`;

class M_TypekitGroupWe extends React.Component {
  render () {
    return (
      <div>
      <DIV>
        <A_TypekitFooterTitle name="мы в соцсетях"></A_TypekitFooterTitle>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Вконтакте"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Facebook"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Instagram"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Youtube"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Telegram"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Дзен"></A_TypekitFooterText>
      </DIV>
      </div>
    );
  }
}

export default M_TypekitGroupWe
