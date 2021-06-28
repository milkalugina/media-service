import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitPage from './A_TypekitPage'

const P = styled.a`
font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
  padding: 10px 20px;
  margin-right: 10px;
`;

const PageOpen = styled(P)`
  border: 1px solid #03195A;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 46px;

  &:hover {
    background: var(--LightBlue);
    cursor: pointer;
  }
`;

const SECONDARYBUTTON = styled.button`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
  background: var(--White);
  border: 1px solid var(--LightBlue);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  height: 42px;
  margin-top: -10px;

  &:hover {
    background: var(--LightBlue);
    cursor: pointer;
  }

  &:disabled {
    background: var(--LightBlue);
    border: none;
    cursor: not-allowed;
  }
`;

class M_NavigationPages extends React.Component {
  render () {
    return (
      <div>
      <PageOpen>1</PageOpen>
      <P>2</P>
      <P>3</P>
      <P>4</P>
      <P>...</P>
      <SECONDARYBUTTON>Дальше</SECONDARYBUTTON>
      </div>
    );
  }
}

export default M_NavigationPages
