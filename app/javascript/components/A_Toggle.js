import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

// const LABEL = styled.label`
//   position: relative;
//   display: inline-block;
//   width: 40px;
//   height: 24px;
//
//   .slider {
//   position: absolute;
//   cursor: pointer;
//   background-color: #ccc;
//   -webkit-transition: .4s;
//   transition: .4s;
//   }
//
//   .slider:before {
//     position: absolute;
//     content: "";
//     height: 26px;
//     width: 26px;
//     left: 4px;
//     bottom: 4px;
//     background-color: white;
//     -webkit-transition: .4s;
//     transition: .4s;
//     border-radius: 50%;
//     border-radius: 24px;
//   }
//
//   .input {
//     opacity: 0;
//     width: 0;
//     height: 0;
//   }
//
//   .input:checked + .slider {
//   background-color: #2196F3;
//   }
//
//   .input:focus + .slider {
//   box-shadow: 0 0 1px #2196F3;
//   }
//
//   .input:checked + .slider:before {
//   -webkit-transform: translateX(26px);
//   -ms-transform: translateX(26px);
//   transform: translateX(26px);
//   }
// `;

class A_Toggle extends React.Component {
  render () {
    return (
      <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
      </label>
    );
  }
}

export default A_Toggle
