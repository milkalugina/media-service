import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const PATH = styled.path`
  fill: ${props => props.fill ? "var(--KindBlue)" : "var(--LightBlue)"};
  stroke-width: 1.5;

  &:hover {
    fill: var(--MidBlue);
    cursor: pointer;
  }
`;

class A_IconsNotifications extends React.Component {
  render () {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <PATH d="M15 6.66666C15 5.34057 14.4732 4.0688 13.5355 3.13112C12.5979 2.19344 11.3261 1.66666 10 1.66666C8.67392 1.66666 7.40215 2.19344 6.46447 3.13112C5.52678 4.0688 5 5.34057 5 6.66666C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66666Z" stroke="#03195A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <PATH d="M11.4419 17.5C11.2954 17.7526 11.0851 17.9622 10.8321 18.1079C10.5791 18.2537 10.2922 18.3304 10.0003 18.3304C9.70828 18.3304 9.42142 18.2537 9.16841 18.1079C8.91539 17.9622 8.7051 17.7526 8.55859 17.5" stroke="#03195A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  }
}

export default A_IconsNotifications
