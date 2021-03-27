import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const IMG = styled.img`
  border-radius: 20px;
  width: 300px;
  height: 184px;
  object-fit: cover;
`;

class A_ImageCard extends React.Component {
  render () {
    return (
      <div><IMG src=" "></IMG></div>
    );
  }
}

export default A_ImageCard
