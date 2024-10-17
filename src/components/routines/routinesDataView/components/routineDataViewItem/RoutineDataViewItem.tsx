import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Rating } from 'primereact/rating'
import { FileTextIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { DeletePopUp } from '@/components/shared/deletePopUp/DeletePopUp'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { ROUTE_PATH } from '@/router/constants'
import { deleteRoutine, uploadRoutineImageAction } from '@/store/routinesSlice'
import { Routine } from '@/types/interfaces'

export const RoutineDataViewItem = (routine: Routine, index: number) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { showToast } = useToast()
  const inputRef = useRef()

  const showDetailsButtonClickHandler = () =>
    navigate(`${ROUTE_PATH.routines}/${routine?.id}`)

  const deleteItem = async () => {
    const actionResult = await dispatch(deleteRoutine(routine))

    if (deleteRoutine.fulfilled.match(actionResult)) {
      showToast('success', '', '')
    } else if (deleteRoutine.rejected.match(actionResult)) {
      showToast('error', '', '')
    }
  }

  return (
    <div
      className={` mx-2  flex flex-col xl:flex-row xl:items-start p-4 my-1 gap-4 ${index !== 0 ? 'border-b-2 surface-border border-gray-300' : ''}`}>
      <img
        onClick={() => {
          inputRef.current && inputRef.current.click()
        }}
        src={`http://localhost:8081/uploads/${routine.routinePictureName}`}
        className="w-2/12 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round transition-all hover:scale-105 hover:cursor-pointer "
      />
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={async (e) => {
          if (e.target.files && e.target.files[0]) {
            const formData = new FormData()
            formData.append('file', e.target.files[0])
            dispatch(
              uploadRoutineImageAction({ file: formData, id: routine.id }),
            )
          }
        }}
        type="file"
        accept="image/png, image/gif, image/jpeg"
      />

      <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
        <div className="flex flex-col items-center sm:items-start gap-3 w-9/12">
          <div className="text-2xl font-bold text-900">{routine.name}</div>
          <div className="font-bold text-900">{routine.description}</div>
          <Rating
            value={2}
            readOnly
            cancel={false}
          />

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{routine.name}</span>
            </span>
          </div>
        </div>
        <div className="flex sm:flex-col  sm:items-end  gap-3 sm:gap-2 w-full md:w-2/12">
          <span className="text-2xl font-semibold text-center w-full">
            Actions
          </span>
          <div className="flex ">
            <DeletePopUp onAccept={deleteItem} />
            <Button
              onClick={showDetailsButtonClickHandler}
              icon={<FileTextIcon className="icon" />}
              severity={ButtonSeverity.Primary}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
