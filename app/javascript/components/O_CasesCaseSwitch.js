import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import M_CardCase from './M_CardCase'
import A_IconsArrowsLr from './A_IconsArrowsLr'
import A_IconsArrowsLrRight from './A_IconsArrowsLrRight'
import M_NavigationCasesList from './M_NavigationCasesList'
import A_IconsSliderCircle from './A_IconsSliderCircle'
import Slider from "react-slick";

const CARDS = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const DIV = styled.div`
  width: 1320px;
  padding: 0px 60px 0px 0px;
`;

const ARROWS = styled.div`
  width: 1370px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 150px;
`;

class O_CasesCaseSwitch extends React.Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
    };
    return (
      <DIV>
        <Slider {...settings}>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
          <M_CardCase></M_CardCase>
        </Slider>
      </DIV>
    );
  }
}

export default O_CasesCaseSwitch

// <DIV>
// <CARDS>
//   <M_CardCase></M_CardCase>
//   <M_CardCase></M_CardCase>
//   <M_CardCase></M_CardCase>
//   <M_CardCase></M_CardCase>
// </CARDS>
// <M_NavigationCasesList></M_NavigationCasesList>
// <ARROWS>
//   <A_IconsArrowsLr></A_IconsArrowsLr>
//   <A_IconsArrowsLrRight></A_IconsArrowsLrRight>
// </ARROWS>
// </DIV>
