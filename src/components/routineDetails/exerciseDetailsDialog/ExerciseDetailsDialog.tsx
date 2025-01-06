import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PlayIcon } from '@radix-ui/react-icons'

import { VALID_EXERCISE_SCHEMA } from '../exerciseForm/constants'

import { EXECISE_EDIT_FORM_INPUTS } from './constants'

import { Dialog } from '@/components/shared/dialog/Dialog'
import { Form } from '@/components/shared/form/Form'
import { useToast } from '@/components/shared/toast/useToast'
import { BASE_URL } from '@/constants/server'
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
  const values = useAppSelector((state) => state.user)

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
      header={t(exercise?.exercise.name)}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      openButtonClassname="button button--success"
      openButtonLabel=""
      openButtonIcon={<PlayIcon />}>
      <div className="flex flex-col gap-5">
        {routine.user_id === values.user.id ? (
          <div className="px-2">
            <h2 className="text-3xl md:text-3xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full gradient-title">
              Description
            </h2>
            <Form
              inputContainerClassName="flex flex-col "
              inputs={EXECISE_EDIT_FORM_INPUTS}
              initialValues={exercise}
              validationSchema={VALID_EXERCISE_SCHEMA}
              onSumbit={onSumbitHandler}
              disabled={false}
            />
          </div>
        ) : (
          <></>
        )}

        <div className="px-2">
          <h2 className="text-3xl md:text-3xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full gradient-title">
            Description
          </h2>
          <p className="pl-3">{t(exercise.exercise.description)}</p>
        </div>
        <div className="px-2">
          <h2 className="text-3xl md:text-3xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full gradient-title">
            Example
          </h2>
          <img
            className="aspect-square"
            src={`${BASE_URL}/uploads${exercise.exercise.video}`}
            alt=""
          />
        </div>
      </div>
    </Dialog>
  )
}
