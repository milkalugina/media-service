import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_ButtonWriteUs from './M_ButtonWriteUs'
import O_AboutFooterData from './O_AboutFooterData'
import O_AboutMailing from './O_AboutMailing'
import O_AboutFooterInfo from './O_AboutFooterInfo'

const DIV = styled.div`
  width: 100% - 120px;
  padding: 60px;
  background: var(--KindBlue);
  margin-top: 80px;
`;

const CENTER = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

const ABOUT = styled.div`
  display: flex;
  margin-bottom: 80px;
`;

class S_Footer extends React.Component {
  render () {
    return (
      <DIV>
        <CENTER><M_ButtonWriteUs></M_ButtonWriteUs></CENTER>
        <ABOUT>
        <O_AboutFooterData></O_AboutFooterData>
        <O_AboutMailing></O_AboutMailing>
        </ABOUT>
        <O_AboutFooterInfo></O_AboutFooterInfo>
      </DIV>
    );
  }
}

export default S_Footer
