import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

// const INPUT = styled.input`
//   appearance: none;
//   width: 16px;
//   height: 16px;
//   background: #FFFFFF;
//   border: 1px solid rgba(35, 51, 99, 0.2);
//   box-sizing: border-box;
//   border-radius: 1px;
//   outline: none;
//
//   &:checked {
//     background: var(--KindBlue);
//   }
//
//   &:after {
//     display: block;
//   }
//
// `;

class A_Checkbox extends React.Component {
  render () {
    return (
      <label className="container">
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </label>
    );
  }
}

export default A_Checkbox
