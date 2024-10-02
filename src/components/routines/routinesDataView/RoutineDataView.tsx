import { DataView } from 'primereact/dataview'
import { Toolbar } from 'primereact/toolbar'

import { CreateRoutineDialog } from '../createRoutineDiaglog/CreateRoutineDialog'

import { RoutineDataViewEmpty } from './components/routineDataViewEmpty/RoutineDataviewEmpty'
import { RoutineDataViewItem } from './components/routineDataViewItem/RoutineDataViewItem'

import { useAppSelector } from '@/helpers/hooks'
import { Routine } from '@/types/interfaces'

export const RoutinesDataview = () => {
  const values = useAppSelector((state) => state.routines.ownRoutines)
  const listTemplate = (items: Routine[]) => {
    if (!items || items.length === 0) return null

    const list = items.map((routine, index) => (
      <RoutineDataViewItem
        key={routine.id}
        routine={routine}
        index={index}
      />
    ))

    return <div className="grid grid-nogutter">{list}</div>
  }
  return (
    <>
      <Toolbar
        className="p-0 m-0"
        end={<CreateRoutineDialog />}
      />
      {values.length ? (
        <>
          <DataView
            value={values}
            listTemplate={listTemplate}
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
