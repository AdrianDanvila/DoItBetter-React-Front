import './routines.scss'

import { RoutinesTable } from '@/components/routines/routinesTable/RoutinesTable'
import { Card } from '@/components/shared/card/Card'

export const Routines = () => (
  <section className="routines-container">
    <div className="flex flex-col sm:flex-row">
      <Card title="main.routines.table.title">
        <RoutinesTable />
      </Card>
    </div>
  </section>
)
