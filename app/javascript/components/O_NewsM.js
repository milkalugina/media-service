import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_CardNewsM from './M_CardNewsM'
import M_TypekitGroupNewsData from './M_TypekitGroupNewsData'

const DIV = styled.div`

  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(35, 51, 99, 0.15));
    cursor: pointer;
  }
`;

class O_NewsM extends React.Component {
  render () {
    return (
      <DIV>
        <M_CardNewsM></M_CardNewsM>
        <M_TypekitGroupNewsData></M_TypekitGroupNewsData>
      </DIV>
    );
  }
}

export default O_NewsM
