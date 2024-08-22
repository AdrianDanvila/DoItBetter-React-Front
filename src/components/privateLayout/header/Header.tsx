import { PropsWithChildren } from 'react'

import './header.scss'

import { LanguageDropdown } from '@/components/shared/languageDropdown/LanguageDropdown'

export const Header = ({ children }: PropsWithChildren) => (
  <div className="header-container">
    <LanguageDropdown />
    {children}
  </div>
)
