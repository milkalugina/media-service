import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

class M_SelectCases extends React.Component {
  render () {
    return (
      <div className="select-box">
        <div className="select-box__current" tabIndex="1">
          <div className="select-box__value">
            <input className="select-box__input" type="radio" id="0" value="1" name="Ben" defaultChecked/>
            <p className="select-box__input-text">Рекомендованные</p>
         </div>
        <div className="select-box__value">
          <input className="select-box__input" type="radio" id="1" value="2" name="Ben"/>
          <p className="select-box__input-text">Последние</p>
       </div>
       <div className="select-box__value">
         <input className="select-box__input" type="radio" id="2" value="3" name="Ben"/>
         <p className="select-box__input-text">По имени</p>
       </div>
      <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>
      </div>
      <ul className="select-box__list">
      <li>
      <label className="select-box__option" htmlFor="0" aria-hidden="aria-hidden">Рекомендованные</label>
      </li>
      <li>
      <label className="select-box__option" htmlFor="1" aria-hidden="aria-hidden">Последние</label>
      </li>
      <li>
      <label className="select-box__option" htmlFor="2" aria-hidden="aria-hidden">По имени</label>
      </li>
    </ul>
  </div>
    );
  }
}

export default M_SelectCases
