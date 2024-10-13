import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { DataView } from 'primereact/dataview'
import { Dropdown } from 'primereact/dropdown'
import { InputSwitch } from 'primereact/inputswitch'
import { Toolbar } from 'primereact/toolbar'
import { ArrowLeftIcon, CopyIcon, DownloadIcon } from '@radix-ui/react-icons'

import { AddExerciseDialog } from '../addExerciseDialog/AddExerciseDialog'

import { ExercisesDataViewItem } from './components/exerciseDataViewItem/ExerciseDataViewItem'

import { copyRoutineById } from '@/api/services'
import { RoutineDataViewEmpty } from '@/components/routines/routinesDataView/components/routineDataViewEmpty/RoutineDataviewEmpty'
import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { PATH, ROUTE_PATH } from '@/router/constants'
import { togglePublishedRoutine } from '@/store/routinesSlice'
import { Exercise, Routine } from '@/types/interfaces'

interface Product {
  id: string
  code: string
  name: string
  description: string
  image: string
  price: number
  category: string
  quantity: number
  inventoryStatus: string
  rating: number
}
export interface ExerciseDataViewProps {
  routine: Routine
}
export const ExercisesDataView = ({ routine }: ExerciseDataViewProps) => {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const dispatch = useAppDispatch()

  const [sortKey, setSortKey] = useState('')
  const [sortOrder, setSortOrder] = useState<0 | 1 | -1 | null | undefined>()
  const [sortField, setSortField] = useState('')

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

  const onClickSwitch = async () => {
    await dispatch(togglePublishedRoutine(routine.id))
  }
  const clickCopyButton = async () =>
    await copyRoutineById(routine.id).then(() => showToast('success', '', ''))

  const listTemplate = (items: Exercise[]) => {
    if (!items || items.length === 0) return null

    const list = items.map((exercise, index) =>
      ExercisesDataViewItem(exercise, routine, index),
    )

    return <div className="grid grid-nogutter">{list}</div>
  }
  const cols = [
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'description' },
    { field: 'reps', header: 'reps' },
    { field: 'sets', header: 'sets' },
    { field: 'weight', header: 'weight' },
  ]
  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }))
  const exportPdf = () => {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then(() => {
        const doc = new jsPDF.default(0, 0)

        doc.autoTable(exportColumns, routine.exercises)
        doc.save(`${routine.name}.pdf`)
      })
    })
  }

  return (
    <>
      <Toolbar
        className="p-02m-0 items-center px-3 z-30 flex flex-col sm:flex-row  flex-nowrap"
        start={
          <>
            <Button
              onClick={() => navigate(ROUTE_PATH.routines)}
              icon={<ArrowLeftIcon className="icon" />}
              severity={ButtonSeverity.Primary}
            />
            <Dropdown
              options={sortOptions}
              value={sortKey}
              optionLabel="label"
              placeholder="Sort By none"
              onChange={onSortChange}
              className="mx-5  border-2 border-gray-400"
            />
          </>
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
              <div className="mx-2 flex flex-col items-center gap-1 md:flex-row">
                <span className="mx-2">
                  {routine.published ? 'unpublishes' : 'publishes'}
                </span>
                <InputSwitch
                  checked={routine.published as boolean}
                  onChange={onClickSwitch}
                />
              </div>
              <Button
                onClick={() => {
                  exportPdf()
                }}
                icon={<DownloadIcon className="icon" />}
                severity={ButtonSeverity.Primary}
              />
              <AddExerciseDialog routine={routine} />
            </>
          )
        }
      />
      {routine?.exercises ? (
        <DataView
          sortField={sortField}
          sortOrder={sortOrder}
          value={routine.exercises}
          listTemplate={listTemplate}
          paginatorClassName="w-full px-0"
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
        />
      ) : (
        <RoutineDataViewEmpty />
      )}
    </>
  )
}
