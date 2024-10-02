import { LegacyRef } from 'react'
import { Button, ButtonProps as PrimeButtonprops } from 'primereact/button'
import { IconType } from 'primereact/utils'

export interface Buttonprops {
  ref?: LegacyRef<Button>
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
  Success = 'success',
}
