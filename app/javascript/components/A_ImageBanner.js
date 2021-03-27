import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const DIV = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/images/pic-1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  width: 1320px;
  height: 320px;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(/images/pic-1.jpg);
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

class A_ImageBanner extends React.Component {
  render () {
    return (
      <DIV></DIV>
    );
  }
}

export default A_ImageBanner
