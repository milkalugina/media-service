import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const CARDCASE = styled.div`
  width: 300px;
  height: 417px;
  background: var(--White);
  border: 1px solid rgba(35, 51, 99, 0.2);
  border-radius: 20px;
  box-sizing: border-box;
`;


class A_CardCase extends React.Component {
  render () {
    return (
      <CARDCASE></CARDCASE>
    );
  }
}

export default A_CardCase
