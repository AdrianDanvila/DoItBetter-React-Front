import { ReactNode } from 'react'

export interface AsideProps {
  isOpen?: boolean
  onHide: () => void
  className?: string
  header?: ReactNode
}
