import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Button } from 'primereact/button'
import { RowsIcon } from '@radix-ui/react-icons'

import logo from '@assets/logo.png'

import { Navbar } from './components/navbar/Navbar'

import './header.scss'

import { LanguageDropdown } from '@/components/shared/languageDropdown/LanguageDropdown'
import { BREAKPOINTS } from '@/constants'

export const Header = () => {
  const { t } = useTranslation()
  const [isNavOpen, setIsNavOpen] = useState(
    window.innerWidth > BREAKPOINTS.tablet,
  )

  const [isHeaderScrolled, setisHeaderScrolled] = useState(window.scrollY > 75)

  const handleClickButton = () => {
    isHeaderScrolled
      ? listenScrollEvent()
      : setisHeaderScrolled(!isHeaderScrolled)
    setIsNavOpen(!isNavOpen)
  }

  const listenScrollEvent = () => {
    window.innerWidth < BREAKPOINTS.tablet ? setIsNavOpen(false) : null
    setisHeaderScrolled(window.scrollY > 75)
  }

  const listenResizeEvent = () => {
    listenScrollEvent()
    setIsNavOpen(window.innerWidth > BREAKPOINTS.tablet)
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    window.addEventListener('resize', listenResizeEvent)
  })

  return (
    <>
      <header
        className={`header ${isHeaderScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__logo">
          <img
            className="header__logo"
            src={logo}></img>
        </div>
        <Navbar isOpen={isNavOpen} />

        <div className="header__options-container">
          <LanguageDropdown />

          <NavLink
            className="login-link"
            to="/login">
            {t('home.header.login')}
          </NavLink>
          <Button
            icon={<RowsIcon className="icon" />}
            className="menu-button"
            onClick={handleClickButton}
          />
        </div>
      </header>
    </>
  )
}
