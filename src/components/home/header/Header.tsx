import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Button } from 'primereact/button'
import { RowsIcon } from '@radix-ui/react-icons'

import { ConstantObjectData } from '@customTypes/interfaces'

import { HEADER_LINKS } from './constants'

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
        <div className="header__container">
          <div className="header__container__logo">logo/burger</div>
          <nav
            className={
              isNavOpen
                ? 'header__container__nav'
                : 'header__container__nav--invisible'
            }>
            {HEADER_LINKS.map((elemnt: ConstantObjectData) => (
              <a
                className="header__container__nav__link"
                key={elemnt.reference}
                href={elemnt.reference}>
                {t(elemnt.title)}
              </a>
            ))}
          </nav>
          <div className="header__container__options-container">
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
        </div>
      </header>
    </>
  )
}
