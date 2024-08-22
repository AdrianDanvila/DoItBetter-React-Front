export interface ConfirmDialogProps {
  message?: string
  header?: string
  className?: string
  acceptLabel?: string
  rejectLabel?: string
  contentClassName?: string
  rejectButtonClassName?: string
  acceptButtonClassName?: string
  onAccept?: () => void
  onReject?: () => void
  openButtonClassname?: string
  openButtonLabel: string
}
