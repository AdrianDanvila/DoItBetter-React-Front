import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ExitIcon, RowsIcon } from '@radix-ui/react-icons'

import './private-layout.scss'

import { Header } from '@/components/privateLayout/header/Header'
import { NavBar } from '@/components/privateLayout/navbar/NavBar'
import { Button } from '@/components/shared/button/Button'
import { Card } from '@/components/shared/card/Card'
import { OverlayPanel } from '@/components/shared/overlayPanel/OverlayPanel'

export const PrivateLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <main className="main-container">
      <NavBar
        isOpen={isNavOpen}
        onHide={() => setIsNavOpen(false)}
      />
      <section className="section-container">
        <Header>
          <Button
            icon={<ExitIcon className="icon" />}
            className="header-container__button"
            onClick={() => {}}
          />

          <OverlayPanel
            activationComponent={
              <div className="bg-black w-6 h-6 rounded-full mx-2" />
            }>
            <Card title="hola" />
          </OverlayPanel>
          <Button
            icon={<RowsIcon className="icon" />}
            className="header-container__button header-container__button__nav "
            onClick={() => setIsNavOpen(true)}
          />
        </Header>

        <Outlet />
      </section>
    </main>
  )
}
