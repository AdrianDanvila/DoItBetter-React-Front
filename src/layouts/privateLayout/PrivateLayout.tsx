import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from 'primereact/button'
import { RowsIcon } from '@radix-ui/react-icons'

import './private-layout.scss'

import { Header } from '@/components/privateLayout/header/Header'
import { NavBar } from '@/components/privateLayout/navbar/NavBar'
import { BREAKPOINTS } from '@/constants'

export const PrivateLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(
    window.innerWidth > BREAKPOINTS.tablet,
  )
  return (
    <main className="main-container">
      <NavBar
        isOpen={isNavOpen}
        onHide={() => setIsNavOpen(false)}
      />
      <div className="section-container">
        <Header>
          <Button
            icon={<RowsIcon className="icon" />}
            className="header-container__button header-container__button__nav "
            onClick={() => setIsNavOpen(true)}
          />
        </Header>

        <Outlet />
      </div>
    </main>
  )
}
