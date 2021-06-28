import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const INPUT = styled.input`
  color: rgba(255, 255, 255, 0.6);
  font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1px;
  border: none;
  padding-bottom: 10px;
  border-bottom: 2px solid #FFFFFF;
  background: none;
  width: 355px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

`;

class A_InputEmailS extends React.Component {
  render () {
    return (
      <INPUT name="email" placeholder="Ваш email"></INPUT>
    );
  }
}

export default A_InputEmailS
