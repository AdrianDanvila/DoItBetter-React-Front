import { PropsWithChildren, useState } from 'react'
import { Dialog as PrimeDialog } from 'primereact/dialog'

import { Button } from '../button/Button'
import { ButtonSeverity } from '../button/types'

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
}: PropsWithChildren<DialogProps>) => {
  const [visible, setVisible] = useState(isVisible)

  return (
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
        style={{ width: '50vw' }}
        onHide={() => {
          if (!isVisible) return
          setIsVisible?.(false)
        }}>
        {children}
      </PrimeDialog>
    </>
  )
}
