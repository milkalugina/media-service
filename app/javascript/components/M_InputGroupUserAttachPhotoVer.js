import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitFilter from './A_TypekitFilter'
import A_Attach from './A_Attach'

const TEXT = styled.div`
  margin-bottom: 20px;
`;

class M_InputGroupUserAttachPhotoVer extends React.Component {
  render () {
    return (
      <div>
        <TEXT><A_TypekitFilter name="Документ о регистрации НКО"></A_TypekitFilter></TEXT>
        <A_Attach></A_Attach>
      </div>
    );
  }
}

export default M_InputGroupUserAttachPhotoVer
