import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_IconsArrows from './A_IconsArrows'
import A_TypekitH3 from './A_TypekitH3'

const DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SVG = styled.svg`
  transform: ${props => props.down ? "rotate(180deg)" : "none"};

  &:hover {
    cursor: pointer;
  }
`;

class M_TypekitGroupCaseInfo extends React.Component {
  render () {
    return (
      <DIV>
      <A_TypekitH3 name="Детали"></A_TypekitH3>
      <SVG width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" down>
      <path d="M7.87408 15.0574C7.40847 14.6583 7.40847 13.9379 7.87408 13.5388L13.3496 8.84551C13.7241 8.52452 14.2767 8.52452 14.6512 8.84551L20.1268 13.5388C20.5924 13.9379 20.5924 14.6583 20.1268 15.0574L20.0134 15.1545C19.639 15.4755 19.0863 15.4755 18.7119 15.1545L14.6512 11.6739C14.2767 11.3529 13.7241 11.3529 13.3496 11.6739L9.28899 15.1545C8.9145 15.4755 8.3619 15.4755 7.98741 15.1545L7.87408 15.0574Z" fill="#233363"/>
      </SVG>
      </DIV>
    );
  }
}

export default M_TypekitGroupCaseInfo
