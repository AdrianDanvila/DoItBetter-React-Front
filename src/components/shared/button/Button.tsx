import { PropsWithChildren } from 'react'
import {
  Button as PrimeButton,
  ButtonProps as PrimeButtonprops,
} from 'primereact/button'
import { IconType } from 'primereact/utils'

export interface Buttonprops {
  className?: string
  icon: IconType<PrimeButtonprops>
  onClick: () => void
  text?: string
}
export const Button = ({
  icon,
  onClick,
  className,
  children,
}: PropsWithChildren<Buttonprops>) => (
  <PrimeButton
    icon={icon}
    className={className ? className : 'button'}
    onClick={onClick}>
    {children ? children : null}
  </PrimeButton>
)
