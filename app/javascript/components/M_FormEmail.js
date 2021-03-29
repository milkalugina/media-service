import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_InputEmailS from './A_InputEmailS'
import A_IconsArrowSubscribe from './A_IconsArrowSubscribe'

const DIV = styled.div`
  display: flex;
  align-items: center;
`;

const INPUT = styled.div`
  margin-right: 40px;
`;

class M_FormEmail extends React.Component {
  render () {
    return (
      <DIV>
        <INPUT><A_InputEmailS></A_InputEmailS></INPUT>
        <A_IconsArrowSubscribe></A_IconsArrowSubscribe>
      </DIV>
    );
  }
}

export default M_FormEmail
