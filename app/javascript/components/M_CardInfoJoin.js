import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitH2 from './A_TypekitH2'
import A_ImageBanner from './A_ImageBanner'

const CARD = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 1320px;
  height: 313px;
  text-align: center;
  margin-top: 20px;
`;

const H2 = styled.h2`
font-family:'SteinbeckRegular';
font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: 0.1px;
  color: var(--White);
  width: 1000px;
`;

const DIV = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/images/CardInfo.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  width: 1320px;
  height: 320px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(/images/CardInfo.png);
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

const LINK = styled.a`
  text-decoration: none;
`;

class M_CardInfoJoin extends React.Component {
  render () {
    return (
      <div>
      <CARD>
        <DIV>
          <LINK href="/about"><H2>{this.props.name}</H2></LINK>
        </DIV>
      </CARD>
      </div>
    );
  }
}

export default M_CardInfoJoin
