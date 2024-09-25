import {
  INITIAL_VALUES,
  ROUTINE_FORM_INPUTS,
  VALID_ROUTINE_SCHEMA,
} from './constants'

import { Form } from '@/components/shared/form/Form'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { createRoutine } from '@/store/routinesSlice'
import { Routine } from '@/types/interfaces'

export const RoutineForm = () => {
  const dispatch = useAppDispatch()
  const { showToast } = useToast()

  const acceptButtonClickHandler = async (item: Routine) => {
    const resultAction = await dispatch(createRoutine(item))
    if (createRoutine.fulfilled.match(resultAction)) {
      showToast('success', '', '')
    } else if (createRoutine.rejected.match(resultAction)) {
      showToast('error', '', '')
    }
  }
  return (
    <Form
      inputs={ROUTINE_FORM_INPUTS}
      initialValues={INITIAL_VALUES}
      validationSchema={VALID_ROUTINE_SCHEMA}
      onSumbit={(e) => acceptButtonClickHandler(e as Routine)}
      disabled={false}
    />
  )
}