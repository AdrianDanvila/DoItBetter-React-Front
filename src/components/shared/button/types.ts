import { ButtonProps as PrimeButtonprops } from 'primereact/button'
import { IconType } from 'primereact/utils'

export interface Buttonprops {
  className?: string
  icon: IconType<PrimeButtonprops>
  onClick?: (e: never) => void
  text?: string
  type?: ButtonType
  label?: string
  severity: ButtonSeverity
}

export enum ButtonType {
  Submit = 'submit',
  Reset = 'reset',
  Button = 'button',
  Undefined = 'undefined',
}

export enum ButtonSeverity {
  Danger = 'danger',
  Info = 'info',
  Warning = 'warning',
  Primary = 'primary',
}
