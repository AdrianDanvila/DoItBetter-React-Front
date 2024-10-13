import { useState } from 'react'
import { DataView } from 'primereact/dataview'
import { Dropdown } from 'primereact/dropdown'
import { Toolbar } from 'primereact/toolbar'

import { CreateRoutineDialog } from '../createRoutineDiaglog/CreateRoutineDialog'

import { RoutineDataViewEmpty } from './components/routineDataViewEmpty/RoutineDataviewEmpty'
import { RoutineDataViewItem } from './components/routineDataViewItem/RoutineDataViewItem'

import { useAppSelector } from '@/helpers/hooks'
import { Routine } from '@/types/interfaces'

export const RoutinesDataview = () => {
  const values = useAppSelector((state) => state.routines.ownRoutines)
  const [sortKey, setSortKey] = useState('')
  const [sortOrder, setSortOrder] = useState<0 | 1 | -1 | null | undefined>()
  const [sortField, setSortField] = useState('')
  console.log(values)

  const sortOptions = [
    { label: 'sort by name', value: 'name' },
    { label: 'sort by none', value: 'none' },
  ]
  const onSortChange = (event) => {
    const value = event.value

    if (value.indexOf('!') === 0) {
      setSortOrder(-1)
      setSortField(value.substring(1, value.length))
      setSortKey(value)
    } else {
      setSortOrder(1)
      setSortField(value)
      setSortKey(value)
    }
  }

  const listTemplate = (items: Routine[]) => {
    if (!items || items.length === 0) return null

    const list = items.map((routine, index) =>
      RoutineDataViewItem(routine, index),
    )

    return <div className="h-full grid">{list}</div>
  }

  return (
    <>
      <Toolbar
        className="p-0 m-0 items-center px-3 z-30 flex flex-row flex-nowrap"
        start={
          <Dropdown
            options={sortOptions}
            value={sortKey}
            optionLabel="label"
            placeholder="Sort By none"
            onChange={onSortChange}
            className=" sm:w-14rem border-2 border-gray-400"
          />
        }
        end={
          <>
            <CreateRoutineDialog />
          </>
        }
      />
      {values.length ? (
        <>
          <DataView
            sortField={sortField}
            sortOrder={sortOrder}
            value={values}
            itemTemplate={RoutineDataViewItem}
            paginatorClassName="w-full px-0"
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
          />
        </>
      ) : (
        <RoutineDataViewEmpty />
      )}
    </>
  )
}
