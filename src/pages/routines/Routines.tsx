import { useEffect } from 'react'

import './routines.scss'

import { Card } from '@/components/shared/card/Card'
import { RoutinesDataview } from '@/components/shared/routinesDataView/RoutineDataView'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { getRoutines } from '@/store/routinesSlice'

export const Routines = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRoutines())
  }, [dispatch])
  const values = useAppSelector((state) => state.routines.ownRoutines)

  return (
    <section className="routines-container">
      <Card
        title="main.routines.table.title"
        className="rounded-none md:rounded-xl">
        <RoutinesDataview
          className="h-screen"
          values={values}
        />
      </Card>
    </section>
  )
}
