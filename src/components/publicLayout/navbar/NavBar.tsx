import MediaQuery from 'react-responsive'

import { NavBar as GenericNavBar } from '@components/shared/navbar/NavBar'

import './navbar.scss'

import { Aside } from '@/components/shared/aside/Aside'
import { BREAKPOINTS } from '@/constants'

export const NavBar = () => (
  <div className="navbar-container">
    <MediaQuery maxWidth={BREAKPOINTS.desktop}>
      <Aside>
        <GenericNavBar
          data={[
            { href: '/main', text: 'Home' },
            { href: 'x', text: 'Rutinas' },
            { href: 'z', text: 'Perfil' },
          ]}
        />
      </Aside>
    </MediaQuery>
    <MediaQuery minWidth={BREAKPOINTS.desktop}>
      <h1 className="navigation__title">Titulo</h1>
      <GenericNavBar
        data={[
          { href: '/main', text: 'Home' },
          { href: 'x', text: 'Rutinas' },
          { href: 'z', text: 'Perfil' },
        ]}
      />
    </MediaQuery>
  </div>
)
