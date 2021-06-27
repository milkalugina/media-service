import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const P = styled.p`
font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 80%;
  color: var(--KindBlue);
`;

class A_TypekitNotificationsTextDate extends React.Component {
  render () {
    return (
      <P>{this.props.name}</P>
    );
  }
}

export default A_TypekitNotificationsTextDate
