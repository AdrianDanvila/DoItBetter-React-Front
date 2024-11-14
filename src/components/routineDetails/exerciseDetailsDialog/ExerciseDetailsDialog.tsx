import { useState } from 'react'
import { PlayIcon } from '@radix-ui/react-icons'

import { VALID_EXERCISE_SCHEMA } from '../exerciseForm/constants'

import { EXECISE_EDIT_FORM_INPUTS } from './constants'

import { Card } from '@/components/shared/card/Card'
import { Dialog } from '@/components/shared/dialog/Dialog'
import { Form } from '@/components/shared/form/Form'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
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
  const values = useAppSelector((state) => state)

  const [isVisible, setIsVisible] = useState(false)

  const addItem = async (e: Exercise) => {
    const resultAction = await dispatch(
      addExercise({
        routineId: routine.id,
        exerciseData: {
          id: exercise.exercise.id,
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
      openButtonClassname="button button--success"
      openButtonLabel=""
      openButtonIcon={<PlayIcon />}>
      <div className="flex flex-row">
        <iframe
          width="100%"
          height="560"
          src="https://youtube.com/embed/0Xweg0mjlwQ?si=QbaQlgC9OwJkVQxl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
        {!routine.published || routine.user_id === values.user.user.id ? (
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
        ) : (
          <></>
        )}
      </div>
    </Dialog>
  )
}
