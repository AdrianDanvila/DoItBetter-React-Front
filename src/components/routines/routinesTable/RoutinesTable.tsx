import { useNavigate } from 'react-router-dom'
import { Toolbar } from 'primereact/toolbar'
import { FileTextIcon, TrashIcon } from '@radix-ui/react-icons'

import { CreateRoutineDialog } from '../createRoutineDiaglog/CreateRoutineDialog'

import { ROTUINES_TABLE_DATA } from './constants'

import './routines-table.scss'

import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { ConfirmDialog } from '@/components/shared/confirmDialog/ConfirmDialog'
import { Table } from '@/components/shared/table/Table'
import { useTable } from '@/components/shared/table/useTable'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { ROUTE_PATH } from '@/router/constants'
import { deleteRoutine } from '@/store/routinesSlice'
import { Routine } from '@/types/interfaces'

export const RoutinesTable = () => {
  const values = useAppSelector((state) => state.routines.ownRoutines)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    selectedItem,
    setSelectedItem,
    onSelectionChange,
    setError,
    succesHandler,
  } = useTable<Routine>()

  const deleteItem = (selectedItem: Routine | undefined) => {
    if (selectedItem === undefined) {
      setError(true)
      return
    }
    dispatch(deleteRoutine(selectedItem))
    setSelectedItem(undefined)
    succesHandler()
  }

  // const myEditHandler = (index: number, newData: Routine) => {
  //   dispatch(editRoutine({ index, newData }))
  //   showToast('success', '', '')
  // }

  const showDetailsButtonClickHandler = () =>
    selectedItem && navigate(`${ROUTE_PATH.routines}/${selectedItem?.id}`)

  return (
    <>
      <Toolbar
        className="p-0 m-0 bg-transparent"
        end={
          <>
            <CreateRoutineDialog />

            {selectedItem && (
              <>
                <ConfirmDialog
                  openButtonIcon={<TrashIcon className="icon" />}
                  openButtonClassname="button--danger"
                  header="Delete"
                  message="are you sure?"
                  onAccept={() => deleteItem(selectedItem)}
                />
                <Button
                  onClick={showDetailsButtonClickHandler}
                  icon={<FileTextIcon className="icon" />}
                  severity={ButtonSeverity.Primary}
                />
              </>
            )}
          </>
        }
      />
      <Table<Routine>
        values={values}
        selectedItem={selectedItem as Routine}
        columns={ROTUINES_TABLE_DATA}
        onSelectionChange={onSelectionChange}
      />
    </>
  )
}
