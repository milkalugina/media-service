import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitFilter from './A_TypekitFilter'
import A_Attach from './A_Attach'

const DIV = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TEXT = styled.div`
`;

const ATTACH = styled.div`
  position: absolute;
  left: 229px;
`;

class M_InputGroupUserAttachPhotoHor extends React.Component {
  render () {
    return (
      <DIV>
        <TEXT><A_TypekitFilter name="Фотография"></A_TypekitFilter></TEXT>
        <ATTACH><A_Attach></A_Attach></ATTACH>
      </DIV>
    );
  }
}

export default M_InputGroupUserAttachPhotoHor
