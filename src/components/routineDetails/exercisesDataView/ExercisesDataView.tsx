/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataView } from 'primereact/dataview'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'
import { InputSwitch } from 'primereact/inputswitch'
import { Toolbar } from 'primereact/toolbar'
import { ArrowLeftIcon, CopyIcon, DownloadIcon } from '@radix-ui/react-icons'

import { AddExerciseDialog } from '../addExerciseDialog/AddExerciseDialog'

import { ExercisesDataViewItem } from './components/exerciseDataViewItem/ExerciseDataViewItem'

import { copyRoutineById } from '@/api/services'
import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { RoutineDataViewEmpty } from '@/components/shared/routinesDataView/components/routineDataViewEmpty/RoutineDataviewEmpty'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { PATH } from '@/router/constants'
import { togglePublishedRoutine } from '@/store/routinesSlice'
import { Routine } from '@/types/interfaces'

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
  const onSortChange = (event: DropdownChangeEvent) => {
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

  const listTemplate = (
    items: any[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _layout?: 'list' | 'grid' | (string & Record<string, unknown>) | undefined,
  ) => {
    if (!items || items.length === 0) return undefined

    const list = items.map((item, index) =>
      ExercisesDataViewItem(item, routine, index),
    )

    return (<div className="grid grid-nogutter">{list}</div>) as unknown as
      | ReactNode[]
      | undefined
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
        const doc = new jsPDF.default('p', 'px') as any

        doc.autoTable(exportColumns, routine.exercises)
        doc.save(`${routine.name}.pdf`)
      })
    })
  }

  return (
    <>
      <Toolbar
        className="p-02m-0 items-center px-3 z-30 flex flex-col sm:flex-row bg-transparent  flex-nowrap"
        start={
          <>
            <Button
              onClick={() => navigate(-1)}
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
      {routine?.exercises?.length ? (
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
