import React from 'react'
import '../../styles/global.css'
import './CardContainer.css'
import Card from '../../components/Card/Card'
import { cardsData } from '../../data/content'

const CardContainer = () => {
  return (
    <div className='grid top-up__cards wrapper'>
      { cardsData.map((cardData) => <Card key={ cardData.id } {...cardData}/>) }
    </div>
  )
}
 
export default CardContainer