import { Toast } from 'primereact/toast'
import { PlusIcon, TrashIcon } from '@radix-ui/react-icons'

import { ROTUINES_TABLE_DATA, routines } from './constants'

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
  const { showSuccess, ref } = useToast()

  const values = useAppSelector((state) => state.routines.ownRoutines)

  const dispatch = useAppDispatch()

  const onSucces = () => {
    showSuccess('HOLA')
  }
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
    dispatch(
      addRoutine({
        id: values.length + 1,
        name: 'aaaa',
        description: '',
      }),
    )
    onSucces && onSucces()
  }

  const myEditHandler = (index: number, newData: Routine) => {
    dispatch(editRoutine({ index, newData }))
    onSucces && onSucces()
  }

  return (
    <>
      <div className="flex justify-end">
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
        onRowEditComplete={myEditHandler}
        onSelectionChange={onSelectionChange}
      />
      <Toast ref={ref} />
    </>
  )
}
