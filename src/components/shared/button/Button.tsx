import { PropsWithChildren } from 'react'
import { Button as PrimeButton } from 'primereact/button'

import { Buttonprops, ButtonType } from './types'
export const Button = ({
  icon,
  onClick,
  className,
  children,
  type = ButtonType.Button,
}: PropsWithChildren<Buttonprops>) => (
  <PrimeButton
    type={type as ButtonType}
    icon={icon}
    className={className || 'button'}
    onClick={onClick}>
    {children ? children : null}
  </PrimeButton>
)
