import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const IMG = styled.img`
  border-radius: 20px;
  width: 640px;
  height: 538px;
  object-fit: cover;
`;

class A_ImageM extends React.Component {
  render () {
    return (
      <div><IMG src=" "></IMG></div>
    );
  }
}

export default A_ImageM
