import { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Card as PrimeCard } from 'primereact/card'

import { CardProps } from './types'

import './card.scss'

export const Card = ({
  children,
  title,
  className,
}: PropsWithChildren<CardProps>) => {
  const { t } = useTranslation()
  return (
    <PrimeCard
      title={t(title)}
      className={`${className} card`}>
      {children}
    </PrimeCard>
  )
}
