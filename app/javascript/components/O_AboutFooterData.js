import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_TypekitGroupManePages from './M_TypekitGroupManePages'
import M_TypekitGroupFooterAll from './M_TypekitGroupFooterAll'
import M_TypekitGroupWe from './M_TypekitGroupWe'

const DIV = styled.div`
  display: flex;
`;

class O_AboutFooterData extends React.Component {
  render () {
    return (
      <DIV>
        <M_TypekitGroupManePages></M_TypekitGroupManePages>
        <M_TypekitGroupFooterAll></M_TypekitGroupFooterAll>
        <M_TypekitGroupWe></M_TypekitGroupWe>
      </DIV>
    );
  }
}

export default O_AboutFooterData
