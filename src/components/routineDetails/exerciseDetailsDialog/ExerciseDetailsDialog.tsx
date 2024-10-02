import { useState } from 'react'
import { PlayIcon } from '@radix-ui/react-icons'

import foto from '../../../assets/foto2.png'
import { VALID_EXERCISE_SCHEMA } from '../exerciseForm/constants'

import { EXECISE_EDIT_FORM_INPUTS } from './constants'

import { Card } from '@/components/shared/card/Card'
import { Dialog } from '@/components/shared/dialog/Dialog'
import { Form } from '@/components/shared/form/Form'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { addExercise } from '@/store/routinesSlice'
import { Exercise, Routine } from '@/types/interfaces'

export interface ExerciseDetailsDialogProps {
  exercise: Exercise
  routine: Routine
}

export const ExerciseDetailsDialog = ({
  exercise,
  routine,
}: ExerciseDetailsDialogProps) => {
  const { showToast } = useToast()
  const dispatch = useAppDispatch()

  const [isVisible, setIsVisible] = useState(false)

  const addItem = async (e: Exercise) => {
    const resultAction = await dispatch(
      addExercise({
        routineId: routine.id,
        exerciseData: {
          id: exercise.id,
          sets: e.sets,
          reps: e.reps,
          weight: e.weight,
        },
      }),
    )
    if (addExercise.fulfilled.match(resultAction)) {
      showToast('success', '', '')
    } else if (addExercise.rejected.match(resultAction)) {
      showToast('error', '', '')
    }
  }

  return (
    <Dialog
      header={exercise?.name}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      openButtonClassname="button--success"
      openButtonLabel=""
      openButtonIcon={<PlayIcon />}>
      <div className="flex flex-row">
        <img
          src={foto}
          className="w-1/2"
        />
        <Card title="Edit your excercise">
          <Form
            inputContainerClassName="flex flex-row"
            inputs={EXECISE_EDIT_FORM_INPUTS}
            initialValues={exercise}
            validationSchema={VALID_EXERCISE_SCHEMA}
            onSumbit={(e) => {
              addItem(e)
              setIsVisible(false)
            }}
            disabled={false}
          />
        </Card>
      </div>
    </Dialog>
  )
}
