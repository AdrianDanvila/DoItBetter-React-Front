import { useRef } from 'react'
import MediaQuery from 'react-responsive'
import { OverlayPanel } from 'primereact/overlaypanel'

import { NavBar as GenericNavBar } from '@components/shared/navbar/NavBar'

import logo from '@assets/logo.png'

import { NAVBAR_LINKS } from './constants'
import { NavbarProps } from './types'

import './navbar.scss'

import { Aside } from '@/components/shared/aside/Aside'
import { Card } from '@/components/shared/card/Card'
import { BREAKPOINTS } from '@/constants'

export const NavBar = ({ isOpen, onHide }: NavbarProps) => {
  const op = useRef(null)

  return (
    <>
      <MediaQuery maxWidth={BREAKPOINTS.tablet}>
        <Aside
          onHide={onHide}
          isOpen={isOpen}>
          <div className="navbar">
            <h2 className="navbar__title">
              <img
                src={logo}
                className="h-full w-40"
              />
            </h2>

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
          <h2 className="navbar__title">
            <img
              src={logo}
              className="h-full w-40"
            />
          </h2>
          <div>
            <GenericNavBar
              navClassName="navbar__section"
              data={NAVBAR_LINKS}
              title="titulo"
            />
          </div>

          <div
            className="navbar__options"
            title="hola">
            aaaa
            <OverlayPanel ref={op}>
              <Card title="hola"></Card>
            </OverlayPanel>
          </div>
        </div>
      </MediaQuery>
    </>
  )
}
