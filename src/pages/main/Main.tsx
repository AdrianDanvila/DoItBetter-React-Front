import { useEffect } from 'react'

import { Card } from '@/components/shared/card/Card'
import { RoutineCounters } from '@/components/shared/routineCounters/RoutineCounters'
import { RoutinesDataview } from '@/components/shared/routinesDataView/RoutineDataView'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { getPublishedRoutines, getRoutines } from '@/store/routinesSlice'

export const Main = () => {
  const dispatch = useAppDispatch()
  const values = useAppSelector((state) => state.routines)

  useEffect(() => {
    dispatch(getPublishedRoutines())
    dispatch(getRoutines())
  }, [dispatch])

  return (
    <section className="routines-container">
      <RoutineCounters className="xl:flex-row" />
      <Card title="main.main_page.public_routines.title">
        <RoutinesDataview
          className="h-[48vh] "
          values={values.published}
        />
      </Card>
    </section>
  )
}
