import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_TypekitText from './A_TypekitText'

const DIV = styled.div`
  width: 790px;
`;

const H2 = styled.div`
  margin-bottom: 40px;
`;

class M_TypekitGroupNewsText extends React.Component {
  render () {
    return (
      <DIV>
        <H2><A_TypekitH2 name={this.props.title}></A_TypekitH2></H2>
        <A_TypekitText name={this.props.text}></A_TypekitText>
      </DIV>
    );
  }
}

export default M_TypekitGroupNewsText
