import { useNavigate } from 'react-router-dom'
import { InputSwitch } from 'primereact/inputswitch'
import { Toolbar } from 'primereact/toolbar'
import { ArrowLeftIcon, CopyIcon, TrashIcon } from '@radix-ui/react-icons'

import { AddExerciseDialog } from '../addExerciseDialog/AddExerciseDialog'
import { ExerciseDetailsDialog } from '../exerciseDetailsDialog/ExerciseDetailsDialog'

import { ROTUINE_DETAILS_TABLE_DATA } from './constants'
import { RoutineDetailsTableProps } from './types'

import { copyRoutineById } from '@/api/services'
import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { ConfirmDialog } from '@/components/shared/confirmDialog/ConfirmDialog'
import { Table } from '@/components/shared/table/Table'
import { useTable } from '@/components/shared/table/useTable'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { PATH, ROUTE_PATH } from '@/router/constants'
import { deleteExercise, togglePublishedRoutine } from '@/store/routinesSlice'
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
    dispatch(
      deleteExercise({ routineId: routine.id, exerciseData: selectedItem }),
    )
    succesHandler()
  }

  const onClickSwitch = async () => {
    await dispatch(togglePublishedRoutine(routine.id))
  }
  const clickCopyButton = async () =>
    await copyRoutineById(routine.id).then(() => showToast('success', '', ''))

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
          routine.published && window.location.pathname.includes(PATH.main) ? (
            <Button
              onClick={clickCopyButton}
              icon={<CopyIcon className="icon" />}
              severity={ButtonSeverity.Primary}
            />
          ) : (
            <>
              <div className="mx-10">
                <span className="mx-2">
                  {routine.published ? 'unpublishes' : 'publishes'}
                </span>
                <InputSwitch
                  checked={routine.published as boolean}
                  onChange={onClickSwitch}
                />
              </div>

              <AddExerciseDialog routine={routine} />
              {selectedItem && (
                <>
                  <ExerciseDetailsDialog
                    exercise={selectedItem as Exercise}
                    routine={routine}
                  />
                  <ConfirmDialog
                    openButtonIcon={<TrashIcon className="icon" />}
                    openButtonClassname="button--danger"
                    header="Delete"
                    message="are you sure?"
                    onAccept={() => deleteItem(selectedItem)}
                  />
                </>
              )}
            </>
          )
        }
      />

      <Table<Exercise>
        values={routine?.exercises || []}
        selectedItem={selectedItem as Exercise}
        columns={ROTUINE_DETAILS_TABLE_DATA}
        onSelectionChange={onSelectionChange}
      />
    </>
  )
}
