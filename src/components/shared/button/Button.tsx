import { PropsWithChildren } from 'react'
import { Button as PrimeButton } from 'primereact/button'

import { Button as ButtonShad } from '@components/ui/button'

import { Buttonprops, ButtonSeverity, ButtonType } from './types'

import './button.scss'

export const Button = ({
  icon,
  onClick,
  className,
  children,
  severity = ButtonSeverity.Primary,
  label,
  type = ButtonType.Button,
  ref,
}: PropsWithChildren<Buttonprops>) => (
  <>
    <ButtonShad
      ref={ref}
      size="lg"
      type={type as 'submit' | 'reset' | 'button' | undefined}
      icon={icon}
      className={className || `button button--${severity}`}
      onClick={onClick}>
      {label}
      {children}
      {icon as string}
    </ButtonShad>
  </>
)
