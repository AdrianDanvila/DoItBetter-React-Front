import { Toast } from 'primereact/toast'

import { ROTUINES_TABLE_DATA, routines } from './constants'

import './routines-table.scss'

import { Table } from '@/components/shared/table/Table'
import { useTable } from '@/components/shared/table/useTable'
import { useToast } from '@/components/shared/toast/useToast'
import { Routine } from '@/types/interfaces'

export const RoutinesTable = () => {
  const { showError, showSuccess, ref } = useToast()

  const onError = () => {
    showError('HOLA')
  }

  const onSucces = () => {
    showSuccess('HOLA')
  }
  const { values, selectedItem, setValues, onSelectionChange } =
    useTable<Routine>(routines, onError, onSucces)

  const myEditHandler = (index: number, newData: Routine) => {}

  const myAddItem = () => {
    const newValues = [...values]

    newValues.push({
      id: values.length + 1,
      name: 'prueba añadir',
      description: 'prueba añadir',
    })
    setValues(newValues)

    onSucces()
  }

  return (
    <>
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
