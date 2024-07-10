import { ButtonProps as PrimeButtonprops } from 'primereact/button'
import { IconType } from 'primereact/utils'

export interface Buttonprops {
  className?: string
  icon: IconType<PrimeButtonprops>
  onClick: () => void
  text?: string
}
