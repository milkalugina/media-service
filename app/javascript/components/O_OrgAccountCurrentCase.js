import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_CardCase from './M_CardCase'
import A_ButtonBlueMain from './A_ButtonBlueMain'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CASE = styled.div`
  margin-bottom: 10px;
`;

const PRIMARYBUTTON = styled.button`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1px;
  color: var(--White);
  background: var(--KindBlue);
  border: 1px solid #03195A;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  width: 300px;

  &:hover {
    background: var(--MidBlue);
    cursor: pointer;
  }

  &:disabled {
    background: var(--LightBlue);
    border: none;
    cursor: not-allowed;
  }
`;

const SECONDARYBUTTON = styled(PRIMARYBUTTON)`
  color: var(--KindBlue);
  background: none;
  border: 1px solid var(--LightBlue);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;

  &:hover {
    background: var(--LightBlue);
  }
`;

class O_OrgAccountCurrentCase extends React.Component {
  render () {
    return (
      <DIV>
      <CASE><M_CardCase></M_CardCase></CASE>
      <SECONDARYBUTTON>Редактировать</SECONDARYBUTTON>
      <SECONDARYBUTTON>Посмотреть заявки волонтеров</SECONDARYBUTTON>
      <SECONDARYBUTTON>Удалить</SECONDARYBUTTON>
      </DIV>
    );
  }
}

export default O_OrgAccountCurrentCase
