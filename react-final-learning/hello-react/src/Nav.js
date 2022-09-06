import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {
  return (
      <nav className='nav-links'>
          <ul className='navList'>
              <NavLink activeclassname="active"  exact="true" to="/">
                <li className='nav-link'>
                    Home
                </li>
              </NavLink>

              <NavLink exact="true" to="/hobbies">
                <li className='nav-link'>
                    Hobby
                </li>
              </NavLink>
          </ul>
      </nav>
  )
}
