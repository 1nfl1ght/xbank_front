import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to='/' className='active'>Главная</NavLink></li>
          <li><NavLink to='/#' className='active'>#</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Header