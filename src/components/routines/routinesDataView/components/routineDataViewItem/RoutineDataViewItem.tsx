import { useNavigate } from 'react-router-dom'
import { Rating } from 'primereact/rating'
import { FileTextIcon } from '@radix-ui/react-icons'

import foto3 from '../../../../../assets/foto3.png'

import { DeletePopUp } from './components/deletePopUp/DeletePopUp'
import { RoutineDataViewItemProps } from './types'

import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { ROUTE_PATH } from '@/router/constants'

export const RoutineDataViewItem = ({
  routine,
  index,
}: RoutineDataViewItemProps) => {
  const navigate = useNavigate()

  const showDetailsButtonClickHandler = () =>
    navigate(`${ROUTE_PATH.routines}/${routine?.id}`)

  return (
    <div
      className="col-12"
      key={routine.id}>
      <div
        className={`flex flex-col xl:flex-row xl:items-start p-4 my-4 gap-4 ${index !== 0 ? 'border-t-2 surface-border border-gray-300' : ''}`}>
        <img
          className="w-2/12 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
          src={foto3}
        />
        <div className="flex flex-col sm:flex-row justify-content-between items-center xl:items-start flex-1 gap-4">
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
          <div className="flex sm:flex-col items-center sm:items-end  gap-3 sm:gap-2 w-full md:w-2/12">
            <span className="text-2xl font-semibold">Actions</span>

            <DeletePopUp routine={routine} />
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
