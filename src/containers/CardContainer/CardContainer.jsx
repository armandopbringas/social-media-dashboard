import React from 'react'
import '../../styles/global.css'
import './CardContainer.css'
import Card from '../../components/Card/Card'

const cardsData = [
  {
    username: '@armandopbringas',
    id: 1,
    followers: '1596',
    todayFollowers: 12,
    icon: 'assets/icon-facebook.svg',
    name: 'facebook'
  },
  {
    username: '@armandopbringas',
    id: 2,
    followers: '28k',
    todayFollowers: 20,
    icon: 'assets/icon-twitter.svg',
    name: 'twitter'
  },
  {
    username: '@armandopbringas',
    id: 3,
    followers: '6k',
    todayFollowers: 30,
    icon: 'assets/icon-instagram.svg',
    name: 'instagram'
  },
  {
    username: '@armandopbringas',
    id: 4,
    followers: '12k',
    todayFollowers: -50,
    icon: 'assets/icon-youtube.svg',
    name: 'youtube'
  },
]

const CardContainer = () => {
  return (
    <div className='grid top-up__cards wrapper'>
      {
        cardsData.map((cardData) => <Card key={ cardData.id } {...cardData} />)
      }
    </div>
  )
}
 
export default CardContainer