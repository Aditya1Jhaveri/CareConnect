import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { FaBars } from 'react-icons/fa'

function NavBar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      <nav className="navbar sticky-top">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            CareConnect
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/appointment"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Appointment
              </NavLink>
            </li>
          </ul>
          <FaBars className="button" onClick={handleClick} />
        </div>
      </nav>
    </>
  )
}

export default NavBar
