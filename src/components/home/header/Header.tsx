import { useTranslation } from 'react-i18next'

import { HEADER_LINKS } from './constants'

import { ConstantObjectData } from '@/types/interfaces'
export const Header = () => {
  const { t } = useTranslation()
  return (
    <header>
      <a href="a">{t('home.title')}</a>
      {HEADER_LINKS.map((elemnt: ConstantObjectData) => (
        <a
          key={elemnt.reference}
          href={elemnt.reference}>
          {t(elemnt.title)}
        </a>
      ))}
    </header>
  )
}
