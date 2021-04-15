import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_TypekitHobbies from './A_TypekitHobbies'

const DIV = styled.div`
  display: flex;
  width: 497px;
  flex-wrap: wrap;
  gap: 10px;
`;

class M_SelectTypes extends React.Component {
  render () {
    return (
      <DIV>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies3" value="телефонный звонок"></input>
        <label for="TypekitHobbies3" id="HobbyShort">телефонный звонок</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies4" value="проект"></input>
        <label for="TypekitHobbies4" id="HobbyShort">проект</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies5" value="мероприятие"></input>
        <label for="TypekitHobbies5" id="HobbyShort">мероприятие</label>
      </div>
      </DIV>
    );
  }
}

export default M_SelectTypes
