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

class M_SelectSkills extends React.Component {
  render () {
    return (
      <DIV>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies1" value="бизнес"></input>
        <label for="TypekitHobbies1">бизнес</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies2" value="аналитика"></input>
        <label for="TypekitHobbies2">аналитика</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies3" value="дизайн и медиа"></input>
        <label for="TypekitHobbies3" id="HobbyShort">дизайн и медиа</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies4" value="финансы"></input>
        <label for="TypekitHobbies4" id="HobbyShort">финансы</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies5" value="отдел кадров"></input>
        <label for="TypekitHobbies5" id="HobbyShort">отдел кадров</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies6" value="менеджмент"></input>
        <label for="TypekitHobbies6">менеджмент</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies7" value="маркетинг"></input>
        <label for="TypekitHobbies7">маркетинг</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies8" value="IT"></input>
        <label for="TypekitHobbies8" id="HobbyShort">IT</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies9" value="другое"></input>
        <label for="TypekitHobbies9" id="HobbyShort">другое</label>
      </div>
      </DIV>
    );
  }
}

export default M_SelectSkills
