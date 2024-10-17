import './routines.scss'

import { RoutinesDataview } from '@/components/routines/routinesDataView/RoutineDataView'
import { Card } from '@/components/shared/card/Card'

export const Routines = () => (
  <section className="routines-container">
    {/* <Card title="main.routines.table.title">
        <RoutinesTable />
      </Card> */}

    <Card
      title="main.routines.table.title"
      className="h-screen">
      <RoutinesDataview />
    </Card>
  </section>
)
