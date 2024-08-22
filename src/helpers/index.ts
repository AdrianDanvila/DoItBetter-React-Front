import i18next from 'i18next'
import { DropdownChangeEvent } from 'primereact/dropdown'

export const ChangeLanguage = (e: DropdownChangeEvent) => {
  i18next.changeLanguage(e.value)
}
