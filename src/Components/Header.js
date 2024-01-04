import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {

  return (
    <div className='header'>
        <div className='left-side'>
          <NavLink className='link' to='/'>Shopping Cart</NavLink>
        </div>
        <div className="right-side">
            <NavLink className='link' to='/'>Home Page</NavLink>
            <NavLink className='link' to='/cart'>Cart Page</NavLink>
        </div>
    </div>
  )
}

export default Header