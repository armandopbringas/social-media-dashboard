import React from 'react'
import '../../styles/global.css'
import './OverviewContainer.css'
import OverviewCard from '../OerviewCard/OverviewCard'

const OverviewContainer = () => {
  return (
    <div className='ovContainer'>
      <h2 className='wrapper Over-view-title'>Overview - Today</h2>
      <div className='grid wrapper'>
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>
    </div>
  )
}
 
export default OverviewContainer