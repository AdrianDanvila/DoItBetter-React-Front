import { Rating } from 'primereact/rating'

import foto3 from '../../../../../assets/foto3.png'

import { ExerciseDetailsDialog } from '@/components/routineDetails/exerciseDetailsDialog/ExerciseDetailsDialog'
import { DeletePopUp } from '@/components/shared/deletePopUp/DeletePopUp'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { PATH } from '@/router/constants'
import { deleteExercise } from '@/store/routinesSlice'
import { Exercise, Routine } from '@/types/interfaces'

export const ExercisesDataViewItem = (
  exercise: Exercise,
  routine: Routine,
  index: number,
) => {
  const { showToast } = useToast()
  const dispatch = useAppDispatch()
  const values = useAppSelector((state) => state)

  const deleteItem = async () => {
    const actionResult = await dispatch(
      deleteExercise({ routineId: routine.id, exerciseData: exercise }),
    )

    if (deleteExercise.fulfilled.match(actionResult)) {
      showToast('success', '', '')
    } else if (deleteExercise.rejected.match(actionResult)) {
      showToast('error', '', '')
    }
  }
  return (
    <div
      key={index}
      className={`h-1/5 flex flex-col xl:flex-row xl:items-start p-4 my-4 gap-4 ${index !== 0 ? 'border-t-2 surface-border border-gray-300' : ''}`}>
      <img
        className="w-2/12 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
        src={foto3}
      />
      <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
        <div className="flex flex-col items-center sm:items-start gap-3 w-9/12">
          <div className="text-2xl font-bold text-900">{exercise.name}</div>
          <div className="font-bold text-900">{exercise.description}</div>
          <Rating
            value={2}
            readOnly
            cancel={false}
          />

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{exercise.name}</span>
            </span>
          </div>
        </div>

        <div className="flex sm:flex-col  sm:items-end  gap-3 sm:gap-2 w-full md:w-2/12">
          <span className="text-2xl font-semibold text-center w-full">
            Actions
          </span>
          <div className="flex ">
            {!routine.published || routine.user_id === values.user.user.id ? (
              <DeletePopUp onAccept={deleteItem} />
            ) : (
              <></>
            )}
            <ExerciseDetailsDialog
              exercise={exercise as Exercise}
              routine={routine}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
