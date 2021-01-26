import React from 'react'
import '../../styles/global.css'
import './Card.css'
import facebookLogo from '../../assets/icon-facebook.svg'
import arrow from '../../assets/icon-up.svg'

const Card = () => {
  return (
    <div className='card'>
      <div className='card-info'>
      <p className='card-info__user'>
        <img 
          alt='facebook logo'
          src={ facebookLogo } 
          className='card-info__img' 
        />
        @armanopbringas
      </p>
      <div className='card-info__data'>
        <span className='card-info__number'>1975</span>
        <span className='card-info__folloewrs'>Followers</span>
        <p className='card-info__today'>
          <img 
            src={ arrow } 
            alt='icon-up'
            className='card-info__arrow-today'
          />
          12 Today
        </p>
      </div>
      </div>
    </div>
  )
}
 
export default Card