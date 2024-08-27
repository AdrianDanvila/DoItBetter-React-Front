import { PropsWithChildren, useRef, useState } from 'react'
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
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  return (
    <>
      <PrimeConfirmDialog
        onHide={() => setIsVisible(false)}
        visible={isVisible}
        message={message}
        header={header}
        className={className}
        acceptLabel={acceptLabel}
        rejectLabel={rejectLabel}
        contentClassName={contentClassName}
        rejectClassName={rejectButtonClassName}
        acceptClassName={acceptButtonClassName}
        accept={onAccept}
        reject={onReject}
        ref={ref}
      />
      <Button
        className={openButtonClassname}
        severity={ButtonSeverity.Primary}
        onClick={() => setIsVisible(true)}
        icon={openButtonIcon}>
        {openButtonLabel}
      </Button>
    </>
  )
}
