import React from 'react'
import '../../styles/global.css'
import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = () => {
  return (
    <div className='grid top-up__cards wrapper'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
 
export default CardContainer