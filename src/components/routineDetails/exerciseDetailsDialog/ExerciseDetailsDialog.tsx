import { useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
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
      showToast('success', 'main.routines.details.toast.add_succesful', '')
    } else if (addExercise.rejected.match(resultAction)) {
      showToast('error', 'main.routines.details.toast.add_error', '')
    }
  }

  const onSumbitHandler = (e: Exercise) => {
    addItem(e)
    setIsVisible(false)
  }

  return (
    <Dialog
      header={t(exercise?.name)}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      openButtonClassname="button button--success"
      openButtonLabel=""
      openButtonIcon={<PlayIcon />}>
      <div className="flex flex-row gap-1">
        <iframe
          width="100%"
          height="560"
          src="https://youtube.com/embed/0Xweg0mjlwQ?si=QbaQlgC9OwJkVQxl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
        {!routine.published || routine.user_id === values.user.user.id ? (
          <Card title="main.routines.details.form.edit_title">
            <Form
              inputContainerClassName="flex flex-col "
              inputs={EXECISE_EDIT_FORM_INPUTS}
              initialValues={exercise}
              validationSchema={VALID_EXERCISE_SCHEMA}
              onSumbit={onSumbitHandler}
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
