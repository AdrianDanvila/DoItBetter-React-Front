import { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'

import { LinkData, NavBarProps } from './types'

import './navbar.scss'

export const NavBar = ({
  navClassName,
  linkClassName,
  data,
  title,
}: PropsWithChildren<NavBarProps>) => {
  const { t } = useTranslation()
  const navClassname = navClassName ? navClassName : 'navbar'
  return (
    <nav className={navClassname}>
      {title ? <h4 className={`${navClassname}__title`}>{title}</h4> : null}

      {data.map((element: LinkData) => (
        <div
          className={`${navClassname}__link-container ${window.location.pathname.includes(element.href) ? `${navClassname}__link-container--selected` : ''} ${linkClassName} `}
          key={element.href}>
          {element.icon}
          <a
            href={element.href}
            className={`${navClassname}__link-container__link`}>
            {t(element.text)}
          </a>
        </div>
      ))}
    </nav>
  )
}
