import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_IconsSliderCircle from './A_IconsSliderCircle'

const DIV = styled.div`
  width: 68px;
  display: flex;
`;

const SLIDER = styled.div`
  margin-right: 10px;
`;

const CIRCLE = styled.circle`
  fill: ${props => props.filled ? "var(--KindBlue)" : "none"};

  &:hover {
    fill: var(--LightBlue);
    cursor: pointer;
  }
`;

class M_NavigationCasesList extends React.Component {
  render () {
    return (
      <DIV>
        <SLIDER>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE cx="8" cy="8" r="7.5" stroke="#233363"/>
          </svg>
        </SLIDER>
        <SLIDER>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE cx="8" cy="8" r="7.5" stroke="#233363"/>
          </svg>
        </SLIDER>
        <SLIDER>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE cx="8" cy="8" r="7.5" stroke="#233363"/>
          </svg>
        </SLIDER>
      </DIV>
    );
  }
}

export default M_NavigationCasesList
