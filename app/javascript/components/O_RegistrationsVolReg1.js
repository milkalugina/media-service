import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_NavigationStep from './M_NavigationStep'
import A_TypekitSubtitle from './A_TypekitSubtitle'
import A_InputInfoEmptyS from './A_InputInfoEmptyS'
import A_IconsEye from './A_IconsEye'
import M_CheckboxAgreement from './M_CheckboxAgreement'
import A_ButtonBlueMain from './A_ButtonBlueMain'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SUBTITLE = styled.div`
  width: 500px;
  margin-bottom: 30px;
`;

const ICON = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const ICONDIV = styled.div`
  position: relative;
`;

const CHECK = styled.div`
  margin-top: 40px;
  width: 361px;
  height: 48px;
`;

const CHECK2 = styled.div`
  margin-top: 10px;
  width: 361px;
  height: 48px;
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
  border: 1px solid #233363;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  width: 360px;
  margin-top: 30px;

  &:hover {
    background: var(--MidBlue);
    cursor: pointer;
  }

  &:disabled {
    background: var(--LightBlue);
    color: var(--KindBlue);
    border: none;
    cursor: not-allowed;
  }
`;

const INPUT = styled.input`
  color:  var(--KindBlue);
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.1px;
  background: none;
  width: 302px;
  border: 1px solid rgba(35, 51, 99, 0.2);
  padding: 13px 29px;

  &:focus {
    outline-color: var(--MidBlue);
  }

  &::placeholder {
    color: var(--LightBlue);
  }
`;

class O_RegistrationsVolReg1 extends React.Component {
  render () {
    return (
      <DIV>
        <M_NavigationStep></M_NavigationStep>
        <SUBTITLE><A_TypekitSubtitle name="Нам нужен ваш номер телефона, чтобы связаться с вами оперативно, если вы будете выбраны волонтером для доброго дела ✌️"></A_TypekitSubtitle></SUBTITLE>
        <INPUT name="phone" placeholder="Номер телефона"></INPUT>
        <ICONDIV>
          <INPUT name="password" placeholder="Пароль"></INPUT>
          <ICON><A_IconsEye></A_IconsEye></ICON>
        </ICONDIV>
        <ICONDIV>
          <INPUT name="password" placeholder="Повторить пароль"></INPUT>
          <ICON><A_IconsEye></A_IconsEye></ICON>
        </ICONDIV>
        <CHECK><M_CheckboxAgreement name="Соглашаюсь на обработку моих персональных данных и с правилами пользования сайтом *"></M_CheckboxAgreement></CHECK>
        <CHECK2><M_CheckboxAgreement name="Соглашаюсь получать рассылку с информацией о самых интересных событиях"></M_CheckboxAgreement></CHECK2>
        <PRIMARYBUTTON disabled="disabled">Продолжить</PRIMARYBUTTON>
      </DIV>
    );
  }
}

export default O_RegistrationsVolReg1
