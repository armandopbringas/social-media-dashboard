import React from 'react'
import '../../styles/global.css'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <h1>Social Media Dashboard</h1>
        <span className='header-total'>Total Followers: </span>
        <span className='header-number'>25,000</span>
      </div>
    </header>
  )
}
 
export default Header