import { PropsWithChildren } from 'react'
import { ExitIcon } from '@radix-ui/react-icons'

import './header.scss'

import { Button } from '@/components/shared/button/Button'
import { LanguageDropdown } from '@/components/shared/languageDropdown/LanguageDropdown'

export const Header = ({ children }: PropsWithChildren) => (
  <div className="header-container">
    <LanguageDropdown />
    <Button
      icon={<ExitIcon className="icon" />}
      className="header-container__button"
      onClick={() => {}}
    />
    <div className="bg-black w-6 h-6 rounded-full mx-2">
      <img></img>
    </div>

    {children}
    <header></header>
  </div>
)
