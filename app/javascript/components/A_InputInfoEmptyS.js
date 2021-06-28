import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const INPUT = styled.input`
  color:  var(--KindBlue);
  font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.1px;
  background: none;
  width: 360px;
  border: 1px solid rgba(35, 51, 99, 0.2);
  padding: 13px 29px;

  &:focus {
    outline-color: var(--MidBlue);
  }

  &::placeholder {
    color: var(--LightBlue);
  }
`;

class A_InputInfoEmptyS extends React.Component {
  render () {
    return (
      <INPUT name="text" placeholder="Website"></INPUT>
    );
  }
}

export default A_InputInfoEmptyS
