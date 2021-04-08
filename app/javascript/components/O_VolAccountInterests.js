import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitTitleS from './A_TypekitTitleS'
import M_SelectHobbies from './M_SelectHobbies'

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

class O_VolAccountInterests extends React.Component {
  render () {
    return (
      <DIV>
      <A_TypekitTitleS name="Интересы в волонтерстве"></A_TypekitTitleS>
      <M_SelectHobbies></M_SelectHobbies>
      </DIV>
    );
  }
}

export default O_VolAccountInterests
