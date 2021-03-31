import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_Checkbox from './A_Checkbox'

const P = styled.p`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: var(--KindBlue);
  position: absolute;
  left: 30px;
`;

const DIV = styled.div`
  width: 306px;
  display: flex;
  align-items: flex-start;
  position: relative;
`;

const CHECK = styled.div`
`;

class M_CheckboxAgreement extends React.Component {
  render () {
    return (
      <DIV>
        <CHECK><A_Checkbox></A_Checkbox></CHECK>
        <P>{this.props.name}</P>
      </DIV>
    );
  }
}

export default M_CheckboxAgreement
