import { PropsWithChildren } from 'react'
import { t } from 'i18next'
// Generic component tsx file
export interface NavBarProps {
  navClassName?: string
  linkClassName?: string
  data: LinkData[]
}

export interface LinkData {
  icon?: JSX.Element
  href: string
  text: string
}

import './navbar.scss'

export const NavBar = ({
  navClassName,
  linkClassName,
  data,
}: PropsWithChildren<NavBarProps>) => (
  <nav className={`navigation ${navClassName} `}>
    {data.map((elemnt: LinkData) => (
      <a
        className={`navigation__link ${window.location.pathname.includes(elemnt.href) ? 'navigation__link--selected' : ''} ${linkClassName} `}
        key={elemnt.href}
        href={elemnt.href}>
        {t(elemnt.text)}
      </a>
    ))}
  </nav>
)
