import { useNavigate } from 'react-router-dom'
import { Toolbar } from 'primereact/toolbar'
import { ArrowLeftIcon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'

import { ROTUINE_DETAILS_TABLE_DATA } from './constants'
import { RoutineDetailsTableProps } from './types'

import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { ConfirmDialog } from '@/components/shared/confirmDialog/ConfirmDialog'
import { Dialog } from '@/components/shared/dialog/Dialog'
import { Table } from '@/components/shared/table/Table'
import { useTable } from '@/components/shared/table/useTable'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { ROUTE_PATH } from '@/router/constants'
import { addExercise, deleteExercise, editRoutine } from '@/store/routinesSlice'
import { Exercise } from '@/types/interfaces'

export const RoutineDetailsTable = ({ routine }: RoutineDetailsTableProps) => {
  const { showToast } = useToast()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { selectedItem, onSelectionChange, setError, succesHandler } =
    useTable<Exercise>()

  const deleteItem = (selectedItem: Exercise | undefined) => {
    if (selectedItem === undefined) {
      setError(true)
      return
    }
    dispatch(deleteExercise({ id: routine.id, exercise: selectedItem }))
    succesHandler()
  }

  const addItem = (item: Exercise) => {
    dispatch(
      addExercise({
        id: routine.id,
        exercise: {
          id: 2,
          name: 'a',
          photo: 'a',
          description: 'a',
          sets: 0,
          weight: 0,
          reps: 0,
        },
      }),
    )
    showToast('error', '', '')
  }

  return (
    <>
      <Toolbar
        className="p-0 m-0"
        start={
          <Button
            onClick={() => navigate(ROUTE_PATH.routines)}
            icon={<ArrowLeftIcon className="icon" />}
            severity={ButtonSeverity.Primary}
          />
        }
        end={
          <>
            <Dialog
              openButtonClassname="button--success"
              openButtonLabel=""
              openButtonIcon={<PlusIcon />}>
              <Button
                onClick={addItem}
                icon={<PlusIcon className="icon" />}
                severity={ButtonSeverity.Success}
              />
            </Dialog>
            <ConfirmDialog
              openButtonIcon={<TrashIcon className="icon" />}
              openButtonClassname="button--danger"
              header="Delete"
              message="are you sure?"
              onAccept={() => deleteItem(selectedItem)}
            />
          </>
        }
      />

      <Table<Exercise>
        values={routine.exercises || []}
        selectedItem={selectedItem as Exercise}
        columns={ROTUINE_DETAILS_TABLE_DATA}
        onSelectionChange={onSelectionChange}
      />
    </>
  )
}
