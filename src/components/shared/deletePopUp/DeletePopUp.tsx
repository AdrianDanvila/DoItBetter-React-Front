import { useRef, useState } from 'react'
import { Button as PrimeButton } from 'primereact/button'
import { ConfirmPopup } from 'primereact/confirmpopup'
import {
  AngleIcon,
  CheckIcon,
  Cross2Icon,
  InputIcon,
  TrashIcon,
} from '@radix-ui/react-icons'

import { DeletePopUpProps } from './types'

export const DeletePopUp = ({ onAccept, onReject }: DeletePopUpProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef(null)

  return (
    <>
      <ConfirmPopup
        target={buttonRef.current as unknown as HTMLElement}
        message="Do you want to delete this record?"
        icon="pi pi-info-circle"
        defaultFocus="reject"
        acceptClassName="button--danger scale-90 "
        rejectClassName="button--success scale-90"
        acceptIcon={<CheckIcon />}
        rejectIcon={<Cross2Icon />}
        visible={isVisible}
        onHide={() => {
          setIsVisible(false)
        }}
        accept={onAccept}
        reject={onReject}
      />
      <PrimeButton
        ref={buttonRef}
        type="button"
        icon={<TrashIcon className="icon" />}
        className="button--danger"
        onClick={() => {
          setIsVisible(true)
        }}
      />
    </>
  )
}
