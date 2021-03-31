import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_TypekitGroupNewsData from './M_TypekitGroupNewsData'
import A_TypekitNewsM from './A_TypekitNewsM'

const DIV = styled.div`
  width: 300px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(35, 51, 99, 0.15));
    cursor: pointer;
  }
`;

class O_NewsS extends React.Component {
  render () {
    return (
      <DIV>
        <A_TypekitNewsM name="В Петербурге «Ночлежка» откроет два пункта обогрева для бездомных людей"></A_TypekitNewsM>
        <M_TypekitGroupNewsData></M_TypekitGroupNewsData>
      </DIV>
    );
  }
}

export default O_NewsS
