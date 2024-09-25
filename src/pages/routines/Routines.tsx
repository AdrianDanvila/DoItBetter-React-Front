import './routines.scss'

import { RoutinesTable } from '@/components/routines/routinesTable/RoutinesTable'
import { Card } from '@/components/shared/card/Card'
import { useAppDispatch } from '@/helpers/hooks'
import { getRoutines } from '@/store/routinesSlice'

export const Routines = () => {
  const dispatch = useAppDispatch()
  dispatch(getRoutines())
  return (
    <section className="routines-container">
      <Card title="main.routines.table.title">
        <RoutinesTable />
      </Card>

      <Card title="main.routines.table.title">
        <RoutinesTable />
      </Card>
    </section>
  )
}
