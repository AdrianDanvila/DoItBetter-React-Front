import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Rating } from 'primereact/rating'

import { ExerciseDetailsDialog } from '@/components/routineDetails/exerciseDetailsDialog/ExerciseDetailsDialog'
import { DeletePopUp } from '@/components/shared/deletePopUp/DeletePopUp'
import { useToast } from '@/components/shared/toast/useToast'
import { BASE_URL } from '@/constants/server'
import { useAppDispatch } from '@/helpers/hooks'
import { deleteExercise } from '@/store/routinesSlice'
import { Exercise, Routine } from '@/types/interfaces'

export interface ExercisesDataViewItemProps {
  exercise2: Exercise
  routine: Routine
  index: number
}
export const ExercisesDataViewItem = ({
  exercise2,
  routine,
  index,
}: ExercisesDataViewItemProps) => {
  const { showToast } = useToast()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const path = useParams()
  const routineId = Number.parseInt(path.id || '0')
  const exercise = exercise2

  const deleteItem = async () => {
    const actionResult = await dispatch(
      deleteExercise({
        routineId: routineId,
        exerciseData: {
          id: exercise.exercise.id,
          sets: 0,
          weight: 0,
          reps: 0,
        },
      }),
    )

    if (deleteExercise.fulfilled.match(actionResult)) {
      showToast('success', 'main.routines.details.toast.delete_succesful', '')
    } else if (deleteExercise.rejected.match(actionResult)) {
      showToast('error', 'main.routines.details.toast.delete_error', '')
    }
  }
  const sessioUser = sessionStorage.getItem('userInfo')
  const user = sessioUser
    ? JSON.parse(sessionStorage.getItem('userInfo') || '')
    : ''

  return (
    <div
      key={index}
      className={`h-1/5 flex flex-col xl:flex-row xl:items-start p-4 my-4 gap-4 ${index !== 0 ? 'border-t-2 surface-border border-gray-300' : ''}`}>
      <img
        className="w-2/12 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round aspect-square"
        src={`${BASE_URL}/uploads${exercise.exercise.photo}`}
      />
      <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
        <div className="flex flex-col items-center sm:items-start gap-3 w-9/12">
          <div className="text-2xl font-bold text-900">
            {t(exercise.exercise.name)}
          </div>
          <div className="font-bold text-900">
            {t(exercise.exercise.description)}
          </div>
          <Rating
            value={2}
            readOnly
            cancel={false}
          />
        </div>

        <div className="flex sm:flex-col  sm:items-end  gap-3 sm:gap-2 w-full md:w-2/12">
          <span className="text-2xl font-semibold text-center w-full">
            Actions
          </span>
          <div className="flex ">
            {!routine.published || routine.user_id === user.id ? (
              <DeletePopUp onAccept={deleteItem} />
            ) : (
              <></>
            )}
            <ExerciseDetailsDialog
              exercise={exercise as unknown as Exercise}
              routine={routine}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
