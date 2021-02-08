import React from 'react'
import './OverviewCard.css'
import downArrow from '../../assets/icon-down.svg'

const OverviewCard = ({ growth, pageViews, icon }) => {
  return (
    <div>
      <div className='overviewCard'>
        <p className='overviewCard-small-views'>
          Page Views
        </p>
        <p className='overviewCard-small-icon'>
          <img 
            alt='fb-logo'
            src={ icon }       
          />
        </p>
        <p className='overviewCard-small-number'>
          { pageViews } 
        </p>
        <p className='overviewCard-small-percentage'>
          <img src={ downArrow } alt='arrow'/>
          { growth } %
        </p>
      </div>
    </div>
  )
}
 
export default OverviewCard