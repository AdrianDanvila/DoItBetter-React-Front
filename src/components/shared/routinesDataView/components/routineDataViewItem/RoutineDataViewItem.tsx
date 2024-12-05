/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Rating } from 'primereact/rating'
import { FileTextIcon } from '@radix-ui/react-icons'

import { RoutinePicture } from './components/routinePicture/RoutinePicture'

import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { DeletePopUp } from '@/components/shared/deletePopUp/DeletePopUp'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { ROUTE_PATH } from '@/router/constants'
import { deleteRoutine } from '@/store/routinesSlice'

export const RoutineDataViewItem = (item: any) => {
  const user_id = useAppSelector((state) => state.user.user.id)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { showToast } = useToast()
  const { t } = useTranslation()

  const showDetailsButtonClickHandler = () =>
    navigate(`${window.location.pathname}/${item?.id}`)

  const deleteItem = async () => {
    const actionResult = await dispatch(deleteRoutine(item))

    if (deleteRoutine.fulfilled.match(actionResult)) {
      showToast('success', 'main.routines.toast.delete_succesful', '')
    } else if (deleteRoutine.rejected.match(actionResult)) {
      showToast('error', 'main.routines.toast.delete_error', '')
    }
  }

  return (
    <div className="mx-2 flex flex-col xl:flex-row xl:items-start py-2 sm:px-2 my-1 gap-4 border-b-2 surface-border border-gray-300">
      <RoutinePicture
        routine={item}
        user_id={user_id || 0}
      />
      <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
        <div className="flex flex-col items-center sm:items-start gap-3 w-9/12">
          <div className="text-2xl font-bold text-900">{item.name}</div>
          <div className="font-bold text-900">{item.description}</div>
          <Rating
            value={2}
            readOnly
            cancel={false}
          />

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{item.user_name}</span>
            </span>
          </div>
        </div>
        <div className="flex items-center sm:flex-col    gap-3 sm:gap-2 w-full md:w-2/12">
          <span className="text-2xl font-semibold text-center w-full">
            {t('main.routines.action')}
          </span>
          <div className="flex items-center justify-center">
            {window.location.pathname.includes(ROUTE_PATH.main) || (
              <DeletePopUp onAccept={deleteItem} />
            )}

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
