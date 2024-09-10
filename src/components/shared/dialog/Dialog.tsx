import { PropsWithChildren, useState } from 'react'
import { Dialog as PrimeDialog } from 'primereact/dialog'

import { Button } from '../button/Button'
import { ButtonSeverity } from '../button/types'

import { DialogProps } from './types'

import './dialog.scss'

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
        closable={true}
        closeOnEscape={true}
        header="Create Routine"
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
