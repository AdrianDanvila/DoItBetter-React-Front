import { PlusIcon, TrashIcon } from '@radix-ui/react-icons'

import { ROTUINES_TABLE_DATA } from './constants'

import './routines-table.scss'

import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { ConfirmDialog } from '@/components/shared/confirmDialog/ConfirmDialog'
import { Dialog } from '@/components/shared/dialog/Dialog'
import { Table } from '@/components/shared/table/Table'
import { useTable } from '@/components/shared/table/useTable'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { addRoutine, deleteRoutine, editRoutine } from '@/store/routinesSlice'
import { Routine } from '@/types/interfaces'

export const RoutinesTable = () => {
  const { showToast } = useToast()

  const values = useAppSelector((state) => state.routines.ownRoutines)

  const dispatch = useAppDispatch()

  const { selectedItem, onSelectionChange, setError, succesHandler } =
    useTable<Routine>()

  const deleteItem = (selectedItem: Routine | undefined) => {
    if (selectedItem === undefined) {
      setError(true)
      return
    }
    dispatch(deleteRoutine(selectedItem))
    succesHandler()
  }

  const addItem = (item: Routine) => {
    dispatch(addRoutine(item))
    showToast('error', '', '')
  }

  const myEditHandler = (index: number, newData: Routine) => {
    dispatch(editRoutine({ index, newData }))

    showToast('success', '', '')
  }

  return (
    <>
      <div className="flex justify-end ">
        <Dialog
          openButtonClassname="button--primary"
          openButtonLabel=""
          openButtonIcon={<PlusIcon />}>
          <div className="flex justify-end">
            <Button
              onClick={addItem}
              icon={<PlusIcon className="icon" />}
              label="add"
              severity={ButtonSeverity.Primary}
            />
          </div>
        </Dialog>
        <ConfirmDialog
          openButtonIcon={<TrashIcon className="icon" />}
          openButtonClassname="button--danger"
          header="Delete"
          message="are you sure?"
          onAccept={() => deleteItem(selectedItem)}
        />
      </div>
      <Table<Routine>
        values={values}
        selectedItem={selectedItem as Routine}
        columns={ROTUINES_TABLE_DATA}
        onSelectionChange={onSelectionChange}
      />
    </>
  )
}
