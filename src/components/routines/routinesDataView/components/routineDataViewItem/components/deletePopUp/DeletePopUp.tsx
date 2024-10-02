import { useRef, useState } from 'react'
import { Button as PrimeButton } from 'primereact/button'
import { ConfirmPopup } from 'primereact/confirmpopup'
import { TrashIcon } from '@radix-ui/react-icons'

import { DeletePopUpProps } from './types'

import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { deleteRoutine } from '@/store/routinesSlice'

export const DeletePopUp = ({ routine }: DeletePopUpProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const { showToast } = useToast()
  const buttonRef = useRef(null)
  const dispatch = useAppDispatch()

  const deleteItem = async () => {
    const actionResult = await dispatch(deleteRoutine(routine))

    if (deleteRoutine.fulfilled.match(actionResult)) {
      showToast('success', '', '')
    } else if (deleteRoutine.rejected.match(actionResult)) {
      showToast('error', '', '')
    }
  }

  return (
    <>
      <ConfirmPopup
        target={buttonRef.current as unknown as HTMLElement}
        message="Do you want to delete this record?"
        icon="pi pi-info-circle"
        defaultFocus="reject"
        acceptClassName="button--danger"
        rejectClassName="button--success"
        visible={isVisible}
        onHide={() => {
          setIsVisible(false)
        }}
        accept={() => deleteItem()}
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
