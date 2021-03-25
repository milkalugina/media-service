import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const HrWhite = styled.div`
  width: 1320px;
  border: 1px solid rgba(35, 51, 99, 0.2);
`;

const HrWhiteVert = styled.div`
  height: 498px;
  border: 1px solid rgba(35, 51, 99, 0.2);
`;

const HrWhiteVertS = styled(HrWhiteVert)`
  height: 246px;
`;

class A_Lines extends React.Component {
  render () {
    return (
      <div>
        <HrWhite></HrWhite>
        <HrWhiteVert></HrWhiteVert>
        <HrWhiteVertS></HrWhiteVertS>
      </div>
    );
  }
}

export default A_Lines
