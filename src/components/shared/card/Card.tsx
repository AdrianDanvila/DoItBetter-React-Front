import { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Card as ShadCard,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/ui/card'

import { CardProps } from './types'

import './card.scss'

export const Card = ({
  children,
  title,
  className,
}: PropsWithChildren<CardProps>) => {
  const { t } = useTranslation()
  return (
    <ShadCard className={`${className} w-full rounded-none md:rounded-xl `}>
      <CardHeader>
        <CardTitle className={`text-center text-blue-600 ${className}`}>
          {t(title)}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </ShadCard>
  )
}
