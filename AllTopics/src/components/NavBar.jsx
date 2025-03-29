import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='topics'>
        <nav>
            <NavLink to="/props"><li> Props </li></NavLink>
            <NavLink to="/conditions"><li> Conditions </li></NavLink>
            <NavLink to="/list"><li> List and Key </li></NavLink>
            <NavLink to="/form"><li> Form Handling </li></NavLink>
            <NavLink to="/usestate"><li> usestate </li></NavLink>
            <NavLink to="/useeffect"><li> useeffect </li></NavLink>
            <NavLink to="/useref"><li> useref </li></NavLink>
        </nav>
    </div>
  )
}

export default NavBar