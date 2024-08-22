import { NavBar as GenericNavbar } from '@components/shared/navbar/NavBar'

import { HEADER_LINKS } from './constants'
import { NavbarProps } from './types'

import './navbar.scss'

export const Navbar = ({ isOpen }: NavbarProps) => (
  <>
    {isOpen && (
      <GenericNavbar
        navClassName="header__navbar"
        data={HEADER_LINKS}
      />
    )}
  </>
)
