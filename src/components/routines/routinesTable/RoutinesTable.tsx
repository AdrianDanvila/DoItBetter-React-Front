import { ROTUINES_TABLE_DATA } from './constants'

import './routines-table.scss'

import { Table } from '@/components/shared/table/Table'

const products = [
  { code: 'a', letter: 'c' },
  { code: 'b', letter: 'x' },
  { code: 'b', letter: 'x' },
  { code: 'b', letter: 'x' },
]

export const RoutinesTable = () => (
  <Table
    className="routines-table"
    values={products}
    columns={ROTUINES_TABLE_DATA}
    headerClassName="routines-table__header"
    cellClassname="routines-table__cell"
  />
)
