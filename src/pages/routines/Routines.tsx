import { RoutinesTable } from '@/components/routines/routinesTable/RoutinesTable'
import { Card } from '@/components/shared/card/Card'

export const Routines = () => (
  <div className="w-full h-full flex flex-col  px-5  ">
    <div className="flex flex-col sm:flex-row">
      <Card title="main.routines.table.title">a</Card>
      <Card title="main.routines.table.title">a</Card>
      <Card title="main.routines.table.title">a</Card>
    </div>
    <div className="flex flex-col sm:flex-row">
      <Card title="main.routines.table.title">a</Card>
      <Card title="main.routines.table.title">a</Card>
      <Card title="main.routines.table.title">a</Card>
    </div>
    <div className="flex flex-col sm:flex-row">
      <Card title="main.routines.table.title">
        <RoutinesTable />
      </Card>
    </div>
  </div>
)
