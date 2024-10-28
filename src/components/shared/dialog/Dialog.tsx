import { PropsWithChildren } from 'react'
import { Dialog as PrimeDialog } from 'primereact/dialog'

import { Button } from '../button/Button'
import { ButtonSeverity, ButtonType } from '../button/types'

import { DialogProps } from './types'

import './dialog.scss'

export const Dialog = ({
  isVisible,
  setIsVisible,
  openButtonClassname,
  openButtonIcon,
  openButtonLabel,
  header,
  children,
}: PropsWithChildren<DialogProps>) => (
  <>
    <Button
      onClick={() => setIsVisible?.(true)}
      icon={openButtonIcon}
      severity={ButtonSeverity.Primary}
      label={openButtonLabel}
      className={openButtonClassname}
    />
    <PrimeDialog
      closable={true}
      closeOnEscape={true}
      header={header || 'create routine'}
      visible={isVisible}
      onHide={() => {
        if (!isVisible) return
        setIsVisible?.(false)
      }}>
      {children}
    </PrimeDialog>
  </>
)
