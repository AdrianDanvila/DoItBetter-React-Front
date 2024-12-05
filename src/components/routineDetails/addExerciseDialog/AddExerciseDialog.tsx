import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PlusIcon } from '@radix-ui/react-icons'

import { ExerciseForm } from '../exerciseForm/ExerciseForm'

import { Dialog } from '@/components/shared/dialog/Dialog'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { addExercise } from '@/store/routinesSlice'
import { Exercise, Routine } from '@/types/interfaces'

export interface AddExerciseDialog {
  routine: Routine
}

export const AddExerciseDialog = ({ routine }: AddExerciseDialog) => {
  const { showToast } = useToast()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const [isVisible, setIsVisible] = useState(false)

  const addItem = async (e: Exercise) => {
    const resultAction = await dispatch(
      addExercise({
        routineId: routine.id,
        exerciseData: {
          id: e.id,
          sets: e.sets,
          reps: e.reps,
          weight: e.weight,
        },
      }),
    )
    if (addExercise.fulfilled.match(resultAction)) {
      showToast('success', 'main.routines.details.toast.add_succesful', '')
    } else if (addExercise.rejected.match(resultAction)) {
      showToast('error', 'main.routines.details.toast.add_error', '')
    }
  }

  return (
    <Dialog
      header={t('main.routines.details.form.title')}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      openButtonClassname="button button--success"
      openButtonLabel=""
      openButtonIcon={<PlusIcon />}>
      <ExerciseForm
        onSumbit={(e) => {
          addItem(e)
          setIsVisible(false)
        }}
      />
    </Dialog>
  )
}
