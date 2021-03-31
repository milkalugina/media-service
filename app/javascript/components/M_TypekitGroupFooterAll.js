import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitFooterTitle from './A_TypekitFooterTitle'
import A_TypekitFooterText from './A_TypekitFooterText'

const DIV = styled.div`
  margin-bottom: 20px;
  width: 340px;
`;


class M_TypekitGroupFooterAll extends React.Component {
  render () {
    return (
      <div>
      <DIV>
        <A_TypekitFooterTitle name="контакты"></A_TypekitFooterTitle>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="+7 914 586 83 46"></A_TypekitFooterText>
      </DIV>
      <DIV>
        <A_TypekitFooterText name="dobrye@dela.ru"></A_TypekitFooterText>
      </DIV>
      </div>
    );
  }
}

export default M_TypekitGroupFooterAll
