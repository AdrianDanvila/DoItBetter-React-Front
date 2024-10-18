import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ExercisesDataView } from '@/components/routineDetails/exercisesDataView/ExercisesDataView'
import { Card } from '@/components/shared/card/Card'
import { isUndefined } from '@/helpers'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { ROUTE_PATH } from '@/router/constants'
import { getExercises } from '@/store/routinesSlice'
import { Routine } from '@/types/interfaces'
export const RoutinesDetails = () => {
  const values = useAppSelector((state) => state.routines)
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getExercises(Number.parseInt(id || '0')))
  }, [dispatch, id])

  const routine =
    values.ownRoutines.find(
      (routine) => routine.id === Number.parseInt(id || '0'),
    ) ||
    values.published.find(
      (routine) => routine.id === Number.parseInt(id || '0'),
    )

  useEffect(() => {
    if (isUndefined(id)) navigate(ROUTE_PATH.main)
    if (isUndefined(routine)) navigate(ROUTE_PATH.main)
  }, [id, navigate, routine])

  return (
    <section className="routines-container">
      {/* <Card title="main.routines.table.title">
        <RoutineDetailsTable routine={routine as Routine} />
      </Card> */}

      <Card title="main.routines.table.title">
        <ExercisesDataView routine={routine as Routine} />
      </Card>
      <Card title="main.routines.table.title">a</Card>
    </section>
  )
}
