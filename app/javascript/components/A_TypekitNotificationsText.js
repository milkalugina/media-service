import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const P = styled.p`
font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 120%;
  color: var(--KindBlue);
`;

class A_TypekitNotificationsText extends React.Component {
  render () {
    return (
      <P>{this.props.name}</P>
    );
  }
}

export default A_TypekitNotificationsText
