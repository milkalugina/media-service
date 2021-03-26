import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const NewsS = styled.div`
  width: 300px;
  height: 240px;
`;

const NewsM = styled.div`
  width: 413px;
  height: 500px;
`;

const NewsL = styled.div`
  width: 1247px;
  height: 538px;
`;


class A_CardNews extends React.Component {
  render () {
    return (
      <div>
        <NewsS></NewsS>
        <NewsM></NewsM>
        <NewsL></NewsL>
      </div>
    );
  }
}

export default A_CardNews
