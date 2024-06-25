import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ConstantObjectData } from '@customTypes/interfaces'

import { HEADER_LINKS } from './constants'

import './header.scss'

import { LanguageDropdown } from '@/components/shared/languageDropdown/LanguageDropdown'

export const Header = () => {
  const { t } = useTranslation()
  const [headerColor, setHeaderColor] = useState('white')

  const listenScrollEvent = () => {
    window.scrollY > 75
      ? setHeaderColor('header--scrolled')
      : setHeaderColor('')
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  })
  return (
    <>
      <header className={`header ${headerColor}`}>
        <div className="header__container">
          <p>logo/burger</p>
          <nav className="header__container__nav">
            {HEADER_LINKS.map((elemnt: ConstantObjectData) => (
              <a
                className="header__container__nav__link"
                key={elemnt.reference}
                href={elemnt.reference}>
                {t(elemnt.title)}
              </a>
            ))}
          </nav>
          <div className="header__container__profile-container">
            <LanguageDropdown />
          </div>
        </div>
      </header>
    </>
  )
}
