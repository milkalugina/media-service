import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH3 from './A_TypekitH3'
import A_TypekitText from './A_TypekitText'
import A_ButtonBlueJoin from './A_ButtonBlueJoin'

const DIV = styled.div`
  width: 344px;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 30px;
  position: relative;
`;

const TITLE = styled.div`
  margin-bottom: 20px;
`;

const TEXT = styled.div`
  margin-bottom: 40px;
`;

const OK = styled.div`
  display: flex;
`;

const Subtitle = styled.p`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
`;

const BLUEBUTTON = styled.button`
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
  margin-right: 10px;

  &:hover {
    background: var(--MidBlue);
    cursor: pointer;
  }
`;

const BUTTON = styled(BLUEBUTTON)`
  color: var(--KindBlue);
  background: var(--White);
  border: 1px solid var(--LightBlue);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;

  &:hover {
    background: var(--LightBlue);
  }
`;

class M_PopupChoice extends React.Component {
  render () {
    return (
      <DIV>
        <TITLE><Subtitle>Удалить аккаунт?</Subtitle></TITLE>
        <TEXT><A_TypekitText name="Вы уверены, что хотите удалить аккаунт? Вы больше не сможете пользоваться всеми возможностями «Добрых дел». "></A_TypekitText></TEXT>
        <OK>
          <BLUEBUTTON>Да</BLUEBUTTON>
          <BUTTON>Отмена</BUTTON>
        </OK>
      </DIV>
    );
  }
}

export default M_PopupChoice
