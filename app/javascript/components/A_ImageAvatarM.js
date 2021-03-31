import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const IMG = styled.img`
  border-radius: 100%;
  width: 204px;
  height: 204px;
  object-fit: cover;
`;

class A_ImageAvatarM extends React.Component {
  render () {
    return (
      <div><IMG src="/images/ecology.png"></IMG></div>
    );
  }
}

export default A_ImageAvatarM
