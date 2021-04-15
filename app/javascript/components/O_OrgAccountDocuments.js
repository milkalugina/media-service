import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitTitleS from './A_TypekitTitleS'
import M_InputGroupUserAttachPhotoVer from './M_InputGroupUserAttachPhotoVer'

const ATTACHDIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 560px;
  padding: 40px;
  background: rgba(35, 51, 99, 0.2);
  border-radius: 10px;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TITLE = styled.div`
  margin-bottom: 20px;
`;

class O_OrgAccountDocuments extends React.Component {
  render () {
    return (
      <DIV>
      <TITLE><A_TypekitTitleS name="Официальные документы"></A_TypekitTitleS></TITLE>
      <ATTACHDIV>
        <M_InputGroupUserAttachPhotoVer text="Документ о регистрации НКО"></M_InputGroupUserAttachPhotoVer>
        <M_InputGroupUserAttachPhotoVer text="Сведения об учредителях — копии паспортов и ИНН"></M_InputGroupUserAttachPhotoVer>
        <M_InputGroupUserAttachPhotoVer text="Учредительные документы некоммерческой организации"></M_InputGroupUserAttachPhotoVer>
      </ATTACHDIV>
      </DIV>
    );
  }
}

export default O_OrgAccountDocuments
