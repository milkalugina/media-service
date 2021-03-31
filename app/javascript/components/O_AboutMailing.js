import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_FormEmail from './M_FormEmail'
import A_TypekitFooterH1 from './A_TypekitFooterH1'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const H1 = styled.div`
  width: 427px;
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 105%;
  color: var(--White);
`;

class O_AboutMailing extends React.Component {
  render () {
    return (
      <DIV>
        <div><H1>Подпишитесь</H1><H1>на еженедельную рассылку лучших дел и новостей</H1></div>
        <M_FormEmail></M_FormEmail>
      </DIV>
    );
  }
}

export default O_AboutMailing
