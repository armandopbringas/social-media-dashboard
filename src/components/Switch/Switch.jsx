import React from 'react'
import './Switch.css'

const Switch = () => {
  return (
    <div>
      <input 
        id='checkbox'
        type='checkbox'
        className='checkbox'
      />
      <label 
        htmlFor='checkbox' 
        className='switchButton'
      />
    </div>
  )
}
 
export default Switch