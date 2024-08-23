import { PropsWithChildren } from 'react'
import { Button as PrimeButton } from 'primereact/button'

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
}: PropsWithChildren<Buttonprops>) => (
  <PrimeButton
    label={label}
    type={type as 'submit' | 'reset' | 'button' | undefined}
    icon={icon}
    className={className || `button--${severity}`}
    onClick={onClick}>
    {children}
  </PrimeButton>
)
