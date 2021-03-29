import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const IMG = styled.img`
  border-radius: 100%;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

class A_ImageAvatarS extends React.Component {
  render () {
    return (
      <div><IMG src="/images/pic-1.jpg"></IMG></div>
    );
  }
}

export default A_ImageAvatarS
