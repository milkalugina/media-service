import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_TypekitGroupCaseInfo from './M_TypekitGroupCaseInfo'
import A_TypekitText from './A_TypekitText'
import A_TypekitH3 from './A_TypekitH3'
import A_ButtonColor from './A_ButtonColor'

const DIV = styled.div`
  width: 1094px;
`;

const NAME = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ABOUTORG = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TEXT = styled.div`
  width: 1094px;
  padding: 40px 200px 40px 40px;
  background: #FFFFFF;
  border: 1px solid rgba(35, 51, 99, 0.2);
  box-sizing: border-box;
  border-radius: 20px;
  margin-top: 20px;
`;

const SVG = styled.svg`
  transform: ${props => props.down ? "rotate(180deg)" : "none"};

  &:hover {
    cursor: pointer;
  }
`;

const REDBUTTON = styled.button`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
  background: var(--LightRed);
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  width: 300px;

  &:hover {
    background: #FFA8A8;
  }
`;

const GREENBUTTON = styled(REDBUTTON)`
  background: var(--LightGreen);

  &:hover {
    background: #BCFFB7;
  }
`;

class O_CasesCaseOrg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render () {
    return (
      <DIV onClick={this.handleClick}>
      {this.state.isToggleOn ?
        <ABOUTORG>
        <div>
        <NAME>
        <A_TypekitH3 name="Об организаторе"></A_TypekitH3>
        <SVG width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" down>
        <path d="M7.87408 15.0574C7.40847 14.6583 7.40847 13.9379 7.87408 13.5388L13.3496 8.84551C13.7241 8.52452 14.2767 8.52452 14.6512 8.84551L20.1268 13.5388C20.5924 13.9379 20.5924 14.6583 20.1268 15.0574L20.0134 15.1545C19.639 15.4755 19.0863 15.4755 18.7119 15.1545L14.6512 11.6739C14.2767 11.3529 13.7241 11.3529 13.3496 11.6739L9.28899 15.1545C8.9145 15.4755 8.3619 15.4755 7.98741 15.1545L7.87408 15.0574Z" fill="#233363"/>
        </SVG>
        </NAME>
        </div>
        <GREENBUTTON>Проверенная организация</GREENBUTTON>
        </ABOUTORG>
        : <div>
        <ABOUTORG>
        <div>
        <NAME>
        <A_TypekitH3 name="Об организаторе"></A_TypekitH3>
        <SVG width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.87408 15.0574C7.40847 14.6583 7.40847 13.9379 7.87408 13.5388L13.3496 8.84551C13.7241 8.52452 14.2767 8.52452 14.6512 8.84551L20.1268 13.5388C20.5924 13.9379 20.5924 14.6583 20.1268 15.0574L20.0134 15.1545C19.639 15.4755 19.0863 15.4755 18.7119 15.1545L14.6512 11.6739C14.2767 11.3529 13.7241 11.3529 13.3496 11.6739L9.28899 15.1545C8.9145 15.4755 8.3619 15.4755 7.98741 15.1545L7.87408 15.0574Z" fill="#233363"/>
        </SVG>
        </NAME>
        </div>
        <GREENBUTTON>Проверенная организация</GREENBUTTON>
        </ABOUTORG>
        <TEXT><A_TypekitText name="Волонтерим на пользу планете"></A_TypekitText></TEXT></div>}
      </DIV>
    );
  }
}

export default O_CasesCaseOrg
