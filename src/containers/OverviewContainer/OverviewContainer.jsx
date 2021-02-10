import React from 'react'
import '../../styles/global.css'
import './OverviewContainer.css'
import OverviewCard from '../../components/OerviewCard/OverviewCard'
import { cardsList } from '../../data/content'

const OverviewContainer = () => {
  return (
    <div className='ovContainer'>
      <h2 className='wrapper Over-view-title'>Overview - Today</h2>
      <div className='grid wrapper'>
        {
          cardsList.map(({ icon, pageViews, growth, key }) => (
            <OverviewCard 
              icon={icon}
              key={key}
              pageViews={pageViews}
              growth={growth}
            />
          ))
        }
      </div>
    </div>
  )
}
 
export default OverviewContainer