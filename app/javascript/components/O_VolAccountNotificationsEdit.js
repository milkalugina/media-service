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


class O_VolAccountNotificationsEdit extends React.Component {
  render () {
    return (
      <DIV>
      <TITLE><A_TypekitTitleS name="Управление уведомлениями"></A_TypekitTitleS></TITLE>
      <M_TypekitGroupNotifications text="Статусы заявок" text2="Организатор обновил статус вашей заявки"></M_TypekitGroupNotifications>
      <M_TypekitGroupNotifications text="Новый проект / новость" text2="Опубликован новый проект или мероприятие"></M_TypekitGroupNotifications>
      <M_TypekitGroupNotifications text="Новые рекомендации" text2="Рекомендации возможно интересных вам постов"></M_TypekitGroupNotifications>
      <M_TypekitGroupNotifications text="Верифицирование" text2="Обновление ваших данных и комментарии администратора"></M_TypekitGroupNotifications>
      </DIV>
    );
  }
}

export default O_VolAccountNotificationsEdit
