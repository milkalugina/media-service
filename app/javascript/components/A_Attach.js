import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const INPUT = styled.input`
  color:  var(--LightBlue);
  font-family:'BasisGrotesquePro-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.1px;

  &::-webkit-file-upload-button {
    width: 360px;
    border: 1px solid rgba(35, 51, 99, 0.2);
    border-radius: 10px;
    padding: 13px 29px;
    background: none;
    color:  var(--LightBlue);
    font-family: Basis Grotesque Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.1px;
  }

  &::-webkit-file-upload-button:hover {
    color:  var(--MidBlue);
    background: var(--LightBlue);
    cursor: pointer;
  }

  &:active::before {
    outline-color: var(--MidBlue);
  }

  &::placeholder {
    color: var(--LightBlue);
  }
`;

class A_Attach extends React.Component {
  render () {
    return (
      <INPUT type="file" name="file" placeholder="Выбрать файл"></INPUT>
    );
  }
}

export default A_Attach
