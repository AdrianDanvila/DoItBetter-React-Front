import { ReactNode, SetStateAction } from 'react'

export interface DialogProps {
  isVisible?: boolean
  setIsVisible?: (value: SetStateAction<boolean>) => void
  openButtonClassname: string
  openButtonLabel: string
  openButtonIcon: ReactNode
  header?: string
}
