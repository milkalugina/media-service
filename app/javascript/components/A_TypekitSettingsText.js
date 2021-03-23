import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const H3 = styled.h3`
  font-family: Basis Grotesque Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: var(--KindBlue);
`;

class A_TypekitSettingsText extends React.Component {
  render () {
    return (
      <H3>{this.props.name}</H3>
    );
  }
}

export default A_TypekitSettingsText
