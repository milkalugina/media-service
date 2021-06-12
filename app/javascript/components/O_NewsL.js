import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_TypekitGroupNewsData from './M_TypekitGroupNewsData'
import M_CardNewsL from './M_CardNewsL'
import A_ImageM from './A_ImageM'
import A_TypekitH2 from './A_TypekitH2'

const DIV = styled.div`
  box-sizing: border-box;
  width: 1247px;
  height: 538px;
  display: flex;

  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(35, 51, 99, 0.15));
    cursor: pointer;
  }
`;

const IMAGE = styled.div`
  margin-right: 40px;
`;

const TEXT = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const H2 = styled.h2`
  font-family: Steinbeck;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 120%;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
`;

class O_NewsL extends React.Component {
  render () {
    return (
      <DIV>
        <IMAGE><A_ImageM></A_ImageM></IMAGE>
        <TEXT>
        <H2>{this.props.post.title}</H2>
        <M_TypekitGroupNewsData></M_TypekitGroupNewsData>
        </TEXT>
      </DIV>
    );
  }
}

export default O_NewsL
