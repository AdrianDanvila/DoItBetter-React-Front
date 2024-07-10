import MediaQuery from 'react-responsive'

import { NavBar as GenericNavBar } from '@components/shared/navbar/NavBar'

import { NAVBAR_LINKS } from './constants'
import { NavbarProps } from './types'

import './navbar.scss'

import { Aside } from '@/components/shared/aside/Aside'
import { Card } from '@/components/shared/card/Card'
import { BREAKPOINTS } from '@/constants'

export const NavBar = ({ isOpen, onHide }: NavbarProps) => (
  <>
    <MediaQuery maxWidth={BREAKPOINTS.tablet}>
      <Aside
        onHide={onHide}
        isOpen={isOpen}>
        <div className="navbar">
          <h2 className="navbar__title">Titulo</h2>
          <GenericNavBar
            navClassName="navbar__section"
            data={NAVBAR_LINKS}
            title="titulo"
          />
          <GenericNavBar
            navClassName="navbar__section"
            data={NAVBAR_LINKS}
            title="titulo"
          />
        </div>
      </Aside>
    </MediaQuery>
    <MediaQuery minWidth={BREAKPOINTS.tablet}>
      <div className="navbar">
        <h2 className="navbar__title">Titulo</h2>
        <div>
          <GenericNavBar
            navClassName="navbar__section"
            data={NAVBAR_LINKS}
            title="titulo"
          />
          <GenericNavBar
            navClassName="navbar__section"
            data={NAVBAR_LINKS}
            title="titulo"
          />
        </div>

        <Card
          className="navbar__card"
          title="hola">
          <img className="bg-black w-6 h-6 rounded-full mx-2 "></img>
          <p>holaaa</p>
        </Card>
      </div>
    </MediaQuery>
  </>
)
