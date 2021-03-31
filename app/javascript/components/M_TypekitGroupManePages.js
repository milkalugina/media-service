import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitFooterTitle from './A_TypekitFooterTitle'
import A_TypekitFooterText from './A_TypekitFooterText'

const DIV = styled.div`
  margin-bottom: 20px;
  width: 340px;
`;

class M_TypekitGroupManePages extends React.Component {
  render () {
    return (
      <div>
      <DIV>
        <A_TypekitFooterTitle name="добрые дела"></A_TypekitFooterTitle>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="О нас"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Стать волонтером"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Стать организатором"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Дела"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Новости"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Как это работает"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Пожертвовать"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Стать партнером"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="Часто задаваемые вопросы"></A_TypekitFooterText>
      </DIV>
      </div>
    );
  }
}

export default M_TypekitGroupManePages
