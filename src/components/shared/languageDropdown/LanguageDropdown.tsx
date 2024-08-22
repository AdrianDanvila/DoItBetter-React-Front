import { useTranslation } from 'react-i18next'
import { DropdownChangeEvent } from 'primereact/dropdown'

import { Dropdown } from '../dropdown/Dropdown'

import { LANGUAGES } from './constants'

import './language-dropdown.scss'

import { ChangeLanguage } from '@/helpers'

const handleChange = (e: DropdownChangeEvent) => {
  ChangeLanguage(e)
}

export const LanguageDropdown = () => {
  const { i18n } = useTranslation()

  return (
    <Dropdown
      defaultValue={i18n.language}
      onChange={handleChange}
      options={LANGUAGES}
    />
  )
}
