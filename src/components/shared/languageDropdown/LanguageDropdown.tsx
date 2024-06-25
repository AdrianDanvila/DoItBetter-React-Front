import { useTranslation } from 'react-i18next'
import { DropdownChangeEvent } from 'primereact/dropdown'

import { Dropdown } from '../dropdown/Dropdown'

import { LANGUAGES } from './constants'

import './language-dropdown.scss'

export const LanguageDropdown = () => {
  const { i18n } = useTranslation()
  const handleChange = (e: DropdownChangeEvent) => {
    i18n.changeLanguage(e.value)
  }
  return (
    <>
      <Dropdown
        defaultValue={i18n.language}
        onChange={handleChange}
        options={LANGUAGES}
      />
    </>
  )
}
