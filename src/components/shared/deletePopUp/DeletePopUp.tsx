import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button as PrimeButton } from 'primereact/button'
import { ConfirmPopup } from 'primereact/confirmpopup'
import { CheckIcon, Cross2Icon, TrashIcon } from '@radix-ui/react-icons'

import { DeletePopUpProps } from './types'

export const DeletePopUp = ({ onAccept, onReject }: DeletePopUpProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef(null)
  const { t } = useTranslation()

  return (
    <>
      <ConfirmPopup
        target={buttonRef.current as unknown as HTMLElement}
        message={t('delete_pop.message')}
        icon="pi pi-info-circle"
        defaultFocus="reject"
        acceptClassName="button button--danger scale-90 "
        rejectClassName="button button--success scale-90"
        acceptIcon={<CheckIcon />}
        rejectIcon={<Cross2Icon />}
        visible={isVisible}
        onHide={() => setIsVisible(false)}
        accept={onAccept}
        reject={onReject}
      />
      <PrimeButton
        data-testid="testid-delete-button"
        ref={buttonRef}
        type="button"
        icon={<TrashIcon className="icon" />}
        className="button button--danger"
        onClick={() => setIsVisible(true)}
      />
    </>
  )
}
