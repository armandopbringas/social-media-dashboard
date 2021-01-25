import React from 'react'
import './OverviewCard.css'
import facebookLogo from '../../assets/icon-facebook.svg'
import downArrow from '../../assets/icon-down.svg'

const OverviewCard = () => {
  return (
    <div>
      <div className='overviewCard'>
        <p className='overviewCard-small-views'>
          Page Views
        </p>
        <p className='overviewCard-small-icon'>
          <img 
            alt='fb-logo'
            src={ facebookLogo }       
          />
        </p>
        <p className='overviewCard-small-number'>
          50
        </p>
        <p className='overviewCard-small-percentage'>
          <img src={ downArrow } alt='arrow'/>
          2%
        </p>
      </div>
    </div>
  )
}
 
export default OverviewCard