import Footer from '../footer/index'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Foter() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <Footer.Title>About Us</Footer.Title>
            </NavLink>

            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Marketing</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <Footer.Title>Contact Us</Footer.Title>
            </NavLink>

            <Footer.Link href="#">Marketing</Footer.Link>
            <Footer.Link href="#">Consulting</Footer.Link>
            <Footer.Link href="#">Development</Footer.Link>
            <Footer.Link href="#">Design</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}
export default Foter
