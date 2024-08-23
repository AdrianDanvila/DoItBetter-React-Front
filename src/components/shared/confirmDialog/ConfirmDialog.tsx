import { PropsWithChildren } from 'react'
import {
  ConfirmDialog as PrimeConfirmDialog,
  confirmDialog,
} from 'primereact/confirmdialog'

import { Button } from '../button/Button'
import { ButtonSeverity } from '../button/types'

import { ConfirmDialogProps } from './types'

export const ConfirmDialog = ({
  message,
  header,
  className,
  acceptLabel,
  rejectLabel,
  contentClassName,
  rejectButtonClassName = 'button--danger p-button p-component',
  acceptButtonClassName = 'button--primary p-button p-component',
  onAccept,
  onReject,
  openButtonClassname = 'button--primary p-button p-component',
  openButtonLabel,
  openButtonIcon,
}: PropsWithChildren<ConfirmDialogProps>) => {
  const openConfirm = () => {
    confirmDialog({
      message,
      header,
      className,
      acceptLabel,
      rejectLabel,
      contentClassName,
      rejectClassName: rejectButtonClassName,
      acceptClassName: acceptButtonClassName,
      accept: onAccept,
      reject: onReject,
    })
  }
  return (
    <>
      <PrimeConfirmDialog />
      <Button
        className={openButtonClassname}
        severity={ButtonSeverity.Primary}
        onClick={() => openConfirm()}
        icon={openButtonIcon}>
        {openButtonLabel}
      </Button>
    </>
  )
}
