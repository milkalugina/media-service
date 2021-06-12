import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const IMG = styled.img`
  border-radius: 20px;
  width: 300px;
  height: 300px;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    -webkit-transition: .4s;
    transition: .4s;
    filter: drop-shadow(0px 0px 10px rgba(35, 51, 99, 0.15));

  }
`;

class A_ImageInst extends React.Component {
  render () {
    return (
      <div><IMG src={this.props.name}></IMG></div>
    );
  }
}

export default A_ImageInst
