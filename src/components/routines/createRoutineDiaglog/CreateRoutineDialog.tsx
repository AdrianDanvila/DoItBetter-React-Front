import { useState } from 'react'
import { PlusIcon } from '@radix-ui/react-icons'

import { RoutineForm } from '../routineForm/RoutineForm'

import { Dialog } from '@/components/shared/dialog/Dialog'

export const CreateRoutineDialog = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Dialog
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      openButtonClassname="button button--success"
      openButtonLabel=""
      openButtonIcon={<PlusIcon />}>
      <RoutineForm
        onSumbit={() => {
          setIsVisible(false)
        }}
      />
    </Dialog>
  )
}
