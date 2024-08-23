import { PropsWithChildren, ReactNode, SetStateAction, useState } from 'react'
import { Dialog as PrimeDialog } from 'primereact/dialog'

import { Button } from '../button/Button'
import { ButtonSeverity } from '../button/types'

import './dialog.scss'

export interface DialogProps {
  isVisible?: boolean
  setIsVisible?: (value: SetStateAction<boolean>) => void
  openButtonClassname: string
  openButtonLabel: string
  openButtonIcon: ReactNode
}

export const Dialog = ({
  openButtonClassname,
  openButtonIcon,
  openButtonLabel,
  children,
}: PropsWithChildren<DialogProps>) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        icon={openButtonIcon}
        severity={ButtonSeverity.Primary}
        label={openButtonLabel}
        className={openButtonClassname}
      />
      <PrimeDialog
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => {
          if (!visible) return
          setVisible(false)
        }}>
        {children}
      </PrimeDialog>
    </>
  )
}
