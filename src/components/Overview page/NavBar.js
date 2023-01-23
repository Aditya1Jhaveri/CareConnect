import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { GiRocketThruster } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const navigate = useNavigate()
  const login = () => {
    navigate('/PatientLogin')
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="navbar sticky-top">
          {/* <div className="navbar-container container"> */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <GiRocketThruster className="navbar-icon" />
            CareConnect
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' activated' : '')
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' activated' : '')
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' activated' : '')
                }
                onClick={closeMobileMenu}
              >
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <Button className="signbutton" onClick={login}>
                Sign
              </Button>
            </li>
          </ul>
          {/* </div> */}
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar
