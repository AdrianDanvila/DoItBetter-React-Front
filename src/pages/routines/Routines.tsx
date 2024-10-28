import './routines.scss'

import { Card } from '@/components/shared/card/Card'
import { RoutinesDataview } from '@/components/shared/routinesDataView/RoutineDataView'
import { useAppSelector } from '@/helpers/hooks'

export const Routines = () => {
  const values = useAppSelector((state) => state.routines.ownRoutines)
  console.log('a')

  return (
    <section className="routines-container">
      {/* <Card title="main.routines.table.title">
        <RoutinesTable />
      </Card> */}

      <Card title="main.routines.table.title">
        <RoutinesDataview
          className="h-screen"
          values={values}
        />
      </Card>
    </section>
  )
}
