import React from 'react'
import Fade from 'react-reveal/Fade'

import {
  NavbarContainer,
  NavbarMenu,
  NavbarLogo,
  NavbarButton
} from './'

import { Container } from '../'

export const Navbar = () => (
  <NavbarContainer>
    <Container flex fullHeight>
      <Fade top>
        <NavbarLogo to='/'>
          <span>J</span>
          <span>V</span>
          <span>M</span>
        </NavbarLogo>
      </Fade>
      <NavbarMenu>
        {/* <Fade top>
          <NavbarMenuItem>
            <Link to="/">About</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to="/">Lab</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to="/">Blog</Link>
          </NavbarMenuItem>
        </Fade> */}
      </NavbarMenu>
      <Fade top>
        <NavbarButton to="/">
          Contact
        </NavbarButton>
      </Fade>
    </Container>
  </NavbarContainer>
)
