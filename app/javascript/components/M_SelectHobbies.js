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

class M_SelectHobbies extends React.Component {
  render () {
    return (
      <DIV>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies1" value="малоимущие"></input>
        <label for="TypekitHobbies1">малоимущие</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies2" value="культура и медиа"></input>
        <label for="TypekitHobbies2">культура и медиа</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies3" value="экология"></input>
        <label for="TypekitHobbies3" id="HobbyShort">экология</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies4" value="образование"></input>
        <label for="TypekitHobbies4" id="HobbyShort">образование</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies5" value="пожилые"></input>
        <label for="TypekitHobbies5" id="HobbyShort">пожилые</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies6" value="медицинская помощь"></input>
        <label for="TypekitHobbies6">медицинская помощь</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies7" value="социальная помощь"></input>
        <label for="TypekitHobbies7">социальная помощь</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies8" value="животные"></input>
        <label for="TypekitHobbies8" id="HobbyShort">животные</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies9" value="спорт"></input>
        <label for="TypekitHobbies9" id="HobbyShort">спорт</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies10" value="инвалидность"></input>
        <label for="TypekitHobbies10" id="HobbyShort">инвалидность</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies11" value="бездомные"></input>
        <label for="TypekitHobbies11">бездомные</label>
      </div>
      <div className="hobbies">
        <input type="checkbox" id="TypekitHobbies12" value="психологическая помощь"></input>
        <label for="TypekitHobbies12">психологическая помощь</label>
      </div>
      </DIV>
    );
  }
}

export default M_SelectHobbies
