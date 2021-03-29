import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_IconsArrows from './A_IconsArrows'

class M_SelectRegestration extends React.Component {
  render () {
    return (
      <div className="select-box">
        <div className="select-box__current" tabIndex="1">
          <div className="select-box__value">
            <input className="select-box__input" type="radio" id="0" value="1" name="Ben" defaultChecked/>
            <p className="select-box__input-text">Россия</p>
         </div>
        <div className="select-box__value">
          <input className="select-box__input" type="radio" id="1" value="2" name="Ben"/>
          <p className="select-box__input-text">Белоруссия</p>
       </div>
       <div className="select-box__value">
         <input className="select-box__input" type="radio" id="2" value="3" name="Ben"/>
         <p className="select-box__input-text">Казахстан</p>
       </div>
      <div className="select-box__value">
         <input className="select-box__input" type="radio" id="3" value="4" name="Ben"/>
         <p className="select-box__input-text">Узбекистан</p>
      </div>
      <div className="select-box__value">
        <input className="select-box__input" type="radio" id="4" value="5" name="Ben"/>
        <p className="select-box__input-text">Киргизия</p>
      </div><img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>
      </div>
      <ul className="select-box__list">
      <li>
      <label className="select-box__option" htmlFor="0" aria-hidden="aria-hidden">Россия</label>
      </li>
      <li>
      <label className="select-box__option" htmlFor="1" aria-hidden="aria-hidden">Белоруссия</label>
      </li>
      <li>
      <label className="select-box__option" htmlFor="2" aria-hidden="aria-hidden">Казахстан</label>
      </li>
      <li>
      <label className="select-box__option" htmlFor="3" aria-hidden="aria-hidden">Узбекистан</label>
      </li>
      <li>
      <label className="select-box__option" htmlFor="4" aria-hidden="aria-hidden">Киргизия</label>
      </li>
    </ul>
  </div>
    );
  }
}

export default M_SelectRegestration
