import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const P = styled.p`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1px;
  color: var(--KindBlue);
`;

const PageOpen = styled(P)`
  border: 1px solid #03195A;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 46px;
`;

class A_TypekitPage extends React.Component {
  render () {
    return (
      <div>
        <P>{this.props.number}</P>
        <PageOpen>{this.props.number}</PageOpen>
      </div>
    );
  }
}

export default A_TypekitPage
