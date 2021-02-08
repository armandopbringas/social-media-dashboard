import React from 'react'
import '../../styles/global.css'
import './OverviewContainer.css'
import OverviewCard from '../../components/OerviewCard/OverviewCard'

const cardsList = [
  {
    icon: 'images/icon-facebook.svg',
    pageViews: '87',
    growth: 3,
    key: 1,
  },
  {
    icon: 'images/icon-twitter.svg',
    pageViews: '52',
    growth: 2257,
    key: 2,
  },
  {
    icon: 'images/icon-instagram.svg',
    pageViews: '5462',
    growth: 1375,
    key: 3,
  },
  {
    icon: 'images/icon-youtube.svg',
    pageViews: '117',
    growth: 303,
    key: 4,
  },
]

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