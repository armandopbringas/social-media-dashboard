import React from 'react'
import '../../styles/global.css'
import './Card.css'
import arrow from '../../assets/icon-up.svg'

const Card = ({ username, followers, todayFollowers, icon, name }) => {
  
  const cardClass = `card ${name}`

  return (
    <div className={ cardClass }>
      <div className='card-info'>
      <p className='card-info__user'>
        <img 
          alt={ name }
          src={ icon } 
          className='card-info__img' 
        />
        { username }
      </p>
      <div className='card-info__data'>
        <span className='card-info__number'>{ followers }</span>
        <span className='card-info__folloewrs'>Followers</span>
        <p className='card-info__today'>
          <img 
            src={ arrow } 
            alt='icon-up'
            className='card-info__arrow-today'
          />
          { todayFollowers } Today
        </p>
      </div>
      </div>
    </div>
  )
}
 
export default Card