import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitTitleS from './A_TypekitTitleS'
import M_TypekitGroupNotifications from './M_TypekitGroupNotifications'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TITLE = styled.div`
  margin-bottom: 20px;
`;

class O_OrgAccountNotificationsEdit extends React.Component {
  render () {
    return (
      <DIV>
      <TITLE><A_TypekitTitleS name="Управление уведомлениями"></A_TypekitTitleS></TITLE>
      <M_TypekitGroupNotifications text="Верифицирование" text2="Обновление ваших данных и комментарии администратора"></M_TypekitGroupNotifications>
      </DIV>
    );
  }
}

export default O_OrgAccountNotificationsEdit
