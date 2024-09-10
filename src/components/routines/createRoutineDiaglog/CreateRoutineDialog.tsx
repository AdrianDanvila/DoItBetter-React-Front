import { PlusIcon } from '@radix-ui/react-icons'

import {
  INITIAL_VALUES,
  ROUTINE_FORM_INPUTS,
  VALID_ROUTINE_SCHEMA,
} from './constants'

import { Dialog } from '@/components/shared/dialog/Dialog'
import { Form } from '@/components/shared/form/Form'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { addRoutine } from '@/store/routinesSlice'
import { Routine } from '@/types/interfaces'

export const CreateRoutineDialog = () => {
  const dispatch = useAppDispatch()
  const { showToast } = useToast()

  const acceptButtonClickHandler = (item: Routine) => {
    dispatch(addRoutine(item))
    showToast('error', '', '')
  }
  return (
    <Dialog
      openButtonClassname="button--success"
      openButtonLabel=""
      openButtonIcon={<PlusIcon />}>
      <Form
        inputs={ROUTINE_FORM_INPUTS}
        initialValues={INITIAL_VALUES}
        validationSchema={VALID_ROUTINE_SCHEMA}
        onSumbit={(e) => acceptButtonClickHandler(e as Routine)}
        disabled={false}
      />
    </Dialog>
  )
}
