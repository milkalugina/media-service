import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import O_AboutMailing from './O_AboutMailing'
import A_InputEmailS from './A_InputEmailS'
import A_IconsArrowSubscribe from './A_IconsArrowSubscribe'

const DIV = styled.div`
  background-image: url(/images/SubscribeCard.svg);
  width: 413px;
  height: 500px;
  border-radius: 20px;
`;

const DIV1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;
  margin-left: 30px;
`;

const H1 = styled.div`
  width: 427px;
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 105%;
  color: var(--KindBlue);
`;

const H1WHITE = styled.div`
  width: 427px;
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 105%;
  color: var(--White);
`;

const DIV2 = styled.div`
  display: flex;
  align-items: center;
`;

const DIV3 = styled.div`
  margin-top: 50px;
  margin-left: 30px;
`;

const A = styled.a`

  &:hover {
    cursor: pointer;
  }
`;

const DIVIMG = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 60px;
`;

const INPUT1 = styled.div`
  margin-right: 40px;
`;

const INPUT = styled.input`
  color: var(--KindBlue);
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1px;
  border: none;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--KindBlue);
  background: none;
  width: 280px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--KindBlue);
  }

`;

class S_SubscribeCard extends React.Component {
  render () {
    return (
      <DIV>
      <DIV1>
        <div><H1>Подпишитесь</H1><H1>на еженедельную</H1><H1>рассылку</H1><H1>лучших дел и новостей</H1></div>
        <DIV2>
          <INPUT1><INPUT name="email" placeholder="Ваш email"></INPUT></INPUT1>
          <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="#03195A"/>
          </svg>
        </DIV2>
      </DIV1>
      <DIV3>
      <H1WHITE>Следите за нами</H1WHITE><H1WHITE>в соцсетях</H1WHITE>
      <DIVIMG>
      <A href="/about"><img src="/images/VK.svg"></img></A>
      <A><img src="/images/Telegram.svg"></img></A>
      <A><img src="/images/Facebook.svg"></img></A>
      <A><img src="/images/Instagram.svg"></img></A>
      </DIVIMG>
      </DIV3>
      </DIV>
    );
  }
}

export default S_SubscribeCard
