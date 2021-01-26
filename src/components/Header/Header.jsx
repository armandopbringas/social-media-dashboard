import React from 'react'
import '../../styles/global.css'
import './Header.css'
import Switch from '../Switch/Switch';

const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper header-flex'>
        <div>
          <h1 className='header-title'>Social Media Dashboard</h1>
          <span className='header-total'>Total Followers: </span>
          <span className='header-number'>25,000</span>
        </div>
        <div className='button-container'>
          <p className='button-name'>Dark mode</p>
          <Switch />
        </div>
      </div>
      <hr/>
    </header>
  )
}
 
export default Header