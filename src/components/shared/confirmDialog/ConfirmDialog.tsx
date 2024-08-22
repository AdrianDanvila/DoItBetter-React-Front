import { PropsWithChildren } from 'react'
import {
  ConfirmDialog as PrimeConfirmDialog,
  confirmDialog,
} from 'primereact/confirmdialog'

import { Button } from '../button/Button'

import { ConfirmDialogProps } from './types'

export const ConfirmDialog = ({
  message,
  header,
  className,
  acceptLabel,
  rejectLabel,
  contentClassName,
  rejectButtonClassName = 'button--danger p-button p-component',
  acceptButtonClassName = 'button p-button p-component',
  onAccept,
  onReject,
  openButtonClassname = 'button p-button p-component',
  openButtonLabel,
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
        className={
          openButtonClassname +
          'w-10 border-blue-800 border-2 hover:bg-blue-400 rounded-lg  py-1 m-2.5 flex items-center justify-center self-end'
        }
        onClick={() => openConfirm()}
        icon={undefined}>
        {openButtonLabel}
      </Button>
    </>
  )
}
